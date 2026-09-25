# Milestones 1 and 2 — verification report

## Delivered

Foundation and grayscale UX implemented in E:\UGM - TRPL\PortofolioW2026.
Git initialized on codex/foundation-grayscale. No commits, remote, or deployment created.
Brand and motion milestones are not started.

## Final checks

| Check | Result |
| --- | --- |
| npm run lint | PASS; zero warnings/errors |
| npm run typecheck | PASS; Next route type generation and tsc --noEmit |
| npm test | PASS; 8 tests |
| npm run validate:content | PASS; 3 explicit drafts, 0 published projects |
| npm run build, preview enabled | PASS; core pages and 3 local review project routes |
| npm run build, PORTFOLIO_PREVIEW=false | PASS; no draft routes prerendered |
| HTTP smoke checks, preview build | PASS; all core routes, both detail layouts, 404s, metadata, filtering, sitemap, robots |
| HTTP smoke checks, public build | PASS; all three draft URLs return 404; archive/home/sitemap exclude drafts |
| npm install audit | 0 reported vulnerabilities |

Final production build artifacts were built with PORTFOLIO_PREVIEW=false. Local development review uses the ignored .env.local with preview enabled. Always rebuild when changing the preview flag.

Repeat HTTP checks with a running server and no SITE_URL configured:

```sh
npm run test:http -- http://127.0.0.1:3000 preview
npm run test:http -- http://127.0.0.1:3001 public
```

## Browser verification

- Home, Work, ORCA case study, showcase fixture, About, and Contact: no horizontal overflow at 320, 768, and 1440 CSS pixels; one H1 per page.
- Visual review of the desktop Home and Work views and 390px mobile Home.
- Work Software filter selects ORCA; Motion produces a useful empty state. Back navigation and reload retain the Software selection.
- Case-study contents have no missing anchor targets.
- Keyboard Tab reaches the visibly focused skip link; Enter transfers focus to main.
- Archive project headings follow H1 with H2; Home cards use H3 beneath Selected Work H2.
- Browser console inspection reported no warnings/errors during the review.
- No runtime motion exists in these milestones. Reduced-motion CSS disables future nonessential animations/transitions by default; OS-setting emulation was not performed.

## Remaining dependency notices

- npm reported eslint@9.39.5 as deprecated/unsupported. It remains the compatible version for the installed eslint-plugin-react and eslint-plugin-jsx-a11y peer ranges, which do not include ESLint 10. Lint passes. Upgrade when the Next/React lint dependency chain supports ESLint 10.
- npm reported install scripts not covered by allowScripts for esbuild@0.28.2 and unrs-resolver@1.12.2. No additional install-script permissions were granted. The installed toolchain successfully ran lint, tests, type checking, and builds.
- npm displayed an informational available-major-update notice. The global npm installation was not changed.

## Issues encountered and resolved

- PostCSS anonymous default-export lint warning: replaced with a named configuration binding.
- MDX ambient module types missing in TypeScript: explicitly included mdx types in tsconfig.
- New HTTP test used a dotAll regular expression unsupported by the ES2017 target: replaced with a compatible character class.
- Tailwind built-in container utility overrode narrow-screen gutters: renamed the application class to page-container and rechecked all responsive layouts.
- Archive cards skipped H2: added contextual heading levels.
- Homepage metadata omitted the brand in its title: set an explicit formal-name/brand title.
- A PowerShell helper variable collided with the reserved HOME variable: renamed it and completed the interrupted edit.
- One browser navigation timed out during a batch: recovered the existing tab and completed the desktop checks.
- The alternate nested-underscore source path in the prompt was absent: used the explicitly supplied existing starter path. Original PRD and AGENTS copies were checked by SHA256 and match their sources.

## Limitations and pending content

No real project media, email, social URLs, resume, or licensed font files were supplied. Contact controls are wired to verified profile data but actual outbound email/social/copy actions cannot be tested until those fields are populated. No invented values were inserted.

No Lighthouse/Core Web Vitals measurement, full assistive-technology audit, OS-level reduced-motion test, analytics, or deployment is claimed. Performance and media QA need representative production content in the later polish milestone. Metadata/sitemap/robots foundations intentionally prevent indexing while the canonical domain is unknown.

See CONTENT-NEEDED.md for the owner handoff and IMPLEMENTATION.md for content editing and publication behavior.

## Local preview handoff

A development server for this same application was already running on port 3000. An attempted duplicate launch reported that existing server; it was left intact and reused. Its homepage returned HTTP 200 and the grayscale draft banner, and the browser was reopened there. A process-inventory read was denied by the sandbox; no process termination or permission change was needed.
