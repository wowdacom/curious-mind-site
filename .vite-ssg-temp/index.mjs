var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, ref, onMounted, reactive, toRefs, createApp } from "vue";
import { useRoute, createRouter, createWebHashHistory } from "vue-router";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "web-vitals";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDocs, collection, query, where } from "firebase/firestore";
import "process";
import L from "leaflet";
import * as d3 from "d3";
var Logo_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$h = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo-wrapper flex title-font font-medium items-center md:justify-start justify-center text-gray-900" }, _attrs))} data-v-c1b3f0d0><div class="logo" data-v-c1b3f0d0><img src="https://i.imgur.com/biXQwA3.jpg" data-v-c1b3f0d0></div><div class="logo-text" data-v-c1b3f0d0><div class="ml-3 text-md" data-v-c1b3f0d0>The Undercover</div><div class="ml-3 text-md" data-v-c1b3f0d0>Psychologist</div></div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Other/Logo.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var __unplugin_components_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__scopeId", "data-v-c1b3f0d0"]]);
const _sfc_main$g = {
  components: {
    Logo: __unplugin_components_0$2
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_logo = __unplugin_components_0$2;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font absolute w-full bottom-0" }, _attrs))}><div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"><a>`);
  _push(ssrRenderComponent(_component_logo, null, null, _parent));
  _push(`</a><p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> \xA9 2020 Tailblocks \u2014 <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a></p><span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"><a class="text-gray-500"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-3 text-gray-500"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-3 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a><a class="ml-3 text-gray-500"><svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg></a></span></div></footer>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Footer.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$f = {
  components: {
    Logo: __unplugin_components_0$2
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_Logo = __unplugin_components_0$2;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font relative z-100" }, _attrs))}><div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Logo)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav class="md:ml-auto flex flex-wrap items-center text-base md:justify-center justify-between">`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "mr-5 hover:text-gray-900",
    to: "/happiness-articles"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u6211\u7684\u5FEB\u6A02\u751F\u6D3B\u63D0\u6848`);
      } else {
        return [
          createTextVNode("\u6211\u7684\u5FEB\u6A02\u751F\u6D3B\u63D0\u6848")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    class: "mr-5 hover:text-gray-900",
    to: "/book-review"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5FC3\u7406\u5B78\u8B80\u66F8\u8DA3`);
      } else {
        return [
          createTextVNode("\u5FC3\u7406\u5B78\u8B80\u66F8\u8DA3")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    class: "mr-5 hover:text-gray-900",
    to: "/news-and-views"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5FC3\u7406\u65B0\u805E\u3001\u7814\u7A76`);
      } else {
        return [
          createTextVNode("\u5FC3\u7406\u65B0\u805E\u3001\u7814\u7A76")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    class: "mr-5 hover:text-gray-900",
    to: "/therapists"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5C0B\u627E\u5C08\u696D\u4EBA\u54E1\u5354\u52A9`);
      } else {
        return [
          createTextVNode("\u5C0B\u627E\u5C08\u696D\u4EBA\u54E1\u5354\u52A9")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="mr-5 inline-block hover:text-gray-900">\u95DC\u65BC</div></nav></div></header>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Header.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$e = {
  props: {
    popArticles: {
      type: Array
    }
  },
  setup(props) {
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __unplugin_components_0$1;
  const _component_router_view = resolveComponent("router-view");
  const _component_Footer = __unplugin_components_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative pb-170px lg:pb-104px" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$d = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font max-w-[1200px] mx-auto" }, _attrs))}><div class="container px-5 py-24 mx-auto"><div class="w-full grid lg:grid-cols-3 gap-2"><div class="py-8 px-4 bg-white"><div class="h-full flex items-start"><div class="w-12 flex-shrink-0 flex flex-col text-center leading-none"><span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">7 \u6708</span><span class="font-medium text-lg text-gray-800 title-font leading-none">13</span></div><div class="flex-grow pl-6 flex flex-col justify-between h-full"><div class="title"><h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"> Psychology news and views </h2><h1 class="title-font text-xl font-medium text-gray-900 mb-3"> \u6C7A\u5FC3\u6539\u8B8A </h1><p class="leading-relaxed mb-5">- \u6211\u5011\u5982\u4F55\u91CD\u5EFA\u751F\u6D3B</p></div><a class="inline-flex items-center"><img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-3"><span class="title-font font-medium text-gray-900">Psychology Today</span></span></a></div></div></div><div class="py-8 px-4 bg-white"><div class="h-full flex items-start"><div class="w-12 flex-shrink-0 flex flex-col text-center leading-none"><span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">6 \u6708</span><span class="font-medium text-lg text-gray-800 title-font leading-none">13</span></div><div class="flex-grow pl-6 flex flex-col justify-between h-full"><div class="title"><h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"> Psychology Research </h2><h1 class="title-font text-xl font-medium text-gray-900 mb-3"> \u5E78\u798F\u8207\u61F7\u820A\u7684\u65E5\u5E38 </h1><p class="leading-relaxed mb-5">- \u5F9E\u751F\u7269\u6548\u5EA6\u4E0A\u7684\u89C0\u9EDE</p></div><a class="inline-flex items-center"><img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-3"><span class="title-font font-medium text-gray-900">American Psychological Association</span></span></a></div></div></div><div class="py-8 px-4 bg-white"><div class="h-full flex items-start"><div class="w-12 flex-shrink-0 flex flex-col text-center leading-none"><span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">7 \u6708</span><span class="font-medium text-lg text-gray-800 title-font leading-none">1</span></div><div class="flex-grow pl-6 flex flex-col justify-between h-full"><div class="title"><h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"> Psychology news and views </h2><h1 class="title-font text-xl font-medium text-gray-900 mb-3"> \u8FFD\u6C42\u76EE\u6A19\u53EA\u662F\u65C5\u7A0B\uFF0C\u4E0D\u662F\u7D42\u9EDE </h1><p class="leading-relaxed mb-5"> How Metaphor Drives Growth After Goal Attainment </p></div><a class="inline-flex items-center"><img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-3"><span class="title-font font-medium text-gray-900">American Psychological Association</span></span></a></div></div></div><div class="py-8 px-4 bg-white"><div class="h-full flex items-start"><div class="w-12 flex-shrink-0 flex flex-col text-center leading-none"><span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">7 \u6708</span><span class="font-medium text-lg text-gray-800 title-font leading-none">1</span></div><div class="flex-grow pl-6 flex flex-col justify-between h-full"><div class="title"><h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"> Psychology news and views </h2><h1 class="title-font text-xl font-medium text-gray-900 mb-3"> \u70BA\u4EC0\u9EBC\u5728\u6DF7\u4E82\u4E2D\u6210\u9577\u7684\u5C0F\u5B69\u5EFA\u7ACB\u5065\u5EB7\u7684\u95DC\u4FC2\u5982\u6B64\u56F0\u96E3 </h1><p class="leading-relaxed mb-5"> ...and how acknowledging past hurts can help you better cope. </p></div><a class="inline-flex items-center"><img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-3"><span class="title-font font-medium text-gray-900">Psychology Today</span></span></a></div></div></div></div></div></section>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Home/RelevantArticles.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$c = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body- overflow-hidden max-w-[1200px] mx-auto" }, _attrs))}><div class="container px-5 mx-auto"><div class="-my-8 divide-y-2 divide-gray-100"><div class="my-4 py-8 flex flex-wrap md:flex-nowrap bg-white"><div class="pl-8 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="-semibold title- text-gray-700">My Happiness Project</span><span class="mt-1 text-gray-500 text-sm">\u4E03\u6708</span></div><div class="pl-8 md:flex-grow"><h2 class="text-2xl -medium text-gray-900 title- mb-2"> [ \u7B2C\u4E94\u500B\u6708 ] \u518D\u60F3\u60F3\uFF0C\u6211\u7684\u5FA9\u53E4\u751F\u6D3B </h2><p class="leading-relaxed"> \u5F88\u591A\u6771\u897F\u597D\u50CF\u662F\u7406\u6240\u7576\u7136\u9019\u6A23\u5B50\uFF0C\u4F46\u6211\u5011\u5F88\u5C11\u554F\u70BA\u4EC0\u9EBC? </p>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "text-indigo-500 inline-flex items-center mt-4 cursor-pointer",
    to: `/blog/Meditation bushwick direct trade taxidermy shaman`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u770B\u66F4\u591A <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="M12 5l7 7-7 7"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode("\u770B\u66F4\u591A "),
          (openBlock(), createBlock("svg", {
            class: "w-4 h-4 ml-2",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            createVNode("path", { d: "M5 12h14" }),
            createVNode("path", { d: "M12 5l7 7-7 7" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="my-4 py-8 flex flex-wrap md:flex-nowrap bg-white"><div class="pl-8 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="-semibold title- text-gray-700">My Happiness Project</span><span class="mt-1 text-gray-500 text-sm">\u516D\u6708</span></div><div class="pl-8 md:flex-grow"><h2 class="text-2xl -medium text-gray-900 title- mb-2"> [ \u7B2C\u56DB\u500B\u6708 ] \u95DC\u65BC\u81EA\u7136\u6211\u60F3\u8AAA\u7684\uFF0C\u4F46\u6211\u6C92\u8AAA </h2><p class="leading-relaxed"> \u5927\u81EA\u7136\u7684\u8C50\u5BCC\u8DDF\u5967\u79D8\uFF0C\u5F9E\u68EE\u6797\u5230\u5916\u592A\u7A7A\uFF0C\u5F9E\u4E00\u7FA4\u4EBA\u5230\u9748\u9B42\u3002\u65E2\u6DF1\u4E14\u5EE3\uFF0C\u6700\u5F8C \u6211\u5011\u6709\u5F88\u591A\u8A71\u60F3\u8AAA\u537B\u6C92\u6709\u8AAA\uFF0C\u9019\u6A23\u7C21\u55AE\uFF0C\u9019\u6A23\u81EA\u7136\u3002\u4F46\u96E2\u6211\u5011\u6108\u4F86\u8D8A\u9060\u7684\u662F\u4EC0\u9EBC? </p>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "text-indigo-500 inline-flex items-center mt-4 cursor-pointer",
    to: `/blog/Meditation bushwick direct trade taxidermy shaman`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u770B\u66F4\u591A <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="M12 5l7 7-7 7"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode("\u770B\u66F4\u591A "),
          (openBlock(), createBlock("svg", {
            class: "w-4 h-4 ml-2",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            createVNode("path", { d: "M5 12h14" }),
            createVNode("path", { d: "M12 5l7 7-7 7" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="my-4 py-8 flex flex-wrap md:flex-nowrap bg-white"><div class="pl-8 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="-semibold title- text-gray-700">My Happiness Project</span><span class="mt-1 text-gray-500 text-sm">\u4E94\u6708</span></div><div class="pl-8 md:flex-grow"><h2 class="text-2xl -medium text-gray-900 title- mb-2"> [ \u7B2C\u4E09\u500B\u6708 ] \u56E0\u70BA\u8A8D\u8B58\u8907\u96DC\uFF0C\u6211\u559C\u6B61\u4E0A\u4E86\u7C21\u55AE </h2><p class="leading-relaxed"> \u9700\u8981\u6642\u9593\uFF0C\u9700\u8981\u6709\u597D\u5947\u5FC3\u53BB\u63A2\u7D22\u7C21\u55AE\u7684\u53EF\u80FD\u6027\uFF0C\u7136\u5F8C\u624D\u4E86\u89E3\u81EA\u5DF1\u3002 \u7AD9\u5728\u4E00\u5B9A\u7684\u9AD8\u5EA6\u4E0A\u5617\u8A66\u6539\u8B8A\u751F\u6D3B\uFF0C\u6210\u70BA\u81EA\u5DF1\u60F3\u8981\u7684\u6A23\u5B50\uFF0C\u66F4\u7C21\u55AE\uFF0C\u4E5F\u66F4\u6709\u7684\u610F\u7FA9\u3002 </p>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "text-indigo-500 inline-flex items-center mt-4 cursor-pointer",
    to: `/blog/Meditation bushwick direct trade taxidermy shaman`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u770B\u66F4\u591A <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="M12 5l7 7-7 7"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode("\u770B\u66F4\u591A "),
          (openBlock(), createBlock("svg", {
            class: "w-4 h-4 ml-2",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            createVNode("path", { d: "M5 12h14" }),
            createVNode("path", { d: "M12 5l7 7-7 7" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="my-4 py-8 flex flex-wrap md:flex-nowrap bg-white"><div class="pl-8 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="-semibold title- text-gray-700">My Happiness Project</span><span class="mt-1 text-gray-500 text-sm">\u56DB\u6708</span></div><div class="pl-8 md:flex-grow"><h2 class="text-2xl -medium text-gray-900 title- mb-2"> [ \u7B2C\u4E8C\u500B\u6708 ] \u5E78\u904B\u81EA\u9020\u8005\uFF0C\u7DF4\u7FD2\u7576\u4E00\u500B\u5E78\u904B\u7684\u4EBA </h2><p class="leading-relaxed"> \u5E78\u904B\u662F\u4E00\u7A2E\u547D\u55CE? \u9084\u662F\u638C\u63E1\u5728\u81EA\u5DF1\u624B\u88E1? Serendipity mindset \u8B93\u6211\u624D\u88FD\u9020\u81EA\u5DF1\u7684\u597D\u904B\u6C23\u3002 </p>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "text-indigo-500 inline-flex items-center mt-4 cursor-pointer",
    to: `/blog/Meditation bushwick direct trade taxidermy shaman`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u770B\u66F4\u591A <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="M12 5l7 7-7 7"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode("\u770B\u66F4\u591A "),
          (openBlock(), createBlock("svg", {
            class: "w-4 h-4 ml-2",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            createVNode("path", { d: "M5 12h14" }),
            createVNode("path", { d: "M12 5l7 7-7 7" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="my-4 py-8 flex flex-wrap md:flex-nowrap bg-white"><div class="pl-8 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="-semibold title- text-gray-700">My Happiness Project</span><span class="text-sm text-gray-500">\u4E09\u6708</span></div><div class="pl-8 md:flex-grow"><h2 class="text-2xl -medium text-gray-900 title- mb-2"> [ \u7B2C\u4E00\u500B\u6708 ] \u56DE\u5230\u547C\u5438\uFF0C\u90A3\u4E9B\u547C\u5438\u6559\u6703\u6211\u7684\u4E8B </h2><p class="leading-relaxed"> \u65B9\u584A\u547C\u5438\u3001\u7A74\u9053\u5C0E\u5F15\u3001\u6162\u8DD1\u3001\u68EE\u6797\u6D74\uFF0C\u75AB\u60C5\u4E0B\u88AB\u5FD8\u8A18\u7684\u547C\u5438\uFF0C\u5E6B\u52A9\u6211\u5011\u8212\u7DE9\u58D3\u529B\u3001\u91CD\u65B0\u627E\u56DE\u5C08\u5FC3\uFF0C\u4E5F\u53EF\u4EE5\u5F88\u6709\u8DA3! \u4E5F\u5F88\u79D1\u5B78\u5594! </p>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "text-indigo-500 inline-flex items-center mt-4 cursor-pointer",
    to: `/blog/Woke master cleanse drinking vinegar salvia`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u770B\u66F4\u591A <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="M12 5l7 7-7 7"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" \u770B\u66F4\u591A "),
          (openBlock(), createBlock("svg", {
            class: "w-4 h-4 ml-2",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            createVNode("path", { d: "M5 12h14" }),
            createVNode("path", { d: "M12 5l7 7-7 7" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Home/HappinessArticleList.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {
  props: {
    popArticles: {
      type: Array
    }
  },
  setup(props) {
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font" }, _attrs))}><div class="container px-5 py-24 mx-auto max-w-[1200px]"><div class="flex flex-wrap -m-4"><!--[-->`);
  ssrRenderList(3, (article) => {
    _push(`<div class="p-4 md:w-1/3"><div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"><div class="bg-gray-200 lg:h-96 md:h-72 w-full object-cover object-center" alt="blog"></div><div class="p-6 bg-gray-300"><h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${ssrInterpolate(article.category)}</h2><h1 class="title-font text-lg font-medium text-gray-900 mb-3">${ssrInterpolate(article.title)}</h1><p class="leading-relaxed h-80px mb-3">${ssrInterpolate(article.subtitle)}</p><div class="flex items-center flex-wrap"><a class="bg-gray-200 rounded-xl w-110px h-24px py-1 text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"></a><span class="animate-pulse bg-gray-200 rounded-xl w-63px h-24px text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span><span class="bg-gray-200 rounded-xl w-30px h-24px py-1 text-gray-400 inline-flex items-center leading-none text-sm"></span></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Home/PopularArticlesSkeleton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
var PopularArticles_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = {
  props: {
    popArticles: {
      type: Array
    }
  },
  setup(props) {
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font" }, _attrs))}><div class="container px-5 py-24 mx-auto max-w-[1200px]"><div class="flex flex-wrap -m-4"><!--[-->`);
  ssrRenderList($props.popArticles, (article) => {
    _push(`<div class="p-4 md:w-1/3">`);
    _push(ssrRenderComponent(_component_router_link, {
      to: `/article/${article.title}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white"${_scopeId}><div class="cover lg:h-96 md:h-72 w-full overflow-hidden"${_scopeId}><img class="object-cover object-center w-full"${ssrRenderAttr("src", article.cover)} alt="blog"${_scopeId}></div><div class="p-6"${_scopeId}><h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"${_scopeId}>${ssrInterpolate(article.category)}</h2><h1 class="title-font text-lg font-medium text-gray-900 mb-3"${_scopeId}>${ssrInterpolate(article.title)}</h1><p class="leading-relaxed mb-3 h-80px clamp"${_scopeId}>${ssrInterpolate(article.subtitle)}</p><div class="flex items-center flex-wrap"${_scopeId}><a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"${_scopeId}>Learn More <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="M12 5l7 7-7 7"${_scopeId}></path></svg></a><span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"${_scopeId}><svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"${_scopeId}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"${_scopeId}></path><circle cx="12" cy="12" r="3"${_scopeId}></circle></svg>1.2K </span><span class="text-gray-400 inline-flex items-center leading-none text-sm"${_scopeId}><svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"${_scopeId}><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"${_scopeId}></path></svg>6 </span></div></div></div>`);
        } else {
          return [
            createVNode("div", { class: "h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white" }, [
              createVNode("div", { class: "cover lg:h-96 md:h-72 w-full overflow-hidden" }, [
                createVNode("img", {
                  class: "object-cover object-center w-full",
                  src: article.cover,
                  alt: "blog"
                }, null, 8, ["src"])
              ]),
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "tracking-widest text-xs title-font font-medium text-gray-400 mb-1" }, toDisplayString(article.category), 1),
                createVNode("h1", { class: "title-font text-lg font-medium text-gray-900 mb-3" }, toDisplayString(article.title), 1),
                createVNode("p", { class: "leading-relaxed mb-3 h-80px clamp" }, toDisplayString(article.subtitle), 1),
                createVNode("div", { class: "flex items-center flex-wrap" }, [
                  createVNode("a", { class: "text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" }, [
                    createTextVNode("Learn More "),
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 ml-2",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", { d: "M5 12h14" }),
                      createVNode("path", { d: "M12 5l7 7-7 7" })
                    ]))
                  ]),
                  createVNode("span", { class: "text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 mr-1",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
                      createVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "3"
                      })
                    ])),
                    createTextVNode("1.2K ")
                  ]),
                  createVNode("span", { class: "text-gray-400 inline-flex items-center leading-none text-sm" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 mr-1",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", { d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" })
                    ])),
                    createTextVNode("6 ")
                  ])
                ])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Home/PopularArticles.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
var Banner_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 max-w-[1200px] mx-auto" }, _attrs))} data-v-deb23c32><div class="container relative" data-v-deb23c32>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "mr-5 hover:text-gray-900",
    to: "/project"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="absolute left-0 top-0 w-full h-full flex justify-center items-center text-center" data-v-deb23c32${_scopeId}><h1 class="lg:text-10xl lg:translate-y-1 text-6xl transform -rotate-6 lg:translate-y-8 z-50 p-10" data-v-deb23c32${_scopeId}><span class="lg:text-6xl text-2xl" data-v-deb23c32${_scopeId}>Let&#39;s</span> Think Again! </h1><img class="absolute left-[0px] bottom-[-20px] lg:left-[-100px] lg:top-[-200px] w-[35%]" src="https://i.imgur.com/eu79Bkx.png" alt="" data-v-deb23c32${_scopeId}><div class="absolute right-0 bottom-[-30px] lg:right-[60px] lg:bottom-[-10px] hinge" data-v-deb23c32${_scopeId}><img class="w-[30px] h-[30px] lg:w-[70px] lg:h-[70px]" src="https://i.imgur.com/kCJBz7w.png" alt="" data-v-deb23c32${_scopeId}></div><div class="absolute left-8 top-[-10px] lg:left-[80px] lg:top-[-10px]" data-v-deb23c32${_scopeId}><img class="w-[30px] h-[30px] lg:w-[100px] lg:h-[100px]" src="https://i.imgur.com/ffiTpct.png" alt="" data-v-deb23c32${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("div", { class: "absolute left-0 top-0 w-full h-full flex justify-center items-center text-center" }, [
            createVNode("h1", { class: "lg:text-10xl lg:translate-y-1 text-6xl transform -rotate-6 lg:translate-y-8 z-50 p-10" }, [
              createVNode("span", { class: "lg:text-6xl text-2xl" }, "Let's"),
              createTextVNode(" Think Again! ")
            ]),
            createVNode("img", {
              class: "absolute left-[0px] bottom-[-20px] lg:left-[-100px] lg:top-[-200px] w-[35%]",
              src: "https://i.imgur.com/eu79Bkx.png",
              alt: ""
            }),
            createVNode("div", { class: "absolute right-0 bottom-[-30px] lg:right-[60px] lg:bottom-[-10px] hinge" }, [
              createVNode("img", {
                class: "w-[30px] h-[30px] lg:w-[70px] lg:h-[70px]",
                src: "https://i.imgur.com/kCJBz7w.png",
                alt: ""
              })
            ]),
            createVNode("div", { class: "absolute left-8 top-[-10px] lg:left-[80px] lg:top-[-10px]" }, [
              createVNode("img", {
                class: "w-[30px] h-[30px] lg:w-[100px] lg:h-[100px]",
                src: "https://i.imgur.com/ffiTpct.png",
                alt: ""
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Banner/Banner.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-deb23c32"]]);
const apiKey = "AIzaSyDa4EAZpUtMcU4ct7XIjzmALae3YPVIFN0";
const apiSecret = "1:1048115582755:web:857e1bc1f3ceb6d4591e96";
initializeApp({
  apiKey,
  authDomain: "none-chinese-a-year.firebaseapp.com",
  databaseURL: "https://none-chinese-a-year-default-rtdb.firebaseio.com",
  projectId: "none-chinese-a-year",
  storageBucket: "none-chinese-a-year.appspot.com",
  messagingSenderId: "1048115582755",
  appId: apiSecret,
  measurementId: "G-TZVQGP3ZDJ"
});
const db = getFirestore();
const _sfc_main$8 = {
  setup() {
    const popArticles = ref([]);
    const getArticlesList = async () => {
      doc(db, "article-lists", "popular-article-lists");
      const querySnapshot = await getDocs(collection(db, "article-lists"));
      querySnapshot.forEach((doc2) => {
        popArticles.value.unshift(doc2.data());
      });
    };
    getArticlesList();
    return {
      popArticles
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Banner = __unplugin_components_0;
  const _component_PopularArticles = __unplugin_components_1;
  const _component_PopularArticlesSkeleton = __unplugin_components_2;
  const _component_HappinessArticleList = __unplugin_components_3;
  const _component_RelevantArticles = __unplugin_components_4;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Banner, null, null, _parent));
  if ($setup.popArticles.length) {
    _push(ssrRenderComponent(_component_PopularArticles, mergeProps({ "pop-articles": $setup.popArticles }, _attrs), null, _parent));
  } else {
    _push(ssrRenderComponent(_component_PopularArticlesSkeleton, _attrs, null, _parent));
  }
  _push(ssrRenderComponent(_component_HappinessArticleList, null, null, _parent));
  _push(ssrRenderComponent(_component_RelevantArticles, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Pages/Home.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
var markerIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=";
var FindTherapists_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = {
  props: {},
  setup(props) {
    onMounted(() => {
      var map = L.map("map", {
        center: [25.026511, 121.534346],
        zoomControl: false,
        minZoom: 12,
        maxZoom: 19,
        zoom: 16,
        zoomDelta: 0.5,
        zoomSnap: 0,
        attributionControl: false
      });
      L.tileLayer("https://maps.nlsc.gov.tw/S_Maps/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=EMAP&STYLE=_null&TILEMATRIXSET=EPSG:3857&TILEMATRIX=EPSG:3857:{z}&TILEROW={y}&TILECOL={x}&FORMAT=image/png", {
        maxZoom: 19
      }).addTo(map);
      L.marker([25.02723496647927, 121.52784880738527], {
        icon: L.icon({
          iconUrl: markerIcon
        })
      }).addTo(map);
    });
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font relative" }, _attrs))} data-v-38d036c8><div class="z-0 absolute inset-0 bg-gray-300" data-v-38d036c8><div id="map" data-v-38d036c8></div></div><div class="container px-5 py-24 mx-auto flex" data-v-38d036c8><div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md" data-v-38d036c8><h2 class="text-gray-900 text-lg mb-1 font-medium title-font" data-v-38d036c8> Feedback </h2><p class="leading-relaxed mb-5 text-gray-600" data-v-38d036c8> Post-ironic portland shabby chic echo park, banjo fashion axe </p><div class="relative mb-4" data-v-38d036c8><label for="email" class="leading-7 text-sm text-gray-600" data-v-38d036c8>Email</label><input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-v-38d036c8></div><div class="relative mb-4" data-v-38d036c8><label for="message" class="leading-7 text-sm text-gray-600" data-v-38d036c8>Message</label><textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" data-v-38d036c8></textarea></div><button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" data-v-38d036c8> Button </button><p class="text-xs text-gray-500 mt-3" data-v-38d036c8> Chicharrones blog helvetica normcore iceland tousled brook viral artisan. </p></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Pages/FindTherapists.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var FindTherapists = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-38d036c8"]]);
const getPolygonsPostion = (x, y, num, size, arc) => {
  if (!x || !y || !num || !size) {
    return;
  }
  let polygonPoints = [];
  let angle = 360 / num * (0 + 1) * Math.PI / 180;
  let actAngle = angle - Math.PI / 2;
  let moveX = Math.cos(actAngle) * size;
  let moveY = Math.sin(actAngle) * size;
  for (var i = 0; i < num; i++) {
    angle = 360 / num * (i + 1) * Math.PI / 180;
    actAngle = angle - Math.PI / 2;
    moveX = Math.cos(actAngle) * size;
    moveY = Math.sin(actAngle) * size;
    polygonPoints.push({ x: x + moveX, y: y + moveY });
  }
  return polygonPoints;
};
var HappinessProjectSinglePage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = {
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
      svg.value = d3.select(".gallery-one").append("svg").attr("width", width.value).attr("height", height.value);
      rect_data.value = getPolygonsPostion(width.value / 2, height.value / 2, 32, 100).map((item) => {
        return {
          x: item.x,
          y: item.y,
          x_diff: Math.random() < 0.5 ? 1 : -1,
          y_diff: Math.random() < 0.5 ? 1 : -1,
          speed: Math.random() * 5,
          width: 15,
          height: 15
        };
      });
      drawCircle();
    };
    const drawCircle = () => {
      console.log(rect_data.value);
      rects.value = svg.value.selectAll("rect").data(rect_data.value).enter().append("rect").attr("x", function(d) {
        return d.x - d.width / 2;
      }).attr("y", function(d) {
        return d.y - d.height / 2;
      }).attr("rx", function(d) {
        return d.width > d.height ? d.height / 2 : d.width / 2;
      }).attr("ry", function(d) {
        return d.width > d.height ? d.height / 2 : d.width / 2;
      }).attr("width", function(d) {
        return d.width;
      }).attr("height", function(d) {
        return d.height;
      }).attr("fill", "rgba(161,216,230,0.5)");
    };
    const animate = (elapsed) => {
      isAnimate.value = true;
      rects.value.attr("x", function(d) {
        d.x = d.x + d.speed * d.x_diff;
        if (d.x <= 0 || d.x >= width.value - d.width) {
          d.x_diff = d.x_diff * -1;
        }
        return d.x;
      }).attr("y", function(d) {
        d.y = d.y + d.speed * d.y_diff;
        if (d.y <= 0 || d.y >= height.value - d.height) {
          d.y_diff = d.y_diff * -1;
        }
        return d.y;
      }).attr("width", function(d) {
        return d.width;
      }).attr("height", function(d) {
        return d.height;
      });
    };
    const handleInit = () => {
      if (!isLoading.value && isLine.value) {
        handleSpurStart();
        setTimeout(() => {
          const t = d3.transition().duration(1e3).ease(d3.easeLinear);
          timerController.value.stop();
          rect_data.value = getPolygonsPostion(width.value / 2, height.value / 2, 32, 100).map((item) => {
            return {
              x: item.x,
              y: item.y,
              x_diff: Math.random() < 0.5 ? 1 : -1,
              y_diff: Math.random() < 0.5 ? 1 : -1,
              speed: Math.random() * 5,
              width: 15,
              height: 15
            };
          });
          svg.value.selectAll("rect").data(rect_data.value).transition(t).attr("x", function(d) {
            return d.x - d.width / 2;
          }).attr("y", function(d) {
            return d.y - d.height / 2;
          }).attr("rx", function(d) {
            return d.width > d.height ? d.height / 2 : d.width / 2;
          }).attr("ry", function(d) {
            return d.width > d.height ? d.height / 2 : d.width / 2;
          }).attr("width", function(d) {
            return d.width;
          }).attr("height", function(d) {
            return d.height;
          }).attr("fill", "rgba(161,216,230,0.5)");
          isLoading.value = false;
          isAnimate.value = false;
          isLine.value = false;
        }, 1e3);
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
          const t = d3.transition().duration(1e3).ease(d3.easeLinear);
          timerController.value.stop();
          rects.value.transition(t).attr("x", function(d, i) {
            return width.value / 2 - (d.width + 5) * 16 + (d.width + 5) * i;
          }).attr("y", function(d, i) {
            return height.value / 2;
          }).attr("height", function(d, i) {
            return d.height * Math.random() * 5;
          });
          isAnimate.value = false;
          isLoading.value = false;
          isLine.value = true;
        }, 1e3);
      }
    };
    onMounted(() => {
      width.value = document.querySelector(".gallery-one").clientWidth;
      height.value = document.querySelector(".gallery-one").clientHeight;
      initSvgBG();
    });
    return {
      handleInit,
      handleSpurStart,
      handleShapeLine
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font relative" }, _attrs))} data-v-1272dfdb><div id="svgBackground" data-v-1272dfdb></div><section data-v-1272dfdb><div class="march text-gray-600 body-font" data-v-1272dfdb><div class="container px-5 py-24 mx-auto" data-v-1272dfdb><div class="lg:w-4/5 mx-auto flex flex-wrap" data-v-1272dfdb><div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex justify-center items-center" data-v-1272dfdb> = \u5167\u5BB9\u88FD\u4F5C\u4E2D = </div><div class="gallery-one relative lg:w-1/2 w-full h-128 object-cover object-center rounded border-solid border-5 border-gray" data-v-1272dfdb><div class="controller absolute left-0 bottom-0" data-v-1272dfdb><button class="stop border border-solid rounded mr-1 px-2 py-1" data-v-1272dfdb> \u5207\u63DB\u5713\u5F62 </button><button class="stop border border-solid rounded px-2 py-1" data-v-1272dfdb> \u5207\u63DB\u5716\u8868 </button></div><div class="absolute left-1 top-1" data-v-1272dfdb>\u904E\u5834\u6548\u679C\u6E2C\u8A66</div></div></div></div></div></section></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Pages/HappinessProjectSinglePage.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var HappinessProjectSinglePage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-1272dfdb"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font" }, _attrs))}><div class="container px-5 py-24 mx-auto"><div class="flex flex-wrap w-full mb-20"><div class="lg:w-1/2 w-full mb-6 lg:mb-0"><h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"> Pitchfork Kickstarter Taxidermy </h1><div class="h-1 w-20 bg-indigo-500 rounded"></div></div><p class="lg:w-1/2 w-full leading-relaxed text-gray-500"> Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&#39;t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag. </p></div><div class="flex flex-wrap -m-4"><div class="xl:w-1/4 md:w-1/2 p-4"><div class="bg-gray-100 p-6 rounded-lg"><img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"><h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font"> SUBTITLE </h3><h2 class="text-lg text-gray-900 font-medium title-font mb-4"> Chichen Itza </h2><p class="leading-relaxed text-base"> Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche. </p></div></div><div class="xl:w-1/4 md:w-1/2 p-4"><div class="bg-gray-100 p-6 rounded-lg"><img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"><h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font"> SUBTITLE </h3><h2 class="text-lg text-gray-900 font-medium title-font mb-4"> Colosseum Roma </h2><p class="leading-relaxed text-base"> Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche. </p></div></div><div class="xl:w-1/4 md:w-1/2 p-4"><div class="bg-gray-100 p-6 rounded-lg"><img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"><h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font"> SUBTITLE </h3><h2 class="text-lg text-gray-900 font-medium title-font mb-4"> Great Pyramid of Giza </h2><p class="leading-relaxed text-base"> Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche. </p></div></div><div class="xl:w-1/4 md:w-1/2 p-4"><div class="bg-gray-100 p-6 rounded-lg"><img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"><h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font"> SUBTITLE </h3><h2 class="text-lg text-gray-900 font-medium title-font mb-4"> San Francisco </h2><p class="leading-relaxed text-base"> Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche. </p></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Pages/MentalGadget.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var MentalGadget = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font" }, _attrs))}><div class="container px-5 py-24 mx-auto"><div class="flex flex-col text-center w-full mb-20"><h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest"> OUR TEAM </h1><p class="lg:w-2/3 mx-auto leading-relaxed text-base"> Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&#39;t heard of them. </p></div><div class="flex flex-wrap -m-4"><div class="p-4 lg:w-1/2"><div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"><img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"><div class="flex-grow sm:pl-8"><h2 class="title-font font-medium text-lg text-gray-900"> Holden Caulfield </h2><h3 class="text-gray-500 mb-3">UI Developer</h3><p class="mb-4"> DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. </p><span class="inline-flex"><a class="text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg></a></span></div></div></div><div class="p-4 lg:w-1/2"><div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"><img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201"><div class="flex-grow sm:pl-8"><h2 class="title-font font-medium text-lg text-gray-900"> Alper Kamu </h2><h3 class="text-gray-500 mb-3">Designer</h3><p class="mb-4"> DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. </p><span class="inline-flex"><a class="text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg></a></span></div></div></div><div class="p-4 lg:w-1/2"><div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"><img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204"><div class="flex-grow sm:pl-8"><h2 class="title-font font-medium text-lg text-gray-900"> Atticus Finch </h2><h3 class="text-gray-500 mb-3">UI Developer</h3><p class="mb-4"> DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. </p><span class="inline-flex"><a class="text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg></a></span></div></div></div><div class="p-4 lg:w-1/2"><div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"><img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206"><div class="flex-grow sm:pl-8"><h2 class="title-font font-medium text-lg text-gray-900"> Henry Letham </h2><h3 class="text-gray-500 mb-3">Designer</h3><p class="mb-4"> DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. </p><span class="inline-flex"><a class="text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-2 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg></a></span></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/HappinessProject/ArticleList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var HappinessArticleList = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font overflow-hidden" }, _attrs))}><div class="container px-5 py-24 mx-auto"><div class="-my-8 divide-y-2 divide-gray-100"><div class="py-8 flex flex-wrap md:flex-nowrap"><div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="font-semibold title-font text-gray-700">CATEGORY</span><span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div><div class="md:flex-grow"><h2 class="text-2xl font-medium text-gray-900 title-font mb-2"> Bitters hashtag waistcoat fashion axe chia unicorn </h2><p class="leading-relaxed"> Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. </p><a class="text-indigo-500 inline-flex items-center mt-4">\u770B\u66F4\u591A <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></a></div></div><div class="py-8 flex flex-wrap md:flex-nowrap"><div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="font-semibold title-font text-gray-700">CATEGORY</span><span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div><div class="md:flex-grow"><h2 class="text-2xl font-medium text-gray-900 title-font mb-2"> Meditation bushwick direct trade taxidermy shaman </h2><p class="leading-relaxed"> Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. </p><a class="text-indigo-500 inline-flex items-center mt-4">\u770B\u66F4\u591A <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></a></div></div><div class="py-8 flex flex-wrap md:flex-nowrap"><div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="font-semibold title-font text-gray-700">CATEGORY</span><span class="text-sm text-gray-500">12 Jun 2019</span></div><div class="md:flex-grow"><h2 class="text-2xl font-medium text-gray-900 title-font mb-2"> Woke master cleanse drinking vinegar salvia </h2><p class="leading-relaxed"> Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. </p><a class="text-indigo-500 inline-flex items-center mt-4">\u770B\u66F4\u591A <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></a></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/BookReview/ArticleList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var BookReviewArticleList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font overflow-hidden" }, _attrs))}><div class="container px-5 py-24 mx-auto"><div class="-my-8 divide-y-2 divide-gray-100"><div class="py-8 flex flex-wrap md:flex-nowrap"><div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="font-semibold title-font text-gray-700">CATEGORY</span><span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div><div class="md:flex-grow"><h2 class="text-2xl font-medium text-gray-900 title-font mb-2"> Bitters hashtag waistcoat fashion axe chia unicorn </h2><p class="leading-relaxed"> Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. </p><a class="text-indigo-500 inline-flex items-center mt-4">\u770B\u66F4\u591A <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></a></div></div><div class="py-8 flex flex-wrap md:flex-nowrap"><div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="font-semibold title-font text-gray-700">CATEGORY</span><span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div><div class="md:flex-grow"><h2 class="text-2xl font-medium text-gray-900 title-font mb-2"> Meditation bushwick direct trade taxidermy shaman </h2><p class="leading-relaxed"> Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. </p><a class="text-indigo-500 inline-flex items-center mt-4">\u770B\u66F4\u591A <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></a></div></div><div class="py-8 flex flex-wrap md:flex-nowrap"><div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="font-semibold title-font text-gray-700">CATEGORY</span><span class="text-sm text-gray-500">12 Jun 2019</span></div><div class="md:flex-grow"><h2 class="text-2xl font-medium text-gray-900 title-font mb-2"> Woke master cleanse drinking vinegar salvia </h2><p class="leading-relaxed"> Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. </p><a class="text-indigo-500 inline-flex items-center mt-4">\u770B\u66F4\u591A <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></a></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/NewsAndViews/ArticleList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var ViewsArticleList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font" }, _attrs))}><div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"><img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"><div class="text-center lg:w-2/3 w-full"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Psychological Hacks 42 </h1><p class="mb-8 leading-relaxed"> Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork. </p><div class="flex justify-center"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Donate </button><button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"> Leave </button></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Pages/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var About = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
var SingleArticle_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  setup() {
    const article = reactive({
      category: "",
      content: "",
      cover: "",
      subtitle: "",
      title: "",
      url: ""
    });
    const route = useRoute();
    const title = route.params.title;
    const getCurrentAricle = async () => {
      const q = query(collection(db, "article-lists"), where("title", "==", title));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc2) => {
        console.log(doc2.data());
        Object.assign(article, __spreadProps(__spreadValues({}, doc2.data()), { id: doc2.id }));
      });
    };
    getCurrentAricle();
    return __spreadValues({}, toRefs(article));
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font" }, _attrs))}><div class="container px-5 py-24 mx-auto flex flex-col"><div class="w-full lg:w-4/6 mx-auto"><div class="rounded-lg h-64 overflow-hidden"><img alt="content" class="object-cover object-center h-full w-full"${ssrRenderAttr("src", _ctx.cover)}></div><div class="flex flex-col sm:flex-row mt-10"><div class="sm:w-1/3 text-center sm:pr-8 sm:py-8"><div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><div class="flex flex-col items-center text-center justify-center"><h2 class="font-medium title-font mt-4 text-gray-900 text-lg">${ssrInterpolate(_ctx.title)}</h2><div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div><p class="text-base">${ssrInterpolate(_ctx.subtitle)}</p></div></div><div class="lg:w-2/3 pl-8 py-8 border-l lg:border-gray-200 border-t-0 lg:border-t lg:mt-4 lg:pt-4 mt-0"><p class="leading-relaxed text-lg mb-4">${_ctx.content}</p>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "text-indigo-500 inline-flex items-center",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u56DE\u5230\u4E0A\u4E00\u9801 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"${_scopeId}><path d="M5 12h14M12 5l7 7-7 7"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" \u56DE\u5230\u4E0A\u4E00\u9801 "),
          (openBlock(), createBlock("svg", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            class: "w-4 h-4 ml-2",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Pages/SingleArticle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var SingleArticle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var windi = "";
var leaflet = "";
const router = createRouter({
  base: "./",
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/therapists/",
      name: "Therapists",
      component: FindTherapists
    },
    {
      path: "/gadgets/",
      name: "Gadgets",
      component: MentalGadget
    },
    {
      path: "/happiness-articles/",
      name: "happiness-articles",
      component: HappinessArticleList
    },
    {
      path: "/project/",
      name: "Project",
      component: HappinessProjectSinglePage
    },
    {
      path: "/book-review/",
      name: "book-review",
      component: BookReviewArticleList
    },
    {
      path: "/news-and-views/",
      name: "news-and-views",
      component: ViewsArticleList
    },
    {
      path: "/article/:title/",
      name: "Article",
      component: SingleArticle
    },
    {
      path: "/about/",
      name: "About",
      component: About
    }
  ]
});
createApp(App).use(router).mount("#app");
