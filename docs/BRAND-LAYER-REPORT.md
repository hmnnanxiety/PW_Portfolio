# Milestone 3 — Brand Layer

Completed 2026-09-26 on `feat/brand-layer`. Inspected branch, status, the entire existing diff, and the rendered homepage before editing. Preserved the existing palette work, Peek/Wink components and assets, project cards, placeholder policy, and section order. No commit, merge, push, or Motion work.

## Delivered

- Local Eudoxus via `next/font/local`, exposed through `--font-eudoxus` and the existing `--font-body` token. Native HTML identity in ExtraBold; actual Medium replaces unavailable 600 weights in core UI. Refined Hero grid proportions and approved positioning.
- Two capability layers: existing three capability groups plus an editorial Selected Toolkit. C++ and Kotlin explicitly remain familiar; Kotlin is qualified as Android coursework.
- Five shared contact destinations, labeled Email / School / GitHub / LinkedIn / Instagram. Supporting copy is visible without hover. External links announce new-tab behavior and use `noopener noreferrer`; email links use mailto. Copy-email remains keyboard accessible.
- Footer is a restrained signature: dimeees., © 2026, Yogyakarta, Indonesia, and the approved microcopy. No repeated contact/social links.
- Contact page and content-needed documentation no longer claim the verified contact information or font is missing.

## Files changed in this continuation

- `src/app/layout.tsx`: local font configuration.
- `src/app/page.tsx`: positioning and capability/toolkit content.
- `src/app/contact/page.tsx`: verified contact guidance.
- `src/components/contact-links.tsx`: shared labeled actions.
- `src/components/site-shell.tsx`: signature footer.
- `src/content/profile.ts`: verified destinations and academic-email schema field.
- `src/styles/design-tokens.css`: font token documentation.
- `src/styles/globals.css`: font weights, responsive toolkit, contact typography, Hero columns, footer layout.
- `scripts/validate-content.ts`: accurate remaining-content message.
- `docs/CONTENT-NEEDED.md`, `docs/QA-REPORT.md`, this report.
- `licenses/EudoxusSans-OFL.txt`, `licenses/README.md`.
- `docs/qa-brand-layer/`: desktop, mobile, Capabilities, Contact, and contact-focus PNG captures.

Previously uncommitted work retained: `src/components/mascot.tsx`, `scripts/prepare-brand-assets.mjs`, the two public mascot derivatives, supplied font files, and valid changes to the shared pages/styles. Next.js generated root `AGENTS.md` and `CLAUDE.md` while running development; these were left intact. `next-env.d.ts` is managed by Next.js and changes between development/build type-generation paths.

## Supplied fonts

All files remain unmodified in `src/fonts/`; none downloaded or converted.

| Filename | Weight | Integration |
| --- | --- | --- |
| EudoxusSans-Light-BF659b6cb2036b5.ttf | 300 | Registered; available for intentional light typography |
| EudoxusSans-Regular-BF659b6cb1d4714.ttf | 400 | Body |
| EudoxusSans-Medium-BF659b6cb1c14cb.ttf | 500 | Navigation, buttons, contact actions, labels |
| EudoxusSans-Bold-BF659b6cb1408e5.ttf | 700 | Headings and emphasis |
| EudoxusSans-ExtraBold-BF659b6cb1b96c9.ttf | 800 | Identity / wordmark |
| EudoxusSans-ExtraLight-BF659b6cb1e7092.ttf | 200 | Detected and retained, not loaded |

The embedded OFL 1.1 notice and copyright attribution were inspected. The original attribution is preserved with the official license text in `licenses/`. Light is registered without forcing it into a hierarchy that already reads well at Regular.

## Production assets and contact source

No new images were copied into `public/` during this continuation. Preserved the existing lossless derivatives:

- `public/mascot/actions/dimeees-action-peek.webp`: 301 × 309, alpha retained.
- `public/mascot/expressions/dimeees-expression-wink.webp`: 415 × 406, alpha retained.

PNG masters remain in `assets-source/`. No Hero artwork or additional decorations were generated.

All five verified destinations are stored once in `src/content/profile.ts`; the shared ContactLinks component serves both the homepage and Contact page.

## Verification

| Check | Result |
| --- | --- |
| `npm run lint` | PASS, zero warnings/errors |
| `npm run typecheck` | PASS |
| `npm test` | PASS, 8 content tests |
| `npm run build` | PASS, optimized production build with local preview flag enabled |
| Content validation (build prerequisite) | PASS, 3 explicit drafts, 0 published projects |
| Existing HTTP smoke script against production server | PASS: core/project routes, 404s, filters, metadata, sitemap, robots |
| Font delivery | All five generated TTF URLs return 200 with bytes matching build assets; generated CSS registers weights 300/400/500/700/800; browser computed family is Eudoxus |
| Responsive review | 320, 390, 768, 1024, 1440 CSS px; no document horizontal overflow detected |
| Visual review | Hero/project title wrapping, nav/buttons, Capabilities, Personal Context, Contact, footer reviewed; desktop/mobile full-page captures saved |
| Keyboard | Nav order and blue 3px focus outlines checked; skip link moves focus to main; contact and copy action reachable; copy action reports Email copied |
| Destinations | Both exact mailto links and all three exact HTTPS destinations verified in rendered DOM; external links have secure rel and accessible new-tab notice |
| Mascots | Transparent production files and rendered aspect ratios verified; 144 × 147.94 Peek and 80 × 78.33 Wink on desktop |
| Contrast | Blue/canvas 4.63:1; white/blue 4.88:1; muted/canvas 6.86:1; ink/canvas 16.53:1 |
| `git diff --check` | PASS |

The sandbox initially prevented Node's user-account lookup and the license download. Approved execution outside the sandbox completed both successfully. The HTTP smoke script ran through Node's native TypeScript support; its module-type warning is unrelated to application behavior.

## Remaining content and limitations

Dedicated Hero illustration, real project selection/media/facts, About narrative/education/experience, resume, production domain, favicon and Open Graph artwork are still pending. Projects remain drafts; the showcase remains explicitly labeled as a layout fixture. The Hero composition remains provisional around its honest artwork reserve. Local preview mode was intentionally retained for evaluating project layouts; the public draft-exclusion logic was unchanged and its content tests pass. External profiles were checked for exact destinations, not availability behind third-party login flows. No comprehensive screen-reader or Lighthouse audit was performed in this static brand pass.

Motion remains untouched. No unresolved Brand Layer implementation blocker was found.

## Captures

- [Desktop homepage](qa-brand-layer/desktop.png)
- [Mobile homepage](qa-brand-layer/mobile.png)
- [Capabilities](qa-brand-layer/capabilities.png)
- [Contact](qa-brand-layer/contact.png)
- [Contact focus](qa-brand-layer/contact-focus.png)
