import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Section className="border-b border-border bg-surface/40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Products we've helped build and ship."
          description="A selection of real engineering work spanning backend systems, AI integrations, and e-commerce operations."
        />
        <Button href="/projects" variant="secondary" className="shrink-0">
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
