import Image from "next/image";
import Link from "next/link";
import type { Talent } from "@/lib/data";
import { routes } from "@/lib/navigation";
import { BridgeCertifiedBadge } from "./BridgeCertifiedBadge";
import { Icon } from "./Icon";

type TalentCardProps = {
  talent: Talent;
  variant?: "featured" | "compact";
};

export function TalentCard({ talent, variant = "compact" }: TalentCardProps) {
  const profileHref = routes.profileById(talent.id);

  if (variant === "featured") {
    return (
      <article className="card-interactive group md:col-span-2">
        <section className="flex flex-col gap-6 p-6 md:flex-row">
          <figure className="h-64 w-full flex-shrink-0 overflow-hidden rounded-xl md:w-48">
            <Image
              src={talent.image}
              alt={talent.name}
              width={192}
              height={256}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </figure>
          <section className="flex-grow">
            <header className="mb-3 flex items-start justify-between gap-3">
              <section>
                <h3 className="font-display text-2xl text-primary">{talent.name}</h3>
                <p className="text-sm font-semibold text-secondary">{talent.title}</p>
              </section>
              {talent.certified && <BridgeCertifiedBadge />}
            </header>
            <p className="mb-6 text-on-surface-variant">{talent.bio}</p>
            <ul className="mb-8 flex flex-wrap gap-2">
              {talent.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-surface-container px-3 py-1 text-sm text-on-surface-variant"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <footer className="flex items-center justify-between border-t border-outline-variant/50 pt-6">
              <p className="flex items-center gap-2 text-sm text-on-surface-variant">
                <Icon name="schedule" className="text-secondary" />
                {talent.availability}
              </p>
              <Link
                href={profileHref}
                className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-all hover:bg-primary-container"
              >
                Review Profile
              </Link>
            </footer>
          </section>
        </section>
      </article>
    );
  }

  return (
    <article className="card-interactive group flex flex-col">
      <Link href={profileHref} className="flex flex-col flex-grow p-6">
        <figure className="mb-5 h-40 w-full overflow-hidden rounded-xl">
          <Image
            src={talent.image}
            alt={talent.name}
            width={400}
            height={160}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>
        {talent.certified && <BridgeCertifiedBadge size="sm" className="mb-3 w-fit" />}
        <h3 className="font-display text-xl text-primary">{talent.name}</h3>
        <p className="mb-2 text-sm font-semibold text-secondary">{talent.title}</p>
        <p className="flex-grow text-sm text-on-surface-variant line-clamp-2">{talent.bio}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
          View profile <Icon name="arrow_forward" className="text-base" />
        </span>
      </Link>
    </article>
  );
}
