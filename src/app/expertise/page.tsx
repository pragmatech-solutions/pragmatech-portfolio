import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { skillGroups } from "@/data/skills";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Expertise — Pragmatech",
  description:
    "A verified technology set spanning frontend, backend, databases, AI integration, cloud infrastructure, and testing.",
  path: "/expertise",
});

export default function ExpertisePage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Expertise"
        title="A focused, verified technology set — not a buzzword list."
        description="Every technology below reflects real, hands-on delivery experience across our engagements."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {group.category}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
