import { existsSync, readFileSync } from "node:fs";
import { resolve, sep } from "node:path";
import { projectRecords } from "../src/content/projects/records";
import { projectBodies } from "../src/content/projects/bodies";
import { projectCollectionSchema } from "../src/lib/project-schema";
import { profile } from "../src/content/profile";

const result = projectCollectionSchema.safeParse(projectRecords);
if (!result.success) {
  console.error(
    "Content validation failed:",
    JSON.stringify(result.error.issues, null, 2),
  );
  process.exit(1);
}
const errors: string[] = [];
const publicRoot = resolve("public");
function checkAsset(src: string, slug: string) {
  const resolved = resolve(publicRoot, `.${src}`);
  if (!resolved.startsWith(publicRoot + sep) || !existsSync(resolved))
    errors.push(`${slug}: missing or invalid public asset ${src}`);
}
for (const project of result.data) {
  if (!(project.slug in projectBodies))
    errors.push(`${project.slug}: missing MDX registry entry`);
  const bodyPath = resolve("src/content/projects", `${project.slug}.mdx`);
  if (!existsSync(bodyPath)) errors.push(`${project.slug}: missing MDX body`);
  else {
    const body = readFileSync(bodyPath, "utf8");
    if (/^# /m.test(body))
      errors.push(`${project.slug}: MDX must start at H2; the layout owns H1`);
    if (
      project.publication === "published" &&
      (/ContentPlaceholder|\bTODO\b/.test(body) || body.trim().length < 30)
    )
      errors.push(
        `${project.slug}: published narrative still contains placeholders or is empty`,
      );
  }
  if (project.cover) checkAsset(project.cover.src, project.slug);
  if (project.seo?.image) checkAsset(project.seo.image.src, project.slug);
  for (const media of project.gallery) {
    checkAsset(media.src, project.slug);
    if (media.kind === "video") {
      checkAsset(media.poster.src, project.slug);
      if (media.captionsSrc) checkAsset(media.captionsSrc, project.slug);
    }
  }
}
for (const slug of Object.keys(projectBodies)) {
  if (!result.data.some((project) => project.slug === slug))
    errors.push(`${slug}: orphaned MDX registry entry`);
}
if (profile.resume) checkAsset(profile.resume, "profile");
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
const drafts = result.data.filter(
  (project) => project.publication === "draft",
).length;
console.log(
  `Content validation passed: ${result.data.length} records; ${drafts} explicit drafts; ${result.data.length - drafts} published projects.`,
);
console.log(
  "Content TODO: project facts/media, personal narrative/education/experience, resume, and canonical domain remain pending.",
);
