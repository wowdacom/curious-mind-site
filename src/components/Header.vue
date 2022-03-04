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
        <router-link class="mr-5 hover:text-gray-900" to="/project"
          >Happiness Project</router-link
        >
        <router-link class="mr-5 hover:text-gray-900" to="/tests"
          >Personality Tests</router-link
        >
        <router-link class="mr-5 hover:text-gray-900" to="/new"
          >Monthly Aritcle</router-link
        >
        <router-link class="mr-5 hover:text-gray-900" to="/therapists"
          >Find a Therapist</router-link
        >
        <div class="mr-5 inline-block hover:text-gray-900">
          More<svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </nav>
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
