<template>

  <article>
    <header>
      <h2>Get In Touch</h2>
      <p>
        You can <a href="/page/contact">connect with me here</a> in a variety of ways.
      </p>
    </header>

    <div class="the-latest">
      <h3>The Latest</h3>
      <h6>New WebApp: <a href="https://memewar.app">MemeWar.App</a></h6>
    </div>
    <blockquote>
      "Meme War  aspires to become the defacto determiner of the best memes in the history of memes. We collect memes, let our users vote in meme battles, rate memes, submit memes."
      <footer>
        <cite>- <a href="https://turnerkendall.com">Turner Kendall</a></cite>
      </footer>
    </blockquote>

    <figure>
      <img src="/images/memewar.webp" alt="Meme War" />
      <figcaption>
        1, 2, 3, 4, I declare a 
        <a href="https://memewar.app" target="_blank">Meme War</a>
      </figcaption>
    </figure>

  </article>
</template>

<script setup>
import {ref} from 'vue';
let link = "https://unsplash.com/photos/dark-staircase-EzoGykQmUYI"
let credit = ref('unsplash.com')
</script>

<style scoped>
 h3, h6{
  margin: 0;
}
</style>