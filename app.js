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
  {id:'institutions-markets', title:'Institutions & markets', description:'Communication systems, standards, industrial strategy, governance and competition.', action:'Start reading', core:true},
  {id:'hardware-computing', title:'Hardware & computing', description:'Semiconductors, processing, memory, interface controllers and system architecture.', action:'Explore domain', core:true},
  {id:'infrastructure-operations', title:'Infrastructure & operations', description:'Enterprise networking, operating systems, virtualization, artifacts and distributed design.', action:'Explore domain', core:true},
  {id:'systems-evolution', title:'Systems evolution', description:'How systems change over time — from earlier designs to later ones. Pages arriving with your next batches.', action:'Explore domain', core:true},
  {id:'industrial-business-networks', title:'Industrial & business networks', description:'Business networks, industries and organizations, and how they depend on systems. Pages arriving with your next batches.', action:'Explore domain', core:true},
];
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
    b.textContent = id === 'All' ? 'All domains' : (categories.find(c => c.id === id) || {}).title || id;
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
    section.innerHTML = `<div class="domain-head"><div><h3>${cat.title}</h3><p>${cat.description}</p></div><span class="domain-action">${cat.action || 'Explore domain'} →</span></div>`;
    const row = document.createElement('div'); row.className = 'row';
    if (pages.length === 0) {
      row.innerHTML = `<p class="row-empty">No pages in this domain yet — they will appear here as you send them.</p>`;
    } else {
      pages.forEach((n, i) => {
        const card = document.createElement('button'); card.className = 'card'; card.style.animationDelay = `${i * 60}ms`;
        const visual = n.file ? `<img src="${n.file}" alt="" loading="lazy">` : `<div class="paper">Your handwritten page<br>will appear here</div>`;
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
