export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  bio: string;
  skills: string[];
  linkedinUrl: string;
  githubUrl?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Burhan Ahmed",
    role: "Full-Stack & MERN Developer",
    focus: "Frontend engineering, product delivery, and AI-powered features",
    bio: "Full-stack developer with around four years of experience across React, Next.js, Node.js, and MongoDB. Recent work has centered on integrating ChatGPT and local LLMs like Llama 3.1 into business applications, alongside frontend leadership on large-scale e-commerce operations.",
    skills: ["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "ChatGPT-4o", "Llama 3.1"],
    linkedinUrl: "https://www.linkedin.com/in/burhanahmedsatti/",
    githubUrl: "https://github.com/burhanahmedsatti",
  },
  {
    name: "Haris Tariq",
    role: "Backend Developer",
    focus: "API architecture, payment systems, and cloud infrastructure",
    bio: "Backend developer with four years of experience designing and scaling REST APIs, microservices, and secure payment architectures with Node.js, NestJS, and TypeScript. Track record of cutting infrastructure costs and resolving critical production issues in live payment and dispatch systems.",
    skills: ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "AWS", "Payment Integrations"],
    linkedinUrl: "https://www.linkedin.com/in/haris-tariq-24a4601b2/",
  },
];
