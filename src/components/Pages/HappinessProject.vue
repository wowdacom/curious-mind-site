<template>
  <div class="text-gray-600 body-font relative">
    <div id="svgBackground"></div>
    <section class="month month1">
      <div class="march text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                三月
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                沒事，多呼吸 March
              </h1>
              <div class="flex mb-4">
                <a
                  class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1"
                  >關於</a
                >
                <a
                  class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                  >實作紀錄</a
                >
                <a
                  class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                  >心得</a
                >
              </div>
              <p class="leading-relaxed mb-4">
                我會像青草一樣呼吸/在很高的河岸上/腳下的水淵深不可測/黑得像一種鲇魚的脊背/遠處的河水漸漸透明/一直漂向對岸的沙地
                /那里的起伏充滿誘惑 /困倦的陽光正在休息
                /再遠處是一片綠光閃閃的樹林 /錄下了風的一舉一動
                /在風中總有些可愛的小花 /從沒有系緊紫色的頭巾 /螞蟻們在搬運沙土
                /絕不會因為愛情而苦惱 /自在的野蜂卻在歌唱 /把一支歌獻給所有花朵
                /我會呼吸得像青草一樣 /把輕輕的夢想告訴春天 /我希望會唱許多歌曲
                /讓唯一的微笑永不消失
              </p>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">餅乾呼吸法</span>
                <span class="ml-auto text-gray-900">Blue</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">慢跑</span>
                <span class="ml-auto text-gray-900">Medium</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">森林浴</span>
                <span class="ml-auto text-gray-900">4</span>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900"
                  >更多</span
                >
                <button
                  class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Button
                </button>
                <button
                  class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="gallery-one relative lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded border-solid border-5 border-gray"
            >
              <div class="controller absolute left-0 bottom-0">
                <button
                  class="stop border border-solid rounded mr-1 px-2 py-1"
                  @click="handleSpurStart"
                >
                  散開
                </button>
                <button
                  class="stop border border-solid rounded px-2 py-1"
                  @click="handleShapeStop"
                >
                  排列
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
import { getPolygonsPostion } from './shape-builder.js';
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
    const timerController = ref(null);
    const isLine = ref(false);

    const initSvgBG = () => {
      svg.value = d3
        .select('.gallery-one')
        .append('svg')
        .attr('width', width.value)
        .attr('height', height.value);

      console.log();

      drawCircle();
    };

    const drawCircle = () => {
      var rect_data = getPolygonsPostion(
        width.value / 2,
        height.value / 2,
        32,
        100
      ).map((item) => {
        return {
          x: item.x,
          y: item.y,
          x_diff: Math.random() < 0.5 ? 1 : -1,
          y_diff: Math.random() < 0.5 ? 1 : -1,
          speed: Math.random() * 5,
          width: 15,
          height: 15,
        };
      });

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
        .attr('fill', 'rgba(161,216,230,0.5)');
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

    const handleSpurStart = () => {
      if (!isLine.value) {
        timerController.value = d3.timer(animate);
      }
    };

    const handleShapeStop = () => {
      const t = d3.transition().duration(1000).ease(d3.easeLinear);

      timerController.value.stop();
      rects.value
        .transition(t)
        .attr('x', function (d, i) {
          return width.value / 2 - (d.width + 5) * 16 + (d.width + 5) * i;
        })
        .attr('y', function (d, i) {
          return height.value / 2;
        })
        .attr('height', function (d, i) {
          return d.height * Math.random() * 5;
        });

      isLine.value = true;
    };

    onMounted(() => {
      width.value = document.querySelector('.gallery-one').clientWidth;
      height.value = document.querySelector('.gallery-one').clientHeight;
      initSvgBG();
    });

    return {
      handleSpurStart,
      handleShapeStop,
    };
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
  min-height: 100vh;
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
