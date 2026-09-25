# AGENTS.md — dimeees portfolio

This repository is a personal portfolio, not a generic developer landing page. Read `PRD-dimeees-v1.0.md` before implementing UI.

## Non-negotiable design rules

1. Eudoxus Sans is the primary site typeface. Typography is the professional anchor.
2. The visual system is "organized chaos": playful composition with strict information hierarchy.
3. Primary palette: Ink `#1A1A1A`, Dimeees Blue `#2563FF`, Spark Yellow `#FFC629`, Weird Orange `#FF7A00`, Canvas `#FAF9F6`.
4. Do not invent new visual assets when an asset is missing. Use a neutral placeholder and add a TODO.
5. Do not introduce generic AI-portfolio tropes: glassmorphism cards, purple/blue gradient blobs, excessive glowing borders, random grid backgrounds, fake code terminals, floating tech-logo clouds, or meaningless "AI" visuals.
6. Avoid shadcn-style visual defaults for brand-facing surfaces. Headless primitives are fine; the final visual layer should be custom.
7. Animation must clarify navigation, reveal content, or add personality. No continuous motion for decoration alone.
8. Respect `prefers-reduced-motion`.
9. Mobile is a first-class layout, not a scaled desktop version.
10. Project content is more important than effects. Never hide project titles, roles, dates, or CTA behind hover-only interactions.

## Technical preferences

- Next.js App Router + TypeScript.
- Tailwind CSS is acceptable for styling.
- Motion/Framer Motion for most interactions; add GSAP only for interactions that cannot be expressed cleanly otherwise.
- Keep content in MDX/data files for MVP; no CMS until project volume justifies it.
- Prefer server components by default and client components only where interactivity requires them.
- Optimize media aggressively; this portfolio is image/video heavy.

## Before adding a component

Ask:
- Does this component communicate content or brand personality?
- Is the same information already present elsewhere?
- Is there a simpler implementation?
- Does it still work without hover and with reduced motion?
- Does it look like `dimeees`, or like a template?

If the last answer is "template", redesign it.
