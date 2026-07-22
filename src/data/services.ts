import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Boxes,
  Cloud,
  Database,
  LayoutDashboard,
  Plug,
  ServerCog,
  Sparkles,
  TestTubeDiagonal,
  Wrench,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with React, Next.js, Node.js, and Express — from interface to database.",
    icon: LayoutDashboard,
  },
  {
    title: "Backend & API Development",
    description:
      "Robust REST APIs and services built with Node.js, NestJS, and Express, designed around clear architecture and MVC patterns.",
    icon: ServerCog,
  },
  {
    title: "SaaS Product Development",
    description:
      "Multi-feature platforms taken from architecture to deployment, including automation, dashboards, and role-based workflows.",
    icon: Boxes,
  },
  {
    title: "AI & LLM Integrations",
    description:
      "Practical integration of OpenAI, ChatGPT, and local LLMs like Llama 3.1 into product workflows, with structured prompting and validation.",
    icon: Sparkles,
  },
  {
    title: "Database Design & Optimization",
    description:
      "Relational and document database architecture across PostgreSQL, MongoDB, and SQL, tuned for query performance at scale.",
    icon: Database,
  },
  {
    title: "Third-Party Integrations",
    description:
      "Payment gateways, cloud storage, calendars, and communication APIs — including Stripe, JazzCash, HBL Pay, Zoom, and SendGrid.",
    icon: Plug,
  },
  {
    title: "Internal Business Applications",
    description:
      "Purpose-built internal tools for operations, accounting, returns management, and reporting workflows.",
    icon: Blocks,
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Functional and API testing, validation, and structured bug-fixing to keep releases stable under real-world use.",
    icon: TestTubeDiagonal,
  },
  {
    title: "Cloud Deployment & DevOps",
    description:
      "Deployment and environment management on AWS, including serverless and microservices architectures, Docker, and CI/CD workflows.",
    icon: Cloud,
  },
  {
    title: "Application Maintenance",
    description:
      "Ongoing support, monitoring, and improvement for production systems after launch — not just a one-time handoff.",
    icon: Wrench,
  },
];
