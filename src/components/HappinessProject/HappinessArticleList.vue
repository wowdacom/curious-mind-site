<template>
  <section class="text-gray-600 body- overflow-hidden max-w-[1200px] mx-auto">
    <div class="container px-5 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        <div class="my-4 py-8 flex flex-wrap md:flex-nowrap bg-white">
          <div class="pl-8 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="-semibold title- text-gray-700">Side Project</span>
            <span class="mt-1 text-gray-500 text-sm">April</span>
          </div>
          <div class="pl-8 md:flex-grow">
            <h2 class="text-2xl -medium text-gray-900 title- mb-2">
              [ Happiness Project ] 四月：幸運自造機，當一個幸運的人
            </h2>
            <p class="leading-relaxed">
              幸運是一種命嗎? 還是掌握在自己手裡? Serendipity mindset
              讓我才製造自己的好運氣。
            </p>
            <router-link
              class="text-indigo-500 inline-flex items-center mt-4 cursor-pointer"
              :to="`/blog/Meditation bushwick direct trade taxidermy shaman`"
              >Learn More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </router-link>
          </div>
        </div>
        <div class="my-4 py-8 flex flex-wrap md:flex-nowrap bg-white">
          <div class="pl-8 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="-semibold title- text-gray-700">Side Project</span>
            <span class="text-sm text-gray-500">March</span>
          </div>
          <div class="pl-8 md:flex-grow">
            <h2 class="text-2xl -medium text-gray-900 title- mb-2">
              [ Happiness Project ] 三月：沒事，多呼吸
            </h2>
            <p class="leading-relaxed">
              方塊呼吸、穴道導引、慢跑、森林浴，疫情下被忘記的呼吸，幫助我們舒緩壓力、重新找回專心，也可以很有趣!
              也很科學喔!
            </p>
            <router-link
              class="text-indigo-500 inline-flex items-center mt-4 cursor-pointer"
              :to="`/blog/Woke master cleanse drinking vinegar salvia`"
            >
              Learn More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
