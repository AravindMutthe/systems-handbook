# Systems Handbook — Content Requirements

Date: 2026-10-29
Status: Requirements only. Nothing here claims content is already built,
published, or deployed. Real content arrives only in batches of original
note images from the owner.

## Legend — all requirements

This legend section holds all requirements, in short form. Full text
follows below, under the same numbers.

- **Style legend:** dark bold = bullet headline words before the
  colon; italic bold = proper noun (company, country, organisation,
  product, standard body); yellow bold = cross-domain vocabulary
  (network, signalling, directory, endpoint, stack, lane, gate,
  hierarchy, allocation, regulation, trading speed, customer,
  vendor, market, approval, and the other terms in R13).
- **R1.** Detailed, not abstract — digital core resources, interlinked, ground-up.
- **R2.** Learning sequence, ground-up, in order.
- **R3.** Each batch: archive, exact transcription, placement, enhanced explanation, enhanced diagram, per-batch report.
- **R4.** Study attractiveness — rich, diagram-led pages, original never hidden or replaced.
- **R5.** Content model v3, domains from categories.json, nothing invented.
- **R6.** Acceptance — archived, traceable, held notes reported, never shown.
- **R7.** Leo decides interlinks, topic, and domain from the notes — not publication, storage, deploy, or privacy.
- **R8.** Input order is random — sequence is decided, not received.
- **R9.** Domain terminology, analogies map to technology and telecom.
- **R10.** Bullet lead-ins dark bold, across the site.
- **R11.** Proper nouns italic bold, across the site.
- **R12.** Systems across domains, not isolated system evaluation — business vocabulary, terminology, analogies across domains.
- **R13.** Cross-domain vocabulary yellow bold, across the site.

## Rules are different from requirements — kept separate

- `rules.md` = RULES. How the work is handled: exact vs enhancement,
  privacy and publication gates, storage, archive handling, no deploy
  without a tap, and the other standing handling rules.
- This file = REQUIREMENTS. What the content must be and must deliver.
- The two files are not merged, and rules are not copied into this file.
  Where a requirement touches a rule, this file points to `rules.md`
  instead of restating it.
- If a requirement and a rule ever appear to conflict, flag it for the
  owner — do not silently resolve it by editing either file.

## R1. Nature of the notes — detailed, not abstract

- The owner's notes are NOT regular, abstracted, conceptual notes for
  general concepts.
- They are detailed, in-depth notes about digital core resources.
- They interlink those core hardware resources with each other.
- They start from the ground base of computer science and the IT industry
  and build upward from there.
- Requirement: the handbook must preserve that depth and those interlinks.
  It must NOT reduce the notes to generic summaries or abstract
  general-concept overviews.

## R2. Learning sequence — ground-up, in order

- Requirement: the 100s of pages must be organized into a sequence a
  reader can learn from, in order, for better understanding.
- The sequence must start at the ground base and build upward:
  base foundations first, then core hardware resources, then the
  systems built on them, then their industry uses.
- Each step must show what it builds on and what it connects to, so
  the interlinks between core hardware resources are visible in the
  sequence itself, not only inside a single page.
- The sequence is provisional after the first batches and is revised
  as later batches arrive, until all batches have been seen.

## R3. What each batch must deliver

For each batch of 6 original images, the required deliverables are:

1. Archive entries — the original writing and diagrams, with the
   extraction from each image, under a stable source ID.
   (Handling rules for the archive are in `rules.md`.)
2. Exact transcriptions — the owner's notes, without additions.
   (How exact vs added content is marked is in `rules.md`.)
3. Placement in the learning sequence — domain, chapter, section,
   and order, with the prerequisite or interlink that placed it there.
4. Enhanced explanations — rich, readable, study-friendly explanations
   for better understanding.
5. Enhanced diagrams — required for better understanding, not optional.
   Each enhanced diagram must be a separate, labelled addition to the
   original diagram, not a replacement for it.
6. A per-batch report — what was created, what is still held back,
   and what in the sequence is still provisional.

## R4. Study attractiveness — rich, diagram-led pages

- Requirement: pages must use rich text and design so they attract study.
- That means, for the enhanced layer: clear headings, key points,
  annotated step-by-step diagrams, tables and flows where they clarify,
  and worked examples where they clarify the note.
- The enhanced layer must be diagram-led where the note is diagram-led:
  a bullet-point page with a diagram, and an elaborated page with a
  diagram, both get an enhanced diagram, not text alone.
- The original layer stays as evidence (see R3.1). Rich design must
  never hide or replace the original.

## R5. Content model to be used

- Requirement: content must be stored in the versioned `content.json`
  v3 model — sources, transcriptions, chapters, diagrams, tables,
  events, concepts, relationships, notes — not as loose image cards.
- Domains must match `categories.json`:
  institutions-markets, hardware-computing, infrastructure-operations,
  systems-evolution, industrial-business-networks.
- No new domain, chapter title, date, or relationship is to be
  invented for a batch. Anything not on the page or not supplied by
  the owner is flagged, not filled in.

## R6. Acceptance — how a batch is judged complete

A batch is complete only when all of these are true:

- Every image in the batch has an archive entry with its extraction.
- Every transcription is traceable to its exact original image.
- Every enhanced text and enhanced diagram is distinguishable from
  the original, as required by `rules.md`.
- Every note is placed in the learning sequence, or flagged as
  unplaced with the reason why.
- Every interlink used for placement is labelled (prerequisite,
  dependency, successor, standard, or cross-domain link).
- Held-back notes are reported as held, with no held details shown
  on a public-facing page.
- The per-batch report (R3.6) has been given to the owner.

## R7. Decision authority — based on the notes, Leo decides

- Decision authority (owner direction, 2026-10-29): based on the notes
  themselves, Leo decides:
  - Which notes are interlinked with each other
  - Which topic each note comes under
  - Which category / domain each note comes under
  - How a note relates to other domains or topics, including
    cross-domain and cross-topic relations
- These decisions must be grounded in what the page actually shows —
  its content, its diagram, and its links to other pages. No invented
  topics, categories, domains, or relationships.
- If a note fits more than one topic or domain, record its primary
  placement plus its cross-links — do not force it into a single flat
  tag, and flag the ambiguity in the per-batch report.
- Every decision made under this authority is shown in the per-batch
  report, with the reason for the placement or link, so the owner can
  check and overrule it. An overrule is recorded and the sequence is
  updated; a decision is not silently reverted later.
- This authority covers content organization only. It does NOT cover
  publication, storage, deploy, or privacy decisions — those remain
  owner decisions, as in `rules.md`.

## R8. Input order is random — sequence is decided, not received

- The owner sends batches in random order. Random sending order is
  NOT the learning order, and must never be treated as the sequence.
- Requirement: based on the notes themselves, Leo decides which note
  comes in which sequence position — ground base first, then the
  core hardware resources and systems that build on it, following
  prerequisites and interlinks (see R2 and R7).
- A note received early is not automatically early in the sequence,
  and a note received late is not automatically late. Placement is
  decided by what the note depends on and what depends on it, not by
  batch number, upload order, or file order.
- When a later batch reveals an earlier prerequisite, the sequence
  is reordered and the change is reported in that batch's report —
  earlier placements are provisional until all batches are seen.
- The archive keeps the original batch/receipt order for traceability
  only. The learning sequence, nested-card order, and reader
  Previous/Next order are the decided sequence, not the receipt order.

## R9. Domain terminology and technology/telecom analogies

- Requirement: every delivered page must use the terminology and
  vocabulary of its own domain, so a reader learns that domain's
  language from the page itself, not generic language.
- Requirement: every analogy in an enhanced explanation or enhanced
  diagram must map to the technology and telecom industry. A reader
  must be able to follow the analogy through technology and telecom
  examples — signalling, networks, DNS, hardware, spectrum, and
  related industry examples — not through analogies from unrelated
  fields.
- This applies to the enhanced layer only. Original notes stay
  verbatim, as in R3. How this is handled when writing — including
  what to do when an original uses a non-technology analogy — is
  in `rules.md`, under "Domain terminology, technology and telecom
  analogies", and is not restated here beyond this requirement.

## R10. Bullet lead-ins dark bold, across the site

- Requirement: every bullet on every delivered page must show its
  headline words — the words at the start of the bullet, before
  the colon, such as "Human to human:" — in dark bold, so a reader
  scanning a page sees the headline first, then the elaboration.
- This applies to detailed bullets, summary bullets, horizontal-link
  bullets, and homepage key points, across all cards and pages.
- How the headline is marked up, and how it reads in light and dark
  themes, is in `rules.md`, under "Bullet lead-ins dark bold, across
  the site", and is not restated here beyond this requirement.

## R11. Proper nouns italic bold, across the site

- Requirement: every identity, name, or proper noun on every
  delivered page must be shown in italic bold — for example
  ***Nvidia***, ***Broadcom***, ***Intel***, ***India***,
  ***USA*** — so named companies, countries, organisations,
  products, and standard bodies stand out from common text.
- This applies to detailed bullets, summary bullets, horizontal-link
  bullets, Key points styling, homepage key points, and related-topic
  captions, across all cards and pages.
- How the markup is done, and which names are covered, is in
  `rules.md`, under "Proper nouns italic bold, across the site",
  and is not restated here beyond this requirement.

## R12. Systems across domains, not isolated system evaluation

- Requirement: the handbook is about systems, not about evaluating
  a single system in isolation. Every delivered page must show how
  its topic fits into the whole system, and how it connects to
  other domains — not as a standalone evaluation.
- Requirement: business vocabulary, domain terminology, and
  technology/telecom analogies must be used across domains, not
  kept inside one domain. A reader must meet the same core
  systems vocabulary in every domain — network, signalling,
  directory, endpoint, stack, lane, gate, hierarchy, allocation,
  regulation, trading speed, customer, vendor, company, market,
  approval — and see it used in that domain's own terms.
- Requirement: business vocabulary must appear in every domain,
  including technical domains. A technical card (for example, the
  NIC and kernel stack, or out-of-band management) must still show
  the business side — whose customer traffic it carries, whose
  company runs it, what trading or market use it serves, and what
  approval or regulation gates it — so the business thread does
  not thin out in the middle of the system.
- Requirement: analogies must map across domains in the same way:
  signalling (fire beacons, drums, telegraph) to networks, a
  telephone directory to DNS, silicon to chip to vendor device to
  NIC endpoint, two lanes (data and management) to a business
  network, and an approval gate to market entry. An analogy learned
  in one domain must be reused, not replaced, in the next domain
  where it applies.
- Requirement: every page must carry its cross-domain links —
  horizontal links and related topics in related domains — so the
  interlink is visible on the page itself, not only in the learning
  sequence. A page with no cross-domain link is incomplete under
  this requirement.
- This requirement is about what the content must deliver. How
  terminology and analogies are written is in `rules.md`, under
  "Domain terminology, technology and telecom analogies" and
  "Proper nouns italic bold, across the site".

## R13. Cross-domain vocabulary yellow bold, across the site

- Requirement: words, terms, and vocabulary used across domains
  must be shown in yellow bold, across the site, so a reader can
  see the shared systems vocabulary wherever it appears.
- Covered terms include: network, signalling, directory, endpoint,
  stack, kernel stack, lane, data lane, management lane, gate,
  hierarchy, hierarchical, allocation, regulation, coordination,
  trading, trading speed, business, market, customer, vendor,
  company, approval, product, silicon, chip, and any other term
  that is used in more than one domain in a future batch.
- This applies to detailed bullets, summary bullets, horizontal-link
  bullets, and homepage key points, across all cards and pages.
  Terms already shown dark bold (bullet headline) or italic bold
  (proper noun) keep that style — yellow bold is for cross-domain
  vocabulary in normal text, not for headlines or proper nouns.
- How the markup is done is in `rules.md`, under "Cross-domain
  vocabulary yellow bold, across the site", and is not restated
  here beyond this requirement.

## R14. Standards, resource coordination, implementation, regulation — distinguished

- Requirement: the chapter must state, and keep distinct:
  - RIRs administer regional Internet number-resource allocation.
  - IETF develops Internet technical standards.
  - IEEE develops standards across electrical, electronics and
    computing fields.
  - 3GPP develops mobile telecommunications specifications.
  - FCC and TRAI have national regulatory roles in their
    respective jurisdictions.
- Requirement: the chapter should distinguish standards
  development, resource coordination, technical implementation
  and government regulation rather than presenting them as a
  single regulatory hierarchy. A page that lists IETF, IEEE,
  3GPP, FCC, TRAI, RIRs, and ICANN together under one
  "regulation" heading, without those four functions labelled,
  does not meet this requirement.
- How this distinction is labelled in text and diagrams is in
  `rules.md`, under "Standards, resource coordination,
  implementation, regulation — distinguished, not one
  hierarchy", and is not restated here beyond this requirement.

## R15. Headlines and topic names — original first, enhanced second, related only

- Requirement: use the headline and topic name exactly as they
  appear in the original notes first. The headline, topic name,
  or chapter heading as written on the page — in the owner's
  spelling — comes first, before any enhanced version, on every
  card, chapter page, and note.
- Requirement: only after the original headline / topic name is
  shown, use an enhanced headline — and only an enhanced headline
  that is related to that note. Related means grounded in what
  that page actually shows: its content, its diagram, and its
  links to other pages. An enhanced headline must never introduce
  an unrelated topic, and must never be presented as the owner's
  headline.
- Requirement: an enhanced headline stays labelled as enhanced
  and in a different style from the original, under the exact-vs-
  enhancement rule in `rules.md`. It never replaces, overwrites,
  or hides the original headline.
- Requirement: if an original page has no clear headline or topic
  name, flag it as missing — do not invent one and present it as
  original. An enhanced headline may then be proposed, labelled
  as enhanced / proposed, with the reason for it, so the owner
  can check and overrule it.
- This requirement applies to headlines and topic names on cards,
  chapter pages, study notes, and homepage key points alike.

## R16. Future domains — based on later notes images only

- Requirement, for the future only: later on, based on the notes
  images in a later batch, the following domains may be used:
  - devops
  - infrastructure / production
  - software engineering / development
- These are future domains, not current domains. The current
  five domains in `categories.json` (see R5) stay in force for
  batches received so far, including batch 1, until a later
  batch's images actually show content that belongs in one of
  these future domains.
- A future domain may be used only when it is grounded in what
  a later notes image actually shows — its content, diagram,
  and links — not invented in advance, and not applied
  retrospectively to earlier batches unless those batches
  themselves show that content.
- The word "like" in the owner's direction is recorded here as
  examples of the kind of future domain, not as a closed list
  that forbids another domain a later batch genuinely shows.
  Any other future domain must meet the same grounding test,
  and must be recorded in this file before it is used.
- When a future domain is first used, `categories.json` must be
  updated to include it, and the per-batch report must state
  which image(s) justify it, so the owner can check and overrule it.

## R17. Real history and story — categorization as technical perspective, not separation

- Requirement: the notes are real history, story, and facts,
  whatever the owner has shared. They cannot be separated just
  to fit categories, and must not be cut into separate domain
  boxes that break the story.
- Requirement: keep one continuous story spine, mostly in the
  systems-evolution domain, in learning order. The story is
  followed straight through — for example, origins, then
  business need, then organisation, then regulation, then
  directory, then DNS, then silicon, then vendors, then NIC,
  then kernel, then product approval — because each step only
  makes sense after the step before it.
- Requirement: categories are technical perspectives, or
  lenses, on the same story — not containers that split a
  note. A card stays in its story place, and carries secondary
  technical domain tags for what it is technically about:
  regulation as institutions-markets, NIC / silicon as
  hardware-computing, kernel / TCP/IP as infrastructure-
  operations, business / product as industrial-business-
  networks, and so on, as the page itself shows.
- Requirement: a technical perspective is shown as a labelled
  cross-link on the same card, not as a duplicate card in
  another domain. A reader can follow the history straight
  through in systems-evolution, and can also filter by
  technical perspective, without the story being broken apart.
- This requirement does not replace the primary-domain rule
  in R5 / R7 — it explains how that rule works for story
  notes: primary placement is the story place, secondary
  placements are technical perspectives on that same place.

## Still open — not decided by this file

- Storage decision for real original images — owner to decide.
  (See `rules.md` for the storage gate.)
- Publication decision per note — owner to decide.
- First batch of 6 original images — not yet received.
- Final learning sequence — provisional until all batches are seen.
