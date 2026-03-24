<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  onComplete: Function
})

const progress = ref(0)
const leaving = ref(false)
const done = ref(false)

onMounted(() => {
  // Simulate progress over ~2.2s
  const steps = [
    { target: 15,  delay: 0 },
    { target: 35,  delay: 300 },
    { target: 55,  delay: 650 },
    { target: 72,  delay: 1050 },
    { target: 88,  delay: 1500 },
    { target: 100, delay: 1950 },
  ]

  steps.forEach(({ target, delay }) => {
    setTimeout(() => {
      progress.value = target
    }, delay)
  })

  // Start glitch exit at 2.2s, finish at 2.8s
  setTimeout(() => {
    leaving.value = true
  }, 2200)

  setTimeout(() => {
    done.value = true
    if (props.onComplete) props.onComplete()
  }, 2900)
})
</script>

<template>
  <Transition name="loader">
    <div v-if="!done" class="loader" :class="{ leaving }">
      <!-- Glitch layers (visible during exit) -->
      <div class="glitch-layer gl1" aria-hidden="true"></div>
      <div class="glitch-layer gl2" aria-hidden="true"></div>

      <!-- Content -->
      <div class="loader-content">
        <div class="logo-wrap">
          <span class="logo-text">&lt;Dev /&gt;</span>
          <span class="logo-cursor">|</span>
        </div>

        <div class="progress-wrap">
          <div class="progress-track">
            <div class="progress-bar" :style="{ width: progress + '%' }"></div>
            <!-- Glow tip -->
            <div class="progress-tip" :style="{ left: progress + '%' }"></div>
          </div>
          <div class="progress-labels">
            <span class="progress-status">{{ progress < 100 ? 'Initialising...' : 'Ready.' }}</span>
            <span class="progress-pct">{{ progress }}%</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');

/* ── Base ── */
.loader {
  position: fixed;
  inset: 0;
  background: #0a0a0f;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code', monospace;
  overflow: hidden;
}

/* ── Content ── */
.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  position: relative;
  z-index: 2;
}

/* ── Logo ── */
.logo-wrap {
  display: flex;
  align-items: center;
  gap: 2px;
}

.logo-text {
  font-size: clamp(2rem, 6vw, 3.2rem);
  font-weight: 500;
  color: #ff6b8a;
  letter-spacing: -0.02em;
  animation: logo-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.logo-cursor {
  font-size: clamp(2rem, 6vw, 3.2rem);
  color: #ff6b8a;
  opacity: 0.7;
  animation: blink 0.9s step-end infinite, logo-in 0.6s ease both;
}

@keyframes logo-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 0; }
}

/* ── Progress ── */
.progress-wrap {
  width: clamp(260px, 40vw, 380px);
  animation: fade-up 0.5s 0.2s ease both;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.progress-track {
  height: 2px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 999px;
  position: relative;
  overflow: visible;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(to right, #ff6b8a, #ffb3c1);
  border-radius: 999px;
  transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.progress-tip {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ffb3c1;
  box-shadow: 0 0 10px 3px rgba(255, 107, 138, 0.6);
  transition: left 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
}

.progress-status {
  font-size: 0.75rem;
  color: #475569;
  letter-spacing: 0.08em;
}

.progress-pct {
  font-size: 0.75rem;
  color: #ff6b8a;
  letter-spacing: 0.05em;
}

/* ── Glitch layers ── */
.glitch-layer {
  position: absolute;
  inset: 0;
  background: #0a0a0f;
  opacity: 0;
  z-index: 1;
  pointer-events: none;
}

/* ── Leaving / glitch exit ── */
.leaving .loader-content {
  animation: glitch-content 0.65s ease forwards;
}

.leaving .gl1 {
  animation: glitch-layer1 0.65s ease forwards;
}

.leaving .gl2 {
  animation: glitch-layer2 0.65s ease forwards;
}

@keyframes glitch-content {
  0%   { transform: translate(0); filter: none; opacity: 1; }
  15%  { transform: translate(-4px, 2px); filter: hue-rotate(90deg) saturate(3); }
  30%  { transform: translate(4px, -2px); filter: hue-rotate(-60deg); }
  45%  { transform: translate(-2px, 4px) skewX(3deg); opacity: 0.8; }
  60%  { transform: translate(6px, -1px) skewX(-2deg); filter: blur(1px); }
  75%  { transform: translate(-3px, 3px); opacity: 0.4; filter: blur(2px); }
  100% { transform: translate(0); opacity: 0; filter: blur(6px); }
}

@keyframes glitch-layer1 {
  0%   { opacity: 0; transform: translate(0); }
  20%  { opacity: 0.25; transform: translate(-8px, 0); background: rgba(255, 107, 138, 0.15); }
  40%  { opacity: 0.15; transform: translate(8px, 0); }
  60%  { opacity: 0.3;  transform: translate(-4px, 0); }
  80%  { opacity: 0.1;  transform: translate(0); }
  100% { opacity: 0; }
}

@keyframes glitch-layer2 {
  0%   { opacity: 0; transform: translate(0); }
  25%  { opacity: 0.2; transform: translate(6px, -3px); background: rgba(100, 255, 218, 0.08); }
  50%  { opacity: 0.3; transform: translate(-6px, 3px); }
  75%  { opacity: 0.1; transform: translate(3px, 0); }
  100% { opacity: 0; }
}

/* ── Vue transition (final fade after glitch) ── */
.loader-leave-active {
  transition: opacity 0.3s ease;
}
.loader-leave-to {
  opacity: 0;
}
</style>