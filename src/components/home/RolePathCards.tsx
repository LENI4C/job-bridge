import Link from "next/link";
import { Icon } from "@/components/Icon";
import { routes } from "@/lib/navigation";

const paths = [
  {
    href: routes.employer,
    icon: "business",
    title: "I'm Hiring",
    description: "Search Bridge Certified talent and post premium roles.",
    cta: "Find Talent",
    accent: "from-primary/10 to-surface-container",
  },
  {
    href: routes.jobs,
    icon: "work",
    title: "I'm Job Seeking",
    description: "Browse executive assistant roles from top firms.",
    cta: "Browse Jobs",
    accent: "from-secondary/10 to-secondary-container/30",
  },
  {
    href: routes.talent,
    icon: "workspace_premium",
    title: "Get Certified",
    description: "Build your profile and unlock priority opportunities.",
    cta: "Talent Dashboard",
    accent: "from-gold/10 to-secondary-container/20",
  },
];

export function RolePathCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {paths.map((path) => (
        <Link
          key={path.href}
          href={path.href}
          className={`group relative overflow-hidden rounded-2xl border border-outline-variant/50 bg-gradient-to-br ${path.accent} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl`}
        >
          <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-110">
            <Icon name={path.icon} className="text-primary" />
          </span>
          <h3 className="font-display text-lg font-bold text-primary">{path.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
            {path.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
            {path.cta}
            <Icon
              name="arrow_forward"
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </Link>
      ))}
    </section>
  );
}
