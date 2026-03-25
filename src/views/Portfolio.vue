<script setup>
import { ref } from 'vue'
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import Navbar from '@/components/Navbar.vue';
import Projects from '@/components/Projects.vue';
import Skills from '@/components/Skills.vue';
import Certifications from '@/components/Certifications.vue';

const loaded = ref(false)
</script>

<template>
    <div class="app">
        <LoadingScreen :on-complete="() => loaded = true"/>
       <template v-if="loaded">
         <Navbar/>
            <About/>
                <Skills/>
                    <Projects/>
                    <Certifications/>
            <Contact/>
        <Footer/>
       </template>
    </div>
</template>