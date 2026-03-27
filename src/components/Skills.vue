<script setup>
import BgShapes from './BgShapes.vue'
const skills = [
  { name: 'HTML', category: 'FRONTEND', icon: 'https://img.icons8.com/color/48/html-5--v1.png' },
  { name: 'JavaScript', category: 'LANGUAGE', icon: 'https://img.icons8.com/color/48/javascript--v1.png' },
  { name: 'Vue.js', category: 'FRONTEND', icon: 'https://img.icons8.com/color/48/vue-js.png' },
  { name: 'React.js', category: 'FRONTEND', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' },
  { name: 'Bootstrap', category: 'FRONTEND', icon: 'https://img.icons8.com/fluency/48/bootstrap.png' },
  { name: 'Python', category: 'LANGUAGE', icon: 'https://img.icons8.com/color/48/python--v1.png' },
  { name: 'Django', category: 'BACKEND', icon: 'https://img.icons8.com/color/48/django.png' },
  { name: 'Node.js', category: 'BACKEND', icon: 'https://img.icons8.com/fluency/48/node-js.png' },
  { name: 'Express.js', category: 'BACKEND', icon: 'https://img.icons8.com/color/48/express-js.png' },
  { name: 'PHP', category: 'BACKEND', icon: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-hypertext-preprocessor-a-widely-used-open-source-general-purpose-scripting-language-logo-shadow-tal-revivo.png' },
  { name: 'Typescript', category: 'FULLSTACK', icon: "https://img.icons8.com/fluency/48/typescript--v1.png"},
  { name: 'Supabase', category: 'DATABASE', icon: "https://img.icons8.com/fluency/48/supabase.png"},
  { name: 'MongoDB', category: 'DATABASE', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png' },
  { name: 'MySQL', category: 'DATABASE', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-mysql-an-open-source-relational-database-management-system-logo-color-tal-revivo.png' },
  { name: 'Git', category: 'DEVOPS', icon: 'https://img.icons8.com/fluency/48/git.png' },
  { name: 'GitHub', category: 'DEVOPS', icon: 'https://img.icons8.com/fluency/48/github.png' },
  { name: 'Bun', category: 'PACKAGE MANAGER', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg' },
]
</script>

<template>
  <section class="skills-section" id="skills">
    <BgShapes />
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="num">02.</span>
          <span class="label">Skills &amp; Expertise</span>
        </h2>
        <div class="divider"></div>
      </div>

      <div class="skills-grid">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card"
        >
          <div class="card-inner">
            <div class="icon-wrapper">
              <img :src="skill.icon" :alt="skill.name" width="48" height="48" />
            </div>
            <p class="skill-name">{{ skill.name }}</p>
            <span class="skill-category">{{ skill.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;600&display=swap');

.skills-section {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: #0a0a0f;
  min-height: 100vh;
  padding: 5rem 2rem;
  font-family: 'Inter', sans-serif;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
}

/* Title */
.section-title {
  margin-bottom: 3rem;
}

.section-title h2 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 1rem 0;
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

.divider {
  height: 1px;
  background: linear-gradient(to right, rgba(255, 107, 138, 0.3), rgba(255,255,255,0.05), transparent);
  width: 100%;
}

/* Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

/* Card */
.skill-card {
  background: #12121a;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 2rem 1rem;
  cursor: pointer;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top center, rgba(255, 107, 138, 0.08) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover {
  border-color: rgba(255, 107, 138, 0.55);
  background: #1a1020;
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(255, 107, 138, 0.12);
}

.skill-card:hover::before {
  opacity: 1;
}

.card-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
}

.skill-card:hover .icon-wrapper {
  transform: scale(1.12);
}

.icon-wrapper img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.skill-name {
  color: #cbd5e1;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.01em;
}

.skill-category {
  font-family: 'Fira Code', monospace;
  font-size: 0.68rem;
  font-weight: 400;
  color: #64748b;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* Responsive */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .label, .num {
    font-size: 1.4rem;
  }
}
</style>