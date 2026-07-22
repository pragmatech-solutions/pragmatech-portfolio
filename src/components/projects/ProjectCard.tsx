import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="focus-ring group block overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={`Abstract interface preview for ${project.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-2">
          <Badge>{project.category}</Badge>
          <span className="text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="mt-4 flex items-start justify-between gap-2 text-lg font-semibold text-foreground">
          {project.title}
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent"
            aria-hidden
          />
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
