<template>
  <div class="relative pb-170px lg:pb-104px">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style>
#app {
  background-image: url("./assets/p0079_m.png");
  min-height: 100vh;
  background-attachment: fixed;
}
</style>
<script>
import { getLCP, getFID, getCLS } from "web-vitals";

export default {
  props: {
    popArticles: {
      type: Array,
    },
  },
  setup(props) {
    // getCLS(console.log);
    // getFID(console.log);
    // getLCP(console.log);
  },
};
</script>
