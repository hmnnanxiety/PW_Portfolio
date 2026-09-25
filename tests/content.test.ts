import test from "node:test";
import assert from "node:assert/strict";
import { projectRecords } from "../src/content/projects/records";
import {
  projectCollectionSchema,
  projectSchema,
  imageSchema,
  mediaSchema,
} from "../src/lib/project-schema";
import {
  createProjectRepository,
  filterProjects,
  parseWorkFilter,
} from "../src/lib/project-repository";

test("public repository excludes draft list, featured entries, and direct slugs", () => {
  const repository = createProjectRepository(projectRecords);
  assert.deepEqual(repository.list(), []);
  assert.deepEqual(repository.featured(), []);
  assert.equal(repository.bySlug("orca"), undefined);
  assert.equal(
    repository.bySlug("orca", { includeDrafts: true })?.slug,
    "orca",
  );
});
test("incomplete content cannot be published", () => {
  const result = projectSchema.safeParse({
    ...projectRecords[1],
    publication: "published",
  });
  assert.equal(result.success, false);
  if (!result.success)
    for (const field of [
      "year",
      "role",
      "summary",
      "cover",
      "contentReviewed",
      "todos",
    ])
      assert.ok(result.error.issues.some((issue) => issue.path[0] === field));
});
test("fixtures cannot become published even when metadata is filled", () => {
  const result = projectSchema.safeParse({
    ...projectRecords[0],
    publication: "published",
    summary: "Test fixture only",
    year: 2026,
    role: ["Test role"],
    cover: {
      kind: "image",
      src: "/test.webp",
      alt: "Test only",
      width: 10,
      height: 10,
    },
    contentReviewed: true,
    todos: [],
  });
  assert.equal(result.success, false);
  if (!result.success)
    assert.ok(result.error.issues.some((issue) => issue.path[0] === "fixture"));
});
test("duplicate slugs fail collection validation", () => {
  assert.equal(
    projectCollectionSchema.safeParse([projectRecords[0], projectRecords[0]])
      .success,
    false,
  );
});
test("category filters support multi-category projects and Visual grouping", () => {
  assert.deepEqual(
    filterProjects(projectRecords, "frontend").map((p) => p.slug),
    ["rag-chatbot"],
  );
  assert.deepEqual(
    filterProjects(projectRecords, "ai-ml").map((p) => p.slug),
    ["rag-chatbot"],
  );
  assert.deepEqual(
    filterProjects(projectRecords, "visual").map((p) => p.slug),
    ["showcase-layout-preview"],
  );
  assert.equal(filterProjects(projectRecords, "motion").length, 0);
});
test("URL filters handle absent, repeated, and unknown values predictably", () => {
  assert.equal(parseWorkFilter(undefined).filter.id, "all");
  assert.equal(parseWorkFilter(["software", "design"]).filter.id, "software");
  assert.equal(parseWorkFilter("unknown").invalid, true);
  assert.equal(parseWorkFilter("unknown").filter.id, "all");
});
test("media rejects traversal, invalid sizes, missing alt, and speech without captions", () => {
  const image = {
    kind: "image",
    src: "/cover.webp",
    alt: "Test",
    width: 10,
    height: 10,
  };
  assert.equal(
    imageSchema.safeParse({ ...image, src: "/../secret" }).success,
    false,
  );
  assert.equal(imageSchema.safeParse({ ...image, width: 0 }).success, false);
  assert.equal(imageSchema.safeParse({ ...image, alt: "" }).success, false);
  assert.equal(
    mediaSchema.safeParse({
      kind: "video",
      src: "/movie.mp4",
      title: "Test",
      poster: image,
      hasSpeech: true,
    }).success,
    false,
  );
});
test("unsafe external links and unknown categories fail validation", () => {
  assert.equal(
    projectSchema.safeParse({
      ...projectRecords[1],
      links: { live: "javascript:alert(1)" },
    }).success,
    false,
  );
  assert.equal(
    projectSchema.safeParse({ ...projectRecords[1], categories: ["invented"] })
      .success,
    false,
  );
});
