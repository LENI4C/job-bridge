"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../Icon";
import { getMobileNavActive, mobileNav } from "@/lib/navigation";

export function MobileNav() {
  const pathname = usePathname();
  const active = getMobileNavActive(pathname);

  return (
    <nav className="fixed bottom-0 z-50 flex h-[68px] w-full items-center justify-around border-t border-outline-variant/50 bg-white/90 px-2 pb-safe backdrop-blur-xl md:hidden">
      {mobileNav.map((item) => {
        const isActive = item.key === active;
        return (
          <Link
            key={item.key}
            href={item.href}
            className={`flex min-w-[64px] flex-col items-center justify-center gap-0.5 rounded-xl px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide transition-all ${
              isActive
                ? "bg-primary/5 text-secondary"
                : "text-on-surface-variant active:scale-95"
            }`}
          >
            <Icon name={item.icon} filled={isActive} className="text-[22px]" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
