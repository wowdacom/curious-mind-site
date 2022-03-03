<template>
  <div class="container max-w-[980px] h-[245px] mx-auto overflow-hidden">
    <div
      ref="arrowPrevEl"
      class="left-btn w-[30px] h-auto cursor-pointer"
      @click="handleLeft"
    >
      <img class="w-full" :src="arrowLeftImg" alt="" />
    </div>
    <ul
      ref="carouselEl"
      class="carousel flex h-[245px]"
      :style="{
        transform: `translateX(${changePosition}px)`,
        transition: tanstionState,
      }"
    >
      <li
        v-for="(list, i) in lists"
        :key="list"
        class="w-[245px] h-[245px] flex-shrink-0 border border-solid border-gray-500 text-center"
      >
        <div>
          {{ list.name }}
        </div>
        <img :src="`https://picsum.photos/200/300?random=${list.id}`" alt="" />
      </li>
    </ul>
    <div
      @click="handleRight"
      ref="arrowNextEl"
      class="right-btn w-[30px] cursor-pointer"
    >
      <img class="w-full" :src="arrowRightImg" alt="" />
    </div>
  </div>
</template>

<script>
import Mock from "mockjs";
import { onMounted, ref } from "vue";
import arrowRightImg from "@/assets/angle-right-solid.svg";
import arrowLeftImg from "@/assets/angle-left-solid.svg";

const projectList = Mock.mock({
  "list|5": [
    {
      name: "@cname", // 中文名
      account: `@word`, // 英文单词
      phone: /1[3-9][0-9]{9}/, // 正则模式
      deptName: Mock.mock("@cword(2,4)"), // 随机2-4字中文单词
      id: "@guid", // guid,
      source: Mock.Random.image("200x100"),
    },
  ],
});

export default {
  setup() {
    const lists = ref(projectList.list);
    const carouselEl = ref(null);
    const arrowPrevEl = ref(null);
    const arrowNextEl = ref(null);
    const changePosition = ref(0);
    const tanstionState = ref("all 1s ease-out");
    const direction = ref(1);

    const handleLeft = () => {
      direction.value = 1;
      tanstionState.value = "none";
      changePosition.value = -245;
      let current = carouselEl.value.lastElementChild;
      carouselEl.value.prepend(current);
      setTimeout(() => {
        tanstionState.value = "all .5s ease-out";
        changePosition.value = 0;
      });
    };
    const handleRight = () => {
      direction.value = -1;
      changePosition.value = -245;
    };

    onMounted(() => {
      carouselEl.value.addEventListener("transitionend", () => {
        console.log("transitionend");
        if (direction.value === -1) {
          tanstionState.value = "none";
          let current = carouselEl.value.firstElementChild;
          carouselEl.value.append(current);
          changePosition.value = 0;
          setTimeout(() => {
            tanstionState.value = "all .5s ease-out";
          });
        }
      });
    });

    return {
      lists,
      arrowPrevEl,
      arrowNextEl,
      arrowRightImg,
      arrowLeftImg,
      carouselEl,
      handleLeft,
      handleRight,
      changePosition,
      tanstionState,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .carousel {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
  }
  .left-btn {
    position: absolute;
    left: 0;
    top: 120px;
    transform: translate(0%, -50%);
    z-index: 1;
  }
  .right-btn {
    position: absolute;
    right: 0;
    top: 120px;
    transform: translate(0%, -50%);
    z-index: 1;
  }
}
</style>
