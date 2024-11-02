<template>
  <nav class="menu">
    <Slide>
      <a id="home" href="/"> <span class="bm-link">Home</span> </a>

      <a id="about" href="/page/about">
        <span class="bm-link">About Me</span>
      </a>
      <a id="gallery" href="/page/gallery">
        <span class="bm-link">Image Gallery</span>
      </a>
      <a id="contact" href="/page/contact">
        <span class="bm-link">Contact</span>
      </a>
      <a id="register" href="/article/undervalued">
        <span class="bm-link">Latest Article</span>
      </a>
      <a id="login" href="/login">
        <span class="bm-link">Login</span>
      </a>
    </Slide>
  </nav>

</template>

<script>
import { Slide } from 'vue3-burger-menu';

export default {
  components: {
    Slide
  }
}
</script>

<style>
.bm-menu,
nav {
  display: block;
}

.bm-menu {
  background-color: #18232c !important;
}
</style>