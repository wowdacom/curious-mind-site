<template>
  <div class="p-4 max-w-[1200px] mx-auto">
    <div
      class="container relative bg-gradient-to-br from-[#0aaff1] to-[#ffffff] rounded-xl border-solid border border-opacity-50"
    >
      <router-link class="mr-5 hover:text-gray-900" to="/project">
        <div
          class="absolute left-0 top-0 w-full h-full flex justify-center items-center text-center"
        >
          <h1
            class="lg:text-8xl lg:translate-y-2 text-4xl transform -rotate-6 lg:translate-y-8 z-10"
          >
            My Happiness Project ^ᗜ^
          </h1>
          <img
            class="absolute left-[0px] bottom-[-57px] w-[35%]"
            src="https://i.imgur.com/bqLyvxa.png"
            alt=""
          />
          <div
            class="absolute right-0 bottom-[-60px] lg:right-[60px] lg:bottom-[-10px] hinge"
          >
            <img
              class="w-[30px] h-[30px] lg:w-[70px] lg:h-[70px]"
              src="https://i.imgur.com/kCJBz7w.png"
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
    border: none;
  }

  20%,
  60%,
  80%,
  100% {
    transform: rotate3d(0, 0, 1, -20deg);
    background: yellow;
    padding: 10px;
    border: solid 3px black;
    border-radius: 5px;
    animation-timing-function: ease-in-out;
  }

  40%,
  70% {
    transform: rotate3d(0, 0, 1, 40deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
    border: none;
    background: transparent;
  }
}

.hinge {
  animation: hinge 6s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards;
}
</style>
