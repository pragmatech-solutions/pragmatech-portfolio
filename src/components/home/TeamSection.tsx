import { ExternalLink } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { teamMembers } from "@/data/team";

export function TeamSection() {
  return (
    <Section className="border-b border-border bg-surface/40">
      <SectionHeading
        eyebrow="The Team"
        title="A small, coordinated team — not a pool of freelancers."
        description="PragmaTech combines complementary frontend, backend, and delivery experience so every project has full-stack coverage from day one."
      />

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {teamMembers.map((member, index) => (
          <Reveal key={member.name} delay={index * 100}>
            <div className="h-full rounded-2xl border border-border bg-surface p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-lg font-semibold text-accent">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm font-medium text-accent">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  LinkedIn
                </a>
                {member.githubUrl ? (
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
                    aria-label={`${member.name} on GitHub`}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
