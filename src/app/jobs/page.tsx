import { JobCard } from "@/components/JobCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { ButtonLink } from "@/components/ui/Button";
import { jobs } from "@/lib/data";
import { routes } from "@/lib/navigation";

export default function JobsPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="hero-mesh border-b border-outline-variant/30 py-12">
          <div className="mx-auto max-w-container-max px-gutter">
            <h1 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Featured opportunities
            </h1>
            <p className="mt-3 max-w-xl text-lg text-on-surface-variant">
              Premium roles for high-performing assistants. Tap a role to view details and apply.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={routes.talent} variant="primary" size="sm">
                My dashboard
              </ButtonLink>
              <ButtonLink href={routes.employer} variant="outline" size="sm">
                I&apos;m hiring
              </ButtonLink>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-container-max px-gutter py-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <p className="mt-12 text-center">
            <ButtonLink href={routes.talent} variant="secondary" size="lg">
              Apply for Bridge Certification
            </ButtonLink>
          </p>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
