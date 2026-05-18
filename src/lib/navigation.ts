export type SidebarItem = { href: string; icon: string; label: string };

export const routes = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
  jobs: "/jobs",
  job: (id: string) => `/jobs/${id}`,
  employer: "/employer",
  talent: "/talent",
  profile: "/profile/sarah-chen",
  profileById: (id: string) => `/profile/${id}`,
  admin: "/admin",
} as const;

export const mainNav = [
  { href: routes.home, label: "Home", match: ["/"] },
  { href: routes.jobs, label: "Jobs", match: ["/jobs"] },
  { href: routes.employer, label: "Hire Talent", match: ["/employer"] },
  { href: routes.talent, label: "For Talent", match: ["/talent"] },
] as const;

export const mobileNav = [
  { key: "home" as const, href: routes.home, icon: "home", label: "Home" },
  { key: "jobs" as const, href: routes.jobs, icon: "business_center", label: "Jobs" },
  { key: "search" as const, href: routes.employer, icon: "person_search", label: "Hire" },
  { key: "profile" as const, href: routes.talent, icon: "person", label: "Me" },
];

export const talentSidebar = [
  { href: routes.home, icon: "home", label: "Home" },
  { href: routes.jobs, icon: "work", label: "Browse Jobs" },
  { href: routes.talent, icon: "dashboard", label: "My Dashboard" },
  { href: routes.profile, icon: "badge", label: "My Profile" },
];

export const employerSidebar = [
  { href: routes.home, icon: "home", label: "Home" },
  { href: routes.jobs, icon: "post_add", label: "Post a Job" },
  { href: routes.employer, icon: "person_search", label: "Talent Search" },
  { href: routes.profileById("sarah-chen"), icon: "star", label: "View Candidate" },
];

export const adminSidebar = [
  { href: routes.home, icon: "home", label: "Home" },
  { href: routes.admin, icon: "dashboard", label: "Overview" },
  { href: routes.employer, icon: "group", label: "Talent Pool" },
  { href: routes.jobs, icon: "work", label: "Job Posts" },
];

export const footerNav = {
  platform: [
    { href: routes.jobs, label: "Browse Jobs" },
    { href: routes.employer, label: "Hire Talent" },
    { href: routes.talent, label: "Talent Dashboard" },
    { href: routes.admin, label: "Admin" },
  ],
  company: [
    { href: routes.home, label: "About BridgeLink" },
    { href: routes.employer, label: "For Employers" },
    { href: routes.talent, label: "For Talent" },
  ],
};

export function isActivePath(pathname: string, match: readonly string[]) {
  return match.some((m) => {
    if (m === "/") return pathname === "/";
    return pathname === m || pathname.startsWith(`${m}/`);
  });
}

export function getMobileNavActive(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/jobs")) return "jobs";
  if (pathname.startsWith("/employer")) return "search";
  if (pathname.startsWith("/talent") || pathname.startsWith("/profile")) return "profile";
  return "home";
}
