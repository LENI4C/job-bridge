"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { login } from "@/app/auth/actions";
import { routes } from "@/lib/navigation";
import { Icon } from "@/components/Icon";

export default function SignInPage() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <>
      <Header />
      <main className="page-shell flex min-h-[calc(100vh-72px)] items-center justify-center px-gutter py-12">
        <article className="card-interactive w-full max-w-md p-8">
          <h1 className="font-display text-2xl font-bold text-primary">Sign in</h1>
          <p className="mt-2 text-sm text-on-surface-variant">
            Welcome back. Access your BridgeLink dashboard.
          </p>

          {state?.error && (
            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-error-container/20 border border-error/20 p-4 text-sm text-error">
              <Icon name="error" className="shrink-0 text-base" />
              <span>{state.error}</span>
            </div>
          )}

          <form action={formAction} className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-primary">Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-primary">Password</span>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full"
            >
              {isPending ? "Signing in..." : "Sign in"}
            </Button>
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
