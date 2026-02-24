// ═══════════════════════════════════════════
//  QALB v2 — share.js
//  Uses Formspree (free) to send messages to your email
//  SETUP: Replace YOUR_FORM_ID below
// ═══════════════════════════════════════════

// ── HOW TO SET UP YOUR MESSAGE INBOX ──
// 1. Go to https://formspree.io and sign up FREE
// 2. Create a new form, choose your email
// 3. Copy your Form ID (looks like: xrgj1234)
// 4. Replace 'YOUR_FORM_ID' below with it
// 5. Done — all messages go to your email privately

const FORMSPREE_ID = 'YOUR_FORM_ID'; // ← Replace this

function updateCharCount() {
  const len = document.getElementById('messageText').value.length;
  document.getElementById('charCount').textContent = len;
}

async function submitMessage(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const text = document.getElementById('messageText').value.trim();
  const mood = document.getElementById('moodSelect').value;
  const name = document.getElementById('firstName').value.trim();

  if (!text) return;

  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    const formData = new FormData();
    formData.append('message', text);
    formData.append('mood', mood || 'Not specified');
    formData.append('name', name || 'Anonymous');
    formData.append('_subject', `💌 New Qalb Message${name ? ' from ' + name : ''}`);

    const endpoint = FORMSPREE_ID === 'YOUR_FORM_ID'
      ? null
      : `https://formspree.io/f/${FORMSPREE_ID}`;

    if (endpoint) {
      const res = await fetch(endpoint, { method:'POST', body:formData, headers:{ Accept:'application/json' } });
      if (!res.ok) throw new Error('Send failed');
    }
    // If no Formspree ID set, still show success (good for testing)
    showSuccess();

  } catch (err) {
    btn.textContent = '💌 Send to Qalb';
    btn.disabled = false;
    alert('Something went wrong. Please try again — we want to hear from you.');
  }
}

function showSuccess() {
  document.getElementById('heartForm').style.display = 'none';
  document.getElementById('successState').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetForm() {
  document.getElementById('heartForm').reset();
  document.getElementById('charCount').textContent = '0';
  document.getElementById('heartForm').style.display = 'block';
  document.getElementById('successState').style.display = 'none';
}
