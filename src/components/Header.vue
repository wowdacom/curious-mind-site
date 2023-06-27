<template>
  <header class="text-gray-600 body-font relative z-100">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <router-link
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        to="/"
        ><Logo></Logo
      ></router-link>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base md:justify-center justify-between"
      >
        <router-link class="mr-5 hover:text-gray-900" to="/happiness-proposal"
          >我的快樂生活提案</router-link
        >
        <router-link class="mr-5 hover:text-gray-900" to="/book-reviews"
          >外文讀書趣</router-link
        >
        <router-link class="mr-5 hover:text-gray-900" to="/biblical-studies"
          >聖經研究</router-link
        >
        <router-link class="mr-5 hover:text-gray-900" to="/resources"
          >資源分享</router-link
        >
        <router-link class="mr-5 hover:text-gray-900" to="/about"
          >關於我</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/Other/Logo.vue";
export default {
  components: {
    Logo,
  },
};
</script>
<style scoped></style>
