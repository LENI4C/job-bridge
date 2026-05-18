import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ButtonLink } from "@/components/ui/Button";
import { routes } from "@/lib/navigation";

export default function SignInPage() {
  return (
    <>
      <Header />
      <main className="page-shell flex min-h-[calc(100vh-72px)] items-center justify-center px-gutter py-12">
        <article className="card-interactive w-full max-w-md p-8">
          <h1 className="font-display text-2xl font-bold text-primary">Sign in</h1>
          <p className="mt-2 text-sm text-on-surface-variant">
            Welcome back. Access your BridgeLink dashboard.
          </p>
          <form className="mt-8 space-y-4" action={routes.talent}>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-primary">Email</span>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-primary">Password</span>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <ButtonLink href={routes.talent} className="w-full">
              Sign in
            </ButtonLink>
          </form>
          <p className="mt-6 text-center text-sm text-on-surface-variant">
            Don&apos;t have an account?{" "}
            <Link href={routes.signUp} className="font-semibold text-secondary hover:underline">
              Sign up
            </Link>
          </p>
          <p className="mt-4 text-center">
            <Link href={routes.home} className="text-sm text-on-surface-variant hover:text-primary">
              ← Back to home
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
