<script setup>
import BgShapes from './BgShapes.vue'
const projects = [
  {
    num: 1,
    label: 'Featured Project',
    title: 'RoyalGame Console - under development',
    description: 'Fullstack interactive browser game console with singleon player mode implementing component structure, centralisated state management, custom game engine with save game logic and player registration. ',
    tech: ['Vue.js', 'CSS', 'Bun', 'Express.js', 'MongoDB'],
    image: '/images/royalgame.png',
    github: 'https://github.com/khanyafreddie29/gameWebConsole',
    live: '#',
  },
   {
    num: 2,
    label: 'Featured Project',
    title: 'GeoLocation Clock In',
    description: 'Fullstack application applying frontend and backend across the entire development process to deliver a functional and accessible solution. ',
    tech: ['React', 'CSS', 'Bun', 'Express.js', 'Supabase'],
    image: '/images/geolocation-clockin.png',
    github: 'https://github.com/khanyafreddie29/geoLocationClockIn',
    live: 'https://geo-location-clock-in.vercel.app/',
  },
  {
    num: 3,
    label: 'Featured Project',
    title: 'VaultEdge Security',
    description: 'Fullstack application applying frontend and backend across the entire development process to deliver a functional and accessible solution. ',
    tech: ['Vue.js', 'TailwindCSS', 'Node.js', 'Express.js', 'MySQL'],
    image: '/images/vautledge.png',
    github: 'https://github.com/khanyafreddie29/fullstackProject',
    live: 'https://vaultedge-final.vercel.app/',
  },
  // Add more projects here
]
</script>

<template>
  <section class="projects-section" id="projects">
    <BgShapes />
    <div class="container">

      <!-- Title -->
      <div class="section-title">
        <h2>
          <span class="num">03.</span>
          <span class="label">Projects</span>
        </h2>
        <div class="title-line"></div>
      </div>

      <!-- Project Cards -->
      <div class="projects-list">
        <div
          v-for="(project, index) in projects"
          :key="project.num"
          class="project-card"
          :class="{ reverse: index % 2 !== 0 }"
        >
          <!-- Image -->
          <div class="project-image">
            <div class="image-overlay"></div>
            <img :src="project.image" :alt="project.title" />
          </div>

          <!-- Content -->
          <div class="project-content">
            <p class="featured-label">{{ project.label }}</p>
            <h3 class="project-title">{{ project.title }}</h3>

            <div class="project-description">
              <p>{{ project.description }}</p>
            </div>

            <ul class="tech-stack">
              <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
            </ul>

            <div class="project-links">
              <a :href="project.github" target="_blank" class="link" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a :href="project.live" target="_blank" class="link" aria-label="Live Site">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');

/* ── Base ── */
.projects-section {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: #0a0a0f;
  padding: 5rem 2rem;
  font-family: 'Inter', sans-serif;
  scroll-margin-top: 80px;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
}

/* ── Section Title ── */
.section-title {
  margin-bottom: 4rem;
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

/* ── Projects List ── */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

/* ── Project Card ── */
.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
}

.project-card.reverse {
  direction: rtl;
}

.project-card.reverse > * {
  direction: ltr;
}

/* ── Image ── */
.project-image {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.project-image img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease, filter 0.4s ease;
  filter: brightness(0.75) saturate(0.8);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 107, 138, 0.08);
  transition: opacity 0.3s ease;
  z-index: 1;
  pointer-events: none;
}

.project-image:hover img {
  transform: scale(1.04);
  filter: brightness(0.9) saturate(1);
}

.project-image:hover .image-overlay {
  opacity: 0;
}

/* ── Content ── */
.project-content {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.featured-label {
  font-family: 'Fira Code', monospace;
  color: #ff6b8a;
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
}

.project-title {
  color: #f1f5f9;
  font-size: 1.7rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.project-description {
  background: #12121a;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1.4rem;
}

.project-description p {
  margin: 0;
  color: #64748b;
  line-height: 1.75;
  font-size: 0.97rem;
}

/* ── Tech Stack ── */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-stack li {
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  color: #475569;
  letter-spacing: 0.04em;
}

/* ── Links ── */
.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.4rem;
}

.link {
  color: #475569;
  transition: color 0.2s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
}

.link:hover {
  color: #ff6b8a;
  transform: translateY(-2px);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .project-card,
  .project-card.reverse {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 1.5rem;
  }

  .project-image {
    order: -1;
  }

  .project-image img {
    height: 220px;
  }

  .projects-list {
    gap: 4rem;
  }
}
</style>