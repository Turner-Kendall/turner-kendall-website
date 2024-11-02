<template>
  <article >
    
  <header>
    <h3>Responsive Images & Gallery</h3>
    <p>
      You can see <a href="/page/gallery">the full gallery here.</a>
    </p>
  </header>

    <section id="gallery">
      <div class="gallery-item" v-for="i in images" :key="i.id">
      <a :href="i.url">
        <img :src="`/images/thumb-${i.id}.webp`" 
          :alt="i.name" 
          class="gal-img" />
      </a>
    </div>
    </section>

    <TheSplider />

  </article>
</template>

<script setup>
import TheSplider from './TheSplider.vue';
let images = [
  {
    id: 1,
    name: "Pawel Czerwinski",
    url: "https://unsplash.com/photos/background-pattern-uXy0UbFwoXE",
  },
  {
    id: 5,
    name: "BoliviaInteligente",
    url: "https://unsplash.com/photos/a-group-of-planets-in-the-dark-sky-_75VdeLT3BI",
  },
  {
    id: 3,
    name: "Suleman Serwar",
    url: "https://unsplash.com/photos/a-white-vase-filled-with-purple-flowers-on-top-of-a-table-SB3Mc8cfnSI",
  },
  {
    id: 4,
    name: "Suleman Serwar",
    url: "https://unsplash.com/photos/a-pair-of-headphones-sitting-on-top-of-a-table-2-3WHq7X8wg",
  },
]
</script>

<style scoped>
#gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

h3{ padding-bottom:0; margin-bottom:0;}

.gallery-item {
  flex: 1 1 200px;
  /* Each image will be 200px wide, but flexible */
  text-align: center;
}

.gal-img {
  max-width: 96%;
  margin:2%;
  height: auto;
  border-radius: 0.5rem;
  -webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}

.gal-img:hover{
  margin: 0;
  max-width: 100%;
  border: 0;
}

</style>