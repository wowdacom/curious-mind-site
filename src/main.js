import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/Pages/Home.vue";
import FindResources from "./components/Pages/FindResources.vue";
import HappinessArticleSinglePage from "./components/Pages/HappinessArticleSinglePage.vue";
import HappinessArticleList from "./components/HappinessProject/ArticleList.vue";
import BookReviewArticleList from "./components/BookReview/ArticleList.vue";
import TechStudiesList from "./components/TechStudies/ArticleList.vue";
import BiblicalStudiesList from "./components/BiblicalStudiesList/ArticleList.vue";
import About from "./components/Pages/About.vue";
import SingleArticle from "./components/Pages/SingleArticle.vue";

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
      path: "/resources/",
      name: "resources",
      component: FindResources,
    },
    {
      path: "/happiness-proposal/",
      name: "happiness-proposal",
      component: HappinessArticleList,
    },
    {
      path: "/happiness-proposal/:id?",
      name: "happiness-proposal-single-page",
      component: HappinessArticleSinglePage,
    },
    {
      path: "/book-reviews/",
      name: "/book-reviews",
      component: BookReviewArticleList,
    },
    {
      path: "/tech-studies/",
      name: "tech-studies",
      component: TechStudiesList,
    },
    {
      path: "/biblical-studies/",
      name: "biblical-studies",
      component: BiblicalStudiesList,
    },
    {
      path: "/biblical-studies/:title/",
      name: "biblical-studies",
      component: SingleArticle,
    },
    {
      path: "/article/:title/",
      name: "Article",
      component: SingleArticle,
    },
    {
      path: "/about/",
      name: "About",
      component: About,
    },
  ],
});

createApp(App).use(router).mount("#app");
