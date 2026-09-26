# Interaction Layer

Validated 2026-09-27 on `codex/interaction-layer`, based on Hero commit `0a1ff07` with the existing uncommitted static-polish pass preserved. No commit, merge, rebase, push, or change to `main` was performed.

## Implementation

- **FirstVisitIntro:** existing two-state, 1.6-second mascot introduction. Session storage with an in-memory fallback prevents repeated internal-navigation playback. The page renders normally underneath; the decorative overlay has no pointer handling or focusable content and dismisses on keyboard, pointer, focus, or scroll intent.
- **FloatingComment:** preserves the current cursor → name badge → blue typed bubble → departure sequence, messages, and timing (900ms movement, 42ms per character, 300ms settling, 1900ms hold, 260ms departure). One instance; random selection among six explicit presets, never arbitrary coordinates. This current version is decorative and pointer-transparent, not a clickable chat control.
- **RevealOnce / Mascot:** the existing Peek rises 7px once when observed; the Wink briefly reacts to Contact heading/list hover or focus. The Hero head stays calm. The existing smile accent has its sparse reveal.
- **Contact / project cards:** existing CSS hover and focus responses retained. Labels and secondary copy remain understandable; fine-pointer media movement stays small, with stable touch cards and visible keyboard focus.
- **CopyEmailButton:** retains `copied. behave.` for 2.6 seconds and a polite `Email copied.` status announcement. Reserved label width avoids a success-state layout shift. Clipboard failure leaves a clear fallback message; stale async completions are ignored.
- **useReducedMotion:** shared media-query subscription with a quiet server snapshot. Pages, content, project cards, and contact-link lists remain Server Components; no dependencies or assets were added.

## Finalization fixes

The incoming cursor/typing revision contained a lint error and conflicting old positioning rules. Finalization removed synchronous reduced-motion state updates, removed the stale bottom offsets/centering, constrained the typing footprint, and adjusted safe presets. Cursor/name/bubble styling and the sequence were preserved. The comment is beneath the intro and hidden from assistive technology so individual typed characters are not exposed as changing content.

Desktop presets occupy the clear space above the wordmark and to the right of the head. Tablet uses three horizontal locations in the existing Hero-to-Work gap; mobile uses two. No homepage structure or static-polish spacing was redesigned.

## Accessibility and lifecycle

- Existing native links/buttons and 3px blue focus outlines remain. The decorative comment neither intercepts taps nor adds a keyboard stop.
- Reduced motion skips the intro; renders one complete, stationary comment; stops typing/rotation/caret motion; and removes mascot/accent/card/contact animation. Focus indication remains.
- Source review confirms each phase timeout is cleared on effect replacement/unmount, copy timers are cleared and outstanding requests invalidated, media-query listeners are removed, and intersection observers disconnect after reveal or unmount. Intro event listeners and its timeout are removed on unmount.
- Absolute decorative positioning and the reserved copy label keep feedback and animation out of document flow.

## QA

| Width | Result |
| --- | --- |
| 320px | No horizontal overflow; both mobile comment locations clear the Hero content and Selected Work heading. CTA click works; Contact links have 44px minimum targets; Copy Email succeeds. |
| 768px | No horizontal overflow; all three tablet locations remain in the existing gap, clear of CTA and text. Hero composition preserved. |
| 1440px | No horizontal overflow; six preset footprints clear navigation, eyebrow, mascot, wordmark/accents, and supporting content. Hero remains dominant. |

Production preview checked at `http://127.0.0.1:3001`. Browser checks confirmed automatic comment progression, visible CTA/Contact/copy-button keyboard focus, Enter activation, successful clipboard feedback and reset, Peek observer activation, internal navigation, and no intro replay. No console errors or hydration warnings were captured in the production checks. The development preview had stalled hydration during validation; final interaction checks used the fresh production build.

Captures and the preset geometry audit are in [qa-interaction](qa-interaction/): `hero-320.png`, `hero-768.png`, `hero-1440.png`, `contact-320.png`, `copy-feedback-1440.png`, and `responsive-checks.json`.

**QA limits:** reduced-motion branches and timer/listener cleanup were verified by source review (including the stable server-rendered comment), not OS-preference emulation or runtime listener instrumentation. Mobile validation used the browser at 320px and click activation, not physical touch hardware. No field Core Web Vitals measurement was performed.

## Checks

- `npm run lint`: PASS, zero errors/warnings.
- `npm run typecheck`: PASS.
- `npm test`: PASS, all 8 existing tests.
- `npm run build`: PASS, including content validation (3 drafts, 0 published).
- `npm run test:http -- http://127.0.0.1:3001`: PASS; routes, project pages, 404s, filters, metadata, sitemap, and robots.
- `git diff --check`: PASS.

Tests/build/HTTP checks used approved execution outside the sandbox because `tsx` could not perform its Windows account lookup inside it.

## Deferred

Horizontal Selected Work scrolling, project content, additional interaction ideas/components, the optional micro-joke, new decorative assets, GSAP, and layout redesign remain outside this milestone. Existing draft-content TODOs remain untouched.
