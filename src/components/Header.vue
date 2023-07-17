<template>
  <header class="text-gray-600 body-font relative z-100 h-22">
    <div
      class="w-full"
      :class="{ 'bg-white bg-opacity-70 fixed top-0 ': isFixbarFixed }"
    >
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <router-link
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 font-bold"
          to="/"
        >
          <Logo></Logo>
        </router-link>
        <nav
          class="md:ml-auto my-6 flex flex-wrap items-center text-base md:justify-center justify-between"
        >
          <router-link
            class="mr-5 hover:text-gray-900 font-bold"
            to="/happiness-proposal"
            >我的快樂生活提案</router-link
          >
          <router-link
            class="mr-5 hover:text-gray-900 font-bold"
            to="/book-reviews"
            >外文讀書趣</router-link
          >
          <router-link
            class="mr-5 hover:text-gray-900 font-bold"
            to="/tech-studies"
            >技術研究</router-link
          >
          <router-link
            class="mr-5 hover:text-gray-900 font-bold"
            to="/biblical-studies"
            >聖經研究</router-link
          >
          <router-link
            class="mr-5 hover:text-gray-900 font-bold"
            to="/resources"
            >資源分享</router-link
          >
          <router-link class="mr-5 hover:text-gray-900 font-bold" to="/about"
            >關於我</router-link
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/Other/Logo.vue";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  components: {
    Logo,
  },
  setup() {
    const isFixbarFixed = ref(false);

    const handleScroll = () => {
      isFixbarFixed.value = window.pageYOffset > 0;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isFixbarFixed,
    };
  },
};
</script>

<style scoped>
header {
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;
}

header.bg-white {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
