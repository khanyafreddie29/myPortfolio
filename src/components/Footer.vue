<script setup>
const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/khanyafreddie29',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/khanya-freddie/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`
  },
  {
    name: 'Email',
    href: 'mailto:khanyafreddie2903@gmail.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
  },
]
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">

      <!-- Top divider -->
      <div class="divider"></div>

      <div class="footer-content">
        <!-- Logo -->
        <a href="#about" class="logo">&lt;Dev /&gt;</a>

        <!-- Social links -->
        <div class="socials">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.href"
            :aria-label="social.name"
            class="social-link"
            v-html="social.icon"
          ></a>
        </div>

        <!-- Copyright -->
        <p class="copy">
          <span class="name">Khanya Freddie</span>
          &mdash; &copy; 2026
        </p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500&display=swap');

.footer {
  width: 100%;
  box-sizing: border-box;
  background-color: #0a0a0f;
  padding: 0 2rem 2.5rem;
  font-family: 'Inter', sans-serif;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.divider {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 107, 138, 0.2), rgba(255,255,255,0.05), transparent);
  margin-bottom: 2rem;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;
}

/* ── Logo ── */
.logo {
  font-family: 'Fira Code', monospace;
  font-size: 1rem;
  font-weight: 500;
  color: #ff6b8a;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: opacity 0.2s ease;
}
.logo:hover { opacity: 0.7; }

/* ── Socials ── */
.socials {
  display: flex;
  gap: 1.2rem;
  align-items: center;
}

.social-link {
  color: #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, transform 0.2s ease;
  border: 1px solid pink;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
}
.social-link:hover {
  color: #ff6b8a;
  transform: translateY(-2px);
}

/* ── Copyright ── */
.copy {
  font-family: 'Fira Code', monospace;
  font-size: 0.78rem;
  color: #334155;
  margin: 0;
  letter-spacing: 0.02em;
}

.name {
  color: #475569;
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>