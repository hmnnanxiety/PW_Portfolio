# dimeees Brand Pack v0.2

This pack freezes the current visual direction before the Hero implementation pass.

## Locked direction

- Primary typeface: **Eudoxus Sans**.
- Hero composition should follow the **Logo Lockup** shown in the center-left panel of `brand/references/dimeees-identity-board-v1.png`.
- The large `dimeees` wordmark should remain **real HTML text** in production, not a raster logo image.
- The standalone wordmark shown in the lower-left panel of the identity board is the typography/accent reference.
- The illustrated head and the wordmark should be composed as one expressive Hero identity, while remaining technically separate assets.
- Blue is the main brand accent; yellow and orange are supporting punctuation.
- Existing Peek and Wink mascot placements remain approved.

## Important asset status

`brand/hero/dimeees-hero-head-flat-candidate.png` and `dimeees-hero-head-alt-candidate.png` are **candidate standalone heads**, not a locked final master. The identity board remains the authoritative visual reference for facial simplification, hair silhouette, glasses, and overall tone.

Do not bake the final `dimeees` text into the hero raster. Build the wordmark using Eudoxus Sans in HTML/CSS and layer SVG accents around it.

## Production intent

Use this pack as source/reference material. Copy only assets that are actually used into the website's `public/` directory. Keep source/reference artwork outside the production bundle.
