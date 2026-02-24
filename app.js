// ═══════════════════════════════════════════
//  QALB — Islamic Dua Jar
//  app.js — Application Logic
// ═══════════════════════════════════════════

let selectedMood = null;
const usedIndices = {};

// ── MOOD SELECTION ──────────────────────────
function selectMood(mood) {
  selectedMood = mood;

  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-pressed', 'false');
  });

  const activeBtn = document.querySelector(`[data-mood="${mood}"]`);
  activeBtn.classList.add('active');
  activeBtn.setAttribute('aria-pressed', 'true');

  document.getElementById('revealBtn').disabled = false;
  document.getElementById('contentCard').innerHTML = '';
}

// ── JAR SHAKE ANIMATION ─────────────────────
function shakeJar() {
  const jar = document.querySelector('.jar');
  jar.style.transition = 'transform 0.08s ease';
  const moves = [8, -8, 5, -5, 2, 0];
  moves.forEach((deg, i) => {
    setTimeout(() => {
      jar.style.transform = `rotate(${deg}deg)`;
      if (i === moves.length - 1) jar.style.transition = 'transform 0.3s ease';
    }, i * 80);
  });
}

// ── CONTENT ROTATION (no repeats until all seen) ──
function getNextContent(mood) {
  const items = content[mood];
  if (!usedIndices[mood]) usedIndices[mood] = [];

  let available = items
    .map((_, i) => i)
    .filter(i => !usedIndices[mood].includes(i));

  if (available.length === 0) {
    usedIndices[mood] = [];
    available = items.map((_, i) => i);
  }

  const idx = available[Math.floor(Math.random() * available.length)];
  usedIndices[mood].push(idx);
  return items[idx];
}

// ── REVEAL CONTENT ───────────────────────────
function revealContent() {
  if (!selectedMood) return;

  shakeJar();

  setTimeout(() => {
    const item = getNextContent(selectedMood);
    renderContent(item);

    // Show mid-page ad after first reveal (uncomment when AdSense approved)
    // const adMid = document.getElementById('adMid');
    // if (adMid) adMid.style.display = 'block';
  }, 420);
}

// ── RENDER CARDS ─────────────────────────────
function renderContent(item) {
  const card = document.getElementById('contentCard');

  card.innerHTML = `
    <div class="card" style="animation-delay:0s">
      <div class="card-type">✦ Quran</div>
      <div class="arabic-text" dir="rtl" lang="ar">${item.quran.arabic}</div>
      <div class="transliteration">${item.quran.transliteration}</div>
      <div class="translation">"${item.quran.translation}"</div>
      <div class="source">${item.quran.source}</div>
    </div>

    <div class="card" style="animation:revealCard 0.65s ease 0.15s both">
      <div class="card-type">✦ Hadith</div>
      <div class="translation">${item.hadith.text}</div>
      <div class="source">${item.hadith.source}</div>
    </div>

    <div class="card" style="animation:revealCard 0.65s ease 0.3s both">
      <div class="card-type">✦ Dua</div>
      <div class="arabic-text" dir="rtl" lang="ar">${item.dua.arabic}</div>
      <div class="transliteration">${item.dua.transliteration}</div>
      <div class="translation">${item.dua.translation}</div>
      <div class="source">${item.dua.source}</div>
      <div class="reflection">💭 ${item.reflection}</div>
    </div>

    <button class="next-btn" onclick="revealContent()" aria-label="Draw another from the jar">
      ✦ Draw another from the jar ✦
    </button>
  `;

  // Smooth scroll to content
  setTimeout(() => {
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// ── SHARE FUNCTIONALITY ──────────────────────
function shareApp() {
  const shareData = {
    title: 'Qalb — Islamic Dua Jar',
    text: 'Find Quran verses, authentic Hadith & Duas tailored to how your heart feels. Free Islamic dua jar — may it bring comfort to your heart.',
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => copyLink());
  } else {
    copyLink();
  }
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.querySelector('.share-btn');
    const original = btn.textContent;
    btn.textContent = '✓ Link Copied!';
    btn.style.borderColor = '#7bcf9a';
    btn.style.color = '#7bcf9a';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 2500);
  });
}

// ── KEYBOARD ACCESSIBILITY ───────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.activeElement.classList.contains('mood-btn')) {
    document.activeElement.click();
  }
});
