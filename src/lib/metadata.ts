import type { Metadata } from "next";
import { canIndex, siteDescription, siteUrl } from "@/lib/site";

export function pageMetadata(
  title: string,
  path: string,
  description = siteDescription,
): Metadata {
  return {
    title,
    description,
    ...(siteUrl ? { alternates: { canonical: `${siteUrl}${path}` } } : {}),
    openGraph: {
      title: `${title} | dimeees`,
      description,
      siteName: "dimeees",
      type: "website",
      ...(siteUrl ? { url: `${siteUrl}${path}` } : {}),
    },
    robots: { index: canIndex, follow: canIndex },
  };
}
