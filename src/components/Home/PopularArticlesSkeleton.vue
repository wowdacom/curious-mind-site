<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3" :key="article" v-for="article in 3">
          <div
            class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <div
              class="bg-gray-200 lg:h-96 md:h-72 w-full object-cover object-center"
              alt="blog"
            />
            <div class="p-6 bg-gray-300">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
                {{ article.category }}
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ article.title }}
              </h1>
              <p class="leading-relaxed h-80px mb-3">{{ article.subtitle }}</p>
              <div class="flex items-center flex-wrap">
                <a
                  class="bg-gray-200 rounded-xl w-110px h-24px py-1 text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                </a>
                <span
                  class="animate-pulse bg-gray-200 rounded-xl w-63px h-24px text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                >
                </span>
                <span
                  class="bg-gray-200 rounded-xl w-30px h-24px py-1 text-gray-400 inline-flex items-center leading-none text-sm"
                >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    popArticles: {
      type: Array,
    },
  },
  setup(props) {},
};
</script>

<style></style>
