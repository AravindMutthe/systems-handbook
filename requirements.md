# Systems Handbook — Content Requirements

Date: 2026-10-29
Status: Requirements only. Nothing here claims content is already built,
published, or deployed. Real content arrives only in batches of original
note images from the owner.

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

## Still open — not decided by this file

- Storage decision for real original images — owner to decide.
  (See `rules.md` for the storage gate.)
- Publication decision per note — owner to decide.
- First batch of 6 original images — not yet received.
- Final learning sequence — provisional until all batches are seen.
