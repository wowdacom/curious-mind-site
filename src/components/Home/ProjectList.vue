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
    const vw = reactive({
      canvas: null,
      ctx: null,
      width: window.innerWidth,
      height: window.innerHeight,
      percent: 100,
    });
    const box1 = reactive({
      x: 50,
      y: 50,
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
      x: 100,
      y: 100,
      styles: [
        '#CC99FF',
        '#A9D1F7',
        '#B4F0A7',
        '#FFFFBF',
        '#FFDFBE',
        '#FFB1B0',
      ],
    });

    const canvasInit = () => {
      vw.canvas = document.getElementById('canvasBackground');
      vw.ctx = vw.canvas.getContext('2d');

      vw.canvas.width = Math.round((vw.width * vw.percent) / 100);
      vw.canvas.height = Math.round((vw.height * vw.percent * 6) / 100);
    };

    const draw = (step) => {
      if (vw.canvas.getContext) {
        vw.ctx.clearRect(0, 0, vw.canvas.width, vw.canvas.height);
        if (step % 2 === 0) {
          drawBox(box1.x, box1.y, box1.styles[step], 100);
          drawBox(box2.x, box2.y, box2.styles[step], 100);
        } else {
          drawBox(box2.x, box2.y, box2.styles[step], 100);
          drawBox(box1.x, box1.y, box1.styles[step], 100);
        }
        drawText(vw.canvas.width / 3 + box1.x, 100 + box1.y, 100);
        drawText(vw.canvas.width / 4 + box1.x, 500 + box1.y, 30);
      }
    };

    const drawBox = (x, y, style, size) => {
      vw.ctx.fillStyle = style;
      vw.ctx.fillRect(x, y, size, size);
    };

    const drawText = (x, y, size = 12) => {
      let txt = 'Sample String';

      vw.ctx.save();
      vw.ctx.fillStyle = '#FFBD33';
      vw.ctx.font = `${size}px Arial`;

      let textW = vw.ctx.measureText(txt).width;
      vw.ctx.translate((x + textW) / 2, y);
      vw.ctx.rotate((y * Math.PI) / 180);
      vw.ctx.translate(-(x + textW) / 2, -y);

      vw.ctx.fillText(txt, x, y);
      vw.ctx.restore();
    };

    const handleScroll = () => {
      let y = window.scrollY;
      let x = Math.sin((y * Math.PI) / 180);
      box1.x = 50;
      box1.y = 50 + y;

      box2.x = 100;
      box2.y = 100 + y;
      let step = getStep(box1.y);
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
      let currentSection = ranges.value.filter(
        (item) => item.start <= y && y <= item.end
      );

      return currentSection[0].step;
    };

    onMounted(() => {
      canvasInit();
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}
</style>
