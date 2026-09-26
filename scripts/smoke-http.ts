import assert from "node:assert/strict";

async function main() {
  const base = process.argv[2] ?? "http://127.0.0.1:3000";
  const preview = process.argv[3] !== "public";
  async function page(path: string, status = 200) {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, status, `${path}: HTTP status`);
    return (await response.text()).replace(/<!--[\s\S]*?-->/g, "");
  }
  const home = await page("/");
  assert.match(home, /Dimas Satria Widjatmiko \/ dimeees/);
  assert.match(home, /dimeees-hero-head-flat/);
  assert.match(home, /id="identity-heading"/);
  assert.doesNotMatch(home, /Hero artwork — pending/);
  for (const path of ["/about", "/contact", "/work"]) {
    const html = await page(path);
    assert.equal(
      (html.match(/<h1(?:\s|>)/g) ?? []).length,
      1,
      `${path}: one H1`,
    );
  }
  await page("/missing-page", 404);
  await page("/work/missing-project", 404);
  const archive = await page("/work");
  for (const slug of ["orca", "rag-chatbot", "showcase-layout-preview"]) {
    const html = await page(`/work/${slug}`, preview ? 200 : 404);
    if (preview) assert.match(html, /TODO/);
  }
  if (preview) {
    assert.match(archive, /showcase-layout-preview/);
    const filtered = await page("/work?category=software");
    assert.match(filtered, /Software · 1/);
    assert.match(filtered, /href="\/work\/orca"/);
    assert.doesNotMatch(filtered, /href="\/work\/rag-chatbot"/);
    assert.match(
      await page("/work?category=motion"),
      /No projects in this view yet/,
    );
    assert.match(
      await page("/work?category=unknown"),
      /That category is unavailable/,
    );
    assert.match(
      await page("/work?category=software&category=design"),
      /Software · 1/,
    );
  } else {
    assert.doesNotMatch(
      archive,
      /href="\/work\/(?:orca|rag-chatbot|showcase-layout-preview)"/,
    );
    assert.match(archive, /Project content/);
    assert.doesNotMatch(home, /Draft content and layout fixtures/);
  }
  const sitemap = await page("/sitemap.xml");
  assert.doesNotMatch(sitemap, /orca|rag-chatbot|showcase-layout-preview/);
  const robots = await page("/robots.txt");
  assert.match(robots, /Disallow: \//);
  console.log(
    `HTTP smoke checks passed (${preview ? "preview" : "public"}, domain unset): core routes, project routes, 404s, archive, metadata, sitemap, robots${preview ? ", filters" : ", draft exclusion"}.`,
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
