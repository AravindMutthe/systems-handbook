// Architecture — components: Hero / Search / Domains / Row / Viewer / Motion.
// Data contracts (v1):
//  categories.json = [{id, title, description, action, core}] — CORE, STANDARD
//    domains. Add an entry here and a new vertical domain section appears
//    automatically; no code change. More domains will come as notes grow.
//  notes.json = array, or {version, notes}. v1 fields: id, title, domain,
//    topic, date, file, caption. v2 (backward compatible, all optional
//    except id/title/domain): transcription (searchable full text from the
//    page), chapter, section, parentId, order (hierarchy),
//    related: [id] (relationships), tags: [string],
//    revisions: [{version, date, change}], evidenceStatus:
//    unverified|needs-review|verified, publication: {status:
//    draft|in-review|approved|published, approvedBy, approvedAt}.
//    A note's `domain` (or `topic`) must match a category id to appear
//    in that domain's row. Splitting notes by collection is the
//    horizontal-scaling path, same schema. See notes.schema.json.
let notes = [];
let categories = [];
let activeDomain = 'All';
// Safe rendering: ALL note/category data is untrusted once real or externally
// supplied content arrives. esc() is applied to every data value interpolated
// into innerHTML; internal DOMAIN_ART SVG is code, not data, and is the only
// unescaped HTML. safeFile() allows only in-repo relative image paths.
function esc(v) { return String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function safeFile(f) {
  if (typeof f !== 'string') return '';
  if (f.includes('..') || /["'<>\s]/.test(f) || /^[a-z][a-z0-9+.-]*:/i.test(f)) return '';
  if (!/^(notes\/|assets\/)?[A-Za-z0-9._\/-]+$/.test(f)) return '';
  return f;
}
function searchable(n) {
  return [n.title, n.topic, n.domain, n.caption, n.transcription, n.chapter, n.section, (n.tags || []).join(' ')].join(' ');
}
// Fallback = the same core domains as categories.json, so a single-file
// preview (where fetch fails) still shows the dynamic layout.
const FALLBACK_CATEGORIES = [
  {id:'institutions-markets', title:'Institutions & markets', description:'Communication systems, standards, industrial strategy, governance and competition.', action:'Start reading', core:true, emoji:'🏛️'},
  {id:'hardware-computing', title:'Hardware & computing', description:'Semiconductors, processing, memory, interface controllers and system architecture.', action:'Explore domain', core:true, emoji:'💻'},
  {id:'infrastructure-operations', title:'Infrastructure & operations', description:'Enterprise networking, operating systems, virtualization, artifacts and distributed design.', action:'Explore domain', core:true, emoji:'🌐'},
  {id:'systems-evolution', title:'Systems evolution', description:'How systems change over time — from earlier designs to later ones. Pages arriving with your next batches.', action:'Explore domain', core:true, emoji:'🧬'},
  {id:'industrial-business-networks', title:'Industrial & business networks', description:'Business networks, industries and organizations, and how they depend on systems. Pages arriving with your next batches.', action:'Explore domain', core:true, emoji:'🏭'},
];
// Art, illustration and animation, related to each domain — local SVG, no external images.
// Each domain gets: an emoji, and an animated SVG scene in its header art strip.
const DOMAIN_ART = {
  'institutions-markets': {emoji:'🏛️', art:'<svg viewBox="0 0 300 80" aria-hidden="true"><rect x="20" y="30" width="70" height="40" rx="6" fill="#eef2f5"/><rect x="110" y="18" width="14" height="34" fill="#d9a441" class="bar"/><rect x="132" y="28" width="14" height="24" fill="#1f2a33" class="bar"/><rect x="154" y="10" width="14" height="42" fill="#d9a441" class="bar"/><path d="M200 60 L250 30 L290 45" stroke="#8a6d1b" stroke-width="3" fill="none" class="draw"/></svg>'},
  'hardware-computing': {emoji:'💻', art:'<svg viewBox="0 0 300 80" aria-hidden="true"><rect x="110" y="15" width="80" height="50" rx="8" fill="#1f2a33"/><rect x="135" y="32" width="30" height="16" fill="#d9a441" class="pulse"/><line x1="110" y1="30" x2="95" y2="30" stroke="#8a6d1b" stroke-width="3"/><line x1="110" y1="50" x2="95" y2="50" stroke="#8a6d1b" stroke-width="3"/><line x1="190" y1="30" x2="205" y2="30" stroke="#8a6d1b" stroke-width="3"/><line x1="190" y1="50" x2="205" y2="50" stroke="#8a6d1b" stroke-width="3"/></svg>'},
  'infrastructure-operations': {emoji:'🌐', art:'<svg viewBox="0 0 300 80" aria-hidden="true"><circle cx="60" cy="40" r="16" fill="#eef2f5" stroke="#1f2a33" stroke-width="2"/><circle cx="150" cy="25" r="16" fill="#eef2f5" stroke="#1f2a33" stroke-width="2"/><circle cx="240" cy="45" r="16" fill="#eef2f5" stroke="#1f2a33" stroke-width="2"/><line x1="76" y1="36" x2="134" y2="28" stroke="#d9a441" stroke-width="3" class="draw"/><line x1="166" y1="30" x2="224" y2="42" stroke="#d9a441" stroke-width="3" class="draw"/></svg>'},
  'systems-evolution': {emoji:'🧬', art:'<svg viewBox="0 0 300 80" aria-hidden="true"><path d="M20 60 Q90 10 160 40 T290 25" stroke="#8a6d1b" stroke-width="3" fill="none" class="draw"/><circle cx="20" cy="60" r="7" fill="#d9a441"/><circle cx="110" cy="35" r="7" fill="#1f2a33"/><circle cx="200" cy="38" r="7" fill="#d9a441"/><circle cx="290" cy="25" r="7" fill="#1f2a33"/></svg>'},
  'industrial-business-networks': {emoji:'🏭', art:'<svg viewBox="0 0 300 80" aria-hidden="true"><rect x="30" y="30" width="80" height="40" fill="#eef2f5" stroke="#1f2a33" stroke-width="2"/><rect x="130" y="45" width="60" height="25" fill="#eef2f5" stroke="#1f2a33" stroke-width="2"/><circle cx="200" cy="55" r="14" fill="none" stroke="#d9a441" stroke-width="3" class="spin"/><circle cx="240" cy="55" r="14" fill="none" stroke="#1f2a33" stroke-width="3" class="spin"/></svg>'},
};
async function loadJson(path, fallback) {
  try { const res = await fetch(path); if (!res.ok) throw new Error(res.status); return await res.json(); }
  catch (e) { return fallback; }
}
async function load() {
  const cats = await loadJson('categories.json', FALLBACK_CATEGORIES);
  categories = Array.isArray(cats) ? cats : (cats.categories || FALLBACK_CATEGORIES);
  // Primary model is now content.json (v3, versioned, all collections).
  // notes.json is only a backward-compatible fallback, not the model.
  const content = await loadJson('content.json', null);
  if (content && Array.isArray(content.notes)) { notes = content.notes; }
  else if (content && content.collections && Array.isArray(content.collections.notes)) { notes = content.collections.notes; }
  else { const data = await loadJson('notes.json', []); notes = Array.isArray(data) ? data : (data.notes || []); }
  // Privacy + publication enforcement (public view only):
  // a note is shown ONLY if privacy === 'public' AND publication is
  // 'published' (publication.status, or reviewStatus === 'published').
  // Approved is NOT published. No privacy/publication fields = NOT shown.
  // Held notes are counted only — never titled, captioned or listed here.
  const allNotes = notes;
  notes = allNotes.filter(isPubliclyVisible);
  heldCount = allNotes.length - notes.length;
  document.getElementById('stat-pages').textContent = notes.length ? `${notes.length} page${notes.length === 1 ? '' : 's'} · ${categories.length} domains` : `${categories.length} core domains · 0 pages yet — template`;
  const qParam = new URLSearchParams(location.search).get('q');
  if (qParam) { const inp = document.getElementById('search'); if (inp) inp.value = qParam; }
  renderTopics(); render(); observeReveals();
}
function renderTopics() {
  const el = document.getElementById('topics'); el.innerHTML = '';
  const opts = ['All', ...categories.map(c => c.id)];
  opts.forEach(id => {
    const b = document.createElement('button');
    const catForChip = categories.find(c => c.id === id);
    b.textContent = id === 'All' ? 'All domains' : ((catForChip && catForChip.emoji ? catForChip.emoji + ' ' : '') + (catForChip ? catForChip.title : id));
    if (id === activeDomain) b.className = 'active';
    b.onclick = () => { activeDomain = id; renderTopics(); render(); };
    el.appendChild(b);
  });
}
function noteDomain(n) { return n.domain || n.topic || ''; }
function isPubliclyVisible(n) {
  if (!n || n.privacy !== 'public') return false;
  if (n.publication && n.publication.status === 'published') return true;
  if (n.reviewStatus === 'published') return true;
  return false;
}
let heldCount = 0;
function render() {
  const q = (document.getElementById('search').value || '').toLowerCase();
  // Samples only when there are NO notes at all — not when notes exist
  // but are all held back by privacy/publication enforcement.
  const showingSamples = notes.length === 0 && heldCount === 0;
  // Real notes, filtered; or, while empty, 3 sample cards per domain so
  // every horizontal row is visible for design review.
  const list = document.getElementById('domain-list'); list.innerHTML = '';
  const shownCats = categories.filter(c => activeDomain === 'All' || c.id === activeDomain);
  let total = 0;
  shownCats.forEach(cat => {
    // Real cards: primary card in its own domain, plus related
    // cards in every related domain, as cards — not samples, not links only.
    let pages = notes.filter(n => noteDomain(n) === cat.id || noteDomain(n) === cat.title || (Array.isArray(n.relatedDomains) && n.relatedDomains.includes(cat.id)));
    // Ordered / sequenced: learning order is the notes array order (Card A=1 … Card E=5),
    // not domain-local order, and not nested by primary/related. Flat grid, in sequence.
    pages = pages.slice().sort((a, b) => notes.indexOf(a) - notes.indexOf(b));
    if (q) pages = pages.filter(n => searchable(n).toLowerCase().includes(q));
    if (showingSamples) pages = Array.from({length: 3}, () => ({title:'Sample page — layout only', topic:cat.title, domain:cat.id, caption:'A ruled-paper placeholder showing how a real page card will look. Not a real note.'}));
    total += pages.length;
    const section = document.createElement('section'); section.className = 'domain reveal in';
    const art = DOMAIN_ART[cat.id] || {emoji: cat.emoji || '📄', art: ''};
    section.innerHTML = activeDomain === 'All'
      ? `<div class="domain-head"><div class="domain-emoji" aria-hidden="true">${esc(art.emoji)}</div><h3>${esc(cat.title)}</h3></div><p class="domain-desc">${esc(cat.description)}</p><button type="button" class="domain-action">${esc(cat.action || 'Explore domain')} →</button><div class="domain-art" aria-hidden="true">${art.art}</div>`
      : `<div class="domain-head"><div class="domain-emoji" aria-hidden="true">${esc(art.emoji)}</div><h3>Exploring: ${esc(cat.title)}</h3></div><p class="domain-desc">Cards in learning order, flat grid — not nested cards.</p>`;
    // Integration: tapping a domain's action filters the whole homepage to that domain.
    const _da = section.querySelector('.domain-action'); if (_da) _da.onclick = () => { activeDomain = cat.id; renderTopics(); render(); document.getElementById('domains').scrollIntoView({behavior:'smooth'}); };
    const row = document.createElement('div'); row.className = 'row';
    if (pages.length === 0) {
      row.innerHTML = `<p class="row-empty">No pages in this domain yet — they will appear here as you send them.</p>`;
    } else {
      pages.forEach((n, i) => {
        const card = document.createElement('button'); card.className = 'card'; card.style.animationDelay = `${i * 60}ms`;
        // Subcard / nested card: related cover art as a LOW-OPACITY background image,
        // NOT a hard half-split. The cover fades with a gradient into the text area,
        // so image → text is soft. Text half = key points / short notes, not a wall.
        // Cover source: for a real note, its own page image; for a sample, the domain's
        // related local illustration (same art as the domain header, open/local SVG, no hotlink).
        // Key points for samples come ONLY from the domain description (split on commas),
        // never invented note content. For real notes, key points come from the caption.
        const artForCard = DOMAIN_ART[cat.id] || {emoji: cat.emoji || '📄', art: ''};
        const file = safeFile(n.file);
        const poster = safeFile(n.poster);
        const cover = poster
          ? `<img class="cover-img" src="${esc(poster)}" alt="" loading="lazy">`
          : file
          ? `<img class="cover-img" src="${esc(file)}" alt="" loading="lazy">`
          : `<div class="cover-art" aria-hidden="true">${artForCard.art}<span class="cover-emoji">${esc(artForCard.emoji)}</span></div>`;
        const keySource = showingSamples ? cat.description : (n.caption || n.title || '');
        const keys = Array.isArray(n.keys) && n.keys.length ? n.keys.slice(0, 3) : keySource.split(/[,;]/).map(s => s.replace(/^\s*and\s+/i, '').trim()).filter(Boolean).slice(0, 3);
        const crossTerm = s => { const terms = 'trading speed|data lane|management lane|kernel stack|signalling|directory|endpoint|hierarchy|hierarchical|allocation|regulation|coordination|trading|business|market|customer|vendor|company|approval|network|product|silicon|stack|lane|gate'; return s.split(/(<strong>.*?<\/strong>|<strong><em>.*?<\/em><\/strong>)/g).map(seg => (seg.startsWith('<strong>') ? seg : seg.replace(new RegExp('\\b(' + terms + ')\\b', 'gi'), '<span class="cross-term">$1</span>'))).join(''); };
        const italicBold = s => { const names = 'Ciudad del Carmen|Broadcom|Verizon|Lenovo|Nvidia|Intel|Dell|Cisco|AT&T|Jio|AWS|GCP|DARPA|ARPANET|IETF|IEEE|3GPP|FCC|TRAI|ICANN|ARIN|RIPE|APNIC|DRDO|NASA|India|USA|Internet|HPE|Nginx|Apache'; return s.split(/(<strong>.*?<\/strong>)/g).map(seg => seg.startsWith('<strong>') ? seg.replace(new RegExp('\\b(' + names + ')\\b', 'g'), '<em>$1</em>') : seg.replace(new RegExp('\\b(' + names + ')\\b', 'g'), '<strong><em>$1</em></strong>')).join(''); };
        const boldLead = k => { const e = esc(k); for (const sep of [': ', ' = ', ' — ']) { const i = e.indexOf(sep); if (i >= 3 && i <= 60) return `<strong>${e.slice(0, i + sep.length).trimEnd()}</strong>${e.slice(i + sep.length)}`; } return e; };
        const keyHtml = keys.length ? `<p class="key-headline">Key points</p><ul class="key-points">${keys.map(k => `<li>${crossTerm(italicBold(boldLead(k)))}</li>`).join('')}</ul>` : '';
        const hierHtml = [n.chapter, n.section].filter(Boolean).length ? `<p class="card-hier">${esc([n.chapter, n.section].filter(Boolean).join(' · '))}</p>` : '';
        const evHtml = n.evidenceStatus && n.evidenceStatus !== 'unverified' ? `<span class="evidence evidence-${esc(n.evidenceStatus)}">${esc(n.evidenceStatus)}</span>` : '';
        const pubHtml = (n.reviewStatus || (n.publication && n.publication.status)) && (n.reviewStatus || n.publication.status) !== 'published' ? `<span class="pub pub-${esc(n.reviewStatus || n.publication.status)}">${esc(n.reviewStatus || n.publication.status)}</span>` : '';
        const num = String(notes.indexOf(n) + 1 || i + 1).padStart(2, '0');
        const isRelated = Array.isArray(n.relatedDomains) && n.relatedDomains.includes(cat.id) && noteDomain(n) !== cat.id && noteDomain(n) !== cat.title;
        const relHtml = isRelated ? '<span class="badge">RELATED</span>' : '';
        card.innerHTML = `<span class="card-number" aria-hidden="true">${num}</span><div class="card-cover">${cover}<div class="card-fade" aria-hidden="true"></div><div class="cover-label" aria-hidden="true">${showingSamples ? 'Your handwritten page will appear here' : ''}</div></div><div class="card-body">${showingSamples ? '<span class="badge">SAMPLE</span>' : ''}${relHtml}${evHtml}${pubHtml}<h4>${esc(n.title)}</h4><p>${esc([n.subject, n.topic || cat.title, n.sourceDate || n.date].filter(Boolean).join(' · '))}</p>${hierHtml}${keyHtml}</div>`;
        // Real cards navigate to their real page, not to the sample topic page.
        card.onclick = () => {
          if (n.page) { location.href = n.page; return; }
          const q = new URLSearchParams({domain: cat.id, topic: showingSamples ? cat.title : (n.topic || cat.title), title: showingSamples ? cat.title : (n.title || cat.title)});
          if (n.id) q.set('id', n.id);
          if (file) q.set('file', file);
          if (n.caption) q.set('caption', n.caption);
          location.href = 'topic.html?' + q.toString();
        };
        row.appendChild(card);
      });
    }
    section.appendChild(row); list.appendChild(section);
  });
  document.getElementById('count').textContent = showingSamples ? 'Sample layout · core domains' : `${total} page${total === 1 ? '' : 's'}`;
  document.getElementById('empty').hidden = shownCats.length > 0;
  document.getElementById('sample-note').hidden = !showingSamples;
  const heldEl = document.getElementById('held-note');
  if (heldEl) {
    heldEl.hidden = heldCount === 0;
    if (heldCount > 0) heldEl.textContent = heldCount + ' note' + (heldCount === 1 ? '' : 's') + ' held back — not public and published, so ' + (heldCount === 1 ? 'it is' : 'they are') + ' not shown here. No titles or details are listed for held notes.';
  }
}
function openViewer(n) {
  const v = document.getElementById('viewer'); v.hidden = false;
  const file = safeFile(n.file);
  const img = document.getElementById('viewer-img');
  img.src = file; img.alt = n.title || '';
  document.getElementById('viewer-title').textContent = n.title || '';
  document.getElementById('viewer-meta').textContent = [n.subject, n.topic || n.domain, n.sourceDate || n.date, n.chapter, n.section, n.privacy, n.reviewStatus || (n.publication && n.publication.status)].filter(Boolean).join(' · ');
  document.getElementById('viewer-caption').textContent = n.caption || '';
  const orig = document.getElementById('viewer-original');
  if (file) { orig.href = file; orig.hidden = false; } else { orig.removeAttribute('href'); orig.hidden = true; }
  const trans = document.getElementById('viewer-transcription');
  if (trans) { trans.textContent = n.transcription || ''; trans.hidden = !n.transcription; }
}
function observeReveals() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold: .15});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}
function renderSuggestions() {
  const input = document.getElementById('search');
  const box = document.getElementById('suggestions');
  const q = (input.value || '').trim().toLowerCase();
  if (!q) { box.hidden = true; box.innerHTML = ''; return; }
  // Autocomplete: domain titles first, then page titles that match.
  const domainHits = categories.filter(c => c.title.toLowerCase().includes(q)).map(c => ({label: c.title, sub: 'Domain', apply: () => { activeDomain = c.id; input.value = c.title; renderTopics(); }}));
  const pageSource = notes.length ? notes : Array.from({length: 3}, () => ({title:'Sample page — layout only', topic:'Sample'}));
  const pageHits = pageSource.filter(n => n.title.toLowerCase().includes(q)).slice(0, 4).map(n => ({label: n.title, sub: n.topic || 'Page', apply: () => { input.value = n.title; }}));
  const hits = [...domainHits, ...pageHits].slice(0, 6);
  if (!hits.length) { box.hidden = true; box.innerHTML = ''; return; }
  box.hidden = false; box.innerHTML = '';
  hits.forEach(h => {
    const b = document.createElement('button'); b.type = 'button';
    b.textContent = h.label;
    const sm = document.createElement('small'); sm.textContent = h.sub; b.appendChild(sm);
    b.onclick = () => { h.apply(); box.hidden = true; render(); input.focus(); };
    box.appendChild(b);
  });
}
document.getElementById('close').onclick = () => { document.getElementById('viewer').hidden = true; };
// Floating dark/light toggle, entire site. Default = dark (Style 2, his last choice);
// a saved choice wins on return. Light = paper site, cards white; dark = whole site dark, cards dark.
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  try { localStorage.setItem('theme', theme); } catch (e) {}
}
let savedTheme = 'dark';
try { savedTheme = localStorage.getItem('theme') || 'dark'; } catch (e) {}
applyTheme(savedTheme === 'light' ? 'light' : 'dark');
document.getElementById('theme-toggle').onclick = () => {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
};
document.getElementById('search').addEventListener('input', () => { render(); renderSuggestions(); });
document.addEventListener('click', e => { if (!e.target.closest('.search')) document.getElementById('suggestions').hidden = true; });
load();
