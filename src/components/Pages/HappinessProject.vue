<template>
  <div class="text-gray-600 body-font relative">
    <canvas id="canvasBackground"></canvas>
    <section class="month month1">
      <March></March>
    </section>
    <section class="month month2">
      2 <button class="btn btn2" @click="handleGetBall(1)">球球來我這2</button>
    </section>
    <section class="month month3">
      3 <button class="btn btn3" @click="handleGetBall(2)">球球來我這3</button>
    </section>
    <section class="month month4">
      4 <button class="btn btn4" @click="handleGetBall(3)">球球來我這4</button>
    </section>
    <section class="month month5">
      5 <button class="btn btn5" @click="handleGetBall(4)">球球來我這5</button>
    </section>
    <section class="month month6">
      6 <button class="btn btn6" @click="handleGetBall(5)">球球來我這6</button>
    </section>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { onMounted } from 'vue';
import March from '../HappinessProject/March.vue';

export default {
  components: {
    March,
  },
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
    const ball = reactive({
      x: 0,
      y: 0,
      styles: [
        '#CC99FF',
        '#A9D1F7',
        '#B4F0A7',
        '#FFFFBF',
        '#FFDFBE',
        '#FFB1B0',
      ],
      step: 0,
    });
    const isInit = ref(false);
    const isBreathing = ref(false);

    const canvasInit = () => {
      isInit.value = true;
      vw.canvas = document.getElementById('canvasBackground');
      vw.ctx = vw.canvas.getContext('2d');

      vw.canvas.width = Math.round((vw.width * vw.percent) / 100);
      vw.canvas.height = Math.round((vw.height * vw.percent * 6) / 100);

      ball.y = btnRanges.value[ball.step].start + 88;

      draw();

      isInit.value = false;
    };

    const draw = () => {
      let step = getStep(box1.y);
      if (vw.canvas.getContext) {
        vw.ctx.clearRect(0, 0, vw.canvas.width, vw.canvas.height);

        drawArc(vw.canvas.width / 2, ball.y);
        if (step % 2 === 0) {
          drawBox(box1.x, box1.y, box1.styles[step], 100);
          drawBox(box2.x, box2.y, box2.styles[step], 100);
        } else {
          drawBox(box2.x, box2.y, box2.styles[step], 100);
          drawBox(box1.x, box1.y, box1.styles[step], 100);
        }
        drawText(vw.canvas.width / 3 + box1.x, 100 + box1.y, 100);
        drawText(vw.canvas.width / 4 + box1.x, 500 + box1.y, 30);

        if (!isBreathing.value) {
          drawGalleryOne();
          isBreathing.value = true;
        }
      }
    };

    const drawGalleryOne = () => {
      let fpsInterval = 5;
      let current = 0;
      let sizeRange = [40, 60];
      let currentSize = sizeRange[0];
      let diraction = 1;
      let gallery1 = document.querySelector('.gallery-one');
      let gallery1CenterY =
        gallery1.offsetTop - vw.canvas.offsetTop + gallery1.offsetHeight / 2;
      let gallery1CenterX =
        gallery1.offsetLeft - vw.canvas.offsetTop + gallery1.offsetWidth / 2;

      function step(fps) {
        if (current === 0) {
          if (diraction === 1 && currentSize <= sizeRange[1]) {
            currentSize += 2;
          } else if (diraction === -1 && currentSize >= sizeRange[0]) {
            currentSize -= 2;
          } else {
            diraction = diraction * -1;
          }

          vw.ctx.clearRect(0, 0, vw.canvas.width, vw.canvas.height);
          drawPolygons(
            gallery1CenterX,
            gallery1CenterY,
            16,
            currentSize,
            false
          );
          current++;
        } else if (current === fpsInterval) {
          current = 0;
        } else {
          current++;
        }
        console.log(current);

        if (isBreathing.value) {
          window.requestAnimationFrame(step);
        }
      }
      window.requestAnimationFrame(step);
    };

    const drawPolygons = (x, y, num, radius, arc) => {
      // 先清Canvas畫布,w為Canvas寬度,h為Canvas高度
      let angle = ((360 / num) * (0 + 1) * Math.PI) / 180;
      let actAngle = angle - Math.PI / 2;
      let moveX = Math.cos(actAngle) * radius;
      let moveY = Math.sin(actAngle) * radius;
      vw.ctx.moveTo(x + moveX, y + moveY);
      for (var i = 0; i < num; i++) {
        angle = ((360 / num) * (i + 1) * Math.PI) / 180;
        actAngle = angle - Math.PI / 2;
        moveX = Math.cos(actAngle) * radius;
        moveY = Math.sin(actAngle) * radius;
        // ctx.lineTo(x + moveX, y + moveY);
        drawCircle(x + moveX, y + moveY, '#FFBD33', 5);
      }

      // 畫外接圓
      if (arc) {
        vw.ctx.beginPath();
        vw.ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        vw.ctx.stroke();
      }
    };

    const drawCircle = (x, y, style, size) => {
      vw.ctx.beginPath();
      vw.ctx.arc(x, y, size, 0, Math.PI * 2);
      vw.ctx.fillStyle = style;
      vw.ctx.fill();
      vw.ctx.closePath();
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

    const drawArc = (x, y, size = 50) => {
      vw.ctx.save();
      vw.ctx.beginPath();
      vw.ctx.arc(x, y, size, 0, 2 * Math.PI);
      vw.ctx.fillStyle = 'green';
      vw.ctx.fill();
      vw.ctx.lineWidth = 5;
      vw.ctx.strokeStyle = '#003300';
      vw.ctx.stroke();
      vw.ctx.restore();
    };

    const handleScroll = () => {
      let y = window.scrollY;
      let x = Math.sin((y * Math.PI) / 180);
      box1.x = 50;
      box1.y = 50 + y;

      box2.x = 100;
      box2.y = 100 + y;

      draw();
    };

    const isMoving = ref(false);

    const handleGetBall = (step) => {
      let current = btnRanges.value[ball.step].start + 88,
        target = btnRanges.value[step].start + 88;

      if (step > ball.step && isMoving.value === false) {
        isMoving.value = true;
        requestAnimationFrame(animate);

        function animate(currentTime) {
          ball.y = current = current + 10;
          draw();

          // request another loop of animation
          if (ball.y < target) {
            requestAnimationFrame(animate);
          } else {
            ball.step = step;
            isMoving.value = false;
            return;
          }
        }
      } else if (isMoving.value === false) {
        isMoving.value = true;
        requestAnimationFrame(animate);

        function animate(currentTime) {
          ball.y = current = current - 10;
          draw();

          // request another loop of animation
          if (ball.y > target) {
            requestAnimationFrame(animate);
          } else {
            ball.step = step;
            isMoving.value = false;
            return;
          }
        }
      } else {
        console.log('移動中');
      }

      let counter = ball.y;
    };

    const ranges = ref([]);
    const btnRanges = ref([]);

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

    const getButtenRange = () => {
      document.querySelectorAll('.btn').forEach((sectionEl, index) => {
        let currentRange = {
          step: index,
          start: sectionEl.offsetTop,
          end: sectionEl.offsetTop + sectionEl.offsetHeight,
        };
        btnRanges.value.push(currentRange);
      });
    };

    const getStep = (y = 0) => {
      let currentSection = ranges.value.filter(
        (item) => item.start <= y && y <= item.end
      );

      return currentSection[0].step;
    };

    onMounted(() => {
      getBoxRange();
      getButtenRange();
      canvasInit();
      document.addEventListener('scroll', handleScroll);
    });

    return {
      handleGetBall,
    };
  },
};
</script>

<style scoped>
#canvasBackground {
  position: absolute;
  z-index: 0;
}
.month {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.btn {
  position: relative;
  z-index: 10;
}
.btn:focus,
.btn.focus {
  outline: none;
  box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
}
</style>
