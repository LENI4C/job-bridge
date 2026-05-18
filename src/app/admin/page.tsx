import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Header } from "@/components/layout/Header";
import { Icon } from "@/components/Icon";
import { adminSidebar, routes } from "@/lib/navigation";

const metrics = [
  { label: "Active Talent", value: "1,248", change: "+12%" },
  { label: "Open Roles", value: "142", change: "+4%" },
  { label: "Certifications Pending", value: "38", change: "-2%" },
  { label: "Placement Rate", value: "98%", change: "+1%" },
];

export default function AdminDashboardPage() {
  return (
    <>
      <Header />
      <DashboardSidebar
        items={adminSidebar}
        activeHref={routes.admin}
        userRole="Platform Admin"
      />
      <main className="dashboard-shell">
        <section className="mx-auto max-w-container-max px-gutter py-8">
          <header className="mb-10">
            <h1 className="font-display text-3xl font-bold text-primary">Admin Dashboard</h1>
            <p className="mt-2 text-lg text-on-surface-variant">
              Platform overview, certification queue, and marketplace health.
            </p>
          </header>

          <ul className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <li key={m.label} className="card-interactive p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                  {m.label}
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-primary">{m.value}</p>
                <p className="mt-1 text-sm font-semibold text-secondary">{m.change} this month</p>
              </li>
            ))}
          </ul>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="card-interactive p-6">
              <header className="mb-6 flex items-center justify-between">
                <h2 className="font-display text-xl font-bold text-primary">Certification queue</h2>
                <Link href={routes.talent} className="text-sm font-semibold text-secondary">
                  Review →
                </Link>
              </header>
              <ul className="space-y-3">
                {["Jordan Lee", "Priya Sharma", "Chris Morgan"].map((name) => (
                  <li
                    key={name}
                    className="flex items-center justify-between rounded-xl bg-surface-container-low p-4"
                  >
                    <span className="font-medium text-primary">{name}</span>
                    <span className="rounded-full bg-secondary-container px-3 py-1 text-xs font-semibold text-on-secondary-container">
                      Review
                    </span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="card-interactive p-6">
              <header className="mb-6 flex items-center justify-between">
                <h2 className="font-display text-xl font-bold text-primary">Recent placements</h2>
                <Icon name="handshake" className="text-secondary" />
              </header>
              <ul className="space-y-4">
                {[
                  { talent: "Sarah Chen", job: routes.job("chief-of-staff-solaris") },
                  { talent: "Marcus Thorne", job: routes.job("executive-assistant-kinetix") },
                ].map((p) => (
                  <li key={p.talent}>
                    <Link href={p.job} className="text-on-surface-variant hover:text-secondary">
                      {p.talent} → view role
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
