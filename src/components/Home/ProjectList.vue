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
import { reactive, ref } from 'vue';
import { onMounted } from 'vue';

export default {
  setup() {
    const box1 = reactive({
      x: 0,
      y: 0,
      styles: [
        '#000000',
        '#808080',
        '#C0C0C0',
        '#DCDCDC',
        '#FFFFFF',
        '#FFFAFA',
      ],
    });
    const box2 = reactive({
      x: 10,
      y: 10,
      styles: [
        '#CC99FF',
        '#A9D1F7',
        '#B4F0A7',
        '#FFFFBF',
        '#FFDFBE',
        '#FFB1B0',
      ],
    });

    const draw = (step) => {
      console.log(step);
      let canvas = document.getElementById('canvasBackground');
      const vwWidth = window.innerWidth,
        vwHeight = window.innerHeight,
        percent = 100;

      canvas.width = Math.round((vwWidth * percent) / 100);
      canvas.height = Math.round((vwHeight * percent * 6) / 100);

      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = box1.styles[step];
        ctx.fillRect(box1.x, box1.y, 100, 100);

        ctx.fillStyle = box2.styles[step];
        ctx.fillRect(box2.x, box2.y, 100, 100);
      }
    };

    const handleScroll = () => {
      let y = window.scrollY;
      let x = Math.sin((y * Math.PI) / 180);
      box1.x = 0;
      box1.y = y;

      box2.x = 10;
      box2.y = 10 + y;
      let step = getStep(y);
      draw(step);
    };

    const ranges = ref([]);

    const getBoxRange = () => {
      document.querySelectorAll('.month').forEach((sectionEl, index) => {
        let currentRange = {
          step: index,
          start: sectionEl.offsetTop,
          end: sectionEl.offsetTop + sectionEl.offsetHeight,
        };
        ranges.value.push(currentRange);
      });
    };

    const getStep = (y = 0) => {
      console.log(y);
      let currentSection = ranges.value.filter(
        (item) => item.start <= y && y <= item.end
      );

      return currentSection[0].step;
    };

    onMounted(() => {
      document.addEventListener('scroll', handleScroll);
      getBoxRange();
      let step = getStep(window.scrollY);
      draw(step);
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}
</style>
