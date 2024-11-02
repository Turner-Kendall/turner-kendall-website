import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import PageView from "../views/PageView.vue";
import ArticleView from "../views/ArticleView.vue";
// import { store } from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home, },
    { path: "/page/:name", name: "PageView", component: PageView, },
    { path: "/article/:name", name: "ArticleView", component: ArticleView, },
    { path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    }
  ],
});

export default router;