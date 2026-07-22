export type ProjectCategory =
  | "Backend & APIs"
  | "SaaS & AI Platforms"
  | "E-commerce & Operations"
  | "Business Applications";

export type MockupVariant = "dashboard" | "api" | "chat" | "commerce" | "ops";

export interface Project {
  slug: string;
  title: string;
  client: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  contribution: string;
  category: ProjectCategory;
  services: string[];
  technologies: string[];
  features: string[];
  outcomes: string[];
  thumbnail: string;
  mockupVariant: MockupVariant;
  gallery: string[];
  featured: boolean;
  year: string;
  liveUrl?: string;
  repositoryUrl?: string;
  caseStudyAvailable: boolean;
  contributor: "Burhan Ahmed" | "Haris Tariq" | "Team";
}

export const projects: Project[] = [
  {
    slug: "cheezious-platform-backend",
    title: "Cheezious Platform — Orders & Dispatch Backend",
    client: "Techbang",
    summary:
      "Core backend for a multi-outlet food ordering platform, covering orders, payments, refunds, and rider dispatch.",
    description:
      "A backend engagement delivered as part of the Techbang team for the Cheezious food ordering platform, supporting order lifecycle management, payment and refund processing, and real-time dispatch coordination between outlets and delivery riders.",
    problem:
      "The platform's serverless architecture was becoming costly to run and difficult to extend as order volume and integration complexity grew, while dispatch and payment workflows needed more resilient failure handling in production.",
    solution:
      "Migrated core services from a serverless setup to a microservices architecture, integrated multiple local payment gateways directly into the order and refund flows, and hardened the dispatch pipeline with better validation, logging, and failover handling around cloud storage operations.",
    contribution:
      "Engineered the backend systems supporting orders, payments, refunds, and rider-assignment workflows, led the serverless-to-microservices migration, and resolved critical production issues in dispatch and file-storage handling.",
    category: "Backend & APIs",
    services: [
      "Backend Development",
      "API Development",
      "Cloud Architecture",
      "Payment Integrations",
      "Production Support",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "AWS",
      "Amazon S3",
      "Docker",
      "HBL Pay",
      "Bank Alfalah",
      "XPay",
    ],
    features: [
      "Order lifecycle and refund management APIs",
      "Rider-assignment and dispatch coordination workflows",
      "Secure integration with HBL Pay, Bank Alfalah, and XPay",
      "Failover and validation logic for cloud storage operations",
    ],
    outcomes: ["Reduced AWS infrastructure costs by approximately 20% after the microservices migration"],
    thumbnail: "/images/projects/cheezious-platform-backend/thumbnail.svg",
    mockupVariant: "commerce",
    gallery: [
      "/images/projects/cheezious-platform-backend/gallery-1.svg",
      "/images/projects/cheezious-platform-backend/gallery-2.svg",
    ],
    featured: true,
    year: "2025",
    caseStudyAvailable: true,
    contributor: "Haris Tariq",
  },
  {
    slug: "memeworld-social-apis",
    title: "Memeworld — Social Platform APIs",
    client: "Switch Communications",
    summary:
      "REST API backbone for a social mobile app, powering comments, reactions, feed ranking, and device-based authentication.",
    description:
      "Backend engineering for Memeworld, a social mobile application, building the core REST APIs behind its interactive social features and media handling.",
    problem:
      "The app needed a responsive social layer — comments, replies, reactions, and a ranked feed — along with a lightweight authentication model suited to a mobile-first audience, plus a more efficient way to handle growing volumes of user-generated media.",
    solution:
      "Built REST APIs for the core social interactions and feed-ranking logic, implemented device-based authentication, migrated media workflows to Amazon S3 to reduce backend processing overhead, and optimized the underlying SQL queries and data models.",
    contribution:
      "Built and optimized the core REST APIs using Node.js, Express.js, and SQL, developed the social feature set, migrated media handling to S3, and integrated JazzCash payments with referral workflows.",
    category: "Backend & APIs",
    services: [
      "Backend Development",
      "API Development",
      "Database Optimization",
      "Cloud Storage Integration",
      "Payment Integrations",
    ],
    technologies: ["Node.js", "Express.js", "SQL", "Amazon S3", "JazzCash"],
    features: [
      "Comments, replies, and reactions APIs",
      "Feed-ranking logic for content surfacing",
      "Device-based authentication",
      "Media pipeline migrated to Amazon S3",
      "JazzCash payment and referral workflows",
    ],
    outcomes: [],
    thumbnail: "/images/projects/memeworld-social-apis/thumbnail.svg",
    mockupVariant: "chat",
    gallery: [
      "/images/projects/memeworld-social-apis/gallery-1.svg",
      "/images/projects/memeworld-social-apis/gallery-2.svg",
    ],
    featured: true,
    year: "2024–2025",
    caseStudyAvailable: true,
    contributor: "Haris Tariq",
  },
  {
    slug: "copitch-ai-meeting-automation",
    title: "Copitch.ai — AI Meeting Automation Platform",
    client: "AG Infotech",
    summary:
      "AI-powered transcription and meeting-automation platform, taken from backend architecture through to deployment.",
    description:
      "An AI-powered platform for automated meeting transcription and workflow automation, built end-to-end from database design through deployment as part of the AG Infotech team.",
    problem:
      "Teams needed meeting scheduling, recording, transcription, and follow-up presentation generation handled automatically, with reliable output from the underlying language model rather than inconsistent, unstructured responses.",
    solution:
      "Delivered the application MVP from backend architecture to deployment, integrated Google Calendar, Zoom, and Google Slides APIs to automate the meeting lifecycle, and improved LLM output reliability through structured prompts, response validation, and application logging.",
    contribution:
      "Delivered the backend architecture and business logic for the platform, integrated OpenAI APIs for transcription and automation, and engineered the Calendar/Zoom/Slides integration pipeline.",
    category: "SaaS & AI Platforms",
    services: [
      "Backend Development",
      "AI & LLM Integration",
      "Third-Party Integrations",
      "Cloud Deployment",
    ],
    technologies: ["Node.js", "OpenAI API", "Google Calendar API", "Zoom API", "Google Slides API"],
    features: [
      "Automated meeting scheduling and recording pipeline",
      "AI-powered transcription using OpenAI APIs",
      "Automated presentation generation from meeting content",
      "Structured prompting and response validation for reliable LLM output",
    ],
    outcomes: [],
    thumbnail: "/images/projects/copitch-ai-meeting-automation/thumbnail.svg",
    mockupVariant: "dashboard",
    gallery: [
      "/images/projects/copitch-ai-meeting-automation/gallery-1.svg",
      "/images/projects/copitch-ai-meeting-automation/gallery-2.svg",
    ],
    featured: true,
    year: "2023–2024",
    caseStudyAvailable: true,
    contributor: "Haris Tariq",
  },
  {
    slug: "ai-recruiter",
    title: "AI Recruiter — Automated Hiring Assistant",
    client: "SOFIT Consultancy",
    summary:
      "A Human Resource automation system that uses AI to support candidate interviews and resume-to-job relevancy analysis.",
    description:
      "An AI Recruiter platform built to assist selection, interviewing, and hiring workflows, developed as part of a broader Human Resource Automation system.",
    problem:
      "Hiring teams needed a faster, more consistent way to assess candidates at scale — screening resumes against job requirements and supporting the interview process without adding manual overhead.",
    solution:
      "Integrated ChatGPT into the interview process and built resume-analysis logic to gauge job-candidate relevancy, as part of a larger Human Resource Automation system extensively integrating ChatGPT and Llama 3.1.",
    contribution:
      "Developed the Human Resource Automation system's AI features, integrating ChatGPT for the interview process and building the resume-to-job relevancy analysis.",
    category: "SaaS & AI Platforms",
    services: ["Full-Stack Development", "AI & LLM Integration", "Backend Development"],
    technologies: ["Node.js", "ReactJS", "MongoDB", "ChatGPT-4o", "Llama 3.1"],
    features: [
      "ChatGPT-integrated interview process",
      "Automated resume analysis and job-relevancy scoring",
      "Local LLM support via Llama 3.1",
    ],
    outcomes: [],
    thumbnail: "/images/projects/ai-recruiter/thumbnail.svg",
    mockupVariant: "chat",
    gallery: ["/images/projects/ai-recruiter/gallery-1.svg"],
    featured: true,
    year: "2024–present",
    caseStudyAvailable: true,
    contributor: "Burhan Ahmed",
  },
  {
    slug: "global-returns",
    title: "Global Returns — Order Returns Management",
    client: "Softoo / Boohoo",
    summary:
      "Workflow and analytics system for managing order returns at scale for a multi-national clothing retailer.",
    description:
      "A returns-management system supporting Boohoo's order returns operations, built as part of an augmented engineering engagement through Softoo.",
    problem:
      "Managing returns across a large-scale clothing retailer requires clear workflow states, reliable querying across high volumes of return records, and visibility into returns activity for operational teams.",
    solution:
      "Built out workflow setup for the returns process, developed system querying capabilities, and deployed analytics to give operational teams visibility into returns activity.",
    contribution:
      "Worked extensively on return operations, workflow setup, system querying, and deployment of returns analytics, while also supporting frontend hiring and overseeing frontend workloads for the team.",
    category: "E-commerce & Operations",
    services: ["Full-Stack Development", "Database & Querying", "Analytics"],
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    features: [
      "Returns workflow state management",
      "Query tooling for high-volume return records",
      "Operational analytics for returns activity",
    ],
    outcomes: [],
    thumbnail: "/images/projects/global-returns/thumbnail.svg",
    mockupVariant: "ops",
    gallery: ["/images/projects/global-returns/gallery-1.svg"],
    featured: true,
    year: "2022–2024",
    caseStudyAvailable: true,
    contributor: "Burhan Ahmed",
  },
  {
    slug: "designer-trellis",
    title: "Designer Trellis — Business & Accounting Application",
    client: "AG Infotech",
    summary:
      "Database architecture and backend business logic for a business and accounting application.",
    description:
      "A business and accounting application built for internal operations, with a focus on solid database architecture and clear backend business logic.",
    problem:
      "Business and accounting workflows need a data model and API layer that stays consistent and maintainable as reporting and accounting logic grows in complexity.",
    solution:
      "Designed the database architecture, backend business logic, and REST APIs to support the application's accounting and business operations end-to-end.",
    contribution:
      "Designed the database architecture, backend business logic, and REST APIs for Designer Trellis.",
    category: "Business Applications",
    services: ["Database Design", "Backend Development", "API Development"],
    technologies: ["Node.js", "PostgreSQL", "REST APIs"],
    features: [
      "Relational database architecture for accounting data",
      "Backend business logic for financial workflows",
      "REST API layer for the application frontend",
    ],
    outcomes: [],
    thumbnail: "/images/projects/designer-trellis/thumbnail.svg",
    mockupVariant: "dashboard",
    gallery: ["/images/projects/designer-trellis/gallery-1.svg"],
    featured: false,
    year: "2023–2024",
    caseStudyAvailable: true,
    contributor: "Haris Tariq",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(current: Project, limit = 3): Project[] {
  return projects
    .filter((project) => project.slug !== current.slug && project.category === current.category)
    .slice(0, limit);
}

export function getProjectCategories(): ProjectCategory[] {
  return Array.from(new Set(projects.map((project) => project.category)));
}
