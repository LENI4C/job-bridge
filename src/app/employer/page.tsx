import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { Icon } from "@/components/Icon";
import { talents } from "@/lib/data";
import { employerSidebar, routes } from "@/lib/navigation";

export default function EmployerDashboardPage() {
  return (
    <>
      <Header />
      <DashboardSidebar items={employerSidebar} activeHref={routes.employer} />
      <main className="dashboard-shell">
        <section className="mx-auto max-w-5xl px-gutter py-8">
          <header className="mb-10 flex flex-col gap-6">
            <section className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <section>
                <h1 className="font-display text-3xl font-bold text-primary">Talent Search</h1>
                <p className="mt-2 text-lg text-on-surface-variant">
                  Find premium, certified professionals for your high-stakes projects.
                </p>
              </section>
              <label className="flex cursor-pointer items-center gap-3 rounded-full border border-outline-variant/50 bg-white px-5 py-2.5 shadow-sm">
                <span className="text-sm font-semibold">Bridge Certified only</span>
                <span className="relative h-6 w-11 rounded-full bg-secondary">
                  <span className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow" />
                </span>
              </label>
            </section>
            <form className="grid grid-cols-1 gap-3 rounded-2xl border border-outline-variant/50 bg-white p-3 shadow-sm md:grid-cols-4">
              <input
                type="text"
                placeholder="Skills (e.g. Fintech, AI)"
                className="rounded-xl bg-surface-container-low px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-2"
              />
              <select className="rounded-xl bg-surface-container-low px-4 py-3 text-sm outline-none">
                <option>Experience level</option>
                <option>Executive (15+ yrs)</option>
                <option>Senior (10+ yrs)</option>
              </select>
              <input
                type="text"
                placeholder="Location"
                className="rounded-xl bg-surface-container-low px-4 py-3 text-sm outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-on-primary"
              >
                <Icon name="search" /> Run search
              </button>
            </form>
          </header>

          <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {talents.map((talent, i) => (
              <article key={talent.id} className="card-interactive relative flex flex-col gap-5 p-6">
                {i === 0 && (
                  <span className="absolute right-4 top-4 rounded-full bg-primary-container px-3 py-1 text-[10px] font-bold uppercase text-on-primary-container">
                    Priority
                  </span>
                )}
                <header className="flex items-start gap-4">
                  <Image
                    src={talent.image}
                    alt={talent.name}
                    width={80}
                    height={80}
                    className="rounded-xl object-cover ring-2 ring-outline-variant/30"
                  />
                  <section className="flex-1">
                    <p className="flex items-center gap-2 font-display text-lg font-bold text-primary">
                      {talent.name}
                      {talent.certified && (
                        <Icon name="verified" filled className="text-sm text-secondary" />
                      )}
                    </p>
                    <p className="text-sm font-semibold text-secondary">{talent.title}</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {talent.skills.map((s) => (
                        <li
                          key={s}
                          className="rounded-full bg-surface-container-high px-2.5 py-0.5 text-xs font-medium"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </section>
                </header>
                <p className="text-sm text-on-surface-variant line-clamp-2">{talent.bio}</p>
                <footer className="flex items-center justify-between border-t border-outline-variant/50 pt-4">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase text-secondary">
                    <Icon name="workspace_premium" filled className="text-sm" />
                    Certified
                  </p>
                  <section className="flex gap-2">
                    <Link
                      href={routes.jobs}
                      className="rounded-xl border border-outline px-4 py-2.5 text-sm font-semibold text-primary hover:bg-surface-container-low"
                    >
                      Post role
                    </Link>
                    <Link
                      href={routes.profileById(talent.id)}
                      className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary"
                    >
                      View profile
                    </Link>
                  </section>
                </footer>
              </article>
            ))}
          </section>

          <p className="mt-10 text-center">
            <Link href={routes.home} className="text-sm font-semibold text-secondary hover:underline">
              ← Back to home
            </Link>
          </p>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
