import Image from "next/image";
import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { categoryLabel } from "@/content/taxonomy";
import type { Project } from "@/lib/project-schema";

export function ProjectCard({
  project,
  wide = false,
  headingLevel = 3,
}: {
  project: Project;
  wide?: boolean;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="project-card">
      <Link href={`/work/${project.slug}`}>
        <div className="project-media">
          {project.cover ? (
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes={
                wide
                  ? "(max-width: 760px) 100vw, 90vw"
                  : "(max-width: 760px) 100vw, 45vw"
              }
              className="object-cover"
            />
          ) : (
            <Placeholder
              label="Project cover — pending"
              note={
                project.fixture
                  ? "Layout preview; no project media supplied"
                  : `${project.title} / media to be supplied`
              }
            />
          )}
        </div>
        <div className="project-card-copy">
          <div className="project-card-topline">
            <span>
              {project.categories.map(categoryLabel).join(" / ") ||
                "Category pending"}
            </span>
            <span>{project.year ?? "Year pending"}</span>
          </div>
          <Heading className="project-title">
            {project.title} <span aria-hidden="true">↗</span>
          </Heading>
          <p className="draft-note">
            {project.fixture
              ? "Layout fixture — not a portfolio project"
              : project.publication === "draft"
                ? "Draft candidate — content awaiting confirmation"
                : project.summary}
          </p>
          <p className="project-card-role">
            {project.role?.join(" / ") ?? "Role & contribution — pending"}
          </p>
        </div>
      </Link>
    </article>
  );
}
