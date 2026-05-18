import Link from "next/link";
import { footerNav, routes } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-primary text-on-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-container-max px-gutter py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <section className="md:col-span-2">
            <Link href={routes.home} className="font-display text-2xl font-bold">
              BridgeLink
            </Link>
            <p className="mt-4 max-w-sm text-sm text-on-primary/70">
              The elite marketplace connecting Bridge Certified professionals with visionary
              leaders.
            </p>
          </section>
          <section>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary-fixed">
              Platform
            </h4>
            <ul className="space-y-3">
              {footerNav.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-primary/80 transition-colors hover:text-secondary-fixed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary-fixed">
              Get Started
            </h4>
            <ul className="space-y-3">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-primary/80 transition-colors hover:text-secondary-fixed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <p className="mt-12 border-t border-on-primary/10 pt-8 text-center text-xs text-on-primary/50">
          © 2024 BridgeLink. Premium Talent Acquisition.
        </p>
      </div>
    </footer>
  );
}
