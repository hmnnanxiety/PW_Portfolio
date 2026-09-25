# dimeees asset pack v0.1

## Recommended production split

- `mascot/expressions/*.png`: transparent raster assets for hero reactions, hover states, 404/empty states, small callouts.
- `mascot/actions/*.png`: transparent raster assets for section decoration and contextual moments.
- `doodles/svg/*.svg`: lightweight vector primitives. Recolor by editing SVG fill/stroke if needed.
- `source-sheets/`: original generated sheets kept only as references; do not ship these whole sheets to production.

## Why PNG for the mascot?

The mascot has detailed hair, glasses, facial lines, and painterly antialiasing. Auto-tracing it into SVG would usually create huge, messy paths and worse rendering. Use transparent PNG/WebP/AVIF for the detailed character; use SVG for simple doodles and geometric brand marks.

## Web optimization

1. Keep these PNG files as design masters.
2. Generate WebP/AVIF variants for production where appropriate.
3. Use explicit width/height and lazy-load below-the-fold assets.
4. Do not load every expression on first paint; preload only the hero/default expression.
5. Decorative doodles should use `aria-hidden="true"`.

## Naming convention

`dimeees-expression-{state}.png`

`dimeees-action-{action}.png`

`dimeees-doodle-{name}.svg`
