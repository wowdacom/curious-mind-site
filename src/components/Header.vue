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
        <div class="mr-5 inline-block hover:text-gray-900">About</div>
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
