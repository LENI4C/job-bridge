import { JobCard } from "@/components/JobCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { ButtonLink } from "@/components/ui/Button";
import { jobs as mockJobs, Job } from "@/lib/data";
import { routes } from "@/lib/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function JobsPage() {
  let displayJobs: Job[] = mockJobs;

  try {
    const supabase = await createClient();
    const { data: dbJobs, error } = await supabase
      .from("jobs")
      .select("*")
      .order("posted_at", { ascending: false });

    if (dbJobs && dbJobs.length > 0 && !error) {
      displayJobs = dbJobs.map((dj) => ({
        id: dj.id,
        title: dj.title,
        company: dj.company,
        location: dj.location,
        salary: dj.salary,
        description: dj.description,
        tags: dj.tags,
        workType: dj.work_type,
        posted: "Recently", // Simplification from postgres timestamp
        matchScore: 90,
      }));
    }
  } catch (e) {
    // Fallback quietly to mockJobs if DB fails or env credentials missing
    displayJobs = mockJobs;
  }

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
            {displayJobs.map((job) => (
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
