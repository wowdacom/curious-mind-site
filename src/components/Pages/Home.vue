<template>
  <Banner></Banner>
  <PopularArticles
    v-if="popArticles.length"
    :pop-articles="popArticles"
  ></PopularArticles>
  <PopularArticlesSkeleton v-else></PopularArticlesSkeleton>
  <HappinessArticleList></HappinessArticleList>
  <RelevantArticles></RelevantArticles>
</template>

<script>
import { ref } from 'vue';
import { db } from '../../config/firebaseConfig.js';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import process from 'process';

export default {
  setup() {
    const popArticles = ref([]);
    // Get a reference to the database service

    const getArticlesList = async () => {
      const docRef = doc(db, 'article-lists', 'popular-article-lists');

      const querySnapshot = await getDocs(collection(db, 'article-lists'));
      querySnapshot.forEach((doc) => {
        popArticles.value.unshift(doc.data());
      });
    };

    getArticlesList();

    return {
      popArticles,
    };
  },
};
</script>

<style></style>
