export type Talent = {
  id: string;
  name: string;
  title: string;
  bio: string;
  skills: string[];
  availability: string;
  image: string;
  certified: boolean;
  featured?: boolean;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  tags: string[];
  workType: string;
  posted: string;
  matchScore?: number;
};

export const talents: Talent[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "Executive Virtual Assistant",
    bio: "Specializing in calendar management and international travel logistics for Series C founders. Bilingual in English and Mandarin.",
    skills: ["Operations", "Scheduling", "Travel Planning"],
    availability: "Available Full-Time",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    certified: true,
    featured: true,
  },
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    title: "Project Operations Specialist",
    bio: "Expert in Notion workflows and CRM management for high-growth tech firms.",
    skills: ["Notion", "CRM", "Workflows"],
    availability: "Available Part-Time",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    certified: true,
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    title: "Chief of Staff Support",
    bio: "Experienced in executive communications and stakeholder management.",
    skills: ["Communications", "Stakeholders", "Strategy"],
    availability: "Available Full-Time",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400",
    certified: true,
  },
];

export const jobs: Job[] = [
  {
    id: "chief-of-staff-solaris",
    title: "Chief of Staff Support",
    company: "Solaris Financial",
    location: "London / Remote",
    salary: "$120k — $140k",
    description:
      "Support the Founding Partner of an ESG-focused VC firm. Requires high discretion and impeccable writing skills.",
    tags: ["Fintech"],
    workType: "Hybrid",
    posted: "2h ago",
    matchScore: 92,
  },
  {
    id: "executive-assistant-kinetix",
    title: "Executive Assistant",
    company: "Kinetix Labs",
    location: "New York",
    salary: "$100k — $115k",
    description:
      "Operational support for a rapid-growth AI startup CEO. Focus on complex travel and stakeholder relations.",
    tags: ["AI/Tech"],
    workType: "On-site",
    posted: "5h ago",
    matchScore: 80,
  },
  {
    id: "director-finance-aspire",
    title: "Director of Strategic Finance",
    company: "Aspire Global Ventures",
    location: "New York, NY",
    salary: "$220k - $280k",
    description:
      "Lead strategic finance initiatives for a global venture portfolio. Bridge Certified candidates preferred.",
    tags: ["Finance", "Strategy"],
    workType: "Hybrid",
    posted: "1d ago",
    matchScore: 92,
  },
];

export const trustPartners = [
  "VENTURE.CO",
  "NORDIC_LABS",
  "EQUITY+",
  "ASSET_LINK",
  "HORIZON",
];

export const stats = [
  { value: "98%", label: "PLACEMENT RATE" },
  { value: "24H", label: "MATCH SPEED" },
  { value: "150+", label: "SKILL TESTS" },
  { value: "Top 1%", label: "ADMISSION" },
];
