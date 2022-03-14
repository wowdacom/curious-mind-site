<template>
  <div class="text-gray-600 body-font relative">
    <canvas id="canvasBackground"></canvas>
    <section class="month month1">1</section>
    <section class="month month2">2</section>
    <section class="month month3">3</section>
    <section class="month month4">4</section>
    <section class="month month5">5</section>
    <section class="month month6">6</section>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup() {
    const draw = (positionX = 0, positionY = 0) => {
      let canvas = document.getElementById('canvasBackground');
      const vwWidth = window.innerWidth,
        vwHeight = window.innerHeight,
        percent = 100;

      canvas.width = Math.round((vwWidth * percent) / 100);
      canvas.height = Math.round((vwHeight * percent * 6) / 100);

      let shift = (positionX * 100) % canvas.width;
      console.log(shift);

      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(0 + shift, 0 + positionY, 100, 100);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(80 + shift, 10 + positionY, 100, 100);
      }
    };

    const handleScroll = () => {
      let y = window.scrollY;
      let x = (y * Math.PI) / 180;
      draw(x, y);
    };

    onMounted(() => {
      document.addEventListener('scroll', handleScroll);
      draw();
    });
  },
};
</script>

<style scoped>
#canvasBackground {
  position: absolute;
}
.month {
  width: 100%;
  height: 100vh;
  border: solid 1px red;
}
</style>
