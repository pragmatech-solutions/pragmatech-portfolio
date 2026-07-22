import { Section, SectionHeading } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

export function Expertise() {
  return (
    <Section className="border-b border-border">
      <SectionHeading
        eyebrow="Skills & Expertise"
        title="Technologies we use to build real products."
        description="A verified technology set spanning frontend, backend, databases, AI integration, and cloud infrastructure."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={(index % 4) * 80}>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
