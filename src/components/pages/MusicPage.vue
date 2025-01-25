<template>
  <article class="page">
    <header>
      <h3>I've always made music</h3>
      <p>
        Be it in a broken down barn with the band, on a porch with acoustic 
        guitars, in a little studio in south Georgia, or with a Pentium 60...
      </p>
    </header>

    <h4>Download MP3s:</h4>
    <p>
      Here is a collection of some of my favorite MP3s that
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
          <source :src="`/audio/${song.file}`" type="audio/mpeg">Your browser doesn't support audio tag?
        </audio>

        <button aria-label="download" rel="prev" class="download-button" onclick="modalExample.close()">
          Download
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
    file: "Theme for an imaginery sit com.mp3",
    text: "As I fell asleep I dreamed I was in a hollywood sitcom, and that I was the star of that sitcom."
  },
  {
    id: 2,
    title: "Ninja's Choice",
    file: "NinjasChoice.mp3",
    text: "Prolly the best of this kinda thing I ever made?  This is the 20th anniversary of this MP3"
  },
  {
    id: 3,
    title: "Pray (2020)",
    file: "2020Prayer.mp3",
    text: "A much more recent and modern effort. A full length song appropriate for any number of uses. "
  },
  {
    id: 4,
    title: "'Merica",
    file: "Merica.mp3",
    text: "Straight outta the compound; in honor of our day of independence."
  },
  {
    id: 5,
    title: "Ugly Whip",
    file: "UglyWhip.mp3",
    text: "On the banks of the Talquin watching the ugly whips get stuck in the mud."
  },
  {
    id: 6,
    title: "About a Minute",
    file: "almostAMinute.mp3",
    text: "A fun little 60 second groove, use it ( as others have ) for intro music, outro music, or background music."
  },
  {
    id: 7,
    title: "The Real Me",
    file: "THeRealMe.mp3",
    text: "The most popular download historically, a minute and a half of modern melodious music."
  },
  {
    id: 8,
    title: "aKwardsTrumz",
    file: "akwardSrumz.mp3",
    text: "From the ridiculous to the sublime?  A minute of guitar that is actually  more useful than it might appear on first listen."
  },
  {
    id: 9,
    title: "tK One",
    file: "TripKendallOne.mp3",
    text: "The background music I created for the TripKendall Demo Reel Video. Feel free to use it in your videos as well."
  },
  {
    id: 10,
    title: "Bagwas Track 3",
    file: "bagwasThree.mp3",
    text: "From the legendary Beat A Gopher With A Stick Sessions."
  },
]
</script>

<style scoped>
h5{margin-bottom:10px; color:#ffffff75}
p{font-size: .9rem; line-height: 1;}
ul {
  list-style: none;
  margin: 2rem 0;
  padding: 0;
}

li {
  list-style: none;
  background-color: #ffffff05;
  border-radius: .5rem;
  padding: 2rem 1rem 1rem 1rem;
}

button.download-button {
  margin-top: 1rem;
  padding: .3rem;
  max-width: 300px !important;
}

.intro {
  display: block;
  margin-bottom: 1rem;
}
h5{font-weight: 700;}
</style>