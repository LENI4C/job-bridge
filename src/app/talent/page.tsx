import Link from "next/link";
import { JobCard } from "@/components/JobCard";
import { Footer } from "@/components/layout/Footer";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { Icon } from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { jobs } from "@/lib/data";
import { routes, talentSidebar } from "@/lib/navigation";
import { createClient } from "@/lib/supabase/server";
import { CertificateClaimForm } from "@/components/talent/CertificateClaimForm";

export default async function TalentDashboardPage() {
  let isCertified = false;
  let userName = "Sarah Chen";
  let userBio =
    "Specializing in calendar management and international travel logistics for Series C founders. Bilingual in English and Mandarin.";
  let userTitle = "Executive Virtual Assistant";
  let userSkills = ["Operations", "Scheduling", "Travel Planning"];
  let userAvailability = "Available Full-Time";
  let isDemoMode = true;

  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      isDemoMode = false;
      const { data: profile } = await supabase
        .from("profiles")
        .select("name")
        .eq("id", user.id)
        .single();

      const { data: talent } = await supabase
        .from("talents")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profile) userName = profile.name;
      if (talent) {
        isCertified = talent.certified;
        userBio = talent.bio;
        userTitle = talent.title;
        userSkills = talent.skills;
        userAvailability = talent.availability;
      }
    }
  } catch {
    // Offline/Demo Fallback: Sarah Chen is certified by default
    isCertified = true;
  }

  return (
    <>
      <Header />
      <DashboardSidebar items={talentSidebar} activeHref={routes.talent} />
      <main className="dashboard-shell">
        <section className="mx-auto max-w-container-max px-gutter py-8">
          <header className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <section>
              <h1 className="font-display text-3xl font-bold text-primary">
                Welcome, {userName}
              </h1>
              <p className="mt-2 text-lg text-on-surface-variant">
                Manage your profile and explore matched opportunities.
              </p>
              {isDemoMode && (
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-secondary bg-secondary-container/30 px-3 py-1 rounded-full">
                  <Icon name="info" className="text-xs" /> Demo Mode (Mock Account)
                </span>
              )}
            </section>

            <article className="glass-card flex items-center gap-3 p-4">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  isCertified
                    ? "bg-secondary-fixed text-secondary"
                    : "bg-surface-container text-on-surface-variant/40"
                }`}
              >
                <Icon name="workspace_premium" filled={isCertified} className="text-3xl" />
              </span>
              <section>
                <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/70">
                  Official status
                </p>
                <p className="font-display text-lg font-bold text-primary">
                  {isCertified ? "Bridge Certified" : "Unverified"}
                </p>
              </section>
            </article>
          </header>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <section className="space-y-6 lg:col-span-8">
              {/* If not certified, show the claim certificate ID box! */}
              {!isCertified && <CertificateClaimForm />}

              <article className="card-interactive p-6">
                <header className="mb-6 flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold text-primary">
                    Profile completion
                  </h2>
                  <span className="text-xs font-bold text-secondary">
                    {isCertified ? "95% complete" : "70% complete"}
                  </span>
                </header>
                <div className="mb-8 h-2 overflow-hidden rounded-full bg-surface-container">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-secondary to-gold transition-all duration-500"
                    style={{ width: isCertified ? "95%" : "70%" }}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Link
                    href={routes.home}
                    className="flex flex-col gap-3 rounded-xl border border-dashed border-outline p-5 transition-colors hover:border-secondary hover:bg-surface-container-low"
                  >
                    <p className="flex items-center gap-2 font-semibold text-primary">
                      <Icon name="badge" /> View public profile
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      See how employers view your Bridge Certified profile.
                    </p>
                  </Link>
                  <article className="rounded-xl border border-outline-variant/50 bg-surface-container-low/50 p-5">
                    <p className="mb-3 flex items-center gap-2 font-semibold text-primary">
                      <Icon name="psychology" /> Core competencies
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {userSkills.length > 0 ? (
                        userSkills.map((s) => (
                          <li
                            key={s}
                            className="rounded-full bg-white border border-outline-variant/30 px-3 py-1 text-xs text-on-surface-variant font-medium"
                          >
                            {s}
                          </li>
                        ))
                      ) : (
                        <li className="text-xs text-on-surface-variant/50 italic">
                          No competencies added.
                        </li>
                      )}
                    </ul>
                  </article>
                </div>
              </article>

              <article className="card-interactive p-6">
                <h2 className="mb-6 font-display text-xl font-bold text-primary">
                  Experience & Focus
                </h2>
                <article className="relative border-l-2 border-secondary/30 pl-6">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-secondary ring-4 ring-white" />
                  <h3 className="font-semibold text-primary">{userTitle}</h3>
                  <p className="text-sm font-bold text-secondary">
                    Active Operations · {userAvailability}
                  </p>
                  <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                    {userBio}
                  </p>
                </article>
              </article>
            </section>

            <aside className="space-y-5 lg:col-span-4">
              <header className="flex items-center justify-between">
                <h2 className="font-display text-xl font-bold text-primary">
                  Recommended
                </h2>
                <Link
                  href={routes.jobs}
                  className="text-xs font-semibold uppercase text-secondary hover:underline"
                >
                  View all
                </Link>
              </header>
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} showMatch />
              ))}
              <article className="rounded-2xl bg-gradient-to-br from-primary to-primary-container p-6 text-on-primary">
                <h3 className="font-display font-bold">Priority feed</h3>
                <p className="mt-2 text-sm opacity-80">
                  Pre-market roles for certified members.
                </p>
                <ButtonLink
                  href={routes.jobs}
                  variant="secondary"
                  size="sm"
                  className="mt-4 w-full"
                >
                  Browse jobs
                </ButtonLink>
              </article>
            </aside>
          </section>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
