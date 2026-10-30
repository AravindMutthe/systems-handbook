# Batches

Batch information lives here, in this file — not as labels on site
pages. Site pages are a natural handbook: they show titles, domains,
and learning order, with no batch labels and no source IDs.

## Batch 1 — 2026-10-29

- Sample batch, 10 original images in receipt order.
- Source IDs, receipt order: hb-batch1-001 to hb-batch1-010.
- Cards decided from the batch as a whole, not one card per image.
  Learning order (receipt order is NOT learning order):
  - Card A — Why networks exist: origins and business need —
    Systems Evolution — sources 008, 006, 005
  - Card B — Naming, addressing and regulation: directory to DNS —
    Institutions & Markets — sources 003, 002, 010
  - Card C — Hardware supply and the NIC endpoint —
    Hardware & Computing — sources 001, 004
  - Card D — The NIC and kernel stack, plus out-of-band management —
    Infrastructure & Operations — sources 009, 004, 001
  - Card E — Building, operating and approving a product —
    Industrial & Business Networks — sources 007, 006, 005
- Related topics: each card also appears as a related card in the
  domains it touches, linking back to its primary card.
- Privacy / held: all Batch 1 sources were held (private, draft, not
  published) at intake. Two items were flagged for privacy review and
  are NOT reproduced here or on site: a digit string on source 004,
  and personal names on source 007. A margin date on source 009 was
  NOT assigned as a source date.
- Original images: private archive only. They are NOT in the public
  repo. They appear only in the private live deploy, for owner
  testing, until a storage decision is made.
- Site integration: homepage domains show these cards as real cards
  (primary + related), linking to their real card pages. The
  homepage no longer shows sample cards for domains that have
  real cards.
- Content release for the site model: v3-batch1-001 in content.json.

## Batch 2 — branch batch/b2publish only (main still held)

- 7 images, source IDs hb-batch2-001 to hb-batch2-007, in receipt order (001, 002, 003, 004, 005, 006, 007 as listed in batch2-cards.json sources).
- 3 cards, learning order F → G → H, story place systems-evolution for all, technical perspectives as lenses (R17), original headlines first (R15).
- Card F: universal product (001). Card G: govt layer + global oversight + govt networks (002+005+003). Card H: UI evolution telegraph→mainframe→PC→internet/web→mobile/cloud→5G (007+006+004).
- Original images: deploy-only on the private Vercel site, NOT in the GitHub branch, as with Batch 1. Batch2-intake.md: NOT pushed.
- Categories on branch only: software-engineering-development added under R16, justified by Card H. Main categories.json unchanged.

## Batch 3 — branch batch/b3publish only (main still held)

- 3 images, source IDs hb-batch3-001 to hb-batch3-003, in receipt order (001 Tech leadership Era, 002 Eras UI Frameworks + Hardware controlled / SW, 003 Project scheduler).
- 3 cards, learning order I → J → K, story place systems-evolution for all, technical perspectives as lenses (R17), original headlines first (R15), inside Original images + only.
- Card I: tech leadership eras, original stops at 2000 Internet/web/cloud, core focus Building hypergrowth; Eras 3–5 (Internet/web/cloud, Mobile & cloud, 5G & AI 2020–Now till 2026) are labelled [Added] completion from batch3-tech-leadership-completion.md, proposed fields marked, owner can overrule. Card J: six eras, three lenses (interface/control/payment), R14 ICANN/IETF/W3C distinguished, original spelling 'Bussiness controller' preserved in Key points, spelling note only inside Original images +. Card K: one scheduler model, R14 ISO/RTO/ICANN/ISP/VISA/SWIFT distinguished by function.
- Original images: deploy-only on the Vercel site, NOT in the GitHub branch, as with Batches 1–2. Batch3-intake.md, batch3-verification-audit.md, batch3-audit-2026-10-29.md: NOT pushed.
- Cumulative branch: this branch is based on batch/b2publish, so the live branch build shows Cards A–K (11 cards), not Batch 3 alone. Main still holds Batch 3 as private/draft, as with Batch 2 before it.

## Held rebuild 2026-10-30 (main 847a13d2, branch only, NOT deployed, NOT in public index)
- Batch 4 Card L (batch4/card-l.html): Employer — Employee, government regulation shapes work, feedback both ways. Originals: hb-batch4-002 handwritten + hb-batch4-001 owner-confirmed original digital diagram, neither replaces the other. Held, private, draft.
- Batch 5 Card M (batch5/card-m.html): The Evolution of Radio Broadcasting, U.S. part only. Indian broadcasting governance pending, not invented. Held, private, draft.
- Stories (stories/stories.html, story-a.html, story-b.html): Story A (A–G) + Story B (H only, first 17 pages), aggregate + link back, A–H canonical unchanged. Held, private, draft. Stories domain entry on main (74fbf802) NOT added to branch homepage categories, to keep held items out of the public index; branch categories keep software domain (H/J) + original 5.
- Framework (framework.html): How the global technology industry works, front guide, R21, enhanced synthesis, examples snippet-checked only / unverified. Held.
- Paths (career-path.html, industry-path.html): navigation views over the same notes, no duplicate cards, gaps marked as gaps, not filled. Held.
- Synthesis (synthesis.html): Synthesis after M, A→M links, no new fact. Held.
- Research (research.html): Research → Handbook integration, LINK not copy. 3 md files (Technology, Bussiness, Business&Technology, 5,178 lines) are working files, not copied into any card. Held.
- Batch 1–3 notes synced to audit-corrected main versions (12fb2a90, cbf9e99f, 235f0b2b); rules 294c798d, requirements 0e390ff7 (R21). Existing A–K pages unchanged in content; audit was notes rewording only.
- Original images for Batch 4/5/Stories are NOT in this branch (public repo rule) and were NOT deployed. No production deploy from this rebuild.
