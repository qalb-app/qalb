// ═══════════════════════════════════════════
//  QALB v2 — dhikr.js
// ═══════════════════════════════════════════

const dhikrList = [
  { ar:'سُبْحَانَ اللَّهِ', en:'SubhanAllah', target:33 },
  { ar:'الْحَمْدُ لِلَّهِ', en:'Alhamdulillah', target:33 },
  { ar:'اللَّهُ أَكْبَرُ', en:'Allahu Akbar', target:33 },
  { ar:'لَا إِلَهَ إِلَّا اللَّهُ', en:'La ilaha illAllah', target:100 },
  { ar:'أَسْتَغْفِرُ اللَّهَ', en:'Astaghfirullah', target:100 },
  { ar:'صَلِّ عَلَى النَّبِيِّ', en:'Salawat', target:100 },
  { ar:'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', en:'La hawla wa la quwwata', target:33 },
];

let current = 0;
let count = 0;
let target = 33;
let sessionTotal = 0;
let completions = 0;
let todayTotal = parseInt(localStorage.getItem('qalb_today') || '0');
const CIRCUMFERENCE = 2 * Math.PI * 52; // 326.7

function renderOptions() {
  const el = document.getElementById('dhikrOptions');
  el.innerHTML = dhikrList.map((d,i) => `
    <button class="dhikr-opt${i===0?' active':''}" onclick="setDhikr(${i})">${d.en}</button>
  `).join('');
}

function setDhikr(idx) {
  current = idx;
  count = 0;
  const d = dhikrList[idx];
  target = d.target;
  document.getElementById('currentAr').textContent = d.ar;
  document.getElementById('currentEn').textContent = d.en;
  document.getElementById('targetLabel').textContent = `Target: ${target}×`;
  document.getElementById('countDisplay').textContent = '0';
  document.getElementById('tapBtn').classList.remove('complete');
  updateRing(0);
  document.querySelectorAll('.dhikr-opt').forEach((b,i) => b.classList.toggle('active', i===idx));
}

function setCustomDhikr() {
  const val = document.getElementById('customDhikr').value.trim();
  if (!val) return;
  count = 0;
  target = 33;
  document.getElementById('currentAr').textContent = val;
  document.getElementById('currentEn').textContent = val;
  document.getElementById('targetLabel').textContent = 'Target: 33×';
  document.getElementById('countDisplay').textContent = '0';
  document.getElementById('tapBtn').classList.remove('complete');
  updateRing(0);
  document.querySelectorAll('.dhikr-opt').forEach(b => b.classList.remove('active'));
}

function tap() {
  count++;
  sessionTotal++;
  todayTotal++;
  localStorage.setItem('qalb_today', todayTotal);

  // Bump animation
  const display = document.getElementById('countDisplay');
  display.textContent = count;
  display.classList.add('bump');
  setTimeout(() => display.classList.remove('bump'), 100);

  updateRing(count / target);
  updateStats();

  if (count === target) {
    completions++;
    document.getElementById('tapBtn').classList.add('complete');
    // Vibrate on mobile
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
    setTimeout(() => {
      count = 0;
      display.textContent = '0';
      document.getElementById('tapBtn').classList.remove('complete');
      updateRing(0);
    }, 1500);
  }
}

function updateRing(progress) {
  const offset = CIRCUMFERENCE * (1 - Math.min(progress, 1));
  document.getElementById('ringFill').style.strokeDashoffset = offset;
}

function updateStats() {
  document.getElementById('totalToday').textContent = todayTotal;
  document.getElementById('totalSession').textContent = sessionTotal;
  document.getElementById('completions').textContent = completions;
}

function resetCount() {
  count = 0;
  document.getElementById('countDisplay').textContent = '0';
  document.getElementById('tapBtn').classList.remove('complete');
  updateRing(0);
}

function changeTarget() {
  const t = parseInt(prompt('Set new target:', target));
  if (t && t > 0) {
    target = t;
    document.getElementById('targetLabel').textContent = `Target: ${target}×`;
    updateRing(count / target);
  }
}

// Keyboard support: spacebar to count
document.addEventListener('keydown', e => {
  if (e.code === 'Space' && e.target.tagName !== 'INPUT') { e.preventDefault(); tap(); }
});

document.addEventListener('DOMContentLoaded', () => {
  renderOptions();
  updateStats();
});
