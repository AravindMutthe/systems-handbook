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

## Public-facing explanations (2026-10-29)

- Public-facing explanations — on the homepage, chapter pages and topic pages — must be deep, readable and illustrated.
- They must be free of internal processing commentary: no schema names, file names, build steps, pipeline talk, or how the site was processed. The reader sees the explanation, not the work behind it.
- Archived original pages are different: they show the original image, untouched, plus its transcription and details. An archived original is evidence, not an explanation — it does not need to be deep, readable or illustrated, and it must not be rewritten into an explanation.

## Historical research timeline and evidence register (2026-10-29)

- Historical research timeline: a chronological record, in date order, of eras, dates, technology changes and institutional changes. Chronology is kept separate from conceptual relationships — time order is not the same as dependency.
- Evidence register: a separate, auditable list of the evidence behind every timeline claim. Each register entry records: a stable source ID, the original note ID it traces to (if any), the source date (unknown shown as unknown, never guessed), what kind of change it evidences (technology and/or institutional), its cross-domain links, its evidence status (unverified | needs-review | verified), its privacy classification, and its review status.
- No timeline entry without a register entry. A claim with no evidence is labelled sample/unverified, or it is not shown as history.
- No invented eras, dates, events or sources. If a date, era or source is not supplied or verified, the timeline and register say so plainly.
- The timeline is a reading view; the register is the audit view. The two must agree: every timeline entry points to its register entry, and every register entry used in the timeline appears there.

## Dynamic chapter reader for nested cards (2026-10-29)

- Every nested card must open a proper chapter reader — not a fixed sample page, and not only the in-page viewer.
- The reader is dynamic and data-driven: it renders from the shared notes in the versioned content model (`content.json`), in the order those notes carry — domain, then chapter, then section, then `order` within that section — never from hardcoded pages.
- Back-and-forth sequence within a domain: from any card, the reader shows Previous and Next controls that move through that domain's sequence, in order, one step at a time. Previous goes to the previous note in the same domain; Next goes to the next note in the same domain. It never jumps to another domain.
- Sequence position is shown (for example, "3 of 12 in this domain"), and Previous is disabled at the first note and Next at the last note in that domain.
- The reader keeps the chapter-reader rules: deep, readable, illustrated explanations on public-facing pages, free of internal processing commentary; a single button to the archived original page for the original image + transcription; only Prerequisites and Depends on in Related concepts, then the logo + name home button.
- When no real notes have been shared yet for a domain, the reader shows the sample layout only, labelled SAMPLE, with no invented sequence or content.

## Systems-evolution timeline (2026-10-29)

- The Systems Handbook carries a systems-evolution timeline: one chronological timeline that connects, across historical periods, telecommunications, computing, networking, industries, governance, cloud and AI — not seven separate timelines.
- Each timeline entry is placed in its historical period, in date order, and is labelled with which strands it connects (for example, a computing change that also changes networking, or a governance change that shapes an industry). Cross-strand connections are shown explicitly, not left implied.
- Every timeline entry traces to the evidence register (source ID, original note ID, source date — unknown shown as unknown, never guessed — evidence status, privacy and review status). No timeline entry without a register entry.
- No invented periods, dates, events, technologies or connections. Period boundaries, dates and strand connections come only from supplied or verified sources; anything unverified is labelled sample/unverified, or not shown as history.
- The timeline is a public-facing explanation, so it follows the public-facing rule: deep, readable and illustrated, free of internal processing commentary. The evidence register remains the audit view behind it.

## Meaningful concept relationships (2026-10-29)

- Build meaningful concept relationships, not a link list for its own sake. Each concept shows, with clearly labelled types: prerequisites, dependencies, historical successors, standards, and relationships across domains.
- Start with useful links: a link is added only when it helps the reader understand the concept — what to learn first, what it depends on, what came after it historically, which standard shapes it, or which other domain it connects to. Links that do not help are not added.
- Relationship types are never merged: a prerequisite is not a dependency, a historical successor is not a related concept, and a standard is its own type. Chronology (historical successors) stays separate from conceptual relationships (prerequisites, dependencies).
- Follow the ByteByteGo pattern for how relationships are explained: concise explanation first, then the relationship in context, with an original illustration only where it actually clarifies the connection — never a copied graphic, and never decoration for its own sake.
- Add a visual graph only when justified: when the relationships are too tangled to follow as labelled links, and a graph would make them clearer. Until then, labelled links are the graph. A graph view is deferred, not built by default.
- Every relationship traces to a source or a note, or is labelled sample/unverified. No invented prerequisites, dependencies, successors or standards.

## Privacy and publication enforcement (2026-10-29)

- Public view shows ONLY a note that meets BOTH gates: `privacy === 'public'` AND publication is `'published'` (`publication.status === 'published'`, or `reviewStatus === 'published'`). Approved is NOT published. Draft, in-review, or missing privacy/publication fields = NOT shown.
- Enforcement is in code, not just in the schema: the homepage, search, suggestions and topic navigation all filter to public+published notes first. Held notes are counted only ("N notes held back") — their titles, captions, images and details are never listed on a public-facing page.
- A direct URL does not bypass the gate: a topic page that loads a held note ID from `content.json` shows only a held notice, with no image, caption or original-note link.
- Storage gate, separate from the code gate: code enforcement does NOT make a public repo private. Real original images must NOT be pushed to this public repo until (a) the note is public+published, AND (b) the owner has decided the storage for real originals — public repo, private storage, or a private repo. Until that decision, real originals stay in a private archive only, never in this repo. The site being Vercel-private does not change the repo being public.
- Sample cards are not real notes and are exempt only while no real notes exist; once real notes exist, samples do not appear alongside them.

## Nested cards in learning sequence (2026-10-29, corrected 2026-10-29)

- CORRECTION — the earlier "one card per note/topic" reading was
  wrong, and is superseded by this section. Do NOT create a nested
  card for each image.
- A batch of images is related to a domain. Based on that whole
  batch, Leo decides where cards and content are needed — cards are
  decided from the content, not counted from the images. Several
  images may feed one card; one image may feed more than one card
  only where its content genuinely belongs in two places, and then
  the link, not a duplicate card, carries the second place.
- Vertical integration: within a domain, cards follow depth in
  learning order — ground base first, then the layers built on it
  (for example, silicon → vendor → device → NIC → driver → kernel →
  TCP/IP → business use). A card's place is its depth position in
  that vertical chain, not its batch or upload position.
- Horizontal integration: across domains and topics, the same
  concept is linked, not repeated as a new card. For example, NIC,
  DNS, FCC, or business/trading speed appearing in several pages
  is one horizontal thread, shown as labelled cross-links on the
  cards it touches (prerequisite, depends-on, successor, standard,
  cross-domain link).
- Card placement follows the decision made for the batch (see
  `requirements.md` R7, kept separate from this file): topic,
  category/domain, and chapter/section/order for the CARD, decided
  from the batch content as a whole.
- Card order is the decided learning order for cards, not the
  learning order of individual images. The watermark number on a
  card is its position in that decided card sequence for its domain
  (for example, 03 in its domain), restarting per domain.
- A card's headline, key points, and cover come only from that note
  or from the owner — never invented. Enhanced text and enhanced
  diagrams on a card stay labelled and in a different style/color
  from the original, and the card links to the archived original
  page for the untouched original image + transcription.
- Every card is a button that opens its topic/chapter reader in
  sequence (see "Nested cards navigate" and "Dynamic chapter reader
  for nested cards" above), so a reader can move Previous/Next
  through the sequence from any card.
- A held note gets no public card: privacy/publication gates above
  still apply. Held notes are counted only, with no title, caption,
  image, or details on a public-facing page.
- Status: rule only, for real notes not yet received. Sample cards
  already on the homepage are layout placeholders only, labelled
  SAMPLE, and must not be quoted as content or as the sequence.

## Every batch — cross-check first, then read (2026-10-29)

- For every batch of images, before reading and understanding the
  images, cross-check with BOTH specification files, as they stand
  at that time: `rules.md` (how work is handled) and
  `requirements.md` (what content must be and deliver). Read the
  files themselves, not a summary or a memory of them.
- Cross-check means, for that batch:
  - What domain, topic, chapter and sequence do the specifications
    require, and what do they forbid inventing?
  - What is the card rule for this batch — cards decided from the
    batch as a whole for vertical and horizontal integration, not
    one card per image?
  - What are the exact-vs-enhancement, archive, privacy,
    publication and storage gates that apply to these images?
  - Does this batch conflict with, or add to, any earlier batch,
    sequence, card, or relationship already decided?
- Only after that cross-check, read and understand the images:
  transcribe exactly what is on each page, mark [unclear] /
  [crossed out] / [scribbled out] where needed, assign topic,
  domain, chapter/section/order, interlinks, and cards under the
  specifications just checked.
- If a specification is unclear, missing, or conflicts with the
  batch, flag it in the per-batch report and do not proceed on a
  guessed reading of the specification. Do not work from an outdated
  summary when the files have changed since the last batch.
- The per-batch report must state, briefly, that the cross-check
  was done, which specification versions were checked, and any
  conflict or gap found — or that none was found.

## Pipelines to GitHub — sync only after the owner's call (2026-10-29)

- Both chats have their own pipeline to GitHub: the handbook
  content chat runs a push-only pipeline, and the handbook
  development (website) chat runs a push-and-pull pipeline.
  The pipelines are separate — neither chat works inside the
  other's pipeline.
- The two pipelines get synchronized ONLY after the owner's call.
  A push, a pull, or a deploy in either chat happens only when
  the owner explicitly orders it in that chat. No automatic
  push, pull, deploy, or background sync on any other word alone.
- In particular: pushing content to GitHub does not by itself
  sync it to the handbook site, and the development chat does
  not pull content, integrate it, or deploy it until the owner
  calls for that sync in the development chat.
- This gate sits on top of the push-only / push-and-pull models
  above; it does not replace them. Local preparation in a chat
  is not a sync.

## Proper nouns italic bold, across the site (2026-10-29)

- Any identity, name, or proper noun used on a page must be shown
  in italic bold — for example ***Nvidia***, ***Broadcom***,
  ***Intel***, ***India***, ***USA***.
- Covered: company names, country names, person names,
  organisation names, product names, and standard-body names
  (Intel, Broadcom, Nvidia, Dell, HPE, Lenovo, Cisco, AT&T,
  Verizon, Jio, AWS, GCP, DARPA, ARPANET, IETF, IEEE, 3GPP, FCC,
  TRAI, ICANN, ARIN, RIPE, APNIC, DRDO, NASA, India, USA,
  Internet, Nginx, Apache, and any other named identity that
  appears in a future batch).
- Markup: `<strong><em>Name</em></strong>` in normal text, or
  `<em>Name</em>` inside an already-bold lead-in, with CSS
  `strong em, em strong{font-style:italic;font-weight:800}`.
  Homepage key points apply the same rule in `app.js`
  (`italicBold`, after `boldLead`).
- This is proper nouns only. Common nouns (computer, network,
  business, message) are not wrapped — wrapping every noun would
  make nothing stand out. If the owner wants a technical term
  treated as a proper noun, it is added to the list above.

## Bullet lead-ins dark bold, across the site (2026-10-29)

- In every bullet, across the site, the headline words at the start
  of the bullet — the words before the colon, such as
  "Human to human:" — must be dark bold.
- Markup: wrap the headline words, including the colon, in
  `<strong>`, with the darkest ink colour and weight 800
  (`li strong{font-weight:800;color:#111827}` on card pages,
  `li strong{font-weight:800;color:var(--ink)}` site-wide, so the
  same rule reads dark bold in light theme and in dark theme).
- Homepage key points use the same rule: the lead-in before a
  colon, " = ", or " — " is wrapped in `<strong>` by `app.js`
  (`boldLead`), not left as plain text.
- This is styling only. It does not change the words of a bullet,
  and it does not change an original Key point's wording — the
  original stays verbatim, only its headline is shown dark bold.

## Domain terminology, technology and telecom analogies (2026-10-29)

- Content, terminology, and vocabulary on a page must belong to
  that page's domain — the domain's own terms, not generic terms
  swapped in from another field.
- Every analogy in an enhanced explanation or enhanced diagram must
  map to the technology and telecom industry: signalling, telegraph
  and telephone, DNS and directories, NIC and PCI, kernel and network
  stacks, spectrum and regulation, vendors and silicon, and the like.
  Analogies from unrelated fields (cooking, sports, everyday
  household examples, and similar) are not used in the enhanced layer.
- If an original note itself uses a non-technology analogy, the
  original stays verbatim in Key points and in the archive — it is
  never rewritten. The enhanced layer re-maps the idea to a
  technology/telecom analogy, as an enhancement, not as a correction
  to the original.
- Check this per card before it is built: domain terms correct,
  analogy maps to technology/telecom, no generic analogy left in
  the enhanced text or diagrams.

## Related topics in related domains, as cards (2026-10-29)

- A related topic must go into its related domain, presented as a
  card — not only as a text link or a flow-chart arrow.
- On a card page, related topics appear in a Related topics section,
  grouped by domain, as cards linking to the related card's primary
  page. The related card is a pointer, not a second copy of the
  content — the content lives once, on its primary card.
- On an index or homepage grouping, each domain shows its primary
  cards plus its related cards, as cards, labelled primary vs
  related, linking back to the primary card.
- Which topics are related is decided from the batch content itself:
  the domains a card also touches, and its horizontal links to other
  cards. No related topic is invented, and no related card is created
  for a domain the content does not actually touch.
- This does not change primary placement or learning order. A card's
  primary domain and its position in the learning sequence stay as
  decided; related-domain cards are additional entry points to that
  same card.

## When content is pushed, development builds automatically (2026-10-29)

- When content is pushed to GitHub, development (the website chat) automatically starts development: pull the pushed content, integrate it, and build the pages or cards it calls for — nested cards in learning sequence, topic/chapter pages, and reader sequence — from that content, in its decided order.
- Automatic building means building and preparing, not automatic publishing and not automatic deploying. The privacy and publication gates still apply in full: held notes (not public + published) get no public page or card, and original images stay out of the public repo until the storage decision is made.
- Deploy to live prod still happens only on the owner's separate tap. Building automatically does not deploy automatically.
- This rule does not cancel the sync gate for other actions: a push, pull, deploy, update or send for any other purpose still happens only after the owner's call. The automatic step here is specifically: content push → development pulls and starts building pages/cards.
