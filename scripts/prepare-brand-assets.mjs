import { createRequire } from "node:module";
import { mkdir, stat, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { resolve } from "node:path";

// Use the image processor already supplied by Next.js. No additional dependency.
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const selected = [
  ["actions", "dimeees-action-peek"],
  ["expressions", "dimeees-expression-wink"],
];
for (const [group, name] of selected) {
  const source = resolve("assets-source/mascot", group, `${name}.png`);
  const destination = resolve("public/mascot", group, `${name}.webp`);
  const before = createHash("sha256")
    .update(await readFile(source))
    .digest("hex");
  await mkdir(resolve("public/mascot", group), { recursive: true });
  // Lossless conversion only: keep the complete canvas, alpha, and original dimensions.
  await sharp(source).webp({ lossless: true, effort: 6 }).toFile(destination);
  const original = await sharp(source).metadata();
  const derivative = await sharp(destination).metadata();
  if (
    !derivative.hasAlpha ||
    original.width !== derivative.width ||
    original.height !== derivative.height
  )
    throw new Error(`Unexpected dimensions or alpha: ${name}`);
  if (
    before !==
    createHash("sha256")
      .update(await readFile(source))
      .digest("hex")
  )
    throw new Error(`Master changed: ${name}`);
  console.log(
    `${name}: ${(await stat(source)).size} -> ${(await stat(destination)).size} bytes; ${derivative.width}x${derivative.height}; alpha preserved; master unchanged.`,
  );
}
