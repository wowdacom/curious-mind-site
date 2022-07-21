<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="w-full lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            class="object-cover object-center h-full w-full"
            :src="cover"
          />
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div
              class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                {{ title }}
              </h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p class="text-base">
                {{ subtitle }}
              </p>
            </div>
          </div>
          <div
            class="w-2/3 pl-8 py-8 border-l lg:border-gray-200 border-t-0 lg:border-t lg:mt-4 lg:pt-4 mt-0"
          >
            <p v-html="content" class="leading-relaxed text-lg mb-4"></p>
            <router-link
              class="text-indigo-500 inline-flex items-center"
              to="/"
            >
              回到上一頁
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { db } from '../../config/firebaseConfig.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const article = reactive({
      category: '',
      content: '',
      cover: '',
      subtitle: '',
      title: '',
      url: '',
    });

    const route = useRoute();
    const title = route.params.title;

    const getCurrentAricle = async () => {
      const q = query(
        collection(db, 'article-lists'),
        where('title', '==', title)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
        Object.assign(article, { ...doc.data(), id: doc.id });
      });
    };

    getCurrentAricle();

    return {
      ...toRefs(article),
    };
  },
};
</script>

<style></style>
