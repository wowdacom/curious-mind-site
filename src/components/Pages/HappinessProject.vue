<template>
  <div class="text-gray-600 body-font relative">
    <div id="svgBackground"></div>
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
import * as d3 from 'd3';
import { onMounted } from 'vue';
import March from '../HappinessProject/March.vue';

export default {
  components: {
    March,
  },
  setup() {
    const width = ref(0);
    const height = ref(0);
    const svg = ref(null);
    const rects = ref(null);

    const initSvgBG = () => {
      svg.value = d3
        .select('.gallery-one')
        .append('svg')
        .attr('width', width.value)
        .attr('height', height.value);

      console.log(svg.value);

      drawCircle();
      d3.timer(animate);
    };

    const drawCircle = () => {
      var rect_data = [
        {
          x: width.value / 2,
          y: height.value / 2,
          x_diff: Math.random() < 0.5 ? 1 : -1,
          y_diff: Math.random() < 0.5 ? 1 : -1,
          speed: Math.random() * 5,
          width: 50,
          height: 50,
        },
      ];

      rects.value = svg.value
        .selectAll('.rect')
        .data(rect_data)
        .enter()
        .append('rect')
        .attr('x', function (d) {
          console.log(d);
          return d.x - d.width / 2;
        })
        .attr('y', function (d) {
          return d.y - d.height / 2;
        })
        .attr('rx', function (d) {
          return d.width > d.height ? d.height / 2 : d.width / 2;
        })
        .attr('ry', function (d) {
          return d.width > d.height ? d.height / 2 : d.width / 2;
        })
        .attr('width', function (d) {
          console.log(d);
          return d.width;
        })
        .attr('height', function (d) {
          return d.height;
        })
        .attr('fill', 'red');
    };

    const animate = (elapsed) => {
      rects.value
        .attr('x', function (d) {
          d.x = d.x + d.speed * d.x_diff;

          if (d.x <= 0 || d.x >= width.value - d.width) {
            d.x_diff = d.x_diff * -1;
          }

          return d.x;
        })
        .attr('y', function (d) {
          d.y = d.y + d.speed * d.y_diff;

          if (d.y <= 0 || d.y >= height.value - d.height) {
            d.y_diff = d.y_diff * -1;
          }

          return d.y;
        });
    };

    onMounted(() => {
      width.value = document.querySelector('.gallery-one').clientWidth;
      height.value = document.querySelector('.gallery-one').clientHeight;
      initSvgBG();
    });

    return {};
  },
};
</script>

<style scoped>
#svgBackground {
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
