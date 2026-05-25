import Image from "next/image";
import Link from "next/link";
import { RolePathCards } from "@/components/home/RolePathCards";
import { JobCard } from "@/components/JobCard";
import { TalentCard } from "@/components/TalentCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { Icon } from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { jobs, stats, talents, trustPartners } from "@/lib/data";
import { routes } from "@/lib/navigation";

export default function LandingPage() {
  const featured = talents.find((t) => t.featured)!;
  const compact = talents.filter((t) => !t.featured);

  return (
    <>
      <Header />
      <main className="page-shell">
        {/* Hero */}
        <section className="hero-mesh relative overflow-hidden py-16 md:py-24">
          <div className="mx-auto grid max-w-container-max items-center gap-16 px-gutter lg:grid-cols-2">
            <section>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary-container/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
                <Icon name="verified" filled className="text-sm" />
                Premium Assistant Network
              </span>
              <h1 className="mb-6 max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-[3.25rem]">
                Hire better assistants.
                <span className="block text-on-surface-variant/90">
                  Find better opportunities.
                </span>
              </h1>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-on-surface-variant">
                The elite marketplace for high-tier professional support — rigorously
                vetted, Bridge Certified, and ready from day one.
              </p>
              <div className="mb-10 flex flex-wrap gap-3">
                <ButtonLink href={routes.employer} size="lg">
                  Hire Talent
                </ButtonLink>
                <ButtonLink href={routes.jobs} variant="outline" size="lg">
                  Find Jobs
                </ButtonLink>
              </div>
              <RolePathCards />
            </section>

            <Link
              href={routes.employer}
              className="group relative hidden lg:block"
              aria-label="Explore certified talent"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/5 opacity-60 blur-2xl transition-opacity group-hover:opacity-100" />
              <article className="card-interactive relative overflow-hidden p-2">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=400"
                  alt="Corporate skyline"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <footer className="flex items-center justify-between p-4">
                  <p className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
                    <Icon name="verified" className="text-secondary" filled />
                    Bridge Certified Elite
                  </p>
                  <span className="rounded-full bg-secondary-container px-3 py-1 text-xs font-bold text-on-secondary-container">
                    Top 1% →
                  </span>
                </footer>
              </article>
            </Link>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-y border-outline-variant/50 bg-white/60 py-10 backdrop-blur-sm">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
            Trusted by global enterprises
          </p>
          <ul className="mx-auto flex max-w-container-max flex-wrap items-center justify-center gap-x-12 gap-y-4 px-gutter opacity-50 grayscale">
            {trustPartners.map((name) => (
              <li key={name} className="font-display text-xl font-bold md:text-2xl">
                {name}
              </li>
            ))}
          </ul>
        </section>

        {/* Talent showcase */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container-max px-gutter">
            <header className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <section className="max-w-2xl">
                <h2 className="mb-3 font-display text-3xl font-bold text-primary md:text-4xl">
                  Bridge Certified Talent
                </h2>
                <p className="text-lg text-on-surface-variant">
                  4-week vetting and training before entering the marketplace — pre-trained,
                  verified, and job-ready.
                </p>
              </section>
              <Link
                href={routes.employer}
                className="group inline-flex items-center gap-2 font-semibold text-secondary"
              >
                View all talent
                <Icon
                  name="arrow_forward"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </header>
            <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <TalentCard talent={featured} variant="featured" />
              {compact.map((t) => (
                <TalentCard key={t.id} talent={t} />
              ))}
              <article className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container p-10 text-on-primary md:col-span-2">
                <ul className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                  {stats.map((s) => (
                    <li key={s.label}>
                      <p className="font-display text-3xl font-bold text-secondary-fixed">
                        {s.value}
                      </p>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest opacity-70">
                        {s.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </section>
          </div>
        </section>

        {/* Employer benefits */}
        <section className="bg-surface-container-low/50 py-16 md:py-24">
          <div className="mx-auto grid max-w-container-max items-center gap-16 px-gutter lg:grid-cols-2">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=640&h=480"
                alt="Modern office"
                width={640}
                height={480}
                className="rounded-2xl shadow-2xl"
              />
              <blockquote className="absolute -bottom-6 -right-4 hidden max-w-xs rounded-2xl border border-outline-variant/50 bg-white p-5 shadow-xl md:block">
                <p className="text-sm italic text-on-surface-variant">
                  &ldquo;BridgeLink cut our hiring time by 70%. Unmatched candidate quality.&rdquo;
                </p>
                <cite className="mt-2 block text-sm font-bold not-italic text-primary">
                  — VP Operations, TechFlow
                </cite>
              </blockquote>
            </div>
            <section>
              <h2 className="mb-6 font-display text-3xl font-bold text-primary">
                Built for better business
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    icon: "shield",
                    title: "Pre-vetted excellence",
                    text: "Background checks, skill assessments, and personality mapping on every candidate.",
                  },
                  {
                    icon: "bolt",
                    title: "Instant integration",
                    text: "Bridge Ready training — familiar with executive tools from day one.",
                  },
                  {
                    icon: "handshake",
                    title: "Dedicated success lead",
                    text: "A personal hiring consultant for culture fit and requirements.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary-container/50">
                      <Icon name={item.icon} className="text-secondary" />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-primary">{item.title}</h3>
                      <p className="mt-1 text-on-surface-variant">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ButtonLink href={routes.employer} size="lg" className="mt-10">
                Start hiring today
              </ButtonLink>
            </section>
          </div>
        </section>

        {/* Jobs preview */}
        <section className="py-16 md:py-24">
          <header className="mb-12 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold text-primary md:text-4xl">
              Featured opportunities
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
              Premium roles for high-performing assistants at industry-leading firms.
            </p>
          </header>
          <section className="mx-auto grid max-w-container-max grid-cols-1 gap-5 px-gutter md:grid-cols-2">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </section>
          <p className="mt-10 text-center">
            <ButtonLink href={routes.jobs} variant="outline" size="lg">
              Explore all {jobs.length}+ jobs
            </ButtonLink>
          </p>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-primary py-20 text-on-primary">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.15),transparent_50%)]" />
          <section className="relative mx-auto max-w-container-max px-gutter text-center">
            <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
              Ready for the next level?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg opacity-80">
              Whether you&apos;re hiring or advancing your career, BridgeLink is the standard.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href={routes.talent} variant="secondary" size="lg">
                Apply for certification
              </ButtonLink>
              <ButtonLink
                href={routes.employer}
                variant="outline"
                size="lg"
                className="border-on-primary/40 text-on-primary hover:bg-on-primary/10 hover:text-on-primary"
              >
                Browse talent pool
              </ButtonLink>
            </div>
          </section>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
