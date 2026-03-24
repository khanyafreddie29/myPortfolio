<script setup>
</script>

<template>
  <div class="bg-shapes" aria-hidden="true">
    <!-- Circles -->
    <div class="shape circle c1"></div>
    <div class="shape circle c2"></div>
    <div class="shape circle c3"></div>
    <div class="shape circle c4"></div>
    <!-- Squares -->
    <div class="shape square s1"></div>
    <div class="shape square s2"></div>
    <div class="shape square s3"></div>
    <div class="shape square s4"></div>
  </div>
</template>

<style scoped>
.bg-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* ── Base shape ── */
.shape {
  position: absolute;
  opacity: 0.3;
  border: 1px solid #ff6b8a;
}

.circle { border-radius: 50%; }
.square { border-radius: 6px; }

/* ── Circles ── */
.c1 {
  width: 180px; height: 180px;
  top: 8%; left: 5%;
  animation: float1 14s ease-in-out infinite;
}
.c2 {
  width: 90px; height: 90px;
  top: 55%; right: 8%;
  border-color: rgba(255, 107, 138, 0.6);
  opacity: 0.035;
  animation: float2 18s ease-in-out infinite;
}
.c3 {
  width: 50px; height: 50px;
  bottom: 12%; left: 18%;
  animation: float3 11s ease-in-out infinite;
}
.c4 {
  width: 130px; height: 130px;
  top: 30%; right: 20%;
  opacity: 0.025;
  animation: float1 20s ease-in-out infinite reverse;
}

/* ── Squares ── */
.s1 {
  width: 60px; height: 60px;
  top: 15%; right: 12%;
  animation: spin1 25s linear infinite;
}
.s2 {
  width: 35px; height: 35px;
  bottom: 20%; right: 25%;
  animation: spin2 18s linear infinite reverse;
}
.s3 {
  width: 80px; height: 80px;
  top: 65%; left: 6%;
  opacity: 0.03;
  animation: spin1 30s linear infinite;
}
.s4 {
  width: 25px; height: 25px;
  top: 42%; left: 35%;
  animation: float2 12s ease-in-out infinite;
}

/* ── Animations ── */
@keyframes float1 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33%       { transform: translateY(-18px) translateX(8px); }
  66%       { transform: translateY(10px) translateX(-6px); }
}

@keyframes float2 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50%       { transform: translateY(-24px) translateX(12px); }
}

@keyframes float3 {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-14px); }
}

@keyframes spin1 {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes spin2 {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}
</style>