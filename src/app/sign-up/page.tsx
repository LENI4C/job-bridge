import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Icon } from "@/components/Icon";
import { routes } from "@/lib/navigation";

const accountTypes = [
  {
    href: routes.talent,
    icon: "workspace_premium",
    title: "I'm talent",
    description: "Build your profile, get certified, and find premium roles.",
    cta: "Create talent account",
  },
  {
    href: routes.employer,
    icon: "business",
    title: "I'm hiring",
    description: "Search Bridge Certified professionals and post jobs.",
    cta: "Create employer account",
  },
];

export default function SignUpPage() {
  return (
    <>
      <Header />
      <main className="page-shell px-gutter py-12">
        <section className="mx-auto max-w-lg text-center">
          <h1 className="font-display text-3xl font-bold text-primary">Create your account</h1>
          <p className="mt-3 text-on-surface-variant">
            Join BridgeLink — choose how you&apos;ll use the platform.
          </p>
        </section>
        <section className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          {accountTypes.map((type) => (
            <Link
              key={type.href}
              href={type.href}
              className="card-interactive group flex flex-col p-6 text-left"
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
            </Link>
          ))}
        </section>
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
      </main>
      <Footer />
    </>
  );
}
