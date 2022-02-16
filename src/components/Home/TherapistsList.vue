<template>
  <section class="text-gray-600 body-font relative">
    <div class="z-0 absolute inset-0 bg-gray-300">
      <div id="map"></div>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Feedback
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Button
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import L from 'leaflet';
import { onMounted } from 'vue';
export default {
  props: {},
  setup(props) {
    onMounted(() => {
      var map = L.map('map', {
        center: [25.026511, 121.534346],
        zoomControl: false,
        minZoom: 12,
        maxZoom: 19,
        zoom: 16,
        zoomDelta: 0.5,
        zoomSnap: 0,
        attributionControl: false,
      });

      L.tileLayer(
        'https://maps.nlsc.gov.tw/S_Maps/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=EMAP&STYLE=_null&TILEMATRIXSET=EPSG:3857&TILEMATRIX=EPSG:3857:{z}&TILEROW={y}&TILECOL={x}&FORMAT=image/png',
        {
          maxZoom: 19,
        }
      ).addTo(map);

      var marker = L.marker([25.02723496647927, 121.52784880738527]).addTo(map);
    });
  },
};
</script>
<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
