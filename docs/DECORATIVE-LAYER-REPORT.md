# Decorative Visual Layer

Completed 2026-09-27 on `codex/interaction-layer`. Existing uncommitted static-polish and Interaction Layer work is preserved. No commit, merge, rebase, push, or change to `main`.

## Decisions

- Added three static, low-opacity CSS radial fields: yellow near the mascot, blue behind the wordmark, and warm orange near the Hero-to-Work transition. The off-white canvas remains dominant; no blur filters, glossy surfaces, or saturated wallpaper.
- Added one lightweight inline SVG ribbon with a broad translucent blue stroke and a fine orange companion edge. Its sweep occupies the right side of the transition and trails toward Selected Work. Two paths describe one motif; no image downloads or new asset files are required.
- Extended the backdrop 180–280px beyond the Hero, with a 220px mobile continuation. The gradients fade out and the ribbon links the two existing sections without altering their spacing or markup hierarchy.
- Selected Work receives only that continuation. Card surfaces, media, typography, content, and all later sections remain unchanged. No carousel or horizontal scrolling was introduced.

## Implementation and preservation

Changes are limited to the decorative markup/homepage class in `src/app/page.tsx` and scoped rules in `src/styles/globals.css`, plus this report and QA captures.

The background sits behind content in an isolated stacking context. Only the paint layer is clipped, so focus outlines and FloatingComment remain unaffected. It is `aria-hidden`, non-focusable, and pointer-transparent. Decorations have no animation or JavaScript, so reduced-motion users get the same stationary composition. Forced-colors mode hides the decoration.

The Hero identity, section order, content structure, first-visit intro, FloatingComment, mascot reactions, Contact responses, copy feedback, and project interactions were preserved. FloatingComment's source hash is unchanged from the approved milestone. No packages, client boundaries, or timers were added.

## Responsive and visual QA

| Viewport | Result |
| --- | --- |
| 320px | No horizontal overflow. Soft fields keep the wordmark and mascot clear. A smaller, fainter ribbon connects the sections near the right edge. Comment stays below actions and above the Selected Work heading. |
| 768px | No horizontal overflow. Ribbon continues through the open right side of the transition; project cards remain clean. CTA keyboard activation and a visible 3px focus outline verified. |
| 1440px | No horizontal overflow. Hero remains dominant; gradient and ribbon support the composition. FloatingComment progresses through its existing sequence above the wordmark. |

Production screenshots are in [qa-decorative](qa-decorative/): Hero at all three widths and the tablet Selected Work transition. Readability and continuity were visually reviewed. All Hero images loaded successfully. The backdrop is pointer-transparent; the CTA navigates to Selected Work. No console errors or hydration warnings were captured in the production preview at `http://127.0.0.1:3001`.

The new decoration is static by construction; OS-level reduced-motion emulation and physical touch hardware testing were not needed for this paint-only addition. No field Core Web Vitals measurement was performed.

## Validation

- Lint: PASS, zero errors/warnings.
- Typecheck: PASS.
- Existing tests: PASS, all 8.
- Production build/content validation: PASS, 3 drafts and 0 published projects.
- HTTP smoke: PASS for routes, project pages, filters, 404s, metadata, sitemap, and robots.
- `git diff --check`: PASS.

Tests/build/HTTP checks used approved execution outside the sandbox because its Windows account lookup blocks `tsx`.

## Intentionally restrained

No additional sections, stickers, mascot copies, new interaction concepts, animation systems, GSAP, particles, WebGL, custom cursor, project content, or layout restructuring. Existing project-content TODOs and horizontal Selected Work remain deferred.
