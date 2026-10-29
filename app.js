// Architecture — components in one file for the static template, same split
// a framework port would use: Hero / Search / Topics / Gallery / Viewer / Motion.
// Data contract (v1): notes.json = array, or {version, collections, notes}.
// Splitting by collection is the horizontal-scaling path, same schema.
let notes = [];
let topic = 'All';
const SAMPLES = Array.from({length: 6}, () => ({title:'Sample page — layout only', topic:'Sample', date:'', caption:'A ruled-paper placeholder showing how a real page card will look. Not a real note.'}));
async function load() {
  try { const res = await fetch('notes.json'); const data = await res.json(); notes = Array.isArray(data) ? data : (data.notes || []); }
  catch (e) { notes = []; }
  document.getElementById('stat-pages').textContent = notes.length ? `${notes.length} page${notes.length === 1 ? '' : 's'}` : '0 pages yet — template';
  renderTopics(); render(); observeReveals();
}
function renderTopics() {
  const el = document.getElementById('topics'); el.innerHTML = '';
  if (notes.length === 0) return;
  ['All', ...new Set(notes.map(n => n.topic).filter(Boolean))].forEach(t => {
    const b = document.createElement('button'); b.textContent = t; if (t === topic) b.className = 'active';
    b.onclick = () => { topic = t; renderTopics(); render(); }; el.appendChild(b);
  });
}
function render() {
  const q = (document.getElementById('search').value || '').toLowerCase();
  const showingSamples = notes.length === 0;
  const source = showingSamples ? SAMPLES : notes;
  const filtered = source.filter(n => (topic === 'All' || n.topic === topic) && (!q || [n.title, n.topic, n.caption].join(' ').toLowerCase().includes(q)));
  document.getElementById('count').textContent = showingSamples ? 'Sample layout' : `${filtered.length} page${filtered.length === 1 ? '' : 's'}`;
  document.getElementById('empty').hidden = !showingSamples ? filtered.length > 0 : true;
  document.getElementById('sample-note').hidden = !showingSamples;
  const grid = document.getElementById('grid'); grid.innerHTML = '';
  filtered.forEach((n, i) => {
    const card = document.createElement('button'); card.className = 'card'; card.style.animationDelay = `${i * 60}ms`;
    const visual = n.file ? `<img src="${n.file}" alt="" loading="lazy">` : `<div class="paper">Your handwritten page<br>will appear here</div>`;
    card.innerHTML = `${visual}<div>${showingSamples ? '<span class="badge">SAMPLE</span>' : ''}<h3>${n.title}</h3><p>${[n.topic, n.date].filter(Boolean).join(' · ')}</p></div>`;
    card.onclick = () => { if (n.file) openViewer(n); }; grid.appendChild(card);
  });
}
function openViewer(n) {
  const v = document.getElementById('viewer'); v.hidden = false;
  document.getElementById('viewer-img').src = n.file; document.getElementById('viewer-img').alt = n.title;
  document.getElementById('viewer-title').textContent = n.title;
  document.getElementById('viewer-meta').textContent = [n.topic, n.date].filter(Boolean).join(' · ');
  document.getElementById('viewer-caption').textContent = n.caption || '';
  document.getElementById('viewer-original').href = n.file;
}
function observeReveals() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold: .15});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}
document.getElementById('close').onclick = () => { document.getElementById('viewer').hidden = true; };
document.getElementById('search').addEventListener('input', render);
load();
