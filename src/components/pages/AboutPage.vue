<template>
  <article class="page">

    <header>
      <IntroHeader />
    </header>

    <p>
      Previously I Co-founded what became the biggest web dev company
      in the state, created Nikki Haley's website when she ran for governor,
      and delivered literally dozens of custom solutions as an indy dev.
    </p>

    <SkillsPrevious />

    <h4>Elevator Pitch</h4>
    <p>
      I am a software developer with a passion for data and crypto. I am currently working on a variety of projects focusing on distributed systems and privacy in Rust.
    </p>

    <p>
      I am proficient in Python, Javascript, and Go. I am still learning Rust but I am getting better at it every day.
    </p>

    <blockquote>
      I am always on the lookout for interesting opportunities. While I have been focused on the backend lately I speak html / css / js fluently.
      <footer>
        <cite>- Contact me to discuss a job, project, or anything else that's on your mind.</cite>
      </footer>
    </blockquote>

   <h4>Rust is great, but it is... allot. </h4>

   <p>
    Thankfully I learned Go first as I struggled with pointers, interfaces, etc. but had no trouble with them in Rust as I learned the concepts well previously. Once you get past the borrow checker, understand Option and Result, and get generics and traits - Rust starts getting fun.
   </p>

   <p>
    I also like Vue3, MySQL, and Pandas. Python might be clunky but Pandas is as good of a package as I have ever used. I like JSON way more than is warranted and can manipulate it ways never intended. Here's a link to some other things I like.
   </p>

  </article>
</template>

<script setup>
  import IntroHeader from '../shared/IntroHeader.vue';
import SkillsPrevious from '../shared/SkillsPreviously.vue'
</script>