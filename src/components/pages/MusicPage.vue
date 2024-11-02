<template>
  <article class="page">


    <header>
      <h3>I've always made music</h3>
      <p>
        Be it in a broken down barn with the band,
        on a porch with acoustic guitars,
        in a little studio in south Georgia, or with a Pentium 60...
      </p>
    </header>

    <h4>Download MP3s:</h4>

    <p>
      Here is a collection of some of my favorite MP3's that
      I've made over the years. Some of these tracks have been used in commercials,
      some in documentaries, even games.
    </p>
    <p>Feel free to use them as you see fit.
      If you do use any of them, or would like to use a higher quality
      version of any of these MP3's, <a href="/page/contact">let me know</a>.
      It's not required, I just like to see what you've done with them.
    </p>

    <hr>

    <ul>
      <li v-for="song in songs" key="song.id">
          <h5>{{ song.title }}</h5>
          <p>{{ song.text }}</p>
          
          <audio controls="">
            <source :src="`/audio/${song.file}`" 
              type="audio/mpeg">Your browser doesn't support audio tag?
          </audio>

          <button aria-label="download" rel="prev" class="download-button" 
              onclick="modalExample.close()">Download
          </button>
      </li>
    </ul>
  </article>
</template>

<script setup>
const songs = [
  {
    id: 1,
    title: "Theme for an Imaginery Sitcom",
    file:  "Theme for an imaginery sit com.mp3",
    text: "As I fell asleep I dreamed I was in a hollywood Sitcom."
  }
]
</script>

<style scoped>
ul{  list-style: none; margin:2rem 0;}
li{
  list-style: none;
}

button.download-button{
  margin-top: 1rem;
  max-width: 420px!important;
}
.intro {
  display: block;
  margin-bottom: 1rem;
}
</style>