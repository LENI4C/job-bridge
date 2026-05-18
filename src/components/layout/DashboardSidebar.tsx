import Image from "next/image";
import Link from "next/link";
import { Icon } from "../Icon";
import { routes, type SidebarItem } from "@/lib/navigation";

export type { SidebarItem };

type DashboardSidebarProps = {
  items: SidebarItem[];
  activeHref: string;
  userName?: string;
  userRole?: string;
};

export function DashboardSidebar({
  items,
  activeHref,
  userName = "Alex Executive",
  userRole = "Bridge Certified Pro",
}: DashboardSidebarProps) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-72 flex-col border-r border-outline-variant/40 bg-white/90 p-5 pt-24 backdrop-blur-xl lg:flex">
      <section className="mb-8 rounded-2xl bg-surface-container-low p-4">
        <div className="mb-4 flex items-center gap-3">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCaSfbRK_UyEe368ZV0JxcxIlDgvhBa8U9I-DfExzdWxlmmldxifTUsA6-Ac3MSLZG4g012d7A0b_2Q_jbgUORUSvKO5bsAna0GGJEwf19VBmSNv-KjkeJF0-A3SwxRirLyg6j9dBNmOXlAVe9sNu-Pa45Up4XSP06kfYTShhXjWL7GsVbXt0jwnntjCCRn7uWH6oFl5qIz1R-XDyACofYviBLekqIJW9-pdY11kTD-FBJ6LIVCoyxaHTumQivWMs9Wedz0Ns1fJOE"
            alt={userName}
            width={48}
            height={48}
            className="rounded-xl object-cover ring-2 ring-secondary/30"
          />
          <div>
            <h3 className="font-display text-sm font-bold text-primary">{userName}</h3>
            <p className="text-xs text-on-surface-variant">{userRole}</p>
          </div>
        </div>
        <span className="inline-block rounded-full bg-secondary-container px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-on-secondary-container">
          Premium
        </span>
      </section>

      <nav className="flex flex-1 flex-col gap-1">
        {items.map((item) => {
          const isActive =
            activeHref === item.href ||
            (item.href !== routes.home && activeHref.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                isActive
                  ? "bg-primary font-semibold text-on-primary shadow-md"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
              }`}
            >
              <Icon name={item.icon} filled={isActive} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href={routes.home}
        className="mt-4 flex items-center gap-2 rounded-xl border border-outline-variant/60 px-3 py-2.5 text-sm text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
      >
        <Icon name="arrow_back" />
        Back to site
      </Link>
    </aside>
  );
}
