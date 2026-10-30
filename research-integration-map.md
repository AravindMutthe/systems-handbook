Status: held, privacy private, publication draft, pushed 2026-10-30, no publication, no deploy.

# Research files → Handbook integration map — LOCAL DRAFT, not pushed

Source files (working files, Handbook content chat, 2026-10-30):
- Technology.md — 3,096 lines, 325 headings
- Bussiness.md — 1,477 lines, 157 headings (spelling as typed)
- Business&Technology.md — 605 lines, 92 headings (combined views)
Total: 5,178 lines, 574 headings.

Integration principle, in one line: LINK, do not copy.
Research sections link to Handbook cards and domains.
No section is copied into a Handbook card as if it were
an original note. No duplicate card is created for a
section already covered by Cards A–M. Research provenance
stays research, original-note provenance stays original.

## Domain map

### hardware-computing — link C, D
- Technology: NICs (server/enterprise, client), hardware
  devices, data center hardware, core routers, optical
  fiber backbone, gNB (5G) / eNB (4G) vendors
  (Ericsson, Nokia, Huawei, ZTE, Samsung, Fujitsu, NEC).
- Link: Card C (Sillicon product, Market Vendors),
  Card D (NIC, kernel stack).
- New detail, not in A–K: vendor-by-vendor gNB/eNB
  deployment, submarine fiber structure / landing
  stations, latency / LFN / QUIC detail.

### infrastructure-operations — link D, G, K, M
- Technology: Linux drivers (Ethernet, wireless,
  virtual/software), Linux network stack, kernel
  subsystems, NOS (Quagga legacy / FRRouting current),
  ISP tiers (Tier-3 local, Tier-2 regional, Tier-1
  global backbone), interconnection, DNS, spectrum,
  security, observability, SD-WAN, NFV.
- Link: Card D (NIC/kernel stack), Card G (Govt
  Network Series), Card K (scheduler, allocation),
  Card M (radio spectrum, stations, transmitters).
- New detail, not in A–K: full ISP tier maps by
  region, end-to-end ISP-to-user stack, dedicated vs
  leased line, submarine fiber + multi-region app
  architecture.

### institutions-markets — link B, G, L, M
- Technology + Bussiness: spectrum allocation,
  DNS visibility, government control, regulators,
  market ownership pyramid, government-regulated /
  public / semi-public / private / individual /
  cloud & AI markets.
- Link: Card B (directory to DNS, regulation),
  Card G (government layer, global oversight),
  Card L (employer/employee regulation),
  Card M (FCC, radio regulation).
- New detail: regulator-by-region lists, ownership
  models, market pyramid (government → public →
  semi-public → private → individual → cloud/AI).

### stories — story and history, WHOLE, not broken as parts (owner correction 2026-10-30)
- Correction supersedes any part-splitting: story and
  history are NOT broken into parts. They go, whole,
  into the earlier Stories domain (local draft:
  handbook-content-stories/stories-notes.md, id:
  stories, title: Stories, Story A + Story B).
- Bussiness + Combined story/history material —
  Telegraph → Telephone → Mainframes → Client-Server
  → Web 1.0/2.0 → Mobile & Cloud → 5G & AI, Master
  Era Record, Unix before/after — links to that
  Stories domain as ONE continuous story, not as
  separate per-era cards.
- Link: Card A (origins), Card H (UI eras),
  Card I (tech leadership eras), Card J (six eras,
  three lenses). Canonical Cards A–H remain unchanged;
  Stories aggregate and link back, per the owner-ordered
  R17 exception for reading paths only.
- Quantum/BCI forecast stays a separate, flagged
  section, not part of the verified story spine.

### industrial-business-networks — link E, F, I, J, K, L
- Bussiness: ERP (MRP → ERP → ERP II → Cloud/SaaS
  → Postmodern → Intelligent → ERP+Blockchain),
  OEM integration, monopolistic business networks,
  global supply chain endpoints, scheduler comparison
  (electricity ↔ networking ↔ business/finance),
  BNOS, dual markets, global selling, trade stack,
  autonomous systems, business promotion, CLI as
  business control panel.
- Link: Card E (product approval), Card F (universal
  product, four flows), Card I/J (leadership,
  business controller), Card K (scheduler),
  Card L (employer/employee).
- New detail: full ERP lineage, OEM eras, monopoly
  eras, supply-chain endpoint types, BNOS parent–
  child trees, promotion funnels (packet analogy
  only).

### software-engineering-development — link H, J, career path
- Technology: Linux kernel subsystems, Web & API
  protocols (transport, ports, device path),
  virtualization & containers, cloud platforms,
  CLI evolution, case-study stacks.
- Link: Card H, Card J (software-engineering-
  development is branch-only in Handbook today).
- Career path fill: this domain fills career-path
  gaps that were GAP in Handbook alone — Linux,
  virtualization, containers, cloud, security —
  now as RESEARCH-linked chapters, not as original
  notes. Labelled research, not original, in archive.

## Career path — now linkable, as research
- Computer architecture → Technology: hardware,
  NICs, data center hardware. Link C/D.
- Linux → Technology: Linux drivers, network stack,
  kernel subsystems, Unix. Previously GAP, now
  research-linked.
- Networking → Technology: ISP tiers, backbone,
  interconnection, DNS, protocols. Link B/D/G.
- Virtualization → Technology: virtual/software
  drivers, virtualization & containers, NFV.
  Previously GAP, now research-linked.
- Cloud → Technology: cloud platforms, multi-region
  architecture, CDN, observability. Link I/J.
- Containers → Technology: virtualization &
  containers, Kubernetes in case-study stacks.
  Previously GAP, now research-linked, partial.
- Kubernetes → Technology: case-study stacks only.
  Still partial — no dedicated Kubernetes chapter
  in research files, flagged as partial, not invented.
- DevOps → Technology: observability, deployment,
  canary, feature flags, operations sections.
  Partial, and DevOps remains an R16 future domain
  in Handbook — research link does NOT create the
  Handbook domain by itself.
- SRE → Technology: observability, security,
  remediation, operations. Partial, research-linked.
- Security → Technology: security architecture,
  attacks, Zero Trust, compliance overlays.
  Previously GAP as a chapter, now research-linked.

## Industry path — now linkable, as research
- Communication history → Bussiness eras, Technology
  ISP/backbone history. Link A/H/J.
- Industrial development → OEM, monopolies, ERP eras.
  Link H/I/J.
- Standards → Spectrum, DNS, regulators, standards
  bodies in research files. Link B/G/M.
- Supply chains → Global supply chain endpoints,
  OEM, BNOS trade stack. Link C/F/G.
- Business models → ERP/SaaS, BNOS, promotion,
  dual markets. Link I/J.
- Finance → Scheduler/finance comparison, market
  pyramid, business/finance mapping. Link K/L.
- Regulations → Government control, regulators,
  oversight plane, audit checklist. Link B/E/G/L/M.
- Product strategy → Product approval, startup
  model, BNOS expansion, go-to-market. Link E/I.

## Held / excluded — do NOT integrate as Handbook fact
- Royal Salon App end-to-end journey (Technology):
  HELD. Royal Salon is a separate project wall.
  Do NOT integrate a Royal Salon case study into
  Handbook. Link only if owner explicitly overrules
  the project wall, with that overrule recorded.
- GradeSpot examples (Bussiness, Combined):
  HELD as source-only, not verified. Bank of
  America as GradeSpot finance driver is NOT
  verified, gsitssolutions.com / NH LLC / "already
  incorporated" are source examples only. Do NOT
  present them as Handbook facts. GradeSpot wall
  also separate.
- High Grades App case studies (Technology):
  HELD as illustrative case-study examples, not
  verified architectures. Link as "case study
  example" only, not as a Handbook card.
- Quantum / BCI 2040s, thought-based interfaces,
  autonomous AI-agent trade: FORECAST, not current
  standards, not verified timelines. Keep forecast
  flag, never upgrade to fact.
- OPT / visa paths, founder/share, entity models:
  GENERAL INFORMATION ONLY, NOT LEGAL ADVICE.
  Also flagged as conflicting with recorded facts
  (Master's in Computer Science, Rivier, May 2025;
  back in Hyderabad Dec 2025; OPT timing likely
  passed). Do NOT integrate visa timelines into
  Handbook as advice.
- Analogies: Airport model, kernel ↔ government,
  kernel ↔ business, scheduler ↔ finance, packet
  ↔ promotion, etc. are ANALOGIES ONLY, not
  literal fact. Keep analogy-only flag on every
  integrated link that uses them.

## What integration is NOT
- NOT a copy of 5,178 lines into the repo.
- NOT new duplicate cards for sections already
  in A–M.
- NOT a new domain in categories.json. Research
  sections map to existing domains, as lenses.
  A new domain, if ever needed, follows R16:
  record before use, on first use, with justifying
  images/pages — research files alone do not create
  it.
- NOT a push. This map is local only. Push to repo
  and any dev build happen only on owner's tap,
  with the held items above still held.
