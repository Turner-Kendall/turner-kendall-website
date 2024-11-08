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
      <p>{{ i.name}}</p>
    </div>
    </section>

  </article>
</template>

<script setup>
let images = [
  {
    id: 1,
    name: "Just like the white wing dove",
    url: "/images/1.webp",
  },
  {
    id: 2,
    name: "Election Video Graphic",
    url: "/images/2.webp",
  },
  {
    id: 3,
    name: "What I think I think",
    url: "/images/3.webp",
  },
  {
    id: 4,
    name: "First Design Back",
    url: "/images/4.webp",
  },
  {
    id: 5,
    name: "Pirate Bot Video Overlay",
    url: "/images/5.webp",
  },
  {
    id: 6,
    name: "Video Thumbnail",
    url: "/images/6.webp",
  },
  {
    id: 7,
    name: "Salty Ape",
    url: "/images/7.webp",
  },
  {
    id: 8,
    name: "Dark Brandon Rising",
    url: "/images/8.webp",
  },
  {
    id: 9,
    name: "Independence Day",
    url: "/images/9.webp",
  },
  {
    id: 10,
    name: "RIP Mainstream Media",
    url: "/images/10.webp",
  },
  {
    id: 11,
    name: "Print Design",
    url: "/images/11.webp",
  },
  {
    id: 12,
    name: "Suleman Serwar",
    url: "/images/12.webp",
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
p{font-size: .75rem;}
</style>