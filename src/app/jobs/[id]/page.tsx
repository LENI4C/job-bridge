import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { Icon } from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { jobs } from "@/lib/data";
import { routes } from "@/lib/navigation";

type Props = { params: Promise<{ id: string }> };

export default async function JobDetailPage({ params }: Props) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) notFound();

  const initials = job.company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <>
      <Header />
      <main className="page-shell">
        <nav className="mx-auto max-w-container-max px-gutter py-4 text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-on-surface-variant">
            <li>
              <Link href={routes.home} className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={routes.jobs} className="hover:text-secondary">
                Jobs
              </Link>
            </li>
            <li>/</li>
            <li className="font-medium text-primary">{job.title}</li>
          </ol>
        </nav>
        <section className="mx-auto grid max-w-container-max grid-cols-1 gap-8 px-gutter pb-16 md:grid-cols-12">
          <article className="space-y-6 md:col-span-8">
            <header className="card-interactive p-6">
              <section className="mb-6 flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <section className="flex gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container-high font-display text-2xl font-bold text-primary">
                    {initials}
                  </span>
                  <section>
                    <h1 className="font-display text-3xl font-bold text-primary">{job.title}</h1>
                    <p className="text-on-surface-variant">
                      {job.company} • {job.location}
                    </p>
                  </section>
                </section>
                <span className="w-fit rounded-full bg-secondary-container px-4 py-2 text-sm font-semibold text-on-secondary-container">
                  {job.salary}
                </span>
              </section>
              <ul className="flex flex-wrap gap-4 text-sm text-on-surface-variant">
                <li className="flex items-center gap-1">
                  <Icon name="business" /> {job.tags[0]}
                </li>
                <li className="flex items-center gap-1">
                  <Icon name="public" /> {job.workType}
                </li>
                <li className="flex items-center gap-1">
                  <Icon name="history" /> Posted {job.posted}
                </li>
              </ul>
            </header>
            <article className="card-interactive p-6">
              <h2 className="mb-4 font-display text-xl font-bold text-primary">Role overview</h2>
              <p className="leading-relaxed text-on-surface-variant">{job.description}</p>
              <p className="mt-6 leading-relaxed text-on-surface-variant">
                Bridge Certified candidates receive priority review. This role requires high
                discretion, executive-level communication, and modern productivity tools.
              </p>
            </article>
          </article>
          <aside className="md:col-span-4">
            <article className="sticky top-24 card-interactive p-6">
              {job.matchScore && (
                <p className="mb-6 text-center">
                  <span className="font-display text-5xl font-bold text-secondary">
                    {job.matchScore}%
                  </span>
                  <span className="mt-1 block text-sm text-on-surface-variant">Match score</span>
                </p>
              )}
              <ButtonLink href={routes.talent} className="mb-3 w-full">
                Apply now
              </ButtonLink>
              <ButtonLink href={routes.talent} variant="outline" className="w-full">
                Save to dashboard
              </ButtonLink>
              <Link
                href={routes.jobs}
                className="mt-6 flex items-center justify-center gap-1 text-sm font-semibold text-secondary hover:underline"
              >
                <Icon name="arrow_back" className="text-base" />
                All jobs
              </Link>
            </article>
          </aside>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
