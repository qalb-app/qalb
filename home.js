// ═══════════════════════════════════════════
//  QALB v2 — home.js
// ═══════════════════════════════════════════

let selectedMood = null;

function selectMood(mood) {
  selectedMood = mood;
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-mood="${mood}"]`).classList.add('active');
  document.getElementById('revealBtn').disabled = false;
}

function goToDuaPage() {
  if (!selectedMood) return;
  sessionStorage.setItem('qalb_mood', selectedMood);
  window.location.href = 'dua.html';
}

function shakeJar() {
  const jar = document.querySelector('.jar');
  const moves = [8, -8, 5, -5, 2, 0];
  moves.forEach((deg, i) => {
    setTimeout(() => { jar.style.transform = `scale(1.05) rotate(${deg}deg)`; }, i * 80);
  });
  setTimeout(() => { jar.style.transform = ''; }, moves.length * 80 + 200);
}

// Daily Ayah (changes by calendar day)
function loadDailyAyah() {
  const day = new Date().getDate();
  const ayah = dailyAyahs[day % dailyAyahs.length];
  document.getElementById('dailyArabic').textContent = ayah.arabic;
  document.getElementById('dailyTranslation').textContent = '"' + ayah.trans + '"';
  document.getElementById('dailySource').textContent = ayah.source;
}

document.addEventListener('DOMContentLoaded', loadDailyAyah);
