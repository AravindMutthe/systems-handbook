# Systems Handbook — Rules

These are the standing rules for this handbook. They are requirements, not
claims that everything is already built. Each rule carries its status.
Labels (First, Third, Sixth, C, E, F, UX) are kept exactly as the owner
gave them. Items the owner has not sent yet — for example Second, Fourth,
Fifth, A, B, D — are **not** listed here and must not be invented.

## Best fit templates — where each pattern belongs

Each borrowed pattern is filed under the template it fits best, not
left as a loose rule. Detail for each template is in its own section
below; this table is the map.

| Template | Best fit pattern | What it must contain | File / status |
|---|---|---|---|
| **Technical chapter** | ByteByteGo — visual explanations | Annotated diagram (numbered + legend), concise explanation, step-by-step technical flow, worked example, limitations, deeper references. Original illustrations only, never copied graphics. | `chapter.html` — one sample chapter, built |
| **Concept exploration** | Obsidian — connected knowledge | Related chapters, prerequisites, dependencies, backlinks — every link labelled with its relationship type. Topic relationships and cross-domain navigation. Graph view deferred, not built. | Schema + sample chapter Related section — design only |
| **Historical timeline** | E — timeline | Eras, dates, technology changes, institutional changes, source evidence, cross-domain relationships. Unknown dates shown as unknown. | Requirement only — not built |
| **Content records** | Separate records, not cards | Sources, transcriptions, chapters, diagrams, tables, events, concepts, relationships — each its own record with its own ID, joined by reference. | `content.schema.json` — design only |
| **Chapter reader (UX)** | Reading-first UX | Mobile-first, keyboard-accessible, fast static load, searchable, responsive, reusable, long-reading measure, no developer text on reader pages, no excessive animation, reduced-motion preserved. | `chapter.html` + `chapter.css` — built |
| **Site architecture** | Sixth — design flexibility | Theme tokens, reusable components, data-driven navigation. No Next.js migration now. | `styles.css`, `categories.json`, `notes.json` — current |

A new pattern, when the owner sends one, goes under its best fit
template here first — do not create a new top-level template for every
pattern, and do not file a pattern under a template it does not fit.

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

## Educational pattern — ByteByteGo style, original illustrations only

- Use the educational pattern, adapted for this handbook:
  annotated diagram, concise explanation, step-by-step technical
  flow, example, limitations, and deeper references.
- Annotated diagram: every diagram carries numbered annotations and
  a legend explaining each one, so a reader can follow it without
  guessing.
- Concise explanation: one short paragraph that says what the chapter
  is about, before the detail.
- Step-by-step flow: numbered steps, in order, that a reader can
  pause and resume.
- Example: a worked example (code or table) that shows the idea in
  practice.
- Limitations: what the chapter does not cover, what is unverified,
  and what must not be used as a source yet.
- Deeper references: further reading, added only from cited notes or
  verified sources — never invented.
- Create **original illustrations** for every diagram. Never copy
  ByteByteGo's graphics, or any other site's graphics, even if the
  pattern is borrowed. The pattern is the idea; the drawing is ours.
- Status: pattern applied to the sample chapter (`chapter.html`:
  annotated Figure 1, concise explanation, numbered flow,
  limitations, deeper references). All sample content is labelled
  sample.

## Connected knowledge — Obsidian concepts, graph view later

- Borrow the concepts, not the product:
  - **Backlinks** — every chapter/note shows which other
    chapters/notes point back to it, derived from
    `relationships.*`, not hand-typed separately.
  - **Related notes** — notes that share a domain, subject, topic or
    concept, shown with their relationship type labelled.
  - **Topic relationships** — topics are not flat tags; a topic
    relates to other topics by the same labelled types as concepts
    (depends-on, prerequisite-for, related-to, contradicts).
  - **Cross-domain navigation** — related concepts must be able to
    cross domains (for example, an institutions chapter linking to a
    hardware chapter), not stay trapped inside one domain's row.
- A **graph view can come later.** It is explicitly deferred: do not
  build a graph, a force layout, or a visual network now, and do not
  describe one as built. The data for a future graph is already the
  `relationships.*` records — the graph, when it comes, renders from
  those, it does not need a new data model.
- Status: concepts and labelled backlinks are in the schema and in
  the sample chapter's Related section; no graph view exists.

## Content model — richer versioned model, not a single notes.json

- The single `notes.json` model is **replaced** as the primary model.
- The primary model is `content.json`, versioned:
  - Top level: `modelVersion`, `contentRelease`, `status`,
    `versionHistory: [{release, whatChanged, changes}]`.
  - Collections in one file: `sources, transcriptions, chapters,
    diagrams, tables, events, concepts, relationships, notes`.
  - Each record keeps its own `version` and `revisions` where relevant.
- `notes.json` is kept only as a backward-compatible fallback in code.
  It is not the model, and new content must not be added to it as the
  primary store.
- A future split (one file per collection, loaded on demand) keeps the
  same versioned shape — it is a split of `content.json`, not a new
  model.

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


## Chapter heading and original-note button (2026-10-29)

- Chapter heading uses the DOMAIN EMOJI beside it, not the site logo mark (correction 2026-10-29: "not logo its emoji code" — e.g. 🏛️ for Institutions & markets), with the logo wordmark treatment: first word in ink/paper, rest in gold italic gradient (like "Systems" + "Evolution").
- Chapter detail chips (domain, subject, source date, privacy, review, evidence) sit in ONE horizontal scrolling banner row — swipe left/right on a phone — never stacked vertically.
- The chapter page does NOT list original-note details inline. It shows a single button ("Open original note — <id>") that opens an archived original page (`original-note.html`) containing the original image (untouched), its transcription, and its note details.
- Related concepts on a chapter page show ONLY Prerequisites and Depends on, then a home button/logo (logo mark + "Home — Systems Evolution", linking to the homepage). Related chapters and Backlinks are NOT shown there.


## Home button (2026-10-29)

- The logo and name ARE the home button: topbar brand (logo mark + "Systems Evolution") is styled as a pill button and links to the homepage, and the chapter-page home button is the same logo + name, linking home.

## Standing recommendation — Systems Handbook stays independent

My recommendation remains to keep the new Systems Handbook as your independent personal knowledge platform, with Atlas research as a source of content — not automatically merge the two projects.

In practice: the Handbook keeps its own repo, Vercel project, design and content model. Atlas research may supply content to it, chapter by chapter, only when that content is chosen and checked for the Handbook — Atlas is a source, not a merge. The two projects are not merged automatically, and neither project's live site is changed by the other without a separate, explicit decision.


## Nested cards navigate (2026-10-29)

- Every nested card on the homepage is a button that NAVIGATES to a page about that topic or concept (`topic.html?domain=&topic=&title=`), samples included — not only notes that already have a file. A card that did nothing is a bug.
- The topic page shows the domain emoji + description (from `categories.json`), the card's caption if any, the original image if the note has a safe in-repo file, a link to its archived original-note page if it has an ID, and the logo+name home button. No topic content is invented.
