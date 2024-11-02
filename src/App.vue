<script setup>
import TheFooter from './components/layout/TheFooter.vue';
import TheHeader from './components/layout/TheHeader.vue'
import TheNav from './components/layout/TheNav.vue'
import TheSidebar from './components/layout/TheSidebar.vue';
</script>

<template>
  <main>
    <TheNav />
    <div class="wrapper">
      <TheHeader />
      <div class="inner-row">
        <div class="inner-col">
          <router-view />
        </div>
        <TheSidebar />
      </div>
      <TheFooter />
    </div>
  </main>
</template>
