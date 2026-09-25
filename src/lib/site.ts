import { z } from "zod";

export const isPreview =
  process.env.PORTFOLIO_PREVIEW === "true" ||
  process.env.NODE_ENV === "development";
const configuredUrl = process.env.SITE_URL?.trim();
const originSchema = z.url({ protocol: /^https?$/ }).refine((value) => {
  const url = new URL(value);
  return (
    url.pathname === "/" &&
    !url.search &&
    !url.hash &&
    !url.username &&
    !url.password
  );
}, "SITE_URL must be an origin without a path, credentials, query, or fragment.");
export const siteUrl = configuredUrl
  ? originSchema.parse(configuredUrl).replace(/\/$/, "")
  : undefined;
export const canIndex = Boolean(siteUrl) && !isPreview;
export const siteDescription =
  "The portfolio of Dimas Satria Widjatmiko (dimeees), spanning multimedia, visual work, interfaces, and software.";
