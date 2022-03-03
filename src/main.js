import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/Home/Home.vue";
import TherapistsList from "./components/Home/TherapistsList.vue";
import ArticleList from "./components/Home/ArticleList.vue";
import Article from "./components/Article.vue";
import PsychoStudy from "./components/PsychoStudy.vue";
import About from "./components/About.vue";
import "virtual:windi.css";
import "@/../node_modules/leaflet/dist/leaflet.css";

const router = createRouter({
  base: "./",
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/therapists/",
      name: "Therapists",
      component: TherapistsList,
    },
    {
      path: "/blog/",
      name: "BlogList",
      component: ArticleList,
    },
    {
      path: "/blog/:title",
      name: "Blog",
      component: Article,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/psycho-study",
      name: "PsychoStudy",
      component: PsychoStudy,
    },
  ],
});

createApp(App).use(router).mount("#app");
