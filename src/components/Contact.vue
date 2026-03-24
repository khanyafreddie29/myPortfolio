<script setup>
import { ref } from 'vue'
import BgShapes from './BgShapes.vue'

const modalOpen = ref(false)
const formData = ref({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    modalOpen.value = false
    formData.value = { name: '', email: '', subject: '', message: '' }
  }, 2500)
}

const closeModal = () => {
  modalOpen.value = false
}
</script>

<template>
  <section class="contact-section" id="contact">
   <BgShapes />
   <div class="container">
    <!-- Section heading -->
    <div class="section-title">
      <h2><span class="num">04.</span><span class="label">What's Next?</span></h2>
      <div class="title-line"></div>
    </div>

    <div class="contact-body">
      <h3 class="big-heading">Ready to create?</h3>
      <p class="contact-description">
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, my inbox is always open! I'll try my best to get
        back to you as soon as possible.
      </p>
      <button class="say-hello-btn" @click="modalOpen = true">
        Dis bonjour 💌
      </button>
    </div><!-- /.contact-body -->
   </div><!-- /.container -->

    <!-- Modal overlay -->
    <Transition name="fade">
      <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
        <Transition name="slide-up">
          <div v-if="modalOpen" class="modal">

            <!-- Header -->
            <div class="modal-header">
              <div>
                <h3 class="modal-title">Let's Connect</h3>
                <p class="modal-subtitle">Drop me a message and I'll get back to you as soon as possible.</p>
              </div>
              <button class="close-btn" @click="closeModal" aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <!-- Success state -->
            <Transition name="fade">
              <div v-if="submitted" class="success-state">
                <div class="success-icon">✓</div>
                <p>Message sent! I'll be in touch soon.</p>
              </div>
            </Transition>

            <!-- Form -->
            <form v-if="!submitted" class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input id="name" v-model="formData.name" type="text" placeholder="Jane Doe" required />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input id="email" v-model="formData.email" type="email" placeholder="example@email.com" required />
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input id="subject" v-model="formData.subject" type="text" placeholder="What's this about?" required />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="formData.message" rows="5" placeholder="Tell me about your project or just say hello..." required></textarea>
              </div>

              <button type="submit" class="submit-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Message
              </button>
            </form>

          </div>
        </Transition>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');

/* ── Base ── */
.contact-section {
  position: relative;
  background-color: #0a0a0f;
  padding: 5rem 2rem 7rem;
  font-family: 'Inter', sans-serif;
  width: 100%;
  box-sizing: border-box;
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

/* ── Contact Body ── */
.contact-body {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}
.big-heading {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #f1f5f9;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0 0 1.5rem;
}
.contact-description {
  color: #64748b;
  line-height: 1.85;
  font-size: 1.05rem;
  margin: 0 0 2.5rem;
}

/* ── Say Hello Button ── */
.say-hello-btn {
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  color: #ff6b8a;
  background: transparent;
  border: 2px solid rgba(255, 107, 138, 0.5);
  padding: 0.9rem 2.2rem;
  border-radius: 15px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  justify-content: center;
  align-items: center;
}
.say-hello-btn:hover {
  background: rgba(255, 107, 138, 0.08);
  border-color: #ff6b8a;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 107, 138, 0.15);
}

/* ── Modal Overlay ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

/* ── Modal ── */
.modal {
  background: #13131c;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

/* ── Modal Header ── */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.75rem;
}
.modal-title {
  color: #f1f5f9;
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
  letter-spacing: -0.02em;
}
.modal-subtitle {
  color: #64748b;
  font-size: 0.88rem;
  margin: 0;
  line-height: 1.5;
}
.close-btn {
  background: none;
  border: none;
  color: #475569;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: color 0.2s ease, background 0.2s ease;
  flex-shrink: 0;
  margin-left: 1rem;
}
.close-btn:hover {
  color: #e2e8f0;
  background: rgba(255,255,255,0.06);
}

/* ── Form ── */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.form-group label {
  font-size: 0.82rem;
  font-weight: 500;
  color: #94a3b8;
  letter-spacing: 0.02em;
}
.form-group input,
.form-group textarea {
  background: #0d0d16;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  color: #e2e8f0;
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  padding: 0.75rem 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #334155;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: rgba(255, 107, 138, 0.5);
  box-shadow: 0 0 0 3px rgba(255, 107, 138, 0.08);
}
.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

/* ── Submit Button ── */
.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: #ff6b8a;
  color: #0a0a0f;
  border: none;
  border-radius: 10px;
  padding: 0.95rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: 0.25rem;
  width: 100%;
}
.submit-btn:hover {
  background: #ff8fa3;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(255, 107, 138, 0.3);
}

/* ── Success State ── */
.success-state {
  text-align: center;
  padding: 2rem 1rem;
  color: #64748b;
  font-size: 1rem;
}
.success-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 107, 138, 0.12);
  border: 1px solid rgba(255, 107, 138, 0.3);
  color: #ff6b8a;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

/* ── Transitions ── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-up-enter-active { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease; }
.slide-up-leave-active { transition: transform 0.2s ease, opacity 0.2s ease; }
.slide-up-enter-from  { transform: translateY(24px) scale(0.97); opacity: 0; }
.slide-up-leave-to    { transform: translateY(12px) scale(0.98); opacity: 0; }

/* ── Responsive ── */
@media (max-width: 520px) {
  .form-row { grid-template-columns: 1fr; }
  .modal { padding: 1.5rem; border-radius: 12px; }
}
</style>