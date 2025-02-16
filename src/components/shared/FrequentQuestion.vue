<template>
  <section id="faq">
    <h4>Frequent Questions</h4>
    <details>
      <summary>Are You Available?</summary>
      <p>
        Yes, I am available for hire. 
        I am a full stack developer with a focus on Vue 3, Node, and MongoDB. 
        I am also available for consulting and training. 
        Please <a href="/page/contact">contact me here for more details</a>.
      </p>
     
    </details>
    <details open>
      <summary>Where's Headlin3s?</summary>
      <p>
        After half a decade I had to shut it down. It was a great run and I learned a lot but ulitmately it was not financially sustainable. 
        <a href="https://github.com/Turner-Kendall/headlin3s">You can see the code from the final version here</a>
      </p>
    </details>

    <details>
      <summary>Who are you?</summary>
      <p>
        You might know me as <a href="https://turnerkendall.com">
          Turner Kendall
        </a>, <a href="https://tripkendall.com" target="_blank" rel="noopener">
          Trip Kendall</a>, James, or even
        <a href="http://web.archive.org/web/20120212150556/http://imjtk.com/">JTk</a> - hey I've been around a while.
        Right now I am writing Rust and it is an entirely new experience.
      </p>
    </details>

    <details>
      <summary>A Song?</summary>
        <p>Like to hear it? <a href="/audio/boomabilly.mp3">Here it goes...</a></p>
    </details>

    <details>
      <summary>What is φhi</summary>
      <p>
        It's an opinionated VueJs starter site using Pico and a (very) few npms
        and what this site is based on. <a href="https://phi.skin/">Check it out here</a>.
    </p>
    </details>

    <details>
      <summary>Still Do WP?</summary>
      <p>
        Not if I can help it... 
    </p>
    <p>But I'll still occasionally create a 
      WordPress theme for hire.  Vue is my platform of choice these days.</p>
    </details>

    <details>
      <summary>Social Media?</summary>
      <p>Yes, exclusively on Twitter - er, <a href="https://x.com/turnerkendall3">Xclusively on ...X.</a>  </p>
    </details>

  </section>

</template>

<style>
#faq {
  padding-top: 3rem;
}

summary {
  font-size: 1rem;
  font-weight: 700;
}

details ul {
  text-align: right;
  line-height: .9;
  font-size: .9rem;
}

details p {
  text-align: right;
  font-size: .85rem;
  line-height: .9rem;
}
</style>