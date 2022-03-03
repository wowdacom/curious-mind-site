<template>
  <div
    class="container relative mx-auto max-w-[980px] bg-gradient-to-br from-[#0aaff1] to-[#ffffff] rounded-xl border-solid border border-opacity-50"
  >
    <router-link class="mr-5 hover:text-gray-900" to="/project">
      <div
        class="absolute left-0 top-0 w-full h-full flex justify-center items-center text-center"
      >
        <h1 class="text-8xl transform -rotate-6">My Happiness Project ^ᗜ^</h1>
        <img
          class="absolute left-[0px] bottom-[-40px] w-[35%]"
          src="https://i.imgur.com/bqLyvxa.png"
          alt=""
        />
        <div class="absolute right-[25px] bottom-[10px] animate-swing w-[50px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
            />
          </svg>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rock+3D&display=swap');

.container {
  padding-top: 10%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  font-family: 'Rock 3D', cursive;
}
</style>
