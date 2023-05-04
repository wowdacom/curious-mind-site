<template>
  <div
    class="logo-wrapper flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
  >
    <div class="logo">
      <img src="https://i.imgur.com/biXQwA3.jpg" />
    </div>
    <div class="logo-text">
      <div class="ml-3 text-md">Curious Mind</div>
      <div class="ml-3 text-md">Psych</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

.logo {
  position: relative;
  width: 40px;
  height: 40px;
  clip-path: polygon(
    41% 0,
    60% 0,
    100% 30%,
    100% 90%,
    70% 100%,
    30% 100%,
    0 90%,
    0 30%
  );
  font-family: "Indie Flower", cursive;
}
.logo::before {
  content: "PT";
  color: #fff;
  font-size: 25px;

  position: absolute;
  left: 45%;
  top: 55%;
  transform: translate(-50%, -50%);
}
.logo-text {
  font-family: "Indie Flower", cursive;
}
</style>
