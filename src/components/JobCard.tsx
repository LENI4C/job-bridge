import Link from "next/link";
import type { Job } from "@/lib/data";
import { routes } from "@/lib/navigation";
import { Icon } from "./Icon";

type JobCardProps = {
  job: Job;
  showMatch?: boolean;
};

export function JobCard({ job, showMatch }: JobCardProps) {
  const href = routes.job(job.id);
  const initials = job.company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (showMatch && job.matchScore) {
    const offset = 125.6 - (125.6 * job.matchScore) / 100;
    return (
      <Link href={href} className="card-interactive block p-6">
        <header className="mb-3 flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container font-display text-lg font-bold text-primary">
            {initials}
          </span>
          <figure className="relative flex h-12 w-12 items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="transparent" stroke="#e7eeff" strokeWidth="4" />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="transparent"
                stroke="#735c00"
                strokeWidth="4"
                strokeDasharray="125.6"
                strokeDashoffset={offset}
              />
            </svg>
            <span className="absolute text-[10px] font-bold text-secondary">{job.matchScore}%</span>
          </figure>
        </header>
        <h4 className="font-display text-lg text-primary">{job.title}</h4>
        <p className="text-sm font-bold text-secondary">{job.company}</p>
        <footer className="mt-4 flex gap-4 text-sm text-on-surface-variant">
          <span className="flex items-center gap-1">
            <Icon name="location_on" className="text-lg" />
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="payments" className="text-lg" />
            {job.salary}
          </span>
        </footer>
      </Link>
    );
  }

  return (
    <Link href={href} className="card-interactive group block p-6">
      <header className="mb-5 flex items-start justify-between gap-4">
        <section className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-container-high font-display text-lg font-bold text-primary">
            {initials}
          </span>
          <section>
            <h3 className="text-lg font-semibold text-primary transition-colors group-hover:text-secondary">
              {job.title}
            </h3>
            <p className="text-sm text-on-surface-variant">
              {job.company} • {job.location}
            </p>
          </section>
        </section>
        <span className="shrink-0 rounded-full bg-secondary-container px-3 py-1 text-xs font-semibold text-on-secondary-container">
          {job.salary}
        </span>
      </header>
      <p className="mb-5 text-on-surface-variant line-clamp-2">{job.description}</p>
      <footer className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant">
        {job.tags.map((tag) => (
          <span key={tag} className="flex items-center gap-1">
            <Icon name="business" className="text-lg" />
            {tag}
          </span>
        ))}
        <span className="flex items-center gap-1">
          <Icon name="public" className="text-lg" />
          {job.workType}
        </span>
        <span className="ml-auto flex items-center gap-1 font-medium text-secondary">
          View role <Icon name="arrow_forward" className="text-base" />
        </span>
      </footer>
    </Link>
  );
}
