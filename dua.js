// ═══════════════════════════════════════════
//  QALB v2 — dua.js
// ═══════════════════════════════════════════

let currentMood = null;
const usedIdx = {};

function getContent(mood) {
  const items = moodContent[mood];
  if (!items || items.length === 0) return null;
  if (!usedIdx[mood]) usedIdx[mood] = [];
  let avail = items.map((_,i)=>i).filter(i=>!usedIdx[mood].includes(i));
  if (avail.length === 0) { usedIdx[mood] = []; avail = items.map((_,i)=>i); }
  const idx = avail[Math.floor(Math.random() * avail.length)];
  usedIdx[mood].push(idx);
  return items[idx];
}

function renderMoodHeader(mood) {
  const meta = moodMeta[mood];
  document.getElementById('moodDisplay').innerHTML = `
    <span class="emoji">${meta.emoji}</span>
    <div>
      <div class="mood-label">Your mood</div>
      <div class="mood-text">${meta.label}</div>
    </div>
  `;
}

function renderContent(mood) {
  const item = getContent(mood);
  if (!item) { document.getElementById('contentArea').innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px">Content coming soon for this mood. جَزَاكُمُ اللَّهُ خَيْرًا</p>'; return; }

  const adhkar = moodAdhkar[mood] || moodAdhkar.default;

  document.getElementById('contentArea').innerHTML = `
    <!-- QURAN -->
    <div class="card" style="animation-delay:0s">
      <div class="card-type">✦ Quran</div>
      <div class="arabic" dir="rtl" lang="ar">${item.quran.arabic}</div>
      <div class="transliteration">${item.quran.transliteration}</div>
      <div class="translation">"${item.quran.translation}"</div>
      <div class="source">${item.quran.source}</div>
    </div>

    <!-- HADITH -->
    <div class="card" style="animation-delay:0.12s;animation:revealCard .6s ease .12s both">
      <div class="card-type">✦ Hadith</div>
      <div class="translation">${item.hadith.text}</div>
      <div class="source">${item.hadith.source}</div>
    </div>

    <!-- DUA -->
    <div class="card" style="animation-delay:0.24s;animation:revealCard .6s ease .24s both">
      <div class="card-type">✦ Dua</div>
      <div class="arabic" dir="rtl" lang="ar">${item.dua.arabic}</div>
      <div class="transliteration">${item.dua.transliteration}</div>
      <div class="translation">${item.dua.translation}</div>
      <div class="source">${item.dua.source}</div>
    </div>

    <!-- ALLAH'S NAME -->
    <div class="card allah-card" style="animation:revealCard .6s ease .36s both">
      <div class="card-type">✦ Allah's Name for Your Heart</div>
      <div class="arabic" dir="rtl" lang="ar" style="font-size:38px">${item.allahName.arabic}</div>
      <div class="name-latin">${item.allahName.latin}</div>
      <div class="name-meaning">${item.allahName.meaning}</div>
      <div class="name-relevance">${item.allahName.relevance}</div>
    </div>

    <!-- REFLECTION -->
    <div class="card" style="animation:revealCard .6s ease .48s both">
      <div class="card-type">✦ A Word for Your Heart</div>
      <div class="reflection" style="margin:0;padding:0;border:none;font-size:17px;color:var(--cream);font-style:italic;line-height:1.85">"${item.reflection}"</div>
    </div>
  `;

  // Adhkar
  const adhkarHTML = adhkar.map(a => `
    <div class="adhkar-item">
      <div class="adhkar-arabic" dir="rtl">${a.arabic}</div>
      <div class="adhkar-trans">${a.trans}</div>
      <div class="adhkar-meaning">${a.meaning}</div>
      <div class="adhkar-count">📿 ${a.count}</div>
    </div>
  `).join('');
  document.getElementById('adhkarList').innerHTML = adhkarHTML;
  document.getElementById('adhkarSection').style.display = 'block';
  document.getElementById('actionRow').style.display = 'block';

  // Scroll to top of content
  setTimeout(() => document.getElementById('contentArea').scrollIntoView({ behavior:'smooth', block:'start' }), 100);
}

function drawAnother() {
  if (currentMood) {
    renderContent(currentMood);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function shareContent() {
  const meta = moodMeta[currentMood];
  const text = `Feeling ${meta.label}? I found comfort in Qalb — an Islamic dua jar with Quran, Hadith & Duas for every mood.`;
  if (navigator.share) { navigator.share({ title:'Qalb — Islamic Dua Jar', text, url:window.location.origin + '/index.html' }); }
  else { navigator.clipboard.writeText(window.location.origin + '/index.html'); }
}

document.addEventListener('DOMContentLoaded', () => {
  const mood = sessionStorage.getItem('qalb_mood');
  if (mood && moodMeta[mood]) {
    currentMood = mood;
    renderMoodHeader(mood);
    renderContent(mood);
  } else {
    // No mood selected — redirect home
    window.location.href = 'index.html';
  }
});
