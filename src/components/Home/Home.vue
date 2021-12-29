<template>
  <PopularArticles :pop-articles="popArticles"></PopularArticles>
  <ArticleList></ArticleList>
  <RelevantArticles></RelevantArticles>
</template>

<script>
import { ref } from 'vue';
import { db } from '../../config/firebaseConfig.js';
import { doc, getDoc } from 'firebase/firestore';
import process from 'process';

export default {
  setup() {
    const popArticles = ref([]);
    // Get a reference to the database service

    const getPopularArticles = async () => {
      const docRef = doc(db, 'article-lists', 'popular-article-lists');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        for (const [key, value] of Object.entries(docSnap.data())) {
          popArticles.value.push(value);
        }
      } else {
        console.log('No such document!');
      }
    };
    getPopularArticles();

    return {
      popArticles,
    };
  },
};
</script>

<style></style>
