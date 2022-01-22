import{o as i,c,a as h,b as e,d,r as v,w as u,e as f,h as A,L as M,F as L,f as b,g as y,t as g,i as C,O as B,j as P,k as w,v as O,l as H,m as T,n as E,p as G,q as R}from"./vendor_1642840764215.js";const S=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}};S();var p=(n,r)=>{const l=n.__vccOpts||n;for(const[a,t]of r)l[a]=t;return l};const z={},I={class:"logo-wrapper flex title-font font-medium items-center md:justify-start justify-center text-gray-900"},N=h('<div class="logo" data-v-1c5eac0a><img src="https://i.imgur.com/biXQwA3.jpg" data-v-1c5eac0a></div><div class="logo-text" data-v-1c5eac0a><div class="ml-3 text-md" data-v-1c5eac0a>Psychological</div><div class="ml-3 text-md" data-v-1c5eac0a>Hacks 42</div></div>',2),Y=[N];function F(n,r,l,a,t,o){return i(),c("div",I,Y)}var x=p(z,[["render",F],["__scopeId","data-v-1c5eac0a"]]);const J={components:{Logo:x}},V={class:"text-gray-600 body-font absolute w-full bottom-0"},D={class:"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"},K=h('<p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> \xA9 2020 Tailblocks \u2014 <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a></p><span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"><a class="text-gray-500"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-3 text-gray-500"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-3 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a><a class="ml-3 text-gray-500"><svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg></a></span>',2);function q(n,r,l,a,t,o){const s=x;return i(),c("footer",V,[e("div",D,[e("a",null,[d(s)]),K])])}var U=p(J,[["render",q]]);const W={components:{Logo:x}},Z={class:"text-gray-600 body-font"},Q={class:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},X={class:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"},ee={class:"md:ml-auto flex flex-wrap items-center text-base justify-center"},te=f("Monthly Aritcle"),se=f("Find a Therapist"),oe=e("a",{class:"mr-5 hover:text-gray-900"},"Psycho 101",-1),ne=e("a",{class:"mr-5 hover:text-gray-900"},"FE Tech",-1),ae=f("About Plan"),re=e("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-4 h-4 ml-1",viewBox:"0 0 24 24"},[e("path",{d:"M5 12h14M12 5l7 7-7 7"})],-1);function le(n,r,l,a,t,o){const s=x,m=v("router-link");return i(),c("header",Z,[e("div",Q,[e("a",X,[d(s)]),e("nav",ee,[d(m,{class:"mr-5 hover:text-gray-900",to:"/new"},{default:u(()=>[te]),_:1}),d(m,{class:"mr-5 hover:text-gray-900",to:"/blog"},{default:u(()=>[se]),_:1}),oe,ne]),d(m,{class:"inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0",to:"/about"},{default:u(()=>[ae,re]),_:1})])])}var ie=p(W,[["render",le]]);const ce={props:{popArticles:{type:Array}},setup(n){console.log("hello"),A(console.log),M(console.log),L(console.log)}},de={class:"relative pb-104px"};function pe(n,r,l,a,t,o){const s=ie,m=v("router-view"),_=U;return i(),c("div",de,[d(s),d(m),d(_)])}var me=p(ce,[["render",pe]]);const he={},ue={class:"text-gray-600 body-font"},fe=h('<div class="container px-5 py-24 mx-auto"><div class="w-full flex flex-wrap"><div class="py-8 px-4 lg:w-1/3 bg-white"><div class="h-full flex items-start"><div class="w-12 flex-shrink-0 flex flex-col text-center leading-none"><span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span><span class="font-medium text-lg text-gray-800 title-font leading-none">18</span></div><div class="flex-grow pl-6"><h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"> CATEGORY </h2><h1 class="title-font text-xl font-medium text-gray-900 mb-3"> The 400 Blows </h1><p class="leading-relaxed mb-5"> Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. </p><a class="inline-flex items-center"><img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-3"><span class="title-font font-medium text-gray-900">Alper Kamu</span></span></a></div></div></div><div class="py-8 px-4 lg:w-1/3 bg-white"><div class="h-full flex items-start"><div class="w-12 flex-shrink-0 flex flex-col text-center leading-none"><span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span><span class="font-medium text-lg text-gray-800 title-font leading-none">18</span></div><div class="flex-grow pl-6"><h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"> CATEGORY </h2><h1 class="title-font text-xl font-medium text-gray-900 mb-3"> Shooting Stars </h1><p class="leading-relaxed mb-5"> Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. </p><a class="inline-flex items-center"><img alt="blog" src="https://dummyimage.com/102x102" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-3"><span class="title-font font-medium text-gray-900">Holden Caulfield</span></span></a></div></div></div><div class="py-8 px-4 lg:w-1/3 bg-white"><div class="h-full flex items-start"><div class="w-12 flex-shrink-0 flex flex-col text-center leading-none"><span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span><span class="font-medium text-lg text-gray-800 title-font leading-none">18</span></div><div class="flex-grow pl-6"><h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"> CATEGORY </h2><h1 class="title-font text-xl font-medium text-gray-900 mb-3"> Neptune </h1><p class="leading-relaxed mb-5"> Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. </p><a class="inline-flex items-center"><img alt="blog" src="https://dummyimage.com/101x101" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-3"><span class="title-font font-medium text-gray-900">Henry Letham</span></span></a></div></div></div></div></div>',1),ge=[fe];function xe(n,r,l,a,t,o){return i(),c("section",ue,ge)}var _e=p(he,[["render",xe]]);const ve={},be={class:"text-gray-600 body-font overflow-hidden"},ye={class:"container px-5 mx-auto"},we={class:"-my-8 divide-y-2 divide-gray-100"},ke={class:"my-4 py-8 flex flex-wrap md:flex-nowrap bg-white"},$e=e("div",{class:"pl-8 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"},[e("span",{class:"font-semibold title-font text-gray-700"},"CATEGORY"),e("span",{class:"mt-1 text-gray-500 text-sm"},"12 Jun 2019")],-1),je={class:"pl-8 md:flex-grow"},Ae=e("h2",{class:"text-2xl font-medium text-gray-900 title-font mb-2"}," Bitters hashtag waistcoat fashion axe chia unicorn ",-1),Me=e("p",{class:"leading-relaxed"}," Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. ",-1),Le=f("Learn More "),Ce=e("svg",{class:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M5 12h14"}),e("path",{d:"M12 5l7 7-7 7"})],-1),Be={class:"my-4 py-8 flex flex-wrap md:flex-nowrap bg-white"},Pe=e("div",{class:"pl-8 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"},[e("span",{class:"font-semibold title-font text-gray-700"},"CATEGORY"),e("span",{class:"mt-1 text-gray-500 text-sm"},"12 Jun 2019")],-1),Oe={class:"pl-8 md:flex-grow"},He=e("h2",{class:"text-2xl font-medium text-gray-900 title-font mb-2"}," Meditation bushwick direct trade taxidermy shaman ",-1),Te=e("p",{class:"leading-relaxed"}," Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. ",-1),Ee=f("Learn More "),Ge=e("svg",{class:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M5 12h14"}),e("path",{d:"M12 5l7 7-7 7"})],-1),Re={class:"my-4 py-8 flex flex-wrap md:flex-nowrap bg-white"},Se=e("div",{class:"pl-8 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"},[e("span",{class:"font-semibold title-font text-gray-700"},"CATEGORY"),e("span",{class:"text-sm text-gray-500"},"12 Jun 2019")],-1),ze={class:"pl-8 md:flex-grow"},Ie=e("h2",{class:"text-2xl font-medium text-gray-900 title-font mb-2"}," Woke master cleanse drinking vinegar salvia ",-1),Ne=e("p",{class:"leading-relaxed"}," Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. ",-1),Ye=f(" Learn More "),Fe=e("svg",{class:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M5 12h14"}),e("path",{d:"M12 5l7 7-7 7"})],-1);function Je(n,r,l,a,t,o){const s=v("router-link");return i(),c("section",be,[e("div",ye,[e("div",we,[e("div",ke,[$e,e("div",je,[Ae,Me,d(s,{class:"text-indigo-500 inline-flex items-center mt-4 cursor-pointer",to:"/blog/Bitters hashtag waistcoat fashion axe chia unicorn"},{default:u(()=>[Le,Ce]),_:1})])]),e("div",Be,[Pe,e("div",Oe,[He,Te,d(s,{class:"text-indigo-500 inline-flex items-center mt-4 cursor-pointer",to:"/blog/Meditation bushwick direct trade taxidermy shaman"},{default:u(()=>[Ee,Ge]),_:1})])]),e("div",Re,[Se,e("div",ze,[Ie,Ne,d(s,{class:"text-indigo-500 inline-flex items-center mt-4 cursor-pointer",to:"/blog/Woke master cleanse drinking vinegar salvia"},{default:u(()=>[Ye,Fe]),_:1})])])])])])}var k=p(ve,[["render",Je]]);const Ve={props:{popArticles:{type:Array}},setup(n){}},De={class:"text-gray-600 body-font"},Ke={class:"container px-5 py-24 mx-auto"},qe={class:"flex flex-wrap -m-4"},Ue={class:"h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"},We=e("div",{class:"bg-gray-200 lg:h-96 md:h-72 w-full object-cover object-center",alt:"blog"},null,-1),Ze={class:"p-6 bg-gray-300"},Qe={class:"tracking-widest text-xs title-font font-medium text-gray-400 mb-1"},Xe={class:"title-font text-lg font-medium text-gray-900 mb-3"},et={class:"leading-relaxed h-80px mb-3"},tt=e("div",{class:"flex items-center flex-wrap"},[e("a",{class:"bg-gray-200 rounded-xl w-110px h-24px py-1 text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"}),e("span",{class:"animate-pulse bg-gray-200 rounded-xl w-63px h-24px text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"}),e("span",{class:"bg-gray-200 rounded-xl w-30px h-24px py-1 text-gray-400 inline-flex items-center leading-none text-sm"})],-1);function st(n,r,l,a,t,o){return i(),c("section",De,[e("div",Ke,[e("div",qe,[(i(),c(b,null,y(3,s=>e("div",{class:"p-4 md:w-1/3",key:s},[e("div",Ue,[We,e("div",Ze,[e("h2",Qe,g(s.category),1),e("h1",Xe,g(s.title),1),e("p",et,g(s.subtitle),1),tt])])])),64))])])])}var ot=p(Ve,[["render",st]]);const nt={props:{popArticles:{type:Array}},setup(n){}},at={class:"text-gray-600 body-font"},rt={class:"container px-5 py-24 mx-auto"},lt={class:"flex flex-wrap -m-4"},it={class:"h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white"},ct=["src"],dt={class:"p-6"},pt={class:"tracking-widest text-xs title-font font-medium text-gray-400 mb-1"},mt={class:"title-font text-lg font-medium text-gray-900 mb-3"},ht={class:"leading-relaxed mb-3 h-80px clamp"},ut=h('<div class="flex items-center flex-wrap"><a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></a><span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"><svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>1.2K </span><span class="text-gray-400 inline-flex items-center leading-none text-sm"><svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg>6 </span></div>',1);function ft(n,r,l,a,t,o){return i(),c("section",at,[e("div",rt,[e("div",lt,[(i(!0),c(b,null,y(l.popArticles,s=>(i(),c("div",{class:"p-4 md:w-1/3",key:s.title},[e("div",it,[e("img",{class:"lg:h-96 md:h-72 w-full object-cover object-center",src:s.cover,alt:"blog"},null,8,ct),e("div",dt,[e("h2",pt,g(s.category),1),e("h1",mt,g(s.title),1),e("p",ht,g(s.subtitle),1),ut])])]))),128))])])])}var gt=p(nt,[["render",ft]]);const xt="AIzaSyDa4EAZpUtMcU4ct7XIjzmALae3YPVIFN0",_t="1:1048115582755:web:857e1bc1f3ceb6d4591e96";C({apiKey:xt,authDomain:"none-chinese-a-year.firebaseapp.com",databaseURL:"https://none-chinese-a-year-default-rtdb.firebaseio.com",projectId:"none-chinese-a-year",storageBucket:"none-chinese-a-year.appspot.com",messagingSenderId:"1048115582755",appId:_t,measurementId:"G-TZVQGP3ZDJ"});const $=B(),vt={setup(){const n=P([]);return(async()=>{O($,"article-lists","popular-article-lists"),(await H(T($,"article-lists"))).forEach(a=>{n.value.push(a.data())})})(),{popArticles:n}}};function bt(n,r,l,a,t,o){const s=gt,m=ot,_=k,j=_e;return i(),c(b,null,[a.popArticles.length?(i(),w(s,{key:0,"pop-articles":a.popArticles},null,8,["pop-articles"])):(i(),w(m,{key:1})),d(_),d(j)],64)}var yt=p(vt,[["render",bt]]);const wt={},kt={class:"text-gray-600 body-font"},$t=h('<div class="container px-5 py-24 mx-auto flex flex-col"><div class="lg:w-4/6 mx-auto"><div class="rounded-lg h-64 overflow-hidden"><img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"></div><div class="flex flex-col sm:flex-row mt-10"><div class="sm:w-1/3 text-center sm:pr-8 sm:py-8"><div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><div class="flex flex-col items-center text-center justify-center"><h2 class="font-medium title-font mt-4 text-gray-900 text-lg"> Phoebe Caulfield </h2><div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div><p class="text-base"> Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland. </p></div></div><div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"><p class="leading-relaxed text-lg mb-4"> Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90&#39;s scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn. </p><a class="text-indigo-500 inline-flex items-center">Learn More <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div></div></div></div>',1),jt=[$t];function At(n,r,l,a,t,o){return i(),c("section",kt,jt)}var Mt=p(wt,[["render",At]]);const Lt={},Ct={class:"text-gray-600 body-font"},Bt=h('<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"><img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"><div class="text-center lg:w-2/3 w-full"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Psychological Hacks 42 </h1><p class="mb-8 leading-relaxed"> Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork. </p><div class="flex justify-center"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Donate </button><button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"> Leave </button></div></div></div>',1),Pt=[Bt];function Ot(n,r,l,a,t,o){return i(),c("section",Ct,Pt)}var Ht=p(Lt,[["render",Ot]]);const Tt=E({base:"./",history:G(),routes:[{path:"/",name:"Home",component:yt},{path:"/blog/",name:"BlogList",component:k},{path:"/blog/:title",name:"Blog",component:Mt},{path:"/about",name:"About",component:Ht}]});R(me).use(Tt).mount("#app");
