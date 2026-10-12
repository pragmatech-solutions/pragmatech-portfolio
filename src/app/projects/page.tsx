import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { getAllProjects, getProjectCategories } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Projects — PragmaTech",
  description:
    "Backend systems, SaaS platforms, AI integrations, and e-commerce operations we've helped design, build, and deploy.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = getProjectCategories();

  return (
    <Section>
      <SectionHeading
        eyebrow="Projects"
        title="Real engineering work across backend systems, AI, and operations."
        description="Each project reflects work delivered as part of our team's professional engagements — described at a level that respects client confidentiality."
      />

      <div className="mt-14">
        <ProjectsGrid projects={projects} categories={categories} />
      </div>
    </Section>
  );
}
