<template>
  <splide :options="options">
    <splide-slide>
      <img src="/images/s-1.webp">
    </splide-slide>
    <splide-slide>
      <img src="/images/s-2.webp">
    </splide-slide>
    <splide-slide>
      <img src="/images/s-3.webp">
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
  export default { 
    data() {
      return {
        options: {
          // rewind : false,
          // updateOnMove: false,
          // width  : 800,
          autoWidth: true,
          autoHeight: true,
          gap    : '1rem',
        },
      };
    },
  }
</script>

<style>
.splide-crossfade .splide__slide:first-of-type,
.splide-crossfade .is-prev {
  opacity: 1 !important;
}
</style>