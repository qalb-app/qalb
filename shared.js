// ═══════════════════════════════════════════
//  QALB v2 — shared.js
// ═══════════════════════════════════════════

function toggleNav() {
  document.getElementById('navMobile').classList.toggle('open');
}

function shareApp() {
  const data = { title:'Qalb — Islamic Dua Jar', text:'Find Quran verses, authentic Hadith & Duas for your heart. Free Islamic dua jar — may it bring you comfort.', url:window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/') };
  if (navigator.share) { navigator.share(data).catch(() => copyToClipboard(data.url)); }
  else { copyToClipboard(data.url); }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const btns = document.querySelectorAll('.share-btn');
    btns.forEach(b => { const orig = b.textContent; b.textContent = '✓ Link Copied!'; setTimeout(() => b.textContent = orig, 2500); });
  });
}
