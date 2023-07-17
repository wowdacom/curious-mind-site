<template>
  <div
    :style="{ backgroundImage: `url('${source}')` }"
    class="relative pb-170px lg:pb-104px"
  >
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  background-attachment: fixed;
}
</style>
<script>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import blue from "@/assets/p0079_m.png";
import pink from "@/assets/pink_paper.jpg";
import { getLCP, getFID, getCLS } from "web-vitals";
import { path } from "d3";
import axios from "axios";

export default {
  props: {
    popArticles: {
      type: Array,
    },
  },
  setup(props) {
    const source = ref(pink);
    const route = useRoute();

    axios.get("http://localhost:8080/").then((res) => {
      console.log(res);
    });
    watch(
      () => route.path,
      async (path) => {
        if (path === "/happiness-proposal") {
          source.value = blue;
        } else {
          source.value = pink;
        }
        console.log(source.value);
      }
    );

    return {
      source,
    };
    // getCLS(console.log);
    // getFID(console.log);
    // getLCP(console.log);
  },
};
</script>
