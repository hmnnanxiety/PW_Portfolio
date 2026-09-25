import Image from "next/image";
import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { categoryLabel } from "@/content/taxonomy";
import { caseStudySections } from "@/content/projects/sections";
import type { Project } from "@/lib/project-schema";

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="page-intro">
      <Link href="/work" className="text-link mb-6">
        <span aria-hidden="true">←</span> All work
      </Link>
      <p className="eyebrow">
        {project.type === "showcase" ? "Showcase" : "Case study"} /{" "}
        {project.categories.map(categoryLabel).join(" + ")}
      </p>
      <h1 className="project-heading">{project.title}</h1>
      {project.summary && <p className="lead">{project.summary}</p>}
      {project.publication === "draft" && (
        <aside className="draft-panel" aria-label="Draft content status">
          <strong>
            {project.fixture
              ? "Layout fixture — not a portfolio project"
              : "Draft candidate — facts and media pending"}
          </strong>
          <ul>
            {project.todos.map((todo) => (
              <li key={todo.field}>{todo.note}</li>
            ))}
          </ul>
        </aside>
      )}
      <dl className="project-facts">
        <div>
          <dt>Year</dt>
          <dd>{project.year ?? "Pending"}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{project.role?.join(", ") ?? "Pending"}</dd>
        </div>
        <div>
          <dt>Tools / Stack</dt>
          <dd>{project.tools?.join(", ") || "Pending"}</dd>
        </div>
        <div>
          <dt>Project status</dt>
          <dd>{project.status ?? "To be confirmed"}</dd>
        </div>
      </dl>
    </header>
  );
}
export function ProjectCover({ project }: { project: Project }) {
  return (
    <div className="project-cover">
      {project.cover ? (
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 1440px) 92vw, 1440px"
          className="object-contain"
        />
      ) : (
        <Placeholder
          label="Project cover — pending"
          note="Space reserved for verified project media"
        />
      )}
    </div>
  );
}
export function ProjectGallery({ project }: { project: Project }) {
  return (
    <section className="py-10" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading">Gallery</h2>
      <div className="gallery">
        {project.gallery.length ? (
          project.gallery.map((media) => (
            <figure key={media.src}>
              {media.kind === "image" ? (
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  sizes="(max-width: 760px) 92vw, 45vw"
                  className="h-auto w-full"
                />
              ) : (
                <video
                  controls
                  preload="none"
                  poster={media.poster.src}
                  aria-label={media.title}
                  width={media.poster.width}
                  height={media.poster.height}
                >
                  {/* Native controls; never autoplay. */}
                  <source src={media.src} />
                  {media.captionsSrc && (
                    <track
                      kind="captions"
                      src={media.captionsSrc}
                      srcLang="en"
                      label="English"
                      default
                    />
                  )}
                  Your browser does not support embedded video.{" "}
                  <a href={media.src}>Download video</a>.
                </video>
              )}
              {media.caption && <figcaption>{media.caption}</figcaption>}
            </figure>
          ))
        ) : (
          <>
            <Placeholder
              label="Project media — pending"
              note="Photography, screenshots, or stills"
            />
            <Placeholder
              label="Project media — pending"
              note="Additional images or video with poster"
            />
          </>
        )}
      </div>
    </section>
  );
}
export function ShowcaseLayout({
  project,
  children,
}: {
  project: Project;
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectCover project={project} />
      <div className="prose py-12">{children}</div>
      <ProjectGallery project={project} />
    </>
  );
}
export function CaseStudyLayout({
  project,
  children,
}: {
  project: Project;
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectCover project={project} />
      <div className="case-layout">
        <nav className="case-toc" aria-label="Case study contents">
          <p className="eyebrow">In this case study</p>
          <ol>
            {caseStudySections.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
            <li>
              <a href="#gallery-heading">Gallery</a>
            </li>
          </ol>
        </nav>
        <div className="prose">{children}</div>
      </div>
      <ProjectGallery project={project} />
    </>
  );
}
export function ProjectLinks({ project }: { project: Project }) {
  const links = [
    ["live", "Live project"],
    ["github", "GitHub repository"],
    ["external", "Related link"],
  ] as const;
  return (
    project.links && (
      <nav aria-label="Project links" className="flex flex-wrap gap-6 py-6">
        {links.map(([key, label]) =>
          project.links?.[key] ? (
            <a key={key} className="text-link" href={project.links[key]}>
              {label} <span aria-hidden="true">↗</span>
            </a>
          ) : null,
        )}
      </nav>
    )
  );
}
