<template>
  <section id="contact">
    <h4>Contact Me</h4>
    <p class="smaller">
      Get in touch and I'll reply asap.
    </p>
    <form>

      <input type="text" name="name" placeholder="Name" id="name" aria-label="Name" required />

      <input type="email" name="email" placeholder="Email address" id="email" aria-label="Email address"
        autocomplete="email" required />

      <textarea v-model="message" id="message" placeholder="Enter message here.">
      </textarea>

      <button type="submit">Submit</button>
      <fieldset>
        <label for="terms" class="smaller">
          <input type="checkbox" role="switch" id="terms" name="terms" />
          I agree to receive a
          <a href="#" onclick="event.preventDefault()">follow up email</a>.
        </label>
      </fieldset>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue';
let message = ref('')
</script>