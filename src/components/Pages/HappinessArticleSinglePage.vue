<template>
  <div class="text-gray-600 body-font relative">
    <div id="svgBackground"></div>
    <section>
      <div class="march text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div
              class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex justify-center items-center"
            >
              = 內容製作中 =
            </div>
            <div
              class="gallery-one relative lg:w-1/2 w-full h-128 object-cover object-center rounded border-solid border-5 border-gray"
            >
              <div class="controller absolute left-0 bottom-0">
                <button
                  class="stop border border-solid rounded mr-1 px-2 py-1"
                  @click="handleInit"
                >
                  切換圓形
                </button>
                <button
                  class="stop border border-solid rounded px-2 py-1"
                  @click="handleShapeLine"
                >
                  切換圖表
                </button>
              </div>
              <div class="absolute left-1 top-1">過場效果測試</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getPolygonsPostion } from './shape-builder.js';
import { reactive, ref } from 'vue';
import * as d3 from 'd3';
import { onMounted } from 'vue';

export default {
  setup() {
    const width = ref(0);
    const height = ref(0);
    const svg = ref(null);
    const rects = ref(null);
    const timerController = ref(null);
    const isLine = ref(false);
    const isLoading = ref(false);
    const isAnimate = ref(false);
    const rect_data = ref([]);

    const initSvgBG = () => {
      svg.value = d3
        .select('.gallery-one')
        .append('svg')
        .attr('width', width.value)
        .attr('height', height.value);
      rect_data.value = getPolygonsPostion(
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
      drawCircle();
    };

    const drawCircle = () => {
      console.log(rect_data.value);
      rects.value = svg.value
        .selectAll('rect')
        .data(rect_data.value)
        .enter()
        .append('rect')
        .attr('x', function (d) {
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
          return d.width;
        })
        .attr('height', function (d) {
          return d.height;
        })
        .attr('fill', 'rgba(161,216,230,0.5)');
    };

    const animate = (elapsed) => {
      isAnimate.value = true;

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
        })
        .attr('width', function (d) {
          return d.width;
        })
        .attr('height', function (d) {
          return d.height;
        });
    };

    const handleInit = () => {
      if (!isLoading.value && isLine.value) {
        handleSpurStart();
        setTimeout(() => {
          const t = d3.transition().duration(1000).ease(d3.easeLinear);
          timerController.value.stop();
          rect_data.value = getPolygonsPostion(
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

          svg.value
            .selectAll('rect')
            .data(rect_data.value)
            .transition(t)
            .attr('x', function (d) {
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
              return d.width;
            })
            .attr('height', function (d) {
              return d.height;
            })
            .attr('fill', 'rgba(161,216,230,0.5)');
          isLoading.value = false;
          isAnimate.value = false;
          isLine.value = false;
        }, 1000);
      }
    };

    const handleSpurStart = () => {
      if (!isAnimate.value) {
        timerController.value = d3.timer(animate);
      }
    };

    const handleShapeLine = () => {
      if (!isLoading.value) {
        handleSpurStart();

        setTimeout(() => {
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

          isAnimate.value = false;
          isLoading.value = false;
          isLine.value = true;
        }, 1000);
      }
    };

    onMounted(() => {
      width.value = document.querySelector('.gallery-one').clientWidth;
      height.value = document.querySelector('.gallery-one').clientHeight;
      initSvgBG();
    });

    return {
      handleInit,
      handleSpurStart,
      handleShapeLine,
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
