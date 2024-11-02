<template>
  <article >
    <header>
      <h3>Responsive Gallery</h3>
      <h6>Images assigned a size, but flex 😼</h6>
    </header>
    <section id="gallery">
      <div class="gallery-item" v-for="i in images" :key="i.id">
      <a :href="i.url">
        <img :src="`/images/${i.id}.webp`" :alt="i.name"  class="gal-img"/>
      </a>
    </div>
    </section>

  </article>
</template>

<script setup>
let images = [
  {
    id: 1,
    name: "Martin Sanchez",
    url: "https://unsplash.com/photos/the-letter-a-is-made-up-of-bright-lines-3wXrEK8h_pw",
  },
  {
    id: 2,
    name: "Maksin Samuilionak",
    url: "https://unsplash.com/photos/a-half-moon-is-seen-in-the-dark-sky-NaasFq1Xwmw",
  },
  {
    id: 3,
    name: "Eric Muhr",
    url: "https://unsplash.com/photos/a-view-of-a-beach-through-a-cave-lU13aSwgcz4",
  },
  {
    id: 4,
    name: "Josh Hild",
    url: "https://unsplash.com/photos/a-person-taking-a-picture-with-a-cell-phone-V-fPnAIgiYY",
  },
  {
    id: 5,
    name: "Galina Nelyubova",
    url: "https://unsplash.com/photos/two-ice-cream-pops-sitting-on-top-of-each-other-V2qbMKlU4vU",
  },
  {
    id: 6,
    name: "Galina Nelyubova",
    url: "https://unsplash.com/photos/a-bunch-of-soap-bubbles-floating-in-the-air-h-Ij-IDnc00",
  },
  {
    id: 7,
    name: "Cash Macanaya",
    url: "https://unsplash.com/photos/a-robot-that-is-standing-in-the-dark-TBikX7r2pKA",
  },
  {
    id: 8,
    name: "Pawel Czerwinski",
    url: "https://unsplash.com/photos/background-pattern-uXy0UbFwoXE",
  },
  {
    id: 9,
    name: "Jumping Jax",
    url: "https://unsplash.com/photos/a-colorful-sound-wave-on-a-black-background--TfwQjOWEp8",
  },
  {
    id: 10,
    name: "BoliviaInteligente",
    url: "https://unsplash.com/photos/a-group-of-planets-in-the-dark-sky-_75VdeLT3BI",
  },
  {
    id: 11,
    name: "Suleman Serwar",
    url: "https://unsplash.com/photos/a-white-vase-filled-with-purple-flowers-on-top-of-a-table-SB3Mc8cfnSI",
  },
  {
    id: 12,
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
h3, h6{
  margin: 0;
}
</style>