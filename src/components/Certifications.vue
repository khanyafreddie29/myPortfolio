<script setup>
const certs = [
  {
    name: 'Scrum Fundamentals Certified SFC',
    issuer: 'Upskill with SCRUMStudy',
    date: 'Issued Oct 2025',
    verify: '#',
    logo: '',
  },
  {
    name: 'Python for Everybody Specialization',
    issuer: 'University of Michigan',
    date: 'Issued Dec 2025',
    verify: 'https://coursera.org/share/267644e61caa6768a3385407904642fc',
    logo: 'src/assets/py4e.jpg',
  },
  {
    name: 'Mobile App Development',
    issuer: 'LC Studio',
    date: 'Issued Jan 2026',
    verify: 'https://openbadges.education/public/assertions/t4qLlK-YRYOqY1glJgb3lA',
    logo: 'src/assets/Mobile_App Development.png',
  },
  {
    name: 'API Integration Developer',
    issuer: 'LC Studio',
    date: 'Issued Feb 2026',
    verify: 'https://openbadges.education/public/assertions/o8ze6jTbQvGZi4eFTq524A',
    logo: 'src/assets/API_Integration Developer.png',
  },
  {
    name: 'Fintech Web Developer',
    issuer: 'LC Studio',
    date: 'Issued Mar 2026',
    verify: 'https://openbadges.education/public/assertions/lVX8vp-DRnisVp4UJprhFQ',
    logo: 'src/assets/Fintech_Web Developer.png',
  }
]
</script>

<template>
  <section class="certs-section" id="certifications">
    <div class="container">

      <!-- Title -->
      <div class="section-title">
        <h2>
          <span class="num">04.</span>
          <span class="label">Certifications</span>
        </h2>
        <div class="title-line"></div>
      </div>

      <!-- Fade edges + scroll row -->
      <div class="scroll-wrapper">
        <div class="fade-left"></div>
        <div class="scroll-row">
          <a
            v-for="(cert, index) in certs"
            :key="index"
            :href="cert.verify"
            target="_blank"
            class="cert-card"
          >
            <!-- Top: logo + verify icon -->
            <div class="card-top">
              <div class="logo-wrap">
                <img :src="cert.logo" :alt="cert.issuer" width="36" height="36" />
              </div>
              <svg class="verify-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </div>

            <!-- Info -->
            <div class="card-info">
              <p class="cert-name">{{ cert.name }}</p>
              <p class="cert-issuer">{{ cert.issuer }}</p>
              <p class="cert-date">{{ cert.date }}</p>
            </div>

            <!-- Bottom verify label -->
            <span class="verify-label">Verify ↗</span>
          </a>
        </div>
        <div class="fade-right"></div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');

/* ── Base ── */
.certs-section {
  width: 100%;
  box-sizing: border-box;
  background-color: #0a0a0f;
  padding: 5rem 0;
  font-family: 'Inter', sans-serif;
  scroll-margin-top: 80px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Title ── */
.section-title {
  margin-bottom: 3rem;
}

.section-title h2 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 1rem;
}

.num {
  font-family: 'Fira Code', monospace;
  color: #ff6b8a;
  font-size: 1.9rem;
  font-weight: 500;
}

.label {
  color: #e2e8f0;
  font-size: 1.9rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.title-line {
  height: 1px;
  background: linear-gradient(to right, rgba(255, 107, 138, 0.3), rgba(255,255,255,0.05), transparent);
}

/* ── Scroll wrapper with fade edges ── */
.scroll-wrapper {
  position: relative;
}

.fade-left,
.fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}

.fade-left {
  left: 0;
  background: linear-gradient(to right, #0a0a0f, transparent);
}

.fade-right {
  right: 0;
  background: linear-gradient(to left, #0a0a0f, transparent);
}

/* ── Scroll row ── */
.scroll-row {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 0.5rem 2rem 1.5rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.scroll-row::-webkit-scrollbar {
  display: none;
}

/* ── Cert card ── */
.cert-card {
  flex-shrink: 0;
  width: 220px;
  background: #12121a;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  scroll-snap-align: start;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  position: relative;
  overflow: hidden;
}

.cert-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, rgba(255, 107, 138, 0.07) 0%, transparent 65%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cert-card:hover {
  border-color: rgba(255, 107, 138, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(255, 107, 138, 0.1);
  background: #1a1020;
}

.cert-card:hover::before {
  opacity: 1;
}

/* ── Card top ── */
.card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.logo-wrap {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.logo-wrap img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.verify-icon {
  color: #334155;
  transition: color 0.2s ease, transform 0.2s ease;
  margin-top: 2px;
}

.cert-card:hover .verify-icon {
  color: #ff6b8a;
  transform: translate(2px, -2px);
}

/* ── Card info ── */
.card-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
}

.cert-name {
  color: #e2e8f0;
  font-size: 0.88rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.cert-issuer {
  color: #64748b;
  font-size: 0.78rem;
  margin: 0;
  font-family: 'Fira Code', monospace;
  letter-spacing: 0.02em;
}

.cert-date {
  color: #334155;
  font-size: 0.72rem;
  margin: 0;
  font-family: 'Fira Code', monospace;
  letter-spacing: 0.04em;
}

/* ── Verify label ── */
.verify-label {
  font-family: 'Fira Code', monospace;
  font-size: 0.72rem;
  color: #334155;
  letter-spacing: 0.06em;
  transition: color 0.2s ease;
}

.cert-card:hover .verify-label {
  color: #ff6b8a;
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .cert-card {
    width: 185px;
  }
}
</style>