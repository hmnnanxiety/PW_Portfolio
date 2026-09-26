import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { WorkFilters } from "@/components/work-filters";
import { getProjects } from "@/lib/projects";
import { filterProjects, parseWorkFilter } from "@/lib/project-repository";
import { pageMetadata } from "@/lib/metadata";
import { canIndex, isPreview } from "@/lib/site";

type Props = { searchParams: Promise<{ category?: string | string[] }> };
export async function generateMetadata({ searchParams }: Props) {
  const { category } = await searchParams;
  return {
    ...pageMetadata("Work", "/work"),
    ...(category ? { robots: { index: false, follow: canIndex } } : {}),
  };
}
export default async function WorkPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const { filter, invalid } = parseWorkFilter(category);
  const projects = filterProjects(getProjects(), filter.id);
  return (
    <div className="page-container pb-8">
      <header className="page-intro pb-[clamp(2rem,4vw,3rem)]">
        <p className="eyebrow">The archive</p>
        <h1>Work.</h1>
        <p className="lead">Visual and technical projects, in one place.</p>
        {isPreview && (
          <p className="draft-note mt-4">
            Draft candidates are visible for review. Categories are provisional;
            the showcase fixture is not an actual project.
          </p>
        )}
      </header>
      <WorkFilters active={filter.id} />
      {invalid && (
        <p className="draft-note mt-4">
          That category is unavailable. Showing all work.
        </p>
      )}
      <section
        className="page-content mt-[clamp(2rem,4vw,3.5rem)]"
        aria-label={`${filter.label} projects`}
      >
        <p className="results-summary">
          {filter.label} · {projects.length}{" "}
          {isPreview ? "draft / layout" : "published"}{" "}
          {projects.length === 1 ? "entry" : "entries"}
        </p>
        {projects.length ? (
          <ul className="project-list gap-x-[clamp(1rem,2vw,1.75rem)] gap-y-[clamp(3rem,6vw,5rem)] [&_.project-media]:aspect-[16/10]">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} headingLevel={2} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty-state">
            <h2>
              {filter.id === "all"
                ? "Project content — pending"
                : "No projects in this view yet."}
            </h2>
            <p className="copy">
              {filter.id === "all"
                ? "Verified project details and media will be added here."
                : "Try another discipline or return to the complete archive."}
            </p>
            {filter.id !== "all" && (
              <Link href="/work" className="text-link mt-4">
                View all work
              </Link>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
