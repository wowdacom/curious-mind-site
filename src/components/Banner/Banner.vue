<template>
  <div class="p-4 max-w-[1200px] mx-auto">
    <div
      class="container relative bg-gradient-to-br from-[#0aaff1] to-[#ffffff] rounded-xl border-solid border border-opacity-50"
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
          <div class="absolute right-[40px] bottom-[20px] hinge">
            <img
              width="50"
              height="50"
              src="https://i.imgur.com/YxG0z5o.png"
              alt=""
            />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rock+3D&display=swap');

.container {
  padding-top: 10%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

.container h1 {
  font-family: 'Rock 3D', cursive;
}

@keyframes hinge {
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60%,
  80% {
    transform: rotate3d(0, 0, 1, 170deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  70% {
    transform: rotate3d(0, 0, 1, 0deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
}

.hinge {
  animation: hinge 6s infinite;
  transform-origin: 50% 50%;
}
</style>
