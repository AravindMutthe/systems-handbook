Build note for card pages: transcription bracket markers ([cut off], [unclear], [no value...], etc.) and truncated-word corrections live ONLY inside "Original images +" dropdown, never in Detailed explanation or Key points. Main page shows corrected / as-written words, clean. Full marked transcription is in the batch intake file (archive, local). [crossed out] is kept where it is original state on the page, not a fill-in label.

# Batch 2 notes — HELD, not published

Status: privacy = private, reviewStatus = draft, publication NOT
published. Original images are NOT pushed to the public repo.
Pushed to git 2026-10-29 (batch2-notes.md commit 7996b59b,
batch2-cards.json commit e6b16a3f).

Audit update 2026-10-29: this file was checked against current
rules.md (48,049 bytes, repo SHA 6124e90c, including the new
"Relationship kinds in enhanced diagrams" rule) and requirements.md
R1–R17 (20,810 bytes, repo SHA f349da2b). Fixes made in this audit:
relationship-kind labels on every enhanced diagram arrow below.
R15 was already met in this batch (original headlines first).
Open items carried forward: R15 batch 1 titles — fixed in batch 1
in this same audit, see batch1-notes.md; R17 story spine vs the
earlier related-cards rule is still awaiting the owner's call
before any site change.

Arrow kinds in enhanced diagrams below, in text form (site SVG
rendering is development's job; the kind for every arrow is given here):
[Historical] → = what came before, with era/date.
[Depends on] ⇒ = dependent → dependency.
[Organizational: verb] ═> = manufactures / regulates / owns / operates / supplies / implements / sets standards / enforces / certifies.
[Data: …] - - > = information travels in that direction.
[Commands] ▶▶ = controller → controlled, commands / decides.
[Sequence] –> = learning order only, NOT a relationship claim.
[Flow: physical goods] = goods flow, not data flow.

Learning order, provisional: Card F → Card G → Card H.

---

## Card F

### Original headline first
**Univescal product / Business (network / Standards**

### Enhanced headline [Added, labelled, related only]
The universal product: four parallel flows, cross flow, and the full value chain

### Story place
systems-evolution — whole system first.
Technical perspectives: industrial-business-networks,
infrastructure-operations, institutions-markets.

### Original notes
- Thier strenths
- ① four parallel flows (communication)
  - communication → trade → speed → Tech
  - Spectrum = Tech + manu + s/w + Business
- ② Cross Flow
  - physical, informational, financial, rules
- ③ Tech Integration (N/w)
  - mapping → IOT (Devices) across flow
  - Blockchain, AI/ML, APIs
- ④ Abstraction from goods of Spectrum
  - TO full Value chain is connec

### [Added] explanation
A universal product is not one thing. It is a spectrum — tech,
manufacturing, software, and business together — and its strength
is that it carries four things in parallel: the physical thing,
the information about it, the money for it, and the rules that
govern it. Communication makes trade faster, and that speed is
itself a technology advantage. Then technology is integrated
across that flow — devices on the network, ledgers, intelligence,
and interfaces — until the product is no longer just a good, but
a whole value chain, connected end to end.

### Enhanced diagram [Added, different style, never replacing the original, arrows labelled by kind]
Spectrum (Tech + manufacturing + software + Business)
–[Sequence]–> four parallel flows.
[Data: trade information] communication - - > trade - - > speed,
with Tech as the outcome of that speed, not a separate data step.
[Flow: physical goods] + [Data: information] + [Flow: money] +
[Organizational: rules] = Cross Flow (physical / informational /
financial / rules) — four flows, drawn as four separate flows, not one arrow.
[Depends on] Tech Integration ⇒ the flow: IoT devices, Blockchain,
AI/ML, APIs depend on the network flow to work across it.
[Sequence] Abstraction from goods –> full value chain, connected.
This last arrow is summary order, not a dependency claim.

### Horizontal links
- Trade / speed thread → Batch 1, Card A (why networks exist)
- Spectrum / Tech + manufacturing thread → Batch 1, Card C (silicon → vendors)
- Network integration thread → Batch 1, Card D (NIC / kernel stack)

### Archive sources
hb-batch2-001 — 1000103106_58_nn6i.jpg. Full transcription in
batch2-intake.md. Source date: null (no date on page).

---

## Card G

### Original headlines first, in story order
1. **Govt Layer (TO controll public** — hb-batch2-002
2. **Global Oversight** — hb-batch2-005
3. **Govt Network Series** — hb-batch2-003

### Enhanced headline [Added, labelled, related only]
Who controls and who builds: government layer, global oversight, and government networks

### Story place
systems-evolution — who controls it, who builds it.
Technical perspectives: institutions-markets (primary technical
lens), industrial-business-networks, infrastructure-operations,
hardware-computing.

### Original notes
Govt Layer:
- Add unifying layer to across all flows (Source – consumer)
- world TOP layer (global oversight); UN / WTO / Codex
- Countries, international bodies — ISB
- Regional Regulation, with (TRAI) (FCC); FDA → telecom, NHTSA →
  automotive, NIST → cybersecurity
- Sector standards: automotive – ISO; Electronics – UL, ROHS, WEE,
  PCI, DSI; healthcare – ICH, FDA, EMA, ISO; cloud – ISO + SOC2;
  Food & agriculture – HACCP, GFSI

Global Oversight:
- Global Oversight → International standard bodies → Regional
  Regulation → National Enforcement & certification → Industry &
  Sector Standards → market flow
- Standard bodies listed: ISO, IEC, IEEE, IETF, IAPP, ICANN / RIR
- Countries: GDPR / CCPA, FCC / CE, FERPA
- National bodies + labs; cybersecurity
- Market flow actors: suppliers & vendors → manufacturer →
  Distributors & Logistics → Retailers / platform → consumers

Govt Network Series (margin: Sep27 — month/day only, no year, NOT a source date):
- Series devices: routers, switches, firewalls, radio comm gear,
  video surveillance equipment
- Business H/W → manufacturers (make finished or unit equipment)
- Vendors give contracts, including all govt contracts: Cisco,
  Juniper N/W, Arista, Fortinet, Dell EMC, Huawei, ZTE, and others
- Suppliers → implementers → buyers sellers → Customers / Public
  (buyers – customers)
- Implementers → govt agencies, deploying networks for
  communication; layers between govt & public
- Management / public controllers from govt
- Created private networks for business needs, reported to govt
  as per regulations

### [Added] explanation
Government is added as a unifying layer across all flows, from
source to consumer, to control the public. Above countries sits
global oversight, then international standard bodies, then
regional regulation, then national enforcement and certification,
then industry and sector standards, and only then the market flow
itself — suppliers, manufacturers, distributors, retailers,
consumers. Government networks are built the same way the market
works, in reverse: a series is specified, manufacturers make the
hardware, vendors win the contracts, suppliers and implementers
deploy it, buyers and sellers transact, and the public uses it —
with management and public controllers from government closing
the loop, and private networks for business reported back to
government as per regulations.

[Added, labelled distinction, under R14 — not one hierarchy:]
The page draws this as one top-down chain, and that drawing is
preserved as written. In practice these bodies have different
legal powers and scopes: RIRs allocate regional number resources,
IETF sets Internet technical standards, IEEE sets standards across
electrical, electronics, and computing, ICANN handles names and
addresses, ISO/IEC set international standards, and FCC/TRAI are
national regulators. They are not a single chain of command.

[Added, labelled exclusion:] System Integrator, Operations Team,
regional-office example, VLAN deployment, and link-failure
monitoring are NOT on the original page and are NOT used here
as if they were.

### Enhanced diagram [Added, different style, never replacing the original, arrows labelled by kind]
[Organizational: controls] Govt layer (control public, unifying
layer across all flows) ═> Global Oversight.
[Organizational: oversees] Global Oversight ═> International
standard bodies.
[Organizational: sets standards] International standard bodies
═> Regional Regulation (TRAI, FCC, FDA, NHTSA, NIST).
[Organizational: regulates] Regional Regulation ═> National
Enforcement & certification.
[Organizational: enforces / certifies] National Enforcement ═>
Industry & Sector Standards (automotive, electronics, health,
cloud, food & agriculture).
[Organizational: supplies] Market flow: suppliers ═> manufacturer
═> distributors ═> retailers ═> consumers. This is a supply chain,
not a single hierarchy — each verb above is the specific
organizational relationship at that step, under R14.
[Organizational: manufactures] Govt Network Series (routers,
switches, firewalls, radio, video) ═> Manufacturers ═> Vendors
(contracts) ═> Suppliers ═> Implementers ═> Buyers / Sellers ═>
Customers / Public.
[Commands] Management / public controllers from govt ▶▶ the
network and the market (loop back): control flow, drawn separately
from the supply chain above.

### Horizontal links
- FCC / TRAI thread → Batch 1, Card B (directory → DNS, FCC 1934)
  and Card E (FCC approval gate)
- Standards bodies thread → Batch 1, Card B, under R14
- Vendors / manufacturers thread → Batch 1, Card C

### Archive sources
hb-batch2-002, hb-batch2-005, hb-batch2-003. Full transcriptions
in batch2-intake.md. Source dates: null for all three.

---

## Card H

### Original headlines first, in chronological order (not receipt order)
1. **UI frameworks Evolution** — Telegraph Networks (1850 – 1940)
   + main frame & early computing — hb-batch2-007
2. **PC & client server era** + **internet & web era (1990 – 2001)** — hb-batch2-006
3. **mobile & cloud** + **5G & modern (2020 – Now)** — hb-batch2-004

### Enhanced headline [Added, labelled, related only]
How the interface changed: from telegraph keys to real-time, XR, and AI UI's

### Story place
systems-evolution — how people touch the system.
Technical perspectives: software engineering / development
(R16 future domain — see flag below), hardware-computing,
infrastructure-operations.

Flag [Added, for the owner, not a site change]: this batch
justifies first use of software engineering / development as a
technical perspective, grounded in these images (frameworks,
frontend, REST / GraphQL / gRPC, cloud native backend, mobile
apps, SaaS, micro frontend apps, cloud + Edge + AI).
categories.json must be updated before this perspective is used
on the site. That update is NOT made here and NOT pushed here.

### Original notes, by era, same four lenses each era
Telegraph Networks (1850 – 1940):
- UI mediums: Morse key, teletype, rotary — keys, switches, dials
- Frameworks: public – IMC; private – WU schemes, Bell switchboard
- Arch: Hardware only

main frame & early computing:
- UI mediums: Punch cards, CLI
- Frameworks: public – ASCII, TTY UI; private – IBM, terminal – H/W
- Arch: client → terminal – H/W
- Attributes: text only, cards, interactive, API → sys calls

PC & client server era:
- UI mediums: GUI Desktops (mac, windows)
- Frameworks: public – X11 (Linux GUI), Motif; private – MS Win 32,
  Apple toolbox
- Arch: monolithic UI → client ↔ server
- Attributes: Event driven (mouse, keyboard), multitaskin, Vendor
  lock-in (win only + mac on)

internet & web era (1990 – 2001):
- UI mediums: web browsers, interactive sites
- Frameworks: public – W3C → HTML / CSS / JS, JQuery, Dojo;
  private – Adobe, MS
- Arch: client – server (Chrome – HTTP)
- Attributes: HTML, Cross platform, Scripting (interactive)

mobile & cloud:
- UI mediums: mobile apps, SaaS
- Frameworks: public – Bootstrap, AngularJS; private – IOS UI kit,
  Android SDK, Salesforce
- Arch: frontend frameworks (Component based), REST / GraphQL /
  GRPC, cloud native backend
- Attributes: responsive design, component reusability, app store
  distribution

5G & modern (2020 – Now):
- UI: Real time dashboards, XR, AI UI's
- Frameworks: public – web: react, Nextjs, Carbon Design; mobile:
  flutter, Jetpack, React Native; XR: WebXR, three.js; private:
  apple swift UI, google, ms flu UI
- Arch: micro frontend apps, cloud + Edge + AI, Real time
  (websockets, gRPC)
- Attributes: low latency UI, AI/ML, multi device

### [Added] explanation
The interface is the same question in every era, answered with
different hardware: what medium does a person use, what framework
is public and what is private, what architecture sits behind it,
and what does it feel like to use? Telegraph hardware only, then
cards and command lines, then graphical desktops locked to one
vendor, then browsers that run anywhere, then mobile apps and
cloud backends built from reusable components, then real-time,
low-latency, multi-device interfaces with XR and AI. The medium
changes, the framework split — public standards versus private
toolkits — stays, in every era.

[Added, labelled distinction:] Frameworks on the pages belong to
different categories — Bootstrap is a CSS framework, React /
AngularJS are UI frameworks, X11 / Motif are windowing systems —
and REST / GraphQL / gRPC are API styles / technologies, not UI
frameworks. The original grouping is preserved as written; this
distinction is added, labelled.

[Added, labelled exclusion:] No external images are used for
this card, and voice / spatial interfaces not on these pages
are not added as an era.

### Enhanced diagram [Added, different style, never replacing the original, arrows labelled by kind]
Timeline, left to right, one row per era, four columns per era
(UI mediums | Frameworks public/private | Arch | Attributes).
All arrows below are [Historical] only:
Telegraph (1850–1940, hardware only)
→ Mainframe (punch cards, CLI, terminal)
→ PC & client-server (GUI desktops, monolithic UI)
→ Internet & web (1990–2001, browsers, HTML/CSS/JS)
→ Mobile & cloud (apps, SaaS, component-based, cloud native)
→ 5G & modern (2020–Now, real-time dashboards, XR, AI UI's).
Explicitly NOT a dependency chain: a later era does not technically
depend on the earlier era in the way a driver depends on a kernel.
Dependency arrows, where they exist inside an era (for example,
a mobile app depends on its framework and on cloud native backend),
are drawn separately inside that era's Arch column, not as the
timeline arrow.

### Horizontal links
- Telegraph thread → Batch 1, Card A (origins, human → mechanical
  → electronic)
- Hardware thread → Batch 1, Card C (NIC endpoint, the hardware
  the UI runs on)
- Kernel / TCP/IP under the UI → Batch 1, Card D. Note, labelled:
  CLI is a UI medium here, and a management lane there — same
  word, different lane.
- Cloud / 5G thread → Batch 1, Card D (network device, TCP/IP)

### Archive sources
hb-batch2-007, hb-batch2-006, hb-batch2-004. Full transcriptions
in batch2-intake.md. Source dates: null for all three; era ranges
(1850–1940, 1990–2001, 2020–Now) are era ranges on the pages,
not source dates.

---

## Batch 2 held-back list

- All original images: held in private archive only, NOT pushed.
- All 7 notes: held, draft, NOT published.
- categories.json update for software engineering / development:
  flagged, NOT made, needs owner's call.
- No other item held back for privacy: no digit string, no
  personal-names list on these pages.
