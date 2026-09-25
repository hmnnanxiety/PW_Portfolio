import type { MetadataRoute } from "next";
import { canIndex, siteUrl } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return canIndex && siteUrl
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${siteUrl}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
