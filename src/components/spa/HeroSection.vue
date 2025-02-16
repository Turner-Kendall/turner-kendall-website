<template>
  <article id="hero">
    <IntroHeader />
      <button aria-label="Read More" rel="prev" class="secondary" @click="handleClick()">
        Read More...
      </button>
    <footer>
      This website is based on the Vue Skin I am working on
      <a href="https://phi.skin">φhi.skin</a> <br />
      My latest article: <a href="/article/vite">Vue + Vite</a> is here.
    </footer>
  </article>

  <SkillsPreviously />

</template>

<script setup>
import { useRouter } from 'vue-router'
import SkillsPreviously from '../shared/SkillsPreviously.vue';
import IntroHeader from '../shared/IntroHeader.vue';
const router = useRouter()
// const route = useRoute()
function handleClick() {
  router.push('/page/about')
};

</script>

<style>
#hero {
  padding: 1.33rem;
}

#hero h2 {
  padding-top: .33rem;
}

#hero footer {
  font-size: .9rem;
  font-weight: 800;
}

#hero button {
  margin: 1rem auto;
  padding: 0;
}
#hero .secondary{
  margin-top: 2rem;
}

#under-fold {
  padding-top: 2rem;
}
</style>