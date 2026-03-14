<script setup>
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import Projects from '@/components/Projects.vue';
import Skills from '@/components/Skills.vue';

</script>

<template>
    <div>
        <Navbar/>
            <About/>
                <Skills/>
                <Projects/>
            <Contact/>
        <Footer/>
    </div>
</template>