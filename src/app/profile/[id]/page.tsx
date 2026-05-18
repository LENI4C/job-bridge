import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BridgeCertifiedBadge } from "@/components/BridgeCertifiedBadge";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { Icon } from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { talents } from "@/lib/data";
import { routes } from "@/lib/navigation";

type Props = { params: Promise<{ id: string }> };

export default async function TalentProfilePage({ params }: Props) {
  const { id } = await params;
  const talent = talents.find((t) => t.id === id);
  if (!talent) notFound();

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
              <Link href={routes.employer} className="hover:text-secondary">
                Talent
              </Link>
            </li>
            <li>/</li>
            <li className="font-medium text-primary">{talent.name}</li>
          </ol>
        </nav>
        <article className="mx-auto mt-4 max-w-container-max px-gutter pb-16">
          <header className="card-interactive relative overflow-hidden p-8">
            {talent.certified && (
              <BridgeCertifiedBadge className="absolute right-6 top-6" />
            )}
            <section className="flex flex-col gap-8 md:flex-row">
              <Image
                src={talent.image}
                alt={talent.name}
                width={180}
                height={180}
                className="rounded-2xl object-cover ring-4 ring-secondary/20"
              />
              <section className="flex-1">
                <h1 className="font-display text-4xl font-bold text-primary">{talent.name}</h1>
                <p className="mt-1 text-xl font-semibold text-secondary">{talent.title}</p>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                  {talent.bio}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {talent.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-surface-container px-4 py-1.5 text-sm text-on-surface-variant"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          </header>
          <footer className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-on-surface-variant">
              <Icon name="schedule" className="text-secondary" />
              {talent.availability}
            </p>
            <section className="flex flex-wrap gap-3">
              <ButtonLink href={routes.employer} variant="outline">
                Back to search
              </ButtonLink>
              <ButtonLink href={routes.jobs}>View open roles</ButtonLink>
            </section>
          </footer>
        </article>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
