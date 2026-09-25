import "server-only";
import { projectRecords } from "@/content/projects/records";
import { createProjectRepository } from "@/lib/project-repository";
import { isPreview } from "@/lib/site";

const repository = createProjectRepository(projectRecords);
export const getProjects = () => repository.list({ includeDrafts: isPreview });
export const getProjectBySlug = (slug: string) =>
  repository.bySlug(slug, { includeDrafts: isPreview });
export const getFeaturedProjects = () =>
  repository.featured({ includeDrafts: isPreview });
export const getPublishedProjects = () => repository.list();
