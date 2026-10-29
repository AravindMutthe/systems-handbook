// Architecture — components: Hero / Search / Domains / Row / Viewer / Motion.
// Data contracts (v1):
//  categories.json = [{id, title, description, action, core}] — CORE, STANDARD
//    domains. Add an entry here and a new vertical domain section appears
//    automatically; no code change. More domains will come as notes grow.
//  notes.json = array, or {version, collections, notes}. A note's `domain`
//    (or `topic`) must match a category id to appear in that domain's row.
//    Splitting notes by collection is the horizontal-scaling path, same schema.
let notes = [];
let categories = [];
let activeDomain = 'All';
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
  const data = await loadJson('notes.json', []);
  notes = Array.isArray(data) ? data : (data.notes || []);
  document.getElementById('stat-pages').textContent = notes.length ? `${notes.length} page${notes.length === 1 ? '' : 's'} · ${categories.length} domains` : `${categories.length} core domains · 0 pages yet — template`;
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
function render() {
  const q = (document.getElementById('search').value || '').toLowerCase();
  const showingSamples = notes.length === 0;
  // Real notes, filtered; or, while empty, 3 sample cards per domain so
  // every horizontal row is visible for design review.
  const list = document.getElementById('domain-list'); list.innerHTML = '';
  const shownCats = categories.filter(c => activeDomain === 'All' || c.id === activeDomain);
  let total = 0;
  shownCats.forEach(cat => {
    let pages = notes.filter(n => noteDomain(n) === cat.id || noteDomain(n) === cat.title);
    if (q) pages = pages.filter(n => [n.title, n.topic, n.domain, n.caption].join(' ').toLowerCase().includes(q));
    if (showingSamples) pages = Array.from({length: 3}, () => ({title:'Sample page — layout only', topic:cat.title, domain:cat.id, caption:'A ruled-paper placeholder showing how a real page card will look. Not a real note.'}));
    total += pages.length;
    const section = document.createElement('section'); section.className = 'domain reveal in';
    const art = DOMAIN_ART[cat.id] || {emoji: cat.emoji || '📄', art: ''};
    section.innerHTML = `<div class="domain-head"><div class="domain-emoji" aria-hidden="true">${art.emoji}</div><div><h3>${cat.title}</h3><p>${cat.description}</p></div><button type="button" class="domain-action">${cat.action || 'Explore domain'} →</button></div><div class="domain-art" aria-hidden="true">${art.art}</div>`;
    // Integration: tapping a domain's action filters the whole homepage to that domain.
    section.querySelector('.domain-action').onclick = () => { activeDomain = cat.id; renderTopics(); render(); document.getElementById('domains').scrollIntoView({behavior:'smooth'}); };
    const row = document.createElement('div'); row.className = 'row';
    if (pages.length === 0) {
      row.innerHTML = `<p class="row-empty">No pages in this domain yet — they will appear here as you send them.</p>`;
    } else {
      pages.forEach((n, i) => {
        const card = document.createElement('button'); card.className = 'card'; card.style.animationDelay = `${i * 60}ms`;
        const visual = n.file ? `<img src="${n.file}" alt="" loading="lazy">` : `<div class="paper"><span class="paper-emoji" aria-hidden="true">${(DOMAIN_ART[cat.id] || {}).emoji || cat.emoji || '📄'}</span>Your handwritten page<br>will appear here</div>`;
        card.innerHTML = `${visual}<div>${showingSamples ? '<span class="badge">SAMPLE</span>' : ''}<h4>${n.title}</h4><p>${[n.topic || cat.title, n.date].filter(Boolean).join(' · ')}</p></div>`;
        card.onclick = () => { if (n.file) openViewer(n); };
        row.appendChild(card);
      });
    }
    section.appendChild(row); list.appendChild(section);
  });
  document.getElementById('count').textContent = showingSamples ? 'Sample layout · core domains' : `${total} page${total === 1 ? '' : 's'}`;
  document.getElementById('empty').hidden = shownCats.length > 0;
  document.getElementById('sample-note').hidden = !showingSamples;
}
function openViewer(n) {
  const v = document.getElementById('viewer'); v.hidden = false;
  document.getElementById('viewer-img').src = n.file; document.getElementById('viewer-img').alt = n.title;
  document.getElementById('viewer-title').textContent = n.title;
  document.getElementById('viewer-meta').textContent = [n.topic || n.domain, n.date].filter(Boolean).join(' · ');
  document.getElementById('viewer-caption').textContent = n.caption || '';
  document.getElementById('viewer-original').href = n.file;
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
    b.innerHTML = `${h.label}<small>${h.sub}</small>`;
    b.onclick = () => { h.apply(); box.hidden = true; render(); input.focus(); };
    box.appendChild(b);
  });
}
document.getElementById('close').onclick = () => { document.getElementById('viewer').hidden = true; };
document.getElementById('search').addEventListener('input', () => { render(); renderSuggestions(); });
document.addEventListener('click', e => { if (!e.target.closest('.search')) document.getElementById('suggestions').hidden = true; });
load();
