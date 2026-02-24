// ═══════════════════════════════════════════
//  QALB v2 — names.js
// ═══════════════════════════════════════════

let selectedName = null;

function renderNames(list) {
  const grid = document.getElementById('namesGrid');
  grid.innerHTML = list.map(n => `
    <div class="name-card" onclick="openModal(${n.n})" tabindex="0" role="button" aria-label="${n.latin} — ${n.meaning}">
      <div class="name-num">${n.n}</div>
      <div class="name-ar" dir="rtl">${n.ar}</div>
      <div class="name-latin">${n.latin}</div>
      <div class="name-meaning">${n.meaning}</div>
    </div>
  `).join('');
}

function filterNames() {
  const q = document.getElementById('nameSearch').value.toLowerCase();
  const filtered = allahNames.filter(n =>
    n.latin.toLowerCase().includes(q) ||
    n.meaning.toLowerCase().includes(q) ||
    n.ar.includes(q)
  );
  renderNames(filtered);
}

function openModal(num) {
  const name = allahNames.find(n => n.n === num);
  if (!name) return;
  selectedName = name;
  document.getElementById('modalNumber').textContent = `Name ${name.n} of 99`;
  document.getElementById('modalArabic').textContent = name.ar;
  document.getElementById('modalLatin').textContent = name.latin;
  document.getElementById('modalMeaning').textContent = name.meaning;
  document.getElementById('modalDetail').textContent = name.detail;
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

function addToDhikr() {
  if (selectedName) {
    sessionStorage.setItem('dhikr_custom', selectedName.ar);
    window.location.href = 'dhikr.html';
  }
}

// Close on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.addEventListener('DOMContentLoaded', () => renderNames(allahNames));
