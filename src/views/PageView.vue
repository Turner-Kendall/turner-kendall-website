<template>
  <section class="wrapper">
    <div v-if="pageRoute == 'about'">
      <AboutPage />
    </div>
    <div v-if="pageRoute == 'gallery'">
      <GalleryPage />
    </div>
    <div v-if="pageRoute == 'contact'">
      <ContactPage />
    </div>
    <div v-if="pageRoute == 'music'">
      <MusicPage />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import AboutPage from '../components/pages/AboutPage.vue';
import ContactPage from "../components/pages/ContactPage.vue";
import GalleryPage from "../components/pages/GalleryPage.vue";
import MusicPage from "../components/pages/MusicPage.vue"
const route = useRoute();
const pageRoute = route.params.name;
</script>