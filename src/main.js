import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home/Home.vue';
import TherapistsList from './components/Home/TherapistsList.vue';
import ProjectList from './components/Home/ProjectList.vue';
import Tests from './components/Home/TestsList.vue';
import ArticleList from './components/Home/ArticleList.vue';
import Article from './components/Article.vue';
import About from './components/About.vue';
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
      component: TherapistsList,
    },
    {
      path: '/project/',
      name: 'Project',
      component: ProjectList,
    },
    {
      path: '/tests/',
      name: 'Tests',
      component: Tests,
    },
    {
      path: '/blog/',
      name: 'BlogList',
      component: ArticleList,
    },
    {
      path: '/blog/:title',
      name: 'Blog',
      component: Article,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});

createApp(App).use(router).mount('#app');
