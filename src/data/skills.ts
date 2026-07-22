export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ECMA)", "Redux", "Material UI", "Semantic UI", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "Microservices", "MVC Architecture"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL"],
  },
  {
    category: "AI & Automation",
    skills: ["OpenAI API", "ChatGPT-4o", "Llama 3.1 (Ollama)", "Structured Prompting & Validation"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Amazon S3", "Serverless", "Docker", "CI/CD", "DevOps"],
  },
  {
    category: "Architecture",
    skills: ["API Design", "Database Architecture", "Serverless-to-Microservices Migration", "System Integration"],
  },
  {
    category: "Integrations",
    skills: ["Stripe", "JazzCash", "HBL Pay", "Bank Alfalah", "XPay", "Zoom", "Google Calendar", "Google Slides", "SendGrid"],
  },
  {
    category: "Testing & Tools",
    skills: ["Jest", "Git & GitHub", "Jira", "Confluence", "Agile & Scrum"],
  },
];
