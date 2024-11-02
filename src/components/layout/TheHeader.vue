<template>
  <header class="main-header">
    <img src="/images/avatar.png" id="logo">
    
    
    <section class="intro"> 
      <h1>{{ title }}</h1>
      <span class="sub-heading">{{ intro }}</span>
    </section>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const title = ref("Turner Kendall");
const intro = ref("Digital Development; A Slight Return...");

</script>

<style lang="css" scoped>
.intro {
  margin: 0 var(--half);
  /* margin: 0 var(--two-one); */
  font-size: 1rem;
}

#logo {
  height: 3rem;
  margin: 1.3rem 0 0 .3rem;
}

.main-header {
  padding: 1rem 0 0 1rem;
  text-align: left;
}

.sub-heading{
  padding-left: .25rem;
}


@media (min-width: 1024px) {
  .main-header {
    padding: 0;
    text-align: left;
  }
  #logo {
    height: 5rem;
    margin: 0;
  }
}
</style>