<template>

    <h2>Who Are You?</h2>
    <p>
      You might know me as <a :href="urls[0].url">{{ urls[0].name }}</a>, 
      <a :href="urls[1].url" target="_blank" rel="noopener">{{ urls[1].name }}</a>, 
        James, or even <a :href="urls[2].url">{{ urls[2].name }}</a> -
      hey I've been around a while. &nbsp; These days I am still making web apps and 
       now I am writing Go and learning Rust.  The latter is an entirely new experience.
    </p>
 
</template>

<script setup>
  const urls = [
    {
      name: "Turner Kendall",
      url: "https://turnerkendall.com"
    },
    {
      name: "Trip Kendall",
      url: "https://tripkendall.com"
    },
    {
      name: "JTk",
      url: "http://web.archive.org/web/20120212150556/http://imjtk.com/"
    }
  ] 
</script>