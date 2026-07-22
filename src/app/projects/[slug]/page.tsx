import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import {
  getAllProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return buildMetadata({
      title: "Project Not Found — Pragmatech",
      description: "This project could not be found.",
    });
  }

  return buildMetadata({
    title: `${project.title} — Pragmatech`,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project);

  return (
    <>
      <Section className="border-b border-border pb-0">
        <Link
          href="/projects"
          className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All Projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Badge>{project.category}</Badge>
          <span className="text-sm text-muted">{project.year}</span>
          <span className="text-sm text-muted">Client: {project.client}</span>
        </div>

        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>

        {(project.liveUrl || project.repositoryUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <Button href={project.liveUrl} variant="secondary">
                Live Project
                <ExternalLink className="h-4 w-4" />
              </Button>
            ) : null}
            {project.repositoryUrl ? (
              <Button href={project.repositoryUrl} variant="secondary">
                Repository
                <ExternalLink className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        )}

        <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-2xl border border-border">
          <Image
            src={project.thumbnail}
            alt={`Abstract interface preview for ${project.title}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Section>

      <Section className="border-b border-border">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">The Business Problem</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">The Solution</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.solution}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Our Contribution</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.contribution}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Key Functionality</h2>
              <ul className="mt-3 space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {project.gallery.length > 0 ? (
              <div>
                <h2 className="text-xl font-semibold text-foreground">Project Gallery</h2>
                <div className="mt-4">
                  <ProjectGallery images={project.gallery} title={project.title} />
                </div>
              </div>
            ) : null}

            {project.outcomes.length > 0 ? (
              <div>
                <h2 className="text-xl font-semibold text-foreground">Results</h2>
                <ul className="mt-3 space-y-2">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary" aria-hidden />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm italic text-muted">
                Outcome metrics for this engagement are available on request.
              </p>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Technology Stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Services Provided
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {project.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Led By
              </h3>
              <p className="mt-3 text-sm text-muted">{project.contributor}</p>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section className="border-b border-border bg-surface/40">
          <h2 className="text-2xl font-semibold text-foreground">Related Projects</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedProject) => (
              <ProjectCard key={relatedProject.slug} project={relatedProject} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="text-center">
        <h2 className="text-2xl font-semibold text-foreground">Building something similar?</h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          Tell us about your project and we&apos;ll help define the next steps.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/contact" variant="primary">
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}
