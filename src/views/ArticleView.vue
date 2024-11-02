<template>
  <section class="wrapper">
    <div v-if="pageRoute == 'list'">
      <ArticleList />
    </div>
    <div v-if="pageRoute == 'undervalued'">
      <UndervaluedHTML />
    </div>
    <div v-if="pageRoute == 'concurrency'">
      <ComparingConcurrency />
    </div>
    <div v-if="pageRoute == 'go-rust'">
      <RustForGoCoders />
    </div>
    <div v-if="pageRoute == 'why-rust'">
      <WhyRust />
    </div>
    <div v-if="pageRoute == 'vue-tips'">
      <VueTips />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import UndervaluedHTML from "../components/articles/UndervaluedHTML.vue";
import ComparingConcurrency from "../components/articles/ComparingConcurrency.vue";
import RustForGoCoders from "../components/articles/RustForGoCoders.vue";
import WhyRust from "../components/articles/WhyRust.vue";
import VueTips from "../components/articles/VueTips.vue";
import ArticleList from "../components/articles/ArticleList.vue";
const route = useRoute();
const pageRoute = route.params.name;
</script>