<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const scrollProgress = ref(0)

const handleScroll = () => {
  const y = window.scrollY
  scrollProgress.value = Math.min(y / 120, 1)
  scrolled.value = y > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div class="navbar-wrapper" :style="{ '--progress': scrollProgress }">

    <!-- Pill bar — overflow:hidden here is safe, no dropdown inside -->
    <div class="navbar-pill" :class="{ scrolled }">
      <div class="nav-container">
        <a href="#about" class="logo">&lt;Dev /&gt;</a>

        <ul class="nav-links">
          <li><a href="#about"><span class="nav-num">01.</span> About</a></li>
          <li><a href="#skills"><span class="nav-num">02.</span> Skills</a></li>
          <li><a href="#projects"><span class="nav-num">03.</span> Projects</a></li>
          <li><a href="#certifications"><span class="nav-num">04.</span> Certs</a></li>
          <li><a href="#contact"><span class="nav-num">05.</span> Contact</a></li>
        </ul>

        <a href="/KhanyaFreddieResume.pdf" class="resume-btn" target="_blank">Resume</a>

        <button
          class="hamburger"
          :class="{ open: menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu — outside the pill so it expands as a normal rectangle -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <ul>
        <li><a href="#about"    @click="menuOpen = false"><span class="nav-num">01.</span> About</a></li>
        <li><a href="#skills"   @click="menuOpen = false"><span class="nav-num">02.</span> Skills</a></li>
        <li><a href="#projects" @click="menuOpen = false"><span class="nav-num">03.</span> Projects</a></li>
        <li><a href="#certifications" @click="menuOpen = false"><span class="nav-num">04.</span> Certs</a></li>
        <li><a href="#contact"  @click="menuOpen = false"><span class="nav-num">05.</span> Contact</a></li>
      </ul>
      <a href="/Khanya Freddie CV.pdf" target="_blank" class="resume-btn mobile-resume">Resume</a>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');

/* ── Wrapper ── */
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding-top:   calc(0.75rem * var(--progress, 0));
  padding-left:  calc(1.5rem  * var(--progress, 0));
  padding-right: calc(1.5rem  * var(--progress, 0));
  box-sizing: border-box;
  pointer-events: none;
}

/* ── Pill (top bar only) ── */
.navbar-pill {
  pointer-events: all;
  background: rgba(10, 10, 15, 0.75);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: calc(9999px * var(--progress, 0));
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow:
    0 4px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  overflow: hidden;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.navbar-pill.scrolled {
  background: rgba(10, 10, 15, 0.90);
  border-color: rgba(255, 107, 138, 0.18);
  box-shadow:
    0 8px 40px rgba(0, 0, 0, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* ── Nav container ── */
.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* ── Logo ── */
.logo {
  font-family: 'Fira Code', monospace;
  font-size: 1.05rem;
  font-weight: 500;
  color: #ff6b8a;
  text-decoration: none;
  margin-right: auto;
  letter-spacing: -0.01em;
  transition: opacity 0.2s ease;
}
.logo:hover { opacity: 0.75; }

/* ── Nav links ── */
.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}
.nav-links a {
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  color: #64748b;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.2s ease;
}
.nav-links a:hover { color: #e2e8f0; }

.nav-num {
  font-family: 'Fira Code', monospace;
  color: #ff6b8a;
  font-size: 0.76rem;
}

/* ── Resume button ── */
.resume-btn {
  font-family: 'Fira Code', monospace;
  font-size: 0.83rem;
  color: #ff6b8a;
  text-decoration: none;
  border: 2px solid rgba(255, 107, 138, 0.45);
  padding: 0.5rem 1.2rem;
  border-radius: 15px;
  white-space: nowrap;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}
.resume-btn:hover {
  background: rgba(255, 107, 138, 0.09);
  border-color: #ff6b8a;
  transform: translateY(-1px);
}

/* ── Hamburger ── */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #94a3b8;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile menu — outside pill, expands as a flat rectangle ── */
.mobile-menu {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-height: 0;
  overflow: hidden;
  padding: 0 2rem;
  pointer-events: all;
  background: rgba(10, 10, 15, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-top: none;
  border-radius: 0 0 12px 12px;
  transition: max-height 0.35s ease, padding 0.35s ease;
}

.mobile-menu.open {
  max-height: 400px;
  padding: 1.5rem 2rem 2rem;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
}

.mobile-menu a {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #64748b;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s ease;
}
.mobile-menu a:hover { color: #e2e8f0; }
.mobile-resume { margin-top: 0.25rem; }

/* ── Responsive ── */
@media (max-width: 768px) {
  .nav-links,
  .resume-btn:not(.mobile-resume) { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: flex; }
}

:global(body) {
  margin: 0;
  padding-top: 80px;
}
</style>