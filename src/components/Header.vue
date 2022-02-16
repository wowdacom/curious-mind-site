<template>
  <header class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <router-link
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        to="/"
        ><Logo></Logo
      ></router-link>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <router-link class="mr-5 hover:text-gray-900" to="/new"
          >Monthly Aritcle</router-link
        >
        <router-link class="mr-5 hover:text-gray-900" to="/therapists"
          >Find a Therapist</router-link
        >
        <a class="mr-5 hover:text-gray-900">Psycho 101</a>
        <a class="mr-5 hover:text-gray-900">FE Tech</a>
      </nav>
      <router-link
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        to="/about"
        >About Plan<svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path></svg
      ></router-link>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Other/Logo.vue';
export default {
  components: {
    Logo,
  },
};
</script>
<style scoped></style>
