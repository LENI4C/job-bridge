import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // IMPORTANT: Do NOT remove this. It refreshes session cookies on navigation.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Route protection rules:
  // If not logged in and attempting to view any dashboard route, redirect to sign-in.
  const path = request.nextUrl.pathname;
  if (
    !user &&
    (path.startsWith("/talent") ||
      path.startsWith("/employer") ||
      path.startsWith("/admin"))
  ) {
    const signInUrl = request.nextUrl.clone();
    signInUrl.pathname = "/sign-in";
    // Preserve target path as redirect query param if helpful
    return NextResponse.redirect(signInUrl);
  }

  return supabaseResponse;
}
