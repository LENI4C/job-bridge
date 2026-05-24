-- ==========================================
-- 🌐 BRIDGELINK SUPABASE DATABASE SCHEMA
-- ==========================================

-- 1. CLEANUP & TYPES INITIALIZATION
drop table if exists public.sister_certificates cascade;
drop table if exists public.certifications cascade;
drop table if exists public.jobs cascade;
drop table if exists public.talents cascade;
drop table if exists public.profiles cascade;
drop type if exists public.cert_status cascade;
drop type if exists public.user_role cascade;

create type public.user_role as enum ('talent', 'employer', 'admin');
create type public.cert_status as enum ('pending', 'approved', 'rejected');

-- 2. CREATE core TABLES
-- Profiles Table
create table public.profiles (
    id uuid references auth.users on delete cascade primary key,
    name text not null,
    email text not null unique,
    role public.user_role not null default 'talent',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Talents Table (Elite Assistant Metadata)
create table public.talents (
    id uuid references public.profiles(id) on delete cascade primary key,
    title text not null,
    bio text not null,
    skills text[] not null default '{}',
    availability text not null default 'Available Full-Time',
    image_url text not null,
    certified boolean not null default false,
    featured boolean not null default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Jobs Table
create table public.jobs (
    id uuid default gen_random_uuid() primary key,
    employer_id uuid references public.profiles(id) on delete set null,
    title text not null,
    company text not null,
    location text not null,
    salary text not null,
    description text not null,
    tags text[] not null default '{}',
    work_type text not null check (work_type in ('Remote', 'Hybrid', 'On-site')),
    posted_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Certifications Queue Table (Admin Approvals)
create table public.certifications (
    id uuid default gen_random_uuid() primary key,
    talent_id uuid references public.talents(id) on delete cascade not null,
    status public.cert_status not null default 'pending',
    applied_at timestamp with time zone default timezone('utc'::text, now()) not null,
    reviewed_at timestamp with time zone,
    reviewer_id uuid references public.profiles(id)
);

-- Sister Company Issued Certificates (For badge verification)
create table public.sister_certificates (
    certificate_id text primary key,
    recipient_email text not null unique,
    recipient_name text not null,
    issued_at timestamp with time zone default timezone('utc'::text, now()) not null,
    claimed_at timestamp with time zone,
    claimed_by_id uuid references public.profiles(id) unique
);

-- 3. AUTOMATIC PROFILE CREATION TRIGGER ON SIGN-UP
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, email, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', 'New Member'),
    new.email,
    coalesce((new.raw_user_meta_data->>'role')::public.user_role, 'talent'::public.user_role)
  );
  
  -- If user role is talent, initialize an empty talent profile
  if coalesce(new.raw_user_meta_data->>'role', 'talent') = 'talent' then
    insert into public.talents (id, title, bio, skills, image_url, certified, featured)
    values (
      new.id,
      'Executive Support Professional',
      'Bridge Certified candidate ready for operational integration.',
      array[]::text[],
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
      false,
      false
    );
  end if;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 4. ROW LEVEL SECURITY (RLS) POLICIES
alter table public.profiles enable row level security;
alter table public.talents enable row level security;
alter table public.jobs enable row level security;
alter table public.certifications enable row level security;
alter table public.sister_certificates enable row level security;

-- Profiles Policies
create policy "Anyone can view profiles" on public.profiles 
    for select using (true);
create policy "Users can update own profile" on public.profiles 
    for update using (auth.uid() = id);

-- Talents Policies
create policy "Anyone can view talents" on public.talents 
    for select using (true);
create policy "Talents can update own details" on public.talents 
    for update using (auth.uid() = id);
create policy "Admins can manage all talents" on public.talents 
    for all using (
        exists (
            select 1 from public.profiles 
            where id = auth.uid() and role = 'admin'
        )
    );

-- Jobs Policies
create policy "Anyone can view jobs" on public.jobs 
    for select using (true);
create policy "Employers can create jobs" on public.jobs 
    for insert with check (
        exists (
            select 1 from public.profiles 
            where id = auth.uid() and role = 'employer'
        )
    );
create policy "Employers can manage own jobs" on public.jobs 
    for all using (employer_id = auth.uid());
create policy "Admins can manage all jobs" on public.jobs 
    for all using (
        exists (
            select 1 from public.profiles 
            where id = auth.uid() and role = 'admin'
        )
    );

-- Certifications Queue Policies
create policy "Talents can view/apply for certifications" on public.certifications 
    for all using (talent_id = auth.uid());
create policy "Admins can view and approve certifications" on public.certifications 
    for all using (
        exists (
            select 1 from public.profiles 
            where id = auth.uid() and role = 'admin'
        )
    );

-- Sister Certificates Policies
create policy "Anyone can verify a sister certificate" on public.sister_certificates 
    for select using (true);
create policy "Admins can manage sister certificates" on public.sister_certificates 
    for all using (
        exists (
            select 1 from public.profiles 
            where id = auth.uid() and role = 'admin'
        )
    );

-- 5. CERTIFICATE CLAIMS TRANSACTION RPC
create or replace function public.claim_sister_certificate(p_certificate_id text)
returns json as $$
declare
    v_cert_email text;
    v_cert_claimed_by uuid;
    v_user_email text;
    v_user_role public.user_role;
begin
    -- 1. Check if user is authenticated
    if auth.uid() is null then
        return json_build_object('success', false, 'message', 'Authentication required.');
    end if;

    -- 2. Fetch certificate details
    select recipient_email, claimed_by_id
    into v_cert_email, v_cert_claimed_by
    from public.sister_certificates
    where certificate_id = p_certificate_id;

    -- 3. Check existence
    if v_cert_email is null then
        return json_build_object('success', false, 'message', 'Certificate ID not found.');
    end if;

    -- 4. Check if already claimed
    if v_cert_claimed_by is not null then
        return json_build_object('success', false, 'message', 'Certificate has already been claimed.');
    end if;

    -- 5. Fetch user profile details
    select email, role
    into v_user_email, v_user_role
    from public.profiles
    where id = auth.uid();

    -- 6. Verify email match
    if lower(v_user_email) != lower(v_cert_email) then
        return json_build_object('success', false, 'message', 'Certificate email recipient does not match your account.');
    end if;

    -- 7. Process Claim
    update public.sister_certificates
    set claimed_at = now(), claimed_by_id = auth.uid()
    where certificate_id = p_certificate_id;

    update public.talents
    set certified = true
    where id = auth.uid();

    return json_build_object('success', true, 'message', 'Congratulations! Your Bridge Certificate has been successfully claimed.');
end;
$$ language plpgsql security definer;

-- 6. SEED PRE-VERIFIED CERTIFICATES FOR TESTING
insert into public.sister_certificates (certificate_id, recipient_email, recipient_name)
values 
    ('BRIDGE-GOLD-SARAH', 'sarah.chen@bridge.com', 'Sarah Chen'),
    ('BRIDGE-GOLD-MARCUS', 'marcus.thorne@bridge.com', 'Marcus Thorne'),
    ('BRIDGE-GOLD-ELENA', 'elena.rodriguez@bridge.com', 'Elena Rodriguez'),
    ('BRIDGE-TEST-COHORT', 'test@bridge.com', 'Test Talent');
