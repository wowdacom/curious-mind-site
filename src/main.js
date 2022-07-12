import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

import Home from './components/Pages/Home.vue';
import FindTherapists from './components/Pages/FindTherapists.vue';
import HappinessProjectSinglePage from './components/Pages/HappinessProjectSinglePage.vue';
import MentalGadget from './components/Pages/MentalGadget.vue';
import HappinessArticleList from './components/HappinessProject/ArticleList.vue';
import BookReviewArticleList from './components/BookReview/ArticleList.vue';
import ViewsArticleList from './components/NewsAndViews/ArticleList.vue';
import About from './components/Pages/About.vue';
import SingleArticle from './components/Pages/SingleArticle.vue';

import 'virtual:windi.css';
import '@/../node_modules/leaflet/dist/leaflet.css';

const router = createRouter({
  base: './',
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/therapists/',
      name: 'Therapists',
      component: FindTherapists,
    },
    {
      path: '/gadgets/',
      name: 'Gadgets',
      component: MentalGadget,
    },
    {
      path: '/happiness-articles/',
      name: 'happiness-articles',
      component: HappinessArticleList,
    },
    {
      path: '/project/',
      name: 'Project',
      component: HappinessProjectSinglePage,
    },
    {
      path: '/book-review/',
      name: 'book-review',
      component: BookReviewArticleList,
    },
    {
      path: '/news-and-views/',
      name: 'news-and-views',
      component: ViewsArticleList,
    },
    {
      path: '/article/:title/',
      name: 'Article',
      component: SingleArticle,
    },
    {
      path: '/about/',
      name: 'About',
      component: About,
    },
  ],
});

createApp(App).use(router).mount('#app');
