# Foundation and grayscale implementation

## Approved scope and source materials

This application lives only in `E:\UGM - TRPL\PortofolioW2026`.
The source pack was read from `E:\UGM - TRPL\dimeees_portfolio_starter_v0.1\dimeees_portfolio_starter` and is not an application directory. The alternate path with nested underscore-prefixed folders in the prompt does not exist.

Owner adjustments: specifications live in docs; raw sheets and visual masters in assets-source; Zod validates metadata and publication readiness; Work uses search parameters; contact access is shared by Home, footer, and Contact; the hero reserves art space; the approved system fallback is used until licensed Eudoxus files arrive. No decorative brand layer, GSAP, horizontal scrolling, or complex motion is included.

Original specifications, token sheet, asset README, and MDX example are preserved under docs. The example's dates, roles, tools, and categories are sample content, never imported as project facts.

## Routes and server/client boundaries

- `/`: identity, selected work, capabilities, personal context, contact.
- `/work?category=...`: server-rendered archive with native anchor filtering. A single selected category is shareable; reload/back/forward require no custom state. Unknown filters visibly fall back to All; repeated parameters use the first value.
- `/work/[slug]`: showcase or case-study layout plus local MDX. Missing/unpublished slugs return 404 outside review mode.
- `/about`: verified name and positioning; explicit narrative, education, experience, tools, and resume TODOs.
- `/contact`: direct email/profile slots and clipboard control once a real email is supplied.
- `not-found`, `/sitemap.xml`, `/robots.txt`: navigation and indexing foundations.

Server components own pages, content queries, metadata, cards, galleries, filters, and footer. Only SiteNav (active route indication) and CopyEmailButton (clipboard/status) require client components. No client-side content registry, global state store, animation dependency, CMS, database, or API server.

## Content editing

1. Add verified metadata to `src/content/projects/records.ts`.
2. Add a matching `<slug>.mdx` body alongside the existing bodies.
3. Register the literal import in `bodies.ts`.
4. Store optimized media under `public/projects/<slug>/` and supply actual dimensions, alt text, video posters, and captions for speech.
5. Keep publication as `draft`, unknown values as `null`, and record missing fields in `todos`.
6. Set `contentReviewed` only after owner review. Resolve TODOs and fixture status before publication.
7. Run `npm run validate:content` and `npm test`.

Project TypeScript types are inferred from Zod. The schema validates metadata at repository runtime and the build script validates the collection, unique slugs, MDX registry/body existence, local media files, and publication readiness. Published narratives cannot retain TODO/ContentPlaceholder markup. This validates completeness, not the truth of a claim; owner verification remains necessary.

The ORCA and RAG entries contain candidate names supplied by the owner. Their browsing categories are provisional. The showcase is explicitly a layout fixture with demonstration taxonomy, not a portfolio project. No dates, stacks, metrics, role claims, or external URLs are supplied.

`taxonomy.ts` is the shared category/filter registry. Visual groups Photography, Motion, Design, and UI/UX. Adding a category updates the schema and archive automatically. There is no creative/engineering quota in code.

## Preview and public builds

`PORTFOLIO_PREVIEW=true` includes draft entries, labels the preview, and prevents indexing. Development also includes drafts. This is a local UX review convenience, not an authenticated preview system; never enable it on a public production deployment.

Preview mode is evaluated during build for static pages. Changing the runtime variable alone is insufficient: rebuild after changing it. A build made with preview enabled contains review pages.

For a public build, explicitly set `PORTFOLIO_PREVIEW=false` before `npm run build` and before `npm start`. Set `SITE_URL` to the verified canonical origin at build time. Shell variables override `.env.local`.

PowerShell example:

```powershell
$env:PORTFOLIO_PREVIEW = 'false'
npm run build
npm start
```

With no verified domain, robots disallows indexing, metadata is noindex, and sitemap is empty. When a real domain is configured and preview is off, sitemap includes core pages and published projects only. Filtered archives are noindex with the archive canonical. No artificial publication/modified dates or fake OG image URLs are generated.

## Visual and accessibility foundations

- Original palette and shape values remain as unused primitives. Semantic UI tokens are grayscale.
- Arial/Helvetica/system sans is an explicitly temporary fallback. No Eudoxus files are downloaded, substituted, or claimed to be loaded.
- Hero composition reserves a neutral responsive block; mascot assets are not upscaled or shipped.
- Selected work is a semantic static ordered list, with a stable section ID and enhancement hook for the later motion milestone.
- Mobile stacks hero, project cards, case study contents, and footer. Filters and navigation wrap; controls are at least 44px high.
- Skip link, main landmark, H1 ownership, visible focus, native anchors, meaningful media alt, video controls/captions, and reduced-motion CSS are included.
- ContactLinks is reused on Home, Contact, and footer. Null contact values render labels rather than fake or broken links.
- Source sheets, PNG masters, and doodles stay in assets-source. public currently contains no visual production assets.

## Deferred work

Owner approval is required before the brand or motion milestones. Eudoxus integration, final copy/artwork/colors, mascot/doodle composition, horizontal selected work, motion, analytics, final social preview, performance tuning with real media, and deployment are deferred. No artificial loading delay is included for local static content.
