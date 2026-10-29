# Systems Handbook — Rules

These are the standing rules for this handbook. They are requirements, not
claims that everything is already built. Each rule carries its status.
Labels (First, Third, Sixth, C, E, F, UX) are kept exactly as the owner
gave them. Items the owner has not sent yet — for example Second, Fourth,
Fifth, A, B, D — are **not** listed here and must not be invented.

## First — Reading experience comes first

- The first priority of this handbook is the reading experience.
- Design **one** excellent technical chapter page before building dozens
  of domain pages.
- Status: implemented as a design — `chapter.html` + `chapter.css`, one
  sample chapter only. No other chapter pages have been built.

## C — Technical chapter

A technical chapter page must support, all in one page:

- Clear typography — narrow measure, generous line-height, clear
  heading hierarchy (H2/H3 + table of contents).
- Annotated diagrams — local SVG, with a caption explaining what the
  diagram shows.
- Code examples — in a readable code block, labelled sample until real
  code arrives.
- Comparison tables — rows that come from a note or a cited source, or
  are labelled sample.
- Worked examples.
- References / citations — numbered, with a list at the end of the page.
- Related concepts — see also F.
- A clear connection to original notes — note ID, original image,
  transcription, editorial enhancements, privacy and review status.
- Status: implemented as a design in `chapter.html` (sample content
  only, except the domain description quoted from the owner's
  core-domain list).

## Third — Content organization

Every note needs, in `notes.json` (see `notes.schema.json`):

- A stable ID.
- A source date **when known** — `sourceDate: null` means unknown, never
  guessed.
- Domain (must match a `categories.json` id).
- Subject (distinct from topic).
- Topic.
- Chapter relationships — `chapterId, chapter, section, parentId, order`
  (domain > chapter > section > page).
- An original image reference — `originalImage` is the untouched
  original; `file` is the display copy.
- A transcription — full text from the page, searched and shown in the
  viewer.
- Editorial enhancements — each labelled by type
  (`clarification, correction, diagram, table, summary,
  transcription-fix`), never presented as original text.
- A privacy classification — `public | internal | private | restricted`.
- A review status — `draft | in-review | approved | published`, with
  `publication: {approvedBy, approvedAt}` when approval happens.
- Revisions — `revisions: [{version, date, change}]`.
- Evidence status — `unverified | needs-review | verified`.

Relationships are **separate types, never merged into one generic list**:

- `relationships.chronology` — historical, in time:
  `precedes | follows | contemporary-with`.
- `relationships.conceptual` — conceptual, in meaning:
  `depends-on | prerequisite-for | related-to | contradicts`.
- The old generic `related: [id]` still loads for backward
  compatibility; new notes should use `relationships.*` instead.

Status: schema defined and implemented in `notes.schema.json`; the
viewer and cards show subject, source date, privacy and review status
when present. No real notes exist yet to use these fields.

## E — Historical timeline

- The handbook must support a historical timeline.
- A timeline entry needs: era, date, technology change, institutional
  change, source evidence, and cross-domain relationships.
- Dates that are not known are shown as unknown, never guessed.
- Source evidence must trace to a note ID / original image, or be
  labelled as missing.
- Status: **requirement only — not built yet.** Do not describe a
  timeline as built, and do not invent eras, dates or events for it.

## F — Concept exploration

- A concept page / chapter must show:
  - Related chapters.
  - Prerequisites.
  - Dependencies.
  - Backlinks (which chapters/notes point back to this one).
- Every relationship shown must be **clearly labelled with its type**
  (for example: Prerequisite, Depends on, Related to, Contradicts,
  Precedes, Follows) — never an unlabelled list of links.
- Backlinks are derived from `relationships.*` in the other notes, not
  hand-typed separately where that would drift.
- Status: schema defined (`relationships.conceptual` + `chronology`);
  the sample chapter shows labelled relationship groups as a design.
  No real backlink index exists yet.

## UX — How the handbook must feel

- Mobile-first: base styles are for a phone; larger screens only widen.
- Keyboard-accessible: skip link first in tab order, visible focus
  outlines, every control a link or a button.
- Fast-loading: static local files only, no external fonts, images,
  scripts or CDN code; the chapter page loads local CSS plus one
  inline theme script, no app bundle.
- Searchable: search covers title, topic, domain, caption,
  transcription, chapter, section and tags; the chapter page's search
  goes to the homepage with `?q=`, which the homepage applies.
- Responsive: page width = viewport at 320 / 390 / 1200px.
- Reusable: same theme tokens, topbar, theme toggle, chips, cards,
  viewer and chapter components across pages.
- Suitable for long technical reading: 760px measure, 1.75
  line-height, contents, heading hierarchy.
- Avoid developer-facing implementation descriptions on reader pages
  (no schema names, file names or architecture talk on a chapter page).
- Avoid excessive decorative animation. The chapter page has no
  decorative animation.
- Preserve reduced-motion support: `prefers-reduced-motion` turns off
  all animation and transition in both CSS files.

## Content architecture — separate records, not interchangeable cards

- Do **not** treat all original batch images as interchangeable image
  cards. A batch image is one kind of record, not the whole content.
- Design separate records, defined in `content.schema.json`, each with
  its own stable ID and its own fields:
  - **Original source assets** — `sources[]`: the untouched original
    image, source date (null = unknown), privacy. This is the source
    of truth.
  - **Transcriptions** — `transcriptions[]`: text from one source
    (`sourceId`), versioned with revisions and a review status. A
    transcription is not the original, and is never presented as it.
  - **Chapters** — `chapters[]`: title, domain, subject, order,
    sections. A chapter renders by joining other records, not by
    embedding anonymous cards.
  - **Diagrams** — `diagrams[]`: title, caption, local SVG file, and
    `sourceIds` it was drawn from.
  - **Tables** — `tables[]`: title, caption, columns, rows, and
    `sourceIds`. Every row comes from a note or cited source, or is
    labelled sample.
  - **Historical events** — `events[]`: era, date, technology change,
    institutional change, `evidenceSourceIds`, cross-domain ids.
    See also E.
  - **Concepts** — `concepts[]`: title, definition, domain.
  - **Relationships** — `relationships[]`: `fromId, toId, type,
    relation, note`, with `type` split into `chronology` and
    `conceptual` (see Third). Backlinks are derived from these
    records, not hand-typed separately.
- A card on the homepage is a *view* of a note/source, not the record
  itself. The record lives in the schema above; the card must trace
  back to it by ID.
- Status: **design only — defined in `content.schema.json`, not
  populated.** No real sources, transcriptions, chapters, diagrams,
  tables, events or concepts exist yet, and none are invented here.

## Sixth — Preserve design flexibility

- Keep the theme tokens (`styles.css` `:root`), reusable components
  and data-driven navigation (`categories.json` for domains,
  `notes.json` for pages).
- There is **no need to migrate to Next.js immediately** merely
  because a future architecture may use it.
- The static site is the deliverable now. A later port reuses the same
  tokens, components and data — it is a port, not a rebuild or a data
  migration, and it happens only on the owner's word.

## Standing content rules (from the start of this handbook)

- Originals untouched; private material excluded.
- Titles, captions, key points and transcriptions come from the owner
  or from the page itself — never invented. Sample content is always
  labelled SAMPLE / TEMPLATE PREVIEW, with a bold notice that it must
  not be quoted as content.
- A populated-looking homepage with sample cards is not completed
  content: hero stats say "0 pages yet — template" while notes are
  empty, and each sample card carries a SAMPLE badge.
- Rendering is safe: every note/category value is HTML-escaped before
  insertion, suggestions and the viewer use `textContent`, and image
  paths are validated to in-repo relative paths only.
- Zero budget: no billing action or card use without the owner's
  explicit say-so; everything local to the repo, never hotlinked.
- Live deploys wait for the owner's tap. A preview attachment or a
  commit hash is not a live link.
- Project walls are strict: portfolio, GradeSpot/Axon and Royal Salon
  stay separate; this handbook is its own wall, with its own repo,
  Vercel project and naming.
- Current status (not a rule, for context only): repo
  `AravindMutthe/systems-handbook` is public; the site
  `https://systems-handbook.vercel.app` is private (Vercel
  Authentication, all deployments). That distinction matters once real
  notes arrive: public repo + private site is not the same as private
  notes.
