# PRD v1.0 — dimeees Personal Portfolio

**Product:** `dimeees` Personal Portfolio & Creative Playground  
**Owner:** Dimas Satria Widjatmiko  
**Status:** Final baseline for design + development  
**Primary platform:** Responsive web  
**Primary stack:** Next.js + TypeScript  
**Deployment target:** Vercel

---

## 1. Executive summary

`dimeees` is a personal portfolio that presents one person working across two connected worlds: **multimedia / visual work** and **software engineering**. The site must feel like entering Dimas's own world: busy, playful, weird, nerdy, experimental, and full of substance — but still easy for recruiters, collaborators, and potential clients to scan.

The product is not a digital CV, a Behance clone, or a generic "developer portfolio". It is a **personal brand system expressed as a website**.

### North-star statement

> A place that feels crowded with personality, but where everything has a reason to exist.

### Positioning

**dimeees = a creative technologist who moves between visuals, software, interfaces, AI, and multimedia.**

This positioning is intentionally broad enough to grow with future software and AI projects without erasing the current strength of Dimas's multimedia portfolio.

---

## 2. Product goals

The website must:

1. Showcase meaningful projects Dimas has contributed to.
2. Present multimedia work and software work in one coherent identity.
3. Make Dimas easy to understand for people who may want to hire or collaborate with him.
4. Provide a fast, accessible resume-like overview without feeling like a resume website.
5. Establish `dimeees` as a memorable personal brand.
6. Create room for future growth in frontend, backend, AI/ML, RAG, robotics, and experiments.

### Current content emphasis

The initial portfolio should reflect the actual body of work rather than pretending the software portfolio is larger than it is.

- **~60–70% multimedia / creative work**
- **~30% software / engineering work**
- The architecture must allow the engineering ratio to increase naturally over time.

---

## 3. Non-goals

The first release is **not** intended to be:

- a corporate portfolio,
- a startup landing page,
- a dark cyberpunk terminal portfolio,
- a heavy WebGL experiment,
- a CMS product,
- a blog platform,
- a full social network/profile hub,
- a 3D showcase,
- a site filled with generated decorative UI for the sake of looking "AI-made".

---

## 4. Target audience

### Primary audience

#### Recruiters / hiring managers
They should be able to understand within 30–60 seconds:

- who Dimas is,
- what areas he works in,
- which projects best represent him,
- what role he played,
- how to contact him,
- where to download or view his resume.

#### Potential collaborators / clients
They should be able to see visual quality, technical capability, project context, and contact options quickly.

### Secondary audience

- engineers,
- designers,
- multimedia creators,
- student organizations,
- creative communities,
- people arriving from GitHub, Instagram, LinkedIn, or shared project links.

---

## 5. Brand system

### Primary brand name

# `dimeees`

Pronounced approximately as **"dimes"**. The extended `eee` is part of the stage-name identity.

### Formal identity

**Dimas Satria Widjatmiko** remains visible where formal identity matters:

- About page,
- resume/CV,
- page metadata,
- SEO,
- professional project descriptions.

### Brand personality

- nerdy
- experimental
- weird
- moody
- sarcastic
- serious when needed

### Core brand tension

The site should balance:

- **playful × professional**
- **visual × technical**
- **chaotic × structured**
- **personal × credible**

### Internal art-direction principle

## Organized Chaos

The site may be visually busy, but every visual element must serve at least one purpose:

- identity,
- hierarchy,
- navigation,
- storytelling,
- feedback,
- context.

Decorative elements without a purpose should be removed.

---

## 6. Visual identity

### Core palette

| Token | Value | Role |
|---|---:|---|
| Ink | `#1A1A1A` | Primary text, outlines, high-contrast UI |
| Dimeees Blue | `#2563FF` | Primary brand color |
| Spark Yellow | `#FFC629` | Accent / energetic highlight |
| Weird Orange | `#FF7A00` | Secondary accent / warm contrast |
| Canvas | `#FAF9F6` | Main background |
| Paper | `#FFFFFF` | Surfaces where necessary |

### Typography

**Primary typeface: Eudoxus Sans**

Eudoxus Sans is the professional anchor of the visual system. The site should not use a playful display font for core interface or editorial content.

Recommended usage:

- Hero / display: Eudoxus Sans Bold / ExtraBold
- Section headings: Bold
- Project titles: Bold / Medium depending on size
- Body: Regular / Medium
- Metadata / UI: Medium / SemiBold

#### Typography rule

> Typography stays serious; everything around it is allowed to misbehave.

Decorative handwritten text may appear rarely inside illustrations/doodles, but it must not replace the main typographic system.

### Font implementation note

Use properly licensed Eudoxus Sans files supplied by the project owner and self-host with `next/font/local` when available. Until the real files are added, use a system sans fallback without attempting to fabricate or redistribute the font.

---

## 7. Mascot + illustration system

The flat illustrated version of Dimas is a core brand asset, not a one-off hero image.

### Recognizable visual traits

- curly / wavy dark hair,
- round glasses,
- simplified face,
- black + blue clothing in most reusable assets,
- blue/yellow/orange reaction marks.

### Asset tiers

#### Tier A — Expressions
Small head-only assets for:

- hover reactions,
- empty states,
- 404,
- tooltips / playful callouts,
- avatar/profile moments,
- footer easter eggs.

#### Tier B — Small actions
Half-body / situational illustrations for:

- coding,
- photography,
- reading,
- greeting,
- celebrating,
- resting,
- section transitions.

#### Tier C — Large hero illustration
A larger dedicated composition may be created later for the final hero once layout is locked.

### Asset format rule

- Detailed mascot: **transparent PNG master**, WebP/AVIF derivative for production.
- Doodles and simple geometric graphics: **SVG**.
- Do not auto-trace mascot PNGs into bloated SVG paths for production.

---

## 8. Content pillars

### Creative / multimedia

Initial content can include:

- photography,
- motion graphics,
- editing,
- event visuals,
- graphic design,
- social/editorial design,
- UI/UX work.

### Software / engineering

Initial and emerging content can include:

- frontend projects,
- UI implementation,
- software engineering projects,
- ORCA robotics contributions,
- RAG chatbot work,
- AI / data / scraping experiments,
- future backend work.

### Content truthfulness rule

Do not inflate unfinished or small projects into fake flagship case studies. Small but real projects can be shown honestly as experiments or compact showcases.

---

## 9. Information architecture

### Primary routes

```txt
/
/work
/work/[slug]
/about
/contact
```

Optional future routes:

```txt
/playground
/notes
```

### Global navigation

- Home
- Work
- About
- Contact

Do **not** split global navigation into separate "Design / Photography / Code / AI" top-level pages. Those are filters/tags inside Work.

---

## 10. Homepage product requirements

Homepage is the primary guided experience.

### Section 1 — Hero

**Goal:** communicate brand identity within one viewport.

Required elements:

- dominant `dimeees` wordmark/name,
- short positioning statement,
- primary mascot/illustration,
- clear path into selected work,
- optional secondary About link.

Copy should be concise, confident, slightly playful, and not corporate.

Possible direction only; final copy is not locked:

> I make things with pixels, code, and questionable amounts of curiosity.

### Section 2 — Selected work / signature showcase

Working section title:

> `things i've made.`

Requirements:

- visually strong project cards,
- project-first, not category-first,
- vertical scrolling may drive horizontal card movement,
- no full scroll hijacking,
- progress must remain understandable,
- mobile fallback becomes swipeable or stacked content,
- project title and basic metadata remain available without hover.

### Section 3 — Split identity / what I do

A compact section may show the creative × engineering intersection.

Possible clusters:

- Visual / Multimedia
- Software / Frontend
- AI / Experiments

This section should explain range without becoming a skill-icon wall.

### Section 4 — About teaser

Short personal intro with a situational avatar and CTA to About.

### Section 5 — Contact / footer

Working message:

> `let's make something weird.`

Required links:

- email,
- GitHub,
- LinkedIn,
- Instagram.

Optional:

- copy-email action,
- resume link,
- tiny mascot interaction.

---

## 11. Work archive requirements

Route: `/work`

### Purpose

Provide a complete, scannable archive beyond the curated homepage selection.

### Filtering

Initial filter groups:

- All
- Visual
- Photography
- Motion
- Design
- UI/UX
- Frontend
- Software
- AI/ML

The implementation must use tags/categories from project data rather than hardcoded page logic.

### Card information

Every project card must support:

- title,
- year,
- category/tag,
- role,
- thumbnail/cover,
- optional project status.

---

## 12. Project detail system

Two project formats are required.

### A. Showcase

For visual work, small projects, or collections.

Suggested structure:

1. hero/cover,
2. title + metadata,
3. short description,
4. gallery / video / motion,
5. role and tools,
6. next project.

### B. Case study

For flagship technical or multidisciplinary projects.

Suggested structure:

1. Overview
2. Context / problem
3. My role
4. Process
5. Tools / stack
6. What I contributed
7. Challenges
8. Solution / implementation
9. Result
10. Visual / technical gallery
11. Reflection / lessons
12. Links: demo / GitHub when appropriate

### Initial technical flagship candidate

**ORCA autonomous robot work** is suitable for deeper treatment because it represents sustained engineering contribution and technical leadership.

### Emerging technical candidate

**RAG chatbot project** can begin as an ongoing project entry and evolve into a case study when the system and contribution are mature enough.

---

## 13. About page

### Goal

Give recruiters and collaborators a clear human + professional summary without reading a traditional cover letter.

Suggested opening title:

> `who the hell is dimeees?`

This playful heading may be followed immediately by professional copy.

### Required content

- Dimas Satria Widjatmiko
- concise personal narrative
- creative × engineering positioning
- education summary
- selected experience timeline
- resume/CV link
- selected tools / capabilities only where useful

### Optional personality modules

- currently listening to
- favorite music / playlist link
- current learning
- small personal notes

Music must never autoplay.

---

## 14. Contact page

Keep the interaction simple.

### MVP

- email mailto link
- copy-email button
- GitHub
- LinkedIn
- Instagram

A contact form is optional and not required for v1.

---

## 15. Motion + interaction system

Target personality: **8/10 experimental**.

### Allowed

- scroll reveals,
- horizontal work showcase,
- card translation / scale,
- text masking,
- mascot reaction swaps,
- light parallax,
- doodle entrance/exit,
- meaningful page transition,
- subtle image motion.

### Avoid

- continuous decorative loops everywhere,
- excessive cursor gimmicks,
- full-page scroll hijacking,
- fake loading sequences,
- heavy particle effects,
- default portfolio parallax on every section,
- unnecessary 3D/WebGL.

### Accessibility requirement

Every non-essential motion must respect `prefers-reduced-motion`.

---

## 16. Responsive behavior

### Desktop

May use:

- asymmetric composition,
- horizontal storytelling,
- more doodles,
- hover reactions,
- larger mascot assets,
- bolder typography scale.

### Mobile

Must prioritize:

- readable vertical flow,
- touch-friendly project browsing,
- fewer simultaneous decorative assets,
- no hover dependency,
- lower animation cost,
- stable typography and spacing.

Mobile is a separate composition mode, not a shrunk desktop canvas.

---

## 17. Accessibility requirements

Minimum v1 requirements:

- semantic HTML,
- logical heading hierarchy,
- keyboard accessible navigation,
- visible focus indicators,
- adequate text contrast,
- meaningful alt text for content imagery,
- decorative illustrations marked appropriately,
- no critical information hidden behind hover,
- reduced-motion support,
- useful page content even if advanced animation fails.

---

## 18. Performance requirements

The site is media-heavy, so performance is a product requirement.

Targets:

- strong Core Web Vitals,
- no major cumulative layout shift,
- optimized responsive images,
- below-the-fold media lazy-loaded,
- video uses poster frames,
- do not preload full galleries,
- do not preload all mascot expressions,
- minimize client-side JavaScript where possible.

Suggested quality target:

- Lighthouse Performance: **90+ desktop** where realistic for the final media mix.

---

## 19. SEO + sharing

Required:

- title and description metadata per page,
- canonical URLs,
- Open Graph metadata,
- custom social preview image,
- sitemap,
- robots configuration,
- project metadata where relevant.

Suggested homepage title direction:

> Dimas Satria Widjatmiko (dimeees) — Creative Technologist

The exact professional descriptor may evolve as Dimas's engineering portfolio grows.

---

## 20. Technical architecture

### Recommended stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion / Framer Motion for most interactions
- MDX or structured local content for project pages
- Vercel deployment

### Animation escalation rule

Use:

1. CSS first,
2. Motion second,
3. GSAP only when a specific complex scroll interaction justifies it.

### Component philosophy

Use headless primitives when useful, but keep the visual layer custom. Brand-facing surfaces must not inherit a generic component-library aesthetic.

### Server/client rule

Prefer server components. Add client components only where actual interaction requires them.

---

## 21. Content model

Suggested project schema:

```ts
export type Project = {
  slug: string;
  title: string;
  year: number;
  summary: string;
  type: "showcase" | "case-study";
  categories: string[];
  tags: string[];
  role: string[];
  tools?: string[];
  cover: string;
  featured: boolean;
  status?: "completed" | "ongoing" | "archived";
  links?: {
    live?: string;
    github?: string;
    external?: string;
  };
};
```

Suggested content location:

```txt
content/
  projects/
    project-name.mdx
```

---

## 22. Asset architecture

Suggested repository structure:

```txt
public/
  brand/
    logo/
    doodles/
  mascot/
    expressions/
    actions/
    hero/
  projects/
    project-slug/
      cover.webp
      gallery-01.webp
      gallery-02.webp
      poster.webp
```

### Asset production rule

Keep source/master assets separate from web derivatives.

Example:

```txt
assets-source/
  mascot-master.png
  photography-originals/

public/
  mascot/
  projects/
```

---

## 23. AI-slop guardrails

These rules are mandatory for AI-assisted design/development.

### Never add by default

- purple-to-blue gradient backgrounds,
- glassmorphism cards,
- random glowing borders,
- generic bento grids purely because they are trendy,
- floating tech-logo clouds,
- fake terminal windows as personality,
- meaningless neural-network graphics,
- generic "AI sparkles" everywhere,
- stock-like generated project images,
- huge lists of skill badges,
- multiple competing typefaces,
- decorative sections with no content purpose.

### Asset rule

If a required visual asset does not exist, the coding agent must:

1. use a simple neutral placeholder,
2. mark it with a TODO,
3. continue layout implementation,
4. never invent a replacement visual and treat it as final.

### UI review question

Before accepting a section:

> If the logo and text were removed, would this still look like a random AI portfolio template?

If yes, the section needs another pass.

---

## 24. Analytics

MVP analytics should remain lightweight.

Useful events:

- project card opened,
- project external link clicked,
- resume clicked,
- email copied/clicked,
- social links clicked.

Avoid invasive tracking.

---

## 25. MVP scope

### Must ship

- brand visual foundation,
- Eudoxus Sans integration once licensed files are available,
- responsive navigation,
- hero,
- mascot usage,
- selected work interaction,
- work archive,
- showcase project template,
- case-study project template,
- About,
- Contact,
- resume link,
- social links,
- responsive states,
- reduced-motion behavior,
- metadata/SEO,
- optimized media pipeline,
- basic analytics.

### Later / v1.5+

- playlist integration,
- blog/notes,
- playground,
- CMS,
- advanced mascot state machine,
- elaborate custom cursor,
- complex page transitions,
- additional easter eggs,
- dark mode if it later fits the brand.

---

## 26. Development milestones

### Phase 0 — Content inventory

- list all candidate projects,
- classify showcase vs case study,
- gather covers/media,
- identify missing text and visuals.

### Phase 1 — Foundation

- Next.js setup,
- global layout,
- Eudoxus placeholder/final integration,
- tokens,
- content schema,
- routing,
- asset folders.

### Phase 2 — UX skeleton

Build in grayscale first:

- navbar,
- hero structure,
- selected work flow,
- archive,
- project detail templates,
- About,
- Contact.

No decorative polish until information architecture works.

### Phase 3 — Brand pass

Add:

- final palette,
- mascot,
- doodles,
- composition asymmetry,
- branded card behavior,
- final copy tone.

### Phase 4 — Motion

Add interaction one system at a time:

- reveal system,
- selected-work horizontal behavior,
- hover/reaction states,
- page transitions if justified.

### Phase 5 — QA + ship

- responsive QA,
- keyboard QA,
- reduced motion,
- performance,
- media optimization,
- metadata,
- analytics,
- Vercel production deploy.

---

## 27. Acceptance criteria

The first production release is ready when:

1. A new visitor understands the creative + software identity in under one minute.
2. At least one visual flagship and one technical project can be opened from the homepage.
3. Work archive filters function correctly.
4. Project pages clearly state role/contribution.
5. Contact information is reachable within one interaction from primary navigation/footer.
6. Mobile works without hover-based dependencies.
7. Reduced-motion mode remains usable and visually coherent.
8. Missing assets are placeholders/TODOs, not AI-invented final visuals.
9. The site does not visually resemble a stock developer-portfolio template.
10. The site can grow with future AI/backend/software projects without changing its core architecture.

---

## 28. Definition of success

A recruiter or collaborator should leave with these answers:

- **Who is this?** Dimas / dimeees.
- **What does he make?** Visual/multimedia work and software/technical projects.
- **What is he strongest at today?** A broad creative/multimedia body of work with a growing engineering portfolio.
- **Can I inspect the work?** Yes, through selected projects and hybrid case studies.
- **Can I work with him?** Yes, contact and professional links are obvious.

The final emotional goal is simpler:

> **"I remember this person's website."**

