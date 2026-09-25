# dimeees — Foundation + Grayscale UX

Application workspace: `E:\UGM - TRPL\PortofolioW2026`.

Read [docs/AGENTS.md](docs/AGENTS.md), [the PRD](docs/PRD-dimeees-v1.0.md), and [implementation notes](docs/IMPLEMENTATION.md) before changing the UI. Owner-approved implementation adjustments are recorded in the implementation notes and take precedence over the starter examples.

```sh
npm install
npm run dev
```

Open http://localhost:3000. The local `.env.local` enables an explicitly labeled, noindexed draft preview. It contains no credentials. `.env.example` documents the settings for another checkout.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

`build` runs content validation before Next.js. The production build is not a publication-readiness sign-off: all current records are drafts. See the implementation notes before deployment. No deployment is included in these milestones.

Only Foundation and Grayscale UX are implemented. Brand styling, Eudoxus font files, artwork, and motion remain pending owner approval or supplied content.
