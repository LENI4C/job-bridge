"use client";

import Link from "next/link";
import { useState, useActionState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/Button";
import { signup } from "@/app/auth/actions";
import { routes } from "@/lib/navigation";

const accountTypes = [
  {
    role: "talent" as const,
    icon: "workspace_premium",
    title: "I'm talent",
    description: "Build your profile, get certified, and find premium roles.",
    cta: "Create talent account",
  },
  {
    role: "employer" as const,
    icon: "business",
    title: "I'm hiring",
    description: "Search Bridge Certified professionals and post jobs.",
    cta: "Create employer account",
  },
];

export default function SignUpPage() {
  const [role, setRole] = useState<"talent" | "employer" | null>(null);
  const [state, formAction, isPending] = useActionState(signup, null);

  return (
    <>
      <Header />
      <main className="page-shell px-gutter py-12 flex min-h-[calc(100vh-72px)] items-center justify-center">
        <article className="w-full max-w-2xl">
          {role === null ? (
            <>
              <section className="text-center">
                <h1 className="font-display text-3xl font-bold text-primary">Create your account</h1>
                <p className="mt-3 text-on-surface-variant">
                  Join BridgeLink — choose how you&apos;ll use the platform.
                </p>
              </section>
              <section className="mt-10 grid gap-4 sm:grid-cols-2">
                {accountTypes.map((type) => (
                  <button
                    key={type.role}
                    type="button"
                    onClick={() => setRole(type.role)}
                    className="card-interactive group flex flex-col p-6 text-left cursor-pointer w-full focus:outline-none"
                  >
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-container/50 transition-transform group-hover:scale-110">
                      <Icon name={type.icon} className="text-secondary" />
                    </span>
                    <h2 className="font-display text-lg font-bold text-primary">{type.title}</h2>
                    <p className="mt-2 flex-grow text-sm text-on-surface-variant">{type.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                      {type.cta}
                      <Icon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                ))}
              </section>
            </>
          ) : (
            <section className="card-interactive max-w-md mx-auto p-8 relative">
              <button
                type="button"
                onClick={() => setRole(null)}
                className="absolute left-4 top-4 text-on-surface-variant hover:text-primary flex items-center gap-1 text-xs font-semibold focus:outline-none"
              >
                <Icon name="arrow_back" className="text-sm" /> Back
              </button>

              <div className="text-center mt-4">
                <h1 className="font-display text-2xl font-bold text-primary">
                  {role === "talent" ? "Join as Talent" : "Join as Employer"}
                </h1>
                <p className="mt-2 text-sm text-on-surface-variant">
                  {role === "talent"
                    ? "Build your resume, verify your certification, and match with premium clients."
                    : "Post jobs, screen candidates, and secure elite executive assistance."}
                </p>
              </div>

              {state?.error && (
                <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-error-container/20 border border-error/20 p-4 text-sm text-error">
                  <Icon name="error" className="shrink-0 text-base" />
                  <span>{state.error}</span>
                </div>
              )}

              <form action={formAction} className="mt-6 space-y-4">
                <input type="hidden" name="role" value={role} />
                
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-primary">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={role === "talent" ? "Sarah Chen" : "Alex Mercer"}
                    className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
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
                    placeholder="Min. 6 characters"
                    className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full mt-2"
                >
                  {isPending ? "Creating account..." : "Register"}
                </Button>
              </form>
            </section>
          )}

          <p className="mt-10 text-center text-sm text-on-surface-variant">
            Already have an account?{" "}
            <Link href={routes.signIn} className="font-semibold text-secondary hover:underline">
              Sign in
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
