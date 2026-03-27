<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const lines = [
  { text: '> Initialising navigation...', delay: 0 },
  { text: '> Resolving path...', delay: 600 },
  { text: '> ERROR 404: Page not found', delay: 1200, error: true },
  { text: '> The requested route does not exist.', delay: 1800, error: true },
  { text: '> Suggest returning to /', delay: 2500 },
]

const visibleLines = ref([])
const showButton = ref(false)
const cursor = ref(true)

let timers = []

onMounted(() => {
  lines.forEach((line, i) => {
    const t = setTimeout(() => {
      visibleLines.value.push(line)
    }, line.delay)
    timers.push(t)
  })

  const bt = setTimeout(() => {
    showButton.value = true
  }, 3200)
  timers.push(bt)

  const cursorInterval = setInterval(() => {
    cursor.value = !cursor.value
  }, 530)
  timers.push(cursorInterval)
})

onUnmounted(() => {
  timers.forEach(t => clearTimeout(t))
})
</script>

<template>
  <div class="not-found">

    <!-- Scanline overlay -->
    <div class="scanlines" aria-hidden="true"></div>

    <div class="terminal">
      <!-- Terminal bar -->
      <div class="terminal-bar">
        <div class="dots">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <span class="terminal-title">bash — khanya@portfolio</span>
      </div>

      <!-- Terminal body -->
      <div class="terminal-body">
        <!-- Big 404 -->
        <pre class="big-404" aria-hidden="true">
 _  _    ___  _  _
| || |  / _ \| || |
| || |_| | | | || |_
|__   _| |_| |__   _|
   |_|  \___/   |_|
        </pre>

        <!-- Typed lines -->
        <div class="lines">
          <div
            v-for="(line, i) in visibleLines"
            :key="i"
            class="line"
            :class="{ error: line.error }"
          >
            <span class="prompt" v-if="!line.error">$</span>
            <span class="prompt error-prompt" v-else">!</span>
            <span class="line-text">{{ line.text }}</span>
          </div>

          <!-- Blinking cursor line -->
          <div class="line cursor-line" v-if="visibleLines.length < lines.length || showButton">
            <span class="prompt">$</span>
            <span class="cursor-block" :class="{ visible: cursor }">█</span>
          </div>
        </div>

        <!-- Home button -->
        <Transition name="fade-up">
          <div v-if="showButton" class="btn-wrap">
            <a href="/" class="home-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              cd ~/home
            </a>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Footer hint -->
    <p class="hint">Press the button above or type <code>cd ~/home</code> to navigate back</p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');

/* ── Base ── */
.not-found {
  width: 100%;
  min-height: 100vh;
  background: #0a0a0f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  font-family: 'Fira Code', monospace;
  position: relative;
  overflow: hidden;
}

/* ── Scanlines ── */
.scanlines {
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.08) 2px,
    rgba(0, 0, 0, 0.08) 4px
  );
  pointer-events: none;
  z-index: 10;
}

/* ── Terminal window ── */
.terminal {
  width: 100%;
  max-width: 640px;
  background: #0f0f18;
  border: 1px solid rgba(255, 107, 138, 0.2);
  border-radius: 10px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255, 107, 138, 0.05),
    0 24px 80px rgba(0, 0, 0, 0.6),
    0 0 60px rgba(255, 107, 138, 0.04);
}

/* ── Terminal bar ── */
.terminal-bar {
  background: #1a1a26;
  padding: 0.65rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot.red    { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green  { background: #28c840; }

.terminal-title {
  font-size: 0.75rem;
  color: #475569;
  letter-spacing: 0.04em;
  flex: 1;
  text-align: center;
}

/* ── Terminal body ── */
.terminal-body {
  padding: 1.5rem 1.75rem 2rem;
  min-height: 320px;
}

/* ── Big ASCII 404 ── */
.big-404 {
  font-size: clamp(0.45rem, 1.8vw, 0.7rem);
  line-height: 1.3;
  color: #ff6b8a;
  margin: 0 0 1.5rem;
  opacity: 0.7;
  letter-spacing: 0.05em;
  animation: glow-pulse 3s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { text-shadow: 0 0 8px rgba(255, 107, 138, 0.3); }
  50%       { text-shadow: 0 0 20px rgba(255, 107, 138, 0.6), 0 0 40px rgba(255, 107, 138, 0.2); }
}

/* ── Lines ── */
.lines {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.line {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  font-size: 0.85rem;
  animation: type-in 0.2s ease both;
}

@keyframes type-in {
  from { opacity: 0; transform: translateX(-4px); }
  to   { opacity: 1; transform: translateX(0); }
}

.prompt {
  color: #ff6b8a;
  font-weight: 600;
  flex-shrink: 0;
  font-size: 0.9rem;
}

.error-prompt {
  color: #ff4444;
}

.line-text {
  color: #64748b;
  line-height: 1.5;
}

.line.error .line-text {
  color: #ff6b6b;
}

/* ── Cursor ── */
.cursor-line {
  margin-top: 0.25rem;
}

.cursor-block {
  color: #ff6b8a;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.1s ease;
}

.cursor-block.visible {
  opacity: 1;
}

/* ── Button ── */
.btn-wrap {
  margin-top: 2rem;
}

.home-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #ff6b8a;
  text-decoration: none;
  border: 1px solid rgba(255, 107, 138, 0.4);
  padding: 0.65rem 1.4rem;
  border-radius: 6px;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  letter-spacing: 0.03em;
}

.home-btn:hover {
  background: rgba(255, 107, 138, 0.08);
  border-color: #ff6b8a;
  transform: translateX(-3px);
  box-shadow: 0 4px 20px rgba(255, 107, 138, 0.15);
}

/* ── Hint ── */
.hint {
  margin-top: 1.5rem;
  font-size: 0.72rem;
  color: #334155;
  letter-spacing: 0.05em;
  text-align: center;
}

.hint code {
  color: #475569;
  background: rgba(255,255,255,0.04);
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
}

/* ── Transitions ── */
.fade-up-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

/* ── Responsive ── */
@media (max-width: 480px) {
  .terminal-body {
    padding: 1.25rem;
  }
  .big-404 {
    font-size: 0.42rem;
  }
}
</style>