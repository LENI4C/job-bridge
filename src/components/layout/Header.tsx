"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../Icon";
import { ButtonLink } from "../ui/Button";
import { isActivePath, mainNav, routes } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === routes.home;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/40 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-container-max items-center justify-between px-gutter">
        <div className="flex items-center gap-4">
          <Link
            href={routes.home}
            className="group flex items-center gap-2"
            aria-label="BridgeLink home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-on-primary transition-transform group-hover:scale-105">
              <Icon name="hub" className="text-lg" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-primary">
              BridgeLink
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((link) => {
            const active = isActivePath(pathname, link.match);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-primary text-on-primary shadow-md"
                    : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {isHome ? (
            <>
              <ButtonLink href={routes.signIn} variant="ghost" size="sm">
                Sign In
              </ButtonLink>
              <ButtonLink href={routes.signUp} variant="primary" size="sm">
                Sign Up
              </ButtonLink>
            </>
          ) : (
            <>
              <ButtonLink
                href={routes.jobs}
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Find Jobs
              </ButtonLink>
              <ButtonLink href={routes.employer} variant="primary" size="sm">
                Hire Talent
              </ButtonLink>
              <Link
                href={routes.talent}
                className="hidden rounded-full px-3 py-2 text-sm font-semibold text-primary hover:bg-surface-container-low sm:inline-flex"
              >
                Dashboard
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
