import {
  GitBranch,
  MessageSquare,
  Milestone,
  ShieldCheck,
  Timer,
  Workflow,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Complete Delivery Capability",
    description: "Design, development, testing, and deployment handled by one accountable team.",
    icon: Workflow,
  },
  {
    title: "Direct Communication",
    description: "You talk directly with the people building your product — no account-manager layers.",
    icon: MessageSquare,
  },
  {
    title: "Maintainable Code",
    description: "Clean architecture and clear structure, built so the codebase stays workable as it grows.",
    icon: GitBranch,
  },
  {
    title: "Transparent Milestones",
    description: "Scoped, visible progress at every stage — you always know what's shipped and what's next.",
    icon: Milestone,
  },
  {
    title: "Thorough Testing",
    description: "Functional and API testing built into the process, not bolted on at the end.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Partnership",
    description: "Available for ongoing maintenance and improvements after the initial launch.",
    icon: Timer,
  },
];

export function WhyUs() {
  return (
    <Section className="border-b border-border">
      <SectionHeading
        eyebrow="Why Work With Us"
        title="A technical partner you can rely on past launch day."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <Reveal key={reason.title} delay={(index % 3) * 80}>
              <div className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
                <Icon className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                <div>
                  <h3 className="text-base font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{reason.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
