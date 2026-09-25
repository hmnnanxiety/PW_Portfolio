import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CaseStudyLayout,
  ProjectHeader,
  ProjectLinks,
  ShowcaseLayout,
} from "@/components/project-detail";
import { projectBodies } from "@/content/projects/bodies";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getProjects().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project)
    return {
      title: "Project not found",
      robots: { index: false, follow: false },
    };
  const metadata = pageMetadata(
    project.seo?.title ?? project.title,
    `/work/${project.slug}`,
    project.seo?.description ??
      project.summary ??
      `${project.title} — draft content awaiting confirmation.`,
  );
  const socialImage = project.seo?.image ?? project.cover;
  return {
    ...metadata,
    ...(project.publication === "draft"
      ? { robots: { index: false, follow: false } }
      : {}),
    openGraph: {
      ...metadata.openGraph,
      ...(socialImage
        ? {
            images: [
              {
                url: socialImage.src,
                width: socialImage.width,
                height: socialImage.height,
                alt: socialImage.alt,
              },
            ],
          }
        : {}),
    },
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const loadBody = projectBodies[project.slug as keyof typeof projectBodies];
  if (!loadBody) notFound();
  const { default: Body } = await loadBody();
  const Layout = project.type === "showcase" ? ShowcaseLayout : CaseStudyLayout;
  const projects = getProjects();
  const index = projects.findIndex((entry) => entry.slug === project.slug);
  const next =
    projects.length > 1 ? projects[(index + 1) % projects.length] : undefined;
  return (
    <article className="page-container">
      <ProjectHeader project={project} />
      <Layout project={project}>
        <Body />
      </Layout>
      <ProjectLinks project={project} />
      <nav
        aria-label="More work"
        className="section-heading border-t border-line py-10"
      >
        <Link href="/work" className="text-link">
          Back to all work
        </Link>
        {next && (
          <Link href={`/work/${next.slug}`} className="text-link">
            Next: {next.title} <span aria-hidden="true">→</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
