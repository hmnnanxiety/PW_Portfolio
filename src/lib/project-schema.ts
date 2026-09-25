import { z } from "zod";
import { categoryIds } from "@/content/taxonomy";

const text = z.string().trim().min(1);
const publicPath = text.regex(
  /^\/(?!\/)(?!.*\.\.)(?!.*[?#\\])[a-zA-Z0-9/_ .-]+$/,
  "Use a local public asset path without traversal, query, or fragment.",
);
const webUrl = z.url({ protocol: /^https?$/ });
export const imageSchema = z.strictObject({
  kind: z.literal("image"),
  src: publicPath,
  alt: text,
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  caption: text.optional(),
});
export const mediaSchema = z.discriminatedUnion("kind", [
  imageSchema,
  z
    .strictObject({
      kind: z.literal("video"),
      src: publicPath,
      title: text,
      poster: imageSchema,
      caption: text.optional(),
      hasSpeech: z.boolean(),
      captionsSrc: publicPath.optional(),
    })
    .refine((video) => !video.hasSpeech || Boolean(video.captionsSrc), {
      message: "Videos with speech require captions.",
      path: ["captionsSrc"],
    }),
]);

export const projectSchema = z
  .strictObject({
    slug: text.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: text,
    type: z.enum(["showcase", "case-study"]),
    publication: z.enum(["draft", "published"]),
    fixture: z.boolean(),
    summary: text.nullable(),
    year: z.number().int().min(1900).max(2100).nullable(),
    status: z.enum(["completed", "ongoing", "archived"]).nullable(),
    categories: z
      .array(z.enum(categoryIds))
      .refine(
        (items) => new Set(items).size === items.length,
        "Categories must be unique.",
      ),
    tags: z.array(text),
    role: z.array(text).min(1).nullable(),
    tools: z.array(text).nullable(),
    cover: imageSchema.nullable(),
    gallery: z.array(mediaSchema),
    featured: z.boolean(),
    featuredOrder: z.number().int().nonnegative().optional(),
    links: z
      .strictObject({
        live: webUrl.optional(),
        github: webUrl.optional(),
        external: webUrl.optional(),
      })
      .optional(),
    contentReviewed: z.boolean(),
    todos: z.array(z.strictObject({ field: text, note: text })),
    seo: z
      .strictObject({
        title: text.optional(),
        description: text.optional(),
        image: imageSchema.optional(),
      })
      .optional(),
  })
  .superRefine((project, ctx) => {
    if (project.publication !== "published") {
      if (!project.todos.length)
        ctx.addIssue({
          code: "custom",
          path: ["todos"],
          message: "Drafts must document what is pending.",
        });
      return;
    }
    const require = (valid: unknown, path: string, message: string) => {
      if (!valid) ctx.addIssue({ code: "custom", path: [path], message });
    };
    require(!project.fixture, "fixture", "Layout fixtures cannot be published.");
    require(project.summary, "summary", "Published projects require a verified summary.");
    require(project.year, "year", "Published projects require a verified year.");
    require(project.role
      ?.length, "role", "Published projects require a verified contribution.");
    require(project.categories
      .length, "categories", "Published projects require a category.");
    require(project.cover, "cover", "Published projects require a cover.");
    require(project.contentReviewed, "contentReviewed", "Review the narrative before publishing.");
    require(project.todos.length ===
      0, "todos", "Resolve content TODOs before publishing.");
  });

export const projectCollectionSchema = z
  .array(projectSchema)
  .superRefine((projects, ctx) => {
    const seen = new Set<string>();
    projects.forEach((project, index) => {
      if (seen.has(project.slug))
        ctx.addIssue({
          code: "custom",
          path: [index, "slug"],
          message: "Duplicate project slug.",
        });
      seen.add(project.slug);
    });
  });
export type Project = z.infer<typeof projectSchema>;
export type ImageAsset = z.infer<typeof imageSchema>;
export type MediaAsset = z.infer<typeof mediaSchema>;
