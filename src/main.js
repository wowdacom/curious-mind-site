import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

import Home from './components/Pages/Home.vue';
import FindTherapists from './components/Pages/FindTherapists.vue';
import HappinessProject from './components/Pages/HappinessProject.vue';
import MentalGadget from './components/Pages/MentalGadget.vue';
import HappinessArticleList from './components/HappinessProject/HappinessArticleList.vue';
// import SingleArticle from './components/Pages/Article.vue';
import About from './components/Pages/About.vue';

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
      path: '/project/',
      name: 'Project',
      component: HappinessProject,
    },
    {
      path: '/gadgets/',
      name: 'Gadgets',
      component: MentalGadget,
    },
    {
      path: '/articles/',
      name: 'ArticleList',
      component: HappinessArticleList,
    },
    // {
    //   path: '/articles/:title',
    //   name: 'Article',
    //   component: SingleArticle,
    // },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});

createApp(App).use(router).mount('#app');
