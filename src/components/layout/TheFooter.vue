<template>
  <footer id="footer">
    <section class="footer-links">
      <div v-for="section in footerSections" :key="section.title" class="footer-column">
        <h5>{{ section.title }}</h5>
        <ul class="list-unstyled">
          <li v-for="link in section.links" :key="link.id">
            <a :href="link.link">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </section>

    <section class="credits">
      <p>&copy; Some Rights Reserved 
        <a href="https://turnerkendall.com">Turner Kendall</a> 2024. &nbsp; Made with  
        <a href="https://vuejs.org/">VueJs</a>, and <a href="https://picocss.com/">Pico.css</a>
      </p>
    </section>
 
  </footer>
</template>

<script setup>
import { footerSections } from '../../lib/footerData'
</script>

<style>
.footer-links {
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background-color: #18232c; */
}

.footer-column {
  text-align: left;
  padding: 10px;
  margin: 20px;
}

.footer-column h5 {
  margin: 0 0 15px 0;
  padding: 0;
  font-size: .8rem;
  font-weight: 800;
}

.footer-column ul {
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 5px;
}

.footer-column ul li {
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: .8rem;
}
.credits p{
  font-size: .88rem;
  line-height: .8rem;
}
</style>