<template>
  <section class="march text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">三月</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
            沒事，多呼吸 March
          </h1>
          <div class="flex mb-4">
            <a
              class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1"
              >關於</a
            >
            <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
              >實作紀錄</a
            >
            <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
              >心得</a
            >
          </div>
          <p class="leading-relaxed mb-4">
            我會像青草一樣呼吸/在很高的河岸上/腳下的水淵深不可測/黑得像一種鲇魚的脊背/遠處的河水漸漸透明/一直漂向對岸的沙地
            /那里的起伏充滿誘惑 /困倦的陽光正在休息 /再遠處是一片綠光閃閃的樹林
            /錄下了風的一舉一動 /在風中總有些可愛的小花 /從沒有系緊紫色的頭巾
            /螞蟻們在搬運沙土 /絕不會因為愛情而苦惱 /自在的野蜂卻在歌唱
            /把一支歌獻給所有花朵 /我會呼吸得像青草一樣 /把輕輕的夢想告訴春天
            /我希望會唱許多歌曲 /讓唯一的微笑永不消失
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
          class="gallery-one lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded border-solid border-5 border-gray"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  named: 'March',
};
</script>

<style>
.march {
  width: 100%;
  height: 100vh;
  z-index: 2;
}
</style>
