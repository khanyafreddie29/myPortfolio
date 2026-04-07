<script setup>
import BgShapes from './BgShapes.vue'
</script>

<template>
  <section class="abt-hero" id="about">
    <BgShapes />

    <!-- Hero / Intro -->
    <div class="hero">
      <p class="greeting">Hi, my name is</p>
      <h1 class="name">Khanya Freddie.</h1>
      <h2 class="tagline">I build things for the web.</h2>
      <p class="bio">
        Building solutions that combine clean design with reliable performance.
      </p>
      <div class="cta">
        <a href="#projects"><button class="btn-outline">View my work</button></a>
        <a href="#contact"><button class="btn-solid">Get in touch</button></a>
      </div>
    </div>

    <!-- Divider -->
    <div class="section-divider"></div>

    <!-- About Me -->
    <div class="abt">
      <div class="section-title">
        <h2>
          <span class="num">01.</span>
          <span class="label">About Me</span>
        </h2>
        <div class="title-line"></div>
      </div>

      <div class="abt-grid">
        <!-- Left: text -->
        <div class="abt-content">
          <p>
            Hello! I'm Khanya, a fullstack developer who enjoys building solutions that combine clean design with reliable performance.
          </p>
          <p>
            My goal is to create tools that are not only efficient but also meaningful for the people who use them. 
            I am motivated by opportunities to grow, innovate, and contribute. 
            I am also firm believer in continous learning, as there is always something or someone to learn from.
          </p>
          <p class="tech-intro">Here are some technologies I've been working with recently:</p>

          <ul class="tech-list">
            <li>Typescript</li>
            <li>Django</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Bun</li>
            <li>Supabase</li>
          </ul>
        </div>

        <!-- Right: image -->
        <div class="img-wrapper">
         <img src="/images/hello-kitty.jpg" alt="Khanya Freddie" class="img-placeholder">
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');

/* ── Base ── */
.abt-hero {
  width: 100%;
  background-color: #0a0a0f;
  min-height: 100vh;
  padding: 0 2rem;
  font-family: 'Inter', sans-serif;
  color: #cbd5e1;
  box-sizing: border-box;
  position: relative;
}

/* ── Hero ── */
.hero {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 7rem 0 5rem;
  text-align: center;
}

.greeting {
  font-family: 'Fira Code', monospace;
  color: #ff6b8a;
  font-size: 1.1rem;
  margin: 0 0 1rem;
  letter-spacing: 0.05em;
}

.name {
  font-size: clamp(2.8rem, 8vw, 5rem);
  font-weight: 700;
  color: #f1f5f9;
  margin: 0 0 0.4rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.tagline {
  font-size: clamp(1.6rem, 5vw, 3rem);
  font-weight: 600;
  /* color: #475569; */
  margin: 0 0 1.8rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: linear-gradient( to left, #ff6b8a, #ffff);
}

.bio {
  max-width: 560px;
  color: #64748b;
  line-height: 1.75;
  font-size: 1.05rem;
  margin: 0 auto 2.5rem;
}

/* ── CTA Buttons ── */
.cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.btn-outline,
.btn-solid {
  padding: 0.85rem 2rem;
  font-size: 0.95rem;
  font-family: 'Fira Code', monospace;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.03em;
}

.btn-outline {
  background: transparent;
  border: 2px solid rgba(255, 107, 138, 0.5);
  color: #ff6b8a;
}

.btn-outline:hover {
  background: rgba(255, 107, 138, 0.08);
  border-color: #ff6b8a;
  transform: translateY(-2px);
}

.btn-solid {
  background: #ff6b8a;
  border: 2px solid #ff6b8a;
  color: #0a0a0f;
  font-weight: 600;
}

.btn-solid:hover {
  background: transparent;
  color: #ff6b8a;
  transform: translateY(-2px);
}

/* ── Divider ── */
.section-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent);
  max-width: 1100px;
  margin: 0 auto;
}

/* ── About ── */
.abt {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 0 6rem;
}

.section-title {
  margin-bottom: 2.5rem;
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

/* ── About Grid ── */
.abt-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
}

/* ── About Content ── */
.abt-content p {
  color: #64748b;
  line-height: 1.85;
  font-size: 1.02rem;
  margin-bottom: 1.4rem;
}

.tech-intro {
  color: #94a3b8 !important;
  font-weight: 500;
}

/* ── Tech List ── */
.tech-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem 1rem;
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}

.tech-list li {
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #64748b;
  padding-left: 1.4rem;
  position: relative;
  letter-spacing: 0.02em;
}

.tech-list li::before {
  content: "▹";
  color: #ff6b8a;
  position: absolute;
  left: 0;
  font-size: 0.8rem;
  top: 1px;
}

/* ── Image ── */
.img-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.img-placeholder {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  border: 2px solid rgba(255, 107, 138, 0.4);
  background: radial-gradient(circle at center, rgba(255, 107, 138, 0.08), transparent 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  font-family: 'Fira Code', monospace;
  font-size: 1rem;
  letter-spacing: 0.05em;
  box-shadow: 0 0 40px rgba(255, 107, 138, 0.06);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.img-placeholder:hover {
  border-color: rgba(255, 107, 138, 0.7);
  box-shadow: 0 0 60px rgba(255, 107, 138, 0.12);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .abt-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .img-wrapper {
    order: -1;
  }

  .img-placeholder {
    width: 200px;
    height: 200px;
  }

  .tech-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cta {
    flex-direction: column;
  }

  .btn-outline,
  .btn-solid {
    width: 100%;
    max-width: 300px;
  }
}
</style>