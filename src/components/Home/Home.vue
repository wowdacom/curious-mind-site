<template>
  <PopularArticles></PopularArticles>
  <ArticleList></ArticleList>
  <RelevantArticles></RelevantArticles>
</template>

<script>
import { db } from '../../config/firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

export default {
  setup() {
    // Get a reference to the database service

    const getArticles = async () => {
      const querySnapshot = await getDocs(
        collection(db, 'none-chinese-a-year')
      );
      console.log(querySnapshot._firestore);
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };
    getArticles();
  },
};
</script>

<style></style>
