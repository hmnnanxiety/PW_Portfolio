import type { MetadataRoute } from "next";
import { getPublishedProjects } from "@/lib/projects";
import { canIndex, siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!canIndex || !siteUrl) return [];
  return [
    "/",
    "/work",
    "/about",
    "/contact",
    ...getPublishedProjects().map((project) => `/work/${project.slug}`),
  ].map((path) => ({ url: `${siteUrl}${path}` }));
}
