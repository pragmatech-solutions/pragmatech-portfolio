import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Code2,
  LayoutTemplate,
  LifeBuoy,
  Rocket,
  Search,
  TestTube2,
} from "lucide-react";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We start by understanding your business, users, and goals — clarifying scope before any code is written.",
    icon: Search,
  },
  {
    step: 2,
    title: "Scope & Planning",
    description:
      "We break the project into clear milestones, technical requirements, and a realistic delivery timeline.",
    icon: ClipboardList,
  },
  {
    step: 3,
    title: "UI/UX Design",
    description:
      "We map user flows and design responsive interfaces that keep the product easy to use as it grows.",
    icon: LayoutTemplate,
  },
  {
    step: 4,
    title: "Development",
    description:
      "We build frontend, backend, APIs, and integrations in parallel tracks, with regular progress check-ins.",
    icon: Code2,
  },
  {
    step: 5,
    title: "Testing & Review",
    description:
      "We run functional and API testing, validate edge cases, and fix issues before anything reaches production.",
    icon: TestTube2,
  },
  {
    step: 6,
    title: "Deployment",
    description:
      "We configure cloud environments and ship to production with CI/CD workflows and monitoring in place.",
    icon: Rocket,
  },
  {
    step: 7,
    title: "Continued Support",
    description:
      "We stay involved after launch — monitoring, maintaining, and extending the product as your needs evolve.",
    icon: LifeBuoy,
  },
];

export interface DeliveryStage {
  title: string;
  summary: string;
  items: string[];
}

export const deliveryStages: DeliveryStage[] = [
  {
    title: "Design",
    summary: "We plan the product and shape the experience before writing code.",
    items: ["Product planning", "User flows", "UI/UX design", "Responsive interfaces", "Design systems"],
  },
  {
    title: "Develop",
    summary: "We build the frontend, backend, and integrations as one connected system.",
    items: ["Frontend applications", "Backend systems", "REST APIs", "Databases", "Integrations", "AI-powered features"],
  },
  {
    title: "Test",
    summary: "We validate the product thoroughly before it ever reaches your users.",
    items: ["Functional testing", "API testing", "Validation", "Bug fixing", "Performance checks", "Cross-device testing"],
  },
  {
    title: "Deploy",
    summary: "We ship to production and stay responsible for how it runs.",
    items: ["Cloud deployment", "CI/CD", "Environment configuration", "Monitoring", "Maintenance", "Production support"],
  },
];
