# Systems Evolution: Networks, Business & Technology

My handwritten notes, readable anywhere. Homepage template first — content only after the owner approves the UI, design and theme. Repo name stays `handwritten-notes`; this is the site title.

## What this is now (static, Phase 1)

- Static HTML/CSS/JS only. No backend, no database, no build step.
- `index.html` — homepage template: hero, search with autocomplete (domain + page-title suggestions), domain filter, dynamic domain sections, full-page viewer.
- Domain chips: ONE horizontal bar, `flex-wrap: nowrap` + horizontal scroll, on mobile and desktop — chips never wrap into stacked rows. Topbar nav is horizontal-scroll too, for the same reason.
- `categories.json` — homepage domains, DATA-DRIVEN, not hardcoded. Core, standard domains (from the owner's screenshot): Institutions & markets, Hardware & computing, Infrastructure & operations, Systems evolution, Industrial & business networks. Each entry: `id, title, description, action, core`. Add a domain here later and it appears on the homepage automatically — vertical stacking of domains, horizontal swipe row of pages inside each domain. More domains will come as more notes come.
- `styles.css` — theme lives in `:root` variables (`--paper`, `--ink`, `--accent`, …). Re-theming = editing those variables.
- `app.js` — components (Hero / Search / Domains / Row / Viewer / Motion) rendering domains from `categories.json` and pages from `notes.json`. Sample layout cards (3 per domain) show only while `notes.json` is empty, and are labelled SAMPLE.
- Frontend, advanced but local-only: animated hero with a hand-coded SVG illustration (stacked pages, pen, floating/sparkle motion), gradient headline, scroll-reveal, staggered card entrance, hover lift, animated blobs, `prefers-reduced-motion` support. No external fonts, images, scripts or CDN code — all art and animation is in-repo, so the site stays fast, private and CDN-cacheable.
- Logo: `assets/logo-mark.svg` (mark only, also the favicon) + `assets/logo.svg` (mark + wordmark). Mark = three rising network nodes on a dark rounded square, gold rising line, arrow at the top node — networks growing into systems, business implied by the rise. Inline copy of the mark is in the header, so it renders even in a single-file preview.
- Font: Fraunces for display headings, brand and sample cards — a distinctive old-style serif with character, not a default system serif. Local file `assets/fonts/fraunces-latin.woff2` (66 KB, SIL Open Font License, `assets/fonts/OFL.txt` included); body text stays system sans for readability. No font request leaves the site at runtime.
- Framework architecture: the component split + `notes.json` contract above is deliberately framework-shaped, so a later port to Next.js (App Router, static export) + Tailwind + Framer Motion reuses the same components and data — it is a port, not a rebuild or data migration. That port is NOT built now; the static template is the Phase 1 deliverable for UI approval.
- `notes/` — original page images, kept untouched.
- `notes.json` — the data contract (v1): one entry per page: `id, title, domain, topic, date, file, caption`. `domain` must match a `categories.json` id to appear in that domain's row. Titles/captions come from the owner or from the page itself — never invented.

## How it scales without a rebuild

- **Horizontal (more pages, more readers):** pages are stateless files, served by any static host / CDN. No server to scale. When the index gets large, split it: `notes/<collection>.json`, same schema, one manifest per collection, loaded on demand. Images get responsive sizes + lazy loading (already in the template).
- **Vertical (bigger pages, richer reading):** the same static shell can carry larger images, a client-side search index, and reading controls — no architecture change, just assets and the index.
- **Adaptable:** theme, layout and topics are data/variables, not hardcoded pages. A new topic is a new `topic` value; a new theme is a new `:root` block.
- **Integrable later:** `notes.json` is the integration point. A search index, sign-in, an API, or a CMS can read/write that same contract later, behind an adapter — none of that is built now, and no backend is assumed.

## Status

- Repo: AravindMutthe/handwritten-notes (private, template only)
- Content: none yet — awaiting UI/design/theme approval, then the owner sends raw notes batch by batch.
- Deploy: nothing deployed. A preview/production link needs the owner's separate tap.
