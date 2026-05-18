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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoW4JvcVeptW8JSnthqLv5WhObYe1lg-ZnZ9DcM66f3-ZkwH1zJymY37aXC4BzAwGF5WZk3ojfEQz34wvM2_gN-w6nSVzB3EGMbvbFnaioywAmmav0LlnSuk-KlBrlc3Vk6ySAm3IK3UurDuQqvcIsmTw2EtDe62hv-XJndQ5pCSHjAT2KRSkgvNF06MYyvXvTbXTADhmeK8T0tvewH5mzFISoV5bHZyBqP5MuzY2LSCaz6sbqYaHl76slh7ppEhyhKSf-63XENPBy",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJDBqZhnyuv__3aXEUPCjY6oo9HwXvPN1nszgl9PBdpceljvi687c04W_185Uk64vyppWmT5ZjRcgFQcQXYK0569gBWZuyenS76u5AgesPGqu_wduJEsquc-xv4q-yRFEbsCv_7R0az8E0SqqD1NXxUcq4tIAN8kzklj7YgRJRxtNdwo8fxXnJJWx5RjDm21ojeG9RD1SOnGV3OSQ6nBfXjCslJaPTpOfQHTPTm0Q_MM7dmTruCviORPfknoMeqVSytT7LBV3-QkP5",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCb1i9GZBXE1xsYG9htggFTQ7Z-pNAoMy7ebDJ17q_niIttlQyt9lADY6OVREvArVAFgxW3t1Ay5SqfWt73xzPx_zvIevg3-AbUyxfUx7LiHfw1SEtVQqg_1CPeh8wSEl3A0Nw9iiitpVKnovbf5zdhxPNfrvDjVvd7e6hvnaH9CSk2V_kolhBXLL3skcFLH0tEikRFwet3qYzPmvF4GY5eyFDpRW14pGGMALjb09N-fnbSxX1moZmo2AeHRnKm-gWu37mOPnz5S5Dj",
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
