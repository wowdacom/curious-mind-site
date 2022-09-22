<template>
  <div class="p-4 max-w-[1200px] mx-auto">
    <div class="container relative">
      <router-link class="mr-5 hover:text-gray-900" to="/project">
        <div
          class="absolute left-0 top-0 w-full h-full flex justify-center items-center text-center"
        >
          <h1
            class="lg:text-8xl lg:translate-y-1 text-4xl transform -rotate-6 lg:translate-y-8 z-50 p-10"
          >
            Let's Think Again!
          </h1>
          <img
            class="absolute left-[0px] bottom-[-20px] lg:left-[-100px] lg:top-[-200px] w-[35%]"
            src="https://i.imgur.com/eu79Bkx.png"
            alt=""
          />
          <div
            class="absolute right-0 bottom-[-30px] lg:right-[60px] lg:bottom-[-10px] hinge"
          >
            <img
              class="w-[30px] h-[30px] lg:w-[70px] lg:h-[70px]"
              src="https://i.imgur.com/kCJBz7w.png"
              alt=""
            />
          </div>
          <div
            class="absolute left-8 top-[-10px] lg:left-[80px] lg:top-[-10px]"
          >
            <img
              class="w-[30px] h-[30px] lg:w-[100px] lg:h-[100px]"
              src="https://i.imgur.com/ffiTpct.png"
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
  background: -webkit-linear-gradient(left, #fff176, #ff3d00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
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
