import { filters } from "@/content/taxonomy";
import { projectCollectionSchema, type Project } from "@/lib/project-schema";

export type ProjectVisibility = { includeDrafts?: boolean };
export function createProjectRepository(input: unknown) {
  // Parse at the repository boundary as well as in the build validation script.
  const records = projectCollectionSchema.parse(input);
  const list = ({ includeDrafts = false }: ProjectVisibility = {}) =>
    records.filter(
      (project) => includeDrafts || project.publication === "published",
    );
  return {
    list,
    bySlug: (slug: string, options?: ProjectVisibility) =>
      list(options).find((project) => project.slug === slug),
    featured: (options?: ProjectVisibility) =>
      list(options)
        .filter((project) => project.featured)
        .sort(
          (a, b) =>
            (a.featuredOrder ?? Infinity) - (b.featuredOrder ?? Infinity),
        ),
  };
}
export function parseWorkFilter(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value;
  const filter = filters.find(({ id }) => id === (raw || "all"));
  return { filter: filter ?? filters[0], invalid: Boolean(raw && !filter) };
}
export function filterProjects(projects: Project[], filterId: string) {
  const { filter } = parseWorkFilter(filterId);
  return filter.id === "all"
    ? projects
    : projects.filter((project) =>
        project.categories.some((id) => filter.categories.includes(id)),
      );
}
