<template>
  <div class="over-hidden">
    <Banner></Banner>
    <div class="flex flex-col items-center justify-center mt-4 sm:mt-24 p-6">
      <div class="max-w-4xl bg-white rounded-lg shadow-lg">
        <div class="flex flex-col sm:flex-row">
          <div class="w-full sm:w-1/3">
            <img
              src="https://m.media-amazon.com/images/I/81QNkeOJobL._AC_UF1000,1000_QL80_.jpg"
              alt="文章圖片"
              class="object-cover w-full h-auto rounded-t-lg sm:rounded-l-lg"
            />
          </div>
          <div class="w-full sm:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h2 class="text-xl font-bold mb-2">
                Psych: The Story of the Human Mind
              </h2>
              <p class="text-gray-700 text-base mb-2">
                Psych is an expert and passionate guide to the most intimate
                aspects of our nature, serving up the equivalent of a serious
                university course while being funny, engaging, and full of
                memorable anecdotes. But Psych is much more than a comprehensive
                overview of the field of psychology. Bloom reveals what
                psychology can tell us about the most pressing moral and
                political issues of our time—including belief in conspiracy
                theories, the role of genes in explaining human differences, and
                the nature of prejudice and hatred.
              </p>
            </div>
            <div class="flex justify-between items-end">
              <div class="text-gray-500 text-sm mb-4">
                <p>作者：Paul Bloom</p>
                <p>時間：2023年7月17日</p>
                <p>地點：Taiwan</p>
              </div>
              <div class="flex justify-end h-10">
                <a
                  href="#"
                  class="inline-block px-4 py-2 bg-blue-500 text-white rounded-md"
                  >看完整文章</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PopularArticles
      v-if="popArticles.length"
      :pop-articles="popArticles"
    ></PopularArticles>
    <PopularArticlesSkeleton v-else></PopularArticlesSkeleton>
    <HappinessArticleList></HappinessArticleList>
    <RelevantArticles></RelevantArticles>
  </div>
</template>

<script>
import { ref } from "vue";
import { db } from "@/config/firebaseConfig.js";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import process from "process";

export default {
  setup() {
    const popArticles = ref([]);
    // Get a reference to the database service

    const getArticlesList = async () => {
      const docRef = doc(db, "article-lists", "popular-article-lists");

      const querySnapshot = await getDocs(collection(db, "article-lists"));
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
