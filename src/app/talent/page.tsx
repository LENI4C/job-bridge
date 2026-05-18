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

export default function TalentDashboardPage() {
  return (
    <>
      <Header />
      <DashboardSidebar items={talentSidebar} activeHref={routes.talent} />
      <main className="dashboard-shell">
        <section className="mx-auto max-w-container-max px-gutter py-8">
          <header className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <section>
              <h1 className="font-display text-3xl font-bold text-primary">Talent Dashboard</h1>
              <p className="mt-2 text-lg text-on-surface-variant">
                Manage your profile and explore matched opportunities.
              </p>
            </section>
            <article className="glass-card flex items-center gap-3 p-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-fixed text-secondary">
                <Icon name="workspace_premium" filled className="text-3xl" />
              </span>
              <section>
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  Official status
                </p>
                <p className="font-display text-lg font-semibold text-primary">Bridge Certified</p>
              </section>
            </article>
          </header>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <section className="space-y-6 lg:col-span-8">
              <article className="card-interactive p-6">
                <header className="mb-6 flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold text-primary">Profile completion</h2>
                  <span className="text-xs font-bold text-secondary">85% complete</span>
                </header>
                <div className="mb-8 h-2 overflow-hidden rounded-full bg-surface-container">
                  <span className="block h-full w-[85%] rounded-full bg-gradient-to-r from-secondary to-gold" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Link
                    href={routes.profile}
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
                      {["FinTech Strategy", "M&A Advisory", "Risk Management"].map((s) => (
                        <li
                          key={s}
                          className="rounded-full bg-white px-3 py-1 text-xs text-on-surface-variant"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </article>

              <article className="card-interactive p-6">
                <h2 className="mb-6 font-display text-xl font-bold text-primary">Experience</h2>
                <article className="relative border-l-2 border-secondary/30 pl-6">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-secondary ring-4 ring-white" />
                  <h3 className="font-semibold text-primary">Senior Portfolio Manager</h3>
                  <p className="text-sm font-bold text-secondary">Global Capital Group · 2020 — Present</p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Leading 15 analysts managing portfolios exceeding $5B AUM.
                  </p>
                </article>
              </article>
            </section>

            <aside className="space-y-5 lg:col-span-4">
              <header className="flex items-center justify-between">
                <h2 className="font-display text-xl font-bold text-primary">Recommended</h2>
                <Link href={routes.jobs} className="text-xs font-semibold uppercase text-secondary hover:underline">
                  View all
                </Link>
              </header>
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} showMatch />
              ))}
              <article className="rounded-2xl bg-gradient-to-br from-primary to-primary-container p-6 text-on-primary">
                <h3 className="font-display font-bold">Priority feed</h3>
                <p className="mt-2 text-sm opacity-80">Pre-market roles for certified members.</p>
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
