function di(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Uf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$f=di(Uf);function Qa(t){return!!t||t===""}function pi(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=xe(s)?jf(s):pi(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(xe(t))return t;if(_e(t))return t}}const Bf=/;(?![^(]*\))/g,Hf=/:(.+)/;function jf(t){const e={};return t.split(Bf).forEach(n=>{if(n){const s=n.split(Hf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function gi(t){let e="";if(xe(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=gi(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const GE=t=>t==null?"":q(t)||_e(t)&&(t.toString===Za||!G(t.toString))?JSON.stringify(t,Ya,2):String(t),Ya=(t,e)=>e&&e.__v_isRef?Ya(t,e.value):vn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Xa(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!q(e)&&!el(e)?String(e):e,fe={},yn=[],ct=()=>{},qf=()=>!1,Kf=/^on[^a-z]/,Ks=t=>Kf.test(t),mi=t=>t.startsWith("onUpdate:"),Ve=Object.assign,yi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zf=Object.prototype.hasOwnProperty,ee=(t,e)=>zf.call(t,e),q=Array.isArray,vn=t=>zs(t)==="[object Map]",Xa=t=>zs(t)==="[object Set]",G=t=>typeof t=="function",xe=t=>typeof t=="string",vi=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Ja=t=>_e(t)&&G(t.then)&&G(t.catch),Za=Object.prototype.toString,zs=t=>Za.call(t),Gf=t=>zs(t).slice(8,-1),el=t=>zs(t)==="[object Object]",wi=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=di(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wf=/-(\w)/g,pt=Ws(t=>t.replace(Wf,(e,n)=>n?n.toUpperCase():"")),Qf=/\B([A-Z])/g,wn=Ws(t=>t.replace(Qf,"-$1").toLowerCase()),Qs=Ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ei=Ws(t=>t?`on${Qs(t)}`:""),Xn=(t,e)=>!Object.is(t,e),Ti=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ys=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Yf=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tl;const Xf=()=>tl||(tl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let jt;const Xs=[];class Jf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&jt&&(this.parent=jt,this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Xs.push(this),jt=this)}off(){this.active&&(Xs.pop(),jt=Xs[Xs.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Zf(t,e){e=e||jt,e&&e.active&&e.effects.push(t)}const Ii=t=>{const e=new Set(t);return e.w=0,e.n=0,e},nl=t=>(t.w&Nt)>0,sl=t=>(t.n&Nt)>0,ed=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Nt},td=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];nl(r)&&!sl(r)?r.delete(t):e[n++]=r,r.w&=~Nt,r.n&=~Nt}e.length=n}},Ai=new WeakMap;let Jn=0,Nt=1;const bi=30,Zn=[];let qt;const Kt=Symbol(""),Si=Symbol("");class Ci{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Zf(this,s)}run(){if(!this.active)return this.fn();if(!Zn.includes(this))try{return Zn.push(qt=this),nd(),Nt=1<<++Jn,Jn<=bi?ed(this):rl(this),this.fn()}finally{Jn<=bi&&td(this),Nt=1<<--Jn,zt(),Zn.pop();const e=Zn.length;qt=e>0?Zn[e-1]:void 0}}stop(){this.active&&(rl(this),this.onStop&&this.onStop(),this.active=!1)}}function rl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let En=!0;const _i=[];function Tn(){_i.push(En),En=!1}function nd(){_i.push(En),En=!0}function zt(){const t=_i.pop();En=t===void 0?!0:t}function et(t,e,n){if(!il())return;let s=Ai.get(t);s||Ai.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ii()),ol(r)}function il(){return En&&qt!==void 0}function ol(t,e){let n=!1;Jn<=bi?sl(t)||(t.n|=Nt,n=!nl(t)):n=!t.has(qt),n&&(t.add(qt),qt.deps.push(t))}function Tt(t,e,n,s,r,i){const o=Ai.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?wi(n)&&a.push(o.get("length")):(a.push(o.get(Kt)),vn(t)&&a.push(o.get(Si)));break;case"delete":q(t)||(a.push(o.get(Kt)),vn(t)&&a.push(o.get(Si)));break;case"set":vn(t)&&a.push(o.get(Kt));break}if(a.length===1)a[0]&&Ri(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ri(Ii(l))}}function Ri(t,e){for(const n of q(t)?t:[...t])(n!==qt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const sd=di("__proto__,__v_isRef,__isVue"),al=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(vi)),rd=Ni(),id=Ni(!1,!0),od=Ni(!0),ll=ad();function ad(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let i=0,o=this.length;i<o;i++)et(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ne)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Tn();const s=ne(this)[e].apply(this,n);return zt(),s}}),t}function Ni(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_raw"&&i===(t?e?Ad:yl:e?ml:gl).get(s))return s;const o=q(s);if(!t&&o&&ee(ll,r))return Reflect.get(ll,r,i);const a=Reflect.get(s,r,i);return(vi(r)?al.has(r):sd(r))||(t||et(s,"get",r),e)?a:je(a)?!o||!wi(r)?a.value:a:_e(a)?t?vl(a):es(a):a}}const ld=cl(),cd=cl(!0);function cl(t=!1){return function(n,s,r,i){let o=n[s];if(!t&&!Pi(r)&&(r=ne(r),o=ne(o),!q(n)&&je(o)&&!je(r)))return o.value=r,!0;const a=q(n)&&wi(s)?Number(s)<n.length:ee(n,s),l=Reflect.set(n,s,r,i);return n===ne(i)&&(a?Xn(r,o)&&Tt(n,"set",s,r):Tt(n,"add",s,r)),l}}function ud(t,e){const n=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Tt(t,"delete",e,void 0),s}function hd(t,e){const n=Reflect.has(t,e);return(!vi(e)||!al.has(e))&&et(t,"has",e),n}function fd(t){return et(t,"iterate",q(t)?"length":Kt),Reflect.ownKeys(t)}const ul={get:rd,set:ld,deleteProperty:ud,has:hd,ownKeys:fd},dd={get:od,set(t,e){return!0},deleteProperty(t,e){return!0}},pd=Ve({},ul,{get:id,set:cd}),Di=t=>t,Js=t=>Reflect.getPrototypeOf(t);function Zs(t,e,n=!1,s=!1){t=t.__v_raw;const r=ne(t),i=ne(e);e!==i&&!n&&et(r,"get",e),!n&&et(r,"get",i);const{has:o}=Js(r),a=s?Di:n?ki:ts;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function er(t,e=!1){const n=this.__v_raw,s=ne(n),r=ne(t);return t!==r&&!e&&et(s,"has",t),!e&&et(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function tr(t,e=!1){return t=t.__v_raw,!e&&et(ne(t),"iterate",Kt),Reflect.get(t,"size",t)}function hl(t){t=ne(t);const e=ne(this);return Js(e).has.call(e,t)||(e.add(t),Tt(e,"add",t,t)),this}function fl(t,e){e=ne(e);const n=ne(this),{has:s,get:r}=Js(n);let i=s.call(n,t);i||(t=ne(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Xn(e,o)&&Tt(n,"set",t,e):Tt(n,"add",t,e),this}function dl(t){const e=ne(this),{has:n,get:s}=Js(e);let r=n.call(e,t);r||(t=ne(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Tt(e,"delete",t,void 0),i}function pl(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&Tt(t,"clear",void 0,void 0),n}function nr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ne(o),l=e?Di:t?ki:ts;return!t&&et(a,"iterate",Kt),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function sr(t,e,n){return function(...s){const r=this.__v_raw,i=ne(r),o=vn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?Di:e?ki:ts;return!e&&et(i,"iterate",l?Si:Kt),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Dt(t){return function(...e){return t==="delete"?!1:this}}function gd(){const t={get(i){return Zs(this,i)},get size(){return tr(this)},has:er,add:hl,set:fl,delete:dl,clear:pl,forEach:nr(!1,!1)},e={get(i){return Zs(this,i,!1,!0)},get size(){return tr(this)},has:er,add:hl,set:fl,delete:dl,clear:pl,forEach:nr(!1,!0)},n={get(i){return Zs(this,i,!0)},get size(){return tr(this,!0)},has(i){return er.call(this,i,!0)},add:Dt("add"),set:Dt("set"),delete:Dt("delete"),clear:Dt("clear"),forEach:nr(!0,!1)},s={get(i){return Zs(this,i,!0,!0)},get size(){return tr(this,!0)},has(i){return er.call(this,i,!0)},add:Dt("add"),set:Dt("set"),delete:Dt("delete"),clear:Dt("clear"),forEach:nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=sr(i,!1,!1),n[i]=sr(i,!0,!1),e[i]=sr(i,!1,!0),s[i]=sr(i,!0,!0)}),[t,n,e,s]}const[md,yd,vd,wd]=gd();function xi(t,e){const n=e?t?wd:vd:t?yd:md;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ee(n,r)&&r in s?n:s,r,i)}const Ed={get:xi(!1,!1)},Td={get:xi(!1,!0)},Id={get:xi(!0,!1)},gl=new WeakMap,ml=new WeakMap,yl=new WeakMap,Ad=new WeakMap;function bd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sd(t){return t.__v_skip||!Object.isExtensible(t)?0:bd(Gf(t))}function es(t){return t&&t.__v_isReadonly?t:Oi(t,!1,ul,Ed,gl)}function Cd(t){return Oi(t,!1,pd,Td,ml)}function vl(t){return Oi(t,!0,dd,Id,yl)}function Oi(t,e,n,s,r){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Sd(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function In(t){return Pi(t)?In(t.__v_raw):!!(t&&t.__v_isReactive)}function Pi(t){return!!(t&&t.__v_isReadonly)}function wl(t){return In(t)||Pi(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function El(t){return Ys(t,"__v_skip",!0),t}const ts=t=>_e(t)?es(t):t,ki=t=>_e(t)?vl(t):t;function Tl(t){il()&&(t=ne(t),t.dep||(t.dep=Ii()),ol(t.dep))}function Il(t,e){t=ne(t),t.dep&&Ri(t.dep)}function je(t){return Boolean(t&&t.__v_isRef===!0)}function _d(t){return Al(t,!1)}function Rd(t){return Al(t,!0)}function Al(t,e){return je(t)?t:new Nd(t,e)}class Nd{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:ts(e)}get value(){return Tl(this),this._value}set value(e){e=this._shallow?e:ne(e),Xn(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:ts(e),Il(this))}}function ns(t){return je(t)?t.value:t}const Dd={get:(t,e,n)=>ns(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return je(r)&&!je(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function bl(t){return In(t)?t:new Proxy(t,Dd)}class xd{constructor(e,n,s){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Ci(e,()=>{this._dirty||(this._dirty=!0,Il(this))}),this.__v_isReadonly=s}get value(){const e=ne(this);return Tl(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function gt(t,e){let n,s;const r=G(t);return r?(n=t,s=ct):(n=t.get,s=t.set),new xd(n,s,r||!s)}Promise.resolve();function Od(t,e,...n){const s=t.vnode.props||fe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=s[u]||fe;d?r=n.map(g=>g.trim()):f&&(r=n.map(Yf))}let a,l=s[a=Ei(e)]||s[a=Ei(pt(e))];!l&&i&&(l=s[a=Ei(wn(e))]),l&&at(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,at(c,t,6,r)}}function Sl(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Sl(c,e,!0);u&&(a=!0,Ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(s.set(t,null),null):(q(i)?i.forEach(l=>o[l]=null):Ve(o,i),s.set(t,o),o)}function Li(t,e){return!t||!Ks(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,wn(e))||ee(t,e))}let ut=null,Cl=null;function rr(t){const e=ut;return ut=t,Cl=t&&t.type.__scopeId||null,e}function Pd(t,e=ut,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Zl(-1);const i=rr(e),o=t(...r);return rr(i),s._d&&Zl(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Mi(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:g,ctx:E,inheritAttrs:N}=t;let S,_;const U=rr(t);try{if(n.shapeFlag&4){const W=r||s;S=yt(u.call(W,W,f,i,g,d,E)),_=l}else{const W=e;S=yt(W.length>1?W(i,{attrs:l,slots:a,emit:c}):W(i,null)),_=e.props?l:kd(l)}}catch(W){ss.length=0,gr(W,t,1),S=ot(Ot)}let z=S;if(_&&N!==!1){const W=Object.keys(_),{shapeFlag:ye}=z;W.length&&ye&(1|6)&&(o&&W.some(mi)&&(_=Ld(_,o)),z=An(z,_))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),S=z,rr(U),S}const kd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ks(n))&&((e||(e={}))[n]=t[n]);return e},Ld=(t,e)=>{const n={};for(const s in t)(!mi(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Md(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?_l(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==s[d]&&!Li(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?_l(s,o,c):!0:!!o;return!1}function _l(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Li(n,i))return!0}return!1}function Fd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Vd=t=>t.__isSuspense;function Ud(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Vp(t)}function ir(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function xt(t,e,n=!1){const s=Re||ut;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&G(e)?e.call(s.proxy):e}}function $d(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pl(()=>{t.isMounted=!0}),kl(()=>{t.isUnmounting=!0}),t}const it=[Function,Array],Bd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:it,onEnter:it,onAfterEnter:it,onEnterCancelled:it,onBeforeLeave:it,onLeave:it,onAfterLeave:it,onLeaveCancelled:it,onBeforeAppear:it,onAppear:it,onAfterAppear:it,onAppearCancelled:it},setup(t,{slots:e}){const n=_p(),s=$d();let r;return()=>{const i=e.default&&Dl(e.default(),!0);if(!i||!i.length)return;const o=ne(t),{mode:a}=o,l=i[0];if(s.isLeaving)return Vi(l);const c=Nl(l);if(!c)return Vi(l);const u=Fi(c,o,s,n);Ui(c,u);const f=n.subTree,d=f&&Nl(f);let g=!1;const{getTransitionKey:E}=c.type;if(E){const N=E();r===void 0?r=N:N!==r&&(r=N,g=!0)}if(d&&d.type!==Ot&&(!Xt(c,d)||g)){const N=Fi(d,o,s,n);if(Ui(d,N),a==="out-in")return s.isLeaving=!0,N.afterLeave=()=>{s.isLeaving=!1,n.update()},Vi(l);a==="in-out"&&c.type!==Ot&&(N.delayLeave=(S,_,U)=>{const z=Rl(s,d);z[String(d.key)]=d,S._leaveCb=()=>{_(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=U})}return l}}},Hd=Bd;function Rl(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Fi(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:E,onBeforeAppear:N,onAppear:S,onAfterAppear:_,onAppearCancelled:U}=e,z=String(t.key),W=Rl(n,t),ye=(J,Se)=>{J&&at(J,s,9,Se)},Ee={mode:i,persisted:o,beforeEnter(J){let Se=a;if(!n.isMounted)if(r)Se=N||a;else return;J._leaveCb&&J._leaveCb(!0);const ve=W[z];ve&&Xt(t,ve)&&ve.el._leaveCb&&ve.el._leaveCb(),ye(Se,[J])},enter(J){let Se=l,ve=c,Qe=u;if(!n.isMounted)if(r)Se=S||l,ve=_||c,Qe=U||u;else return;let Fe=!1;const He=J._enterCb=Rt=>{Fe||(Fe=!0,Rt?ye(Qe,[J]):ye(ve,[J]),Ee.delayedLeave&&Ee.delayedLeave(),J._enterCb=void 0)};Se?(Se(J,He),Se.length<=1&&He()):He()},leave(J,Se){const ve=String(t.key);if(J._enterCb&&J._enterCb(!0),n.isUnmounting)return Se();ye(f,[J]);let Qe=!1;const Fe=J._leaveCb=He=>{Qe||(Qe=!0,Se(),He?ye(E,[J]):ye(g,[J]),J._leaveCb=void 0,W[ve]===t&&delete W[ve])};W[ve]=t,d?(d(J,Fe),d.length<=1&&Fe()):Fe()},clone(J){return Fi(J,e,n,s)}};return Ee}function Vi(t){if(or(t))return t=An(t),t.children=null,t}function Nl(t){return or(t)?t.children?t.children[0]:void 0:t}function Ui(t,e){t.shapeFlag&6&&t.component?Ui(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dl(t,e=!1){let n=[],s=0;for(let r=0;r<t.length;r++){const i=t[r];i.type===mt?(i.patchFlag&128&&s++,n=n.concat(Dl(i.children,e))):(e||i.type!==Ot)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function xl(t){return G(t)?{setup:t,name:t.name}:t}const $i=t=>!!t.type.__asyncLoader,or=t=>t.type.__isKeepAlive;function jd(t,e){Ol(t,"a",e)}function qd(t,e){Ol(t,"da",e)}function Ol(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ar(e,s,n),n){let r=n.parent;for(;r&&r.parent;)or(r.parent.vnode)&&Kd(s,e,n,r),r=r.parent}}function Kd(t,e,n,s){const r=ar(e,t,s,!0);Ll(()=>{yi(s[e],r)},n)}function ar(t,e,n=Re,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Tn(),bn(n);const a=at(e,n,t,o);return Jt(),zt(),a});return s?r.unshift(i):r.push(i),i}}const It=t=>(e,n=Re)=>(!pr||t==="sp")&&ar(t,e,n),zd=It("bm"),Pl=It("m"),Gd=It("bu"),Wd=It("u"),kl=It("bum"),Ll=It("um"),Qd=It("sp"),Yd=It("rtg"),Xd=It("rtc");function Jd(t,e=Re){ar("ec",t,e)}let Bi=!0;function Zd(t){const e=Vl(t),n=t.proxy,s=t.ctx;Bi=!1,e.beforeCreate&&Ml(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:E,activated:N,deactivated:S,beforeDestroy:_,beforeUnmount:U,destroyed:z,unmounted:W,render:ye,renderTracked:Ee,renderTriggered:J,errorCaptured:Se,serverPrefetch:ve,expose:Qe,inheritAttrs:Fe,components:He,directives:Rt,filters:dn}=e;if(c&&ep(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const oe=o[ue];G(oe)&&(s[ue]=oe.bind(n))}if(r){const ue=r.call(n,n);_e(ue)&&(t.data=es(ue))}if(Bi=!0,i)for(const ue in i){const oe=i[ue],st=G(oe)?oe.bind(n,n):G(oe.get)?oe.get.bind(n,n):ct,gn=!G(oe)&&G(oe.set)?oe.set.bind(n):ct,Et=gt({get:st,set:gn});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>Et.value,set:ft=>Et.value=ft})}if(a)for(const ue in a)Fl(a[ue],s,n,ue);if(l){const ue=G(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(oe=>{ir(oe,ue[oe])})}u&&Ml(u,t,"c");function Ce(ue,oe){q(oe)?oe.forEach(st=>ue(st.bind(n))):oe&&ue(oe.bind(n))}if(Ce(zd,f),Ce(Pl,d),Ce(Gd,g),Ce(Wd,E),Ce(jd,N),Ce(qd,S),Ce(Jd,Se),Ce(Xd,Ee),Ce(Yd,J),Ce(kl,U),Ce(Ll,W),Ce(Qd,ve),q(Qe))if(Qe.length){const ue=t.exposed||(t.exposed={});Qe.forEach(oe=>{Object.defineProperty(ue,oe,{get:()=>n[oe],set:st=>n[oe]=st})})}else t.exposed||(t.exposed={});ye&&t.render===ct&&(t.render=ye),Fe!=null&&(t.inheritAttrs=Fe),He&&(t.components=He),Rt&&(t.directives=Rt)}function ep(t,e,n=ct,s=!1){q(t)&&(t=Hi(t));for(const r in t){const i=t[r];let o;_e(i)?"default"in i?o=xt(i.from||r,i.default,!0):o=xt(i.from||r):o=xt(i),je(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ml(t,e,n){at(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fl(t,e,n,s){const r=s.includes(".")?gc(n,s):()=>n[s];if(xe(t)){const i=e[t];G(i)&&yr(r,i)}else if(G(t))yr(r,t.bind(n));else if(_e(t))if(q(t))t.forEach(i=>Fl(i,e,n,s));else{const i=G(t.handler)?t.handler.bind(n):e[t.handler];G(i)&&yr(r,i,t)}}function Vl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>lr(l,c,o,!0)),lr(l,e,o)),i.set(e,l),l}function lr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&lr(t,i,n,!0),r&&r.forEach(o=>lr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=tp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tp={data:Ul,props:Gt,emits:Gt,methods:Gt,computed:Gt,beforeCreate:qe,created:qe,beforeMount:qe,mounted:qe,beforeUpdate:qe,updated:qe,beforeDestroy:qe,beforeUnmount:qe,destroyed:qe,unmounted:qe,activated:qe,deactivated:qe,errorCaptured:qe,serverPrefetch:qe,components:Gt,directives:Gt,watch:sp,provide:Ul,inject:np};function Ul(t,e){return e?t?function(){return Ve(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function np(t,e){return Gt(Hi(t),Hi(e))}function Hi(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function qe(t,e){return t?[...new Set([].concat(t,e))]:e}function Gt(t,e){return t?Ve(Ve(Object.create(null),t),e):e}function sp(t,e){if(!t)return e;if(!e)return t;const n=Ve(Object.create(null),t);for(const s in e)n[s]=qe(t[s],e[s]);return n}function rp(t,e,n,s=!1){const r={},i={};Ys(i,hr,1),t.propsDefaults=Object.create(null),$l(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Cd(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ip(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ne(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];const g=e[d];if(l)if(ee(i,d))g!==i[d]&&(i[d]=g,c=!0);else{const E=pt(d);r[E]=ji(l,a,E,g,t,!1)}else g!==i[d]&&(i[d]=g,c=!0)}}}else{$l(t,e,r,i)&&(c=!0);let u;for(const f in a)(!e||!ee(e,f)&&((u=wn(f))===f||!ee(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=ji(l,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!ee(e,f))&&(delete i[f],c=!0)}c&&Tt(t,"set","$attrs")}function $l(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gs(l))continue;const c=e[l];let u;r&&ee(r,u=pt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Li(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=ne(n),c=a||fe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ji(r,l,f,c[f],t,!ee(c,f))}}return o}function ji(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&G(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(bn(r),s=c[n]=l.call(null,e),Jt())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===wn(n))&&(s=!0))}return s}function Bl(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!G(t)){const u=f=>{l=!0;const[d,g]=Bl(f,e,!0);Ve(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return s.set(t,yn),yn;if(q(i))for(let u=0;u<i.length;u++){const f=pt(i[u]);Hl(f)&&(o[f]=fe)}else if(i)for(const u in i){const f=pt(u);if(Hl(f)){const d=i[u],g=o[f]=q(d)||G(d)?{type:d}:d;if(g){const E=Kl(Boolean,g.type),N=Kl(String,g.type);g[0]=E>-1,g[1]=N<0||E<N,(E>-1||ee(g,"default"))&&a.push(f)}}}const c=[o,a];return s.set(t,c),c}function Hl(t){return t[0]!=="$"}function jl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ql(t,e){return jl(t)===jl(e)}function Kl(t,e){return q(e)?e.findIndex(n=>ql(n,t)):G(e)&&ql(e,t)?0:-1}const zl=t=>t[0]==="_"||t==="$stable",qi=t=>q(t)?t.map(yt):[yt(t)],op=(t,e,n)=>{const s=Pd((...r)=>qi(e(...r)),n);return s._c=!1,s},Gl=(t,e,n)=>{const s=t._ctx;for(const r in t){if(zl(r))continue;const i=t[r];if(G(i))e[r]=op(r,i,s);else if(i!=null){const o=qi(i);e[r]=()=>o}}},Wl=(t,e)=>{const n=qi(e);t.slots.default=()=>n},ap=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),Ys(e,"_",n)):Gl(e,t.slots={})}else t.slots={},e&&Wl(t,e);Ys(t.slots,hr,1)},lp=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=fe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ve(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Gl(e,r)),o=e}else e&&(Wl(t,e),o={default:1});if(i)for(const a in r)!zl(a)&&!(a in o)&&delete r[a]};function Wt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Tn(),at(l,n,8,[t.el,a,t,e]),zt())}}function Ql(){return{app:null,config:{isNativeTag:qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cp=0;function up(t,e){return function(s,r=null){r!=null&&!_e(r)&&(r=null);const i=Ql(),o=new Set;let a=!1;const l=i.app={_uid:cp++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:$p,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const d=ot(s,r);return d.appContext=i,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Yi(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Ki(t,e,n,s,r=!1){if(q(t)){t.forEach((d,g)=>Ki(d,e&&(q(e)?e[g]:e),n,s,r));return}if($i(s)&&!r)return;const i=s.shapeFlag&4?Yi(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===fe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(xe(c)?(u[c]=null,ee(f,c)&&(f[c]=null)):je(c)&&(c.value=null)),G(l))kt(l,a,12,[o,u]);else{const d=xe(l),g=je(l);if(d||g){const E=()=>{if(t.f){const N=d?u[l]:l.value;r?q(N)&&yi(N,i):q(N)?N.includes(i)||N.push(i):d?u[l]=[i]:(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ee(f,l)&&(f[l]=o)):je(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Ye(E,n)):E()}}}const Ye=Ud;function hp(t){return fp(t)}function fp(t,e){const n=Xf();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=ct,cloneNode:E,insertStaticContent:N}=t,S=(h,p,m,w=null,v=null,A=null,R=!1,I=null,b=!!p.dynamicChildren)=>{if(h===p)return;h&&!Xt(h,p)&&(w=L(h),rt(h,v,A,!0),h=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:T,ref:M,shapeFlag:P}=p;switch(T){case zi:_(h,p,m,w);break;case Ot:U(h,p,m,w);break;case cr:h==null&&z(p,m,w,R);break;case mt:Rt(h,p,m,w,v,A,R,I,b);break;default:P&1?Ee(h,p,m,w,v,A,R,I,b):P&6?dn(h,p,m,w,v,A,R,I,b):(P&64||P&128)&&T.process(h,p,m,w,v,A,R,I,b,he)}M!=null&&v&&Ki(M,h&&h.ref,A,p||h,!p)},_=(h,p,m,w)=>{if(h==null)s(p.el=a(p.children),m,w);else{const v=p.el=h.el;p.children!==h.children&&c(v,p.children)}},U=(h,p,m,w)=>{h==null?s(p.el=l(p.children||""),m,w):p.el=h.el},z=(h,p,m,w)=>{[h.el,h.anchor]=N(h.children,p,m,w)},W=({el:h,anchor:p},m,w)=>{let v;for(;h&&h!==p;)v=d(h),s(h,m,w),h=v;s(p,m,w)},ye=({el:h,anchor:p})=>{let m;for(;h&&h!==p;)m=d(h),r(h),h=m;r(p)},Ee=(h,p,m,w,v,A,R,I,b)=>{R=R||p.type==="svg",h==null?J(p,m,w,v,A,R,I,b):Qe(h,p,v,A,R,I,b)},J=(h,p,m,w,v,A,R,I)=>{let b,T;const{type:M,props:P,shapeFlag:F,transition:H,patchFlag:Z,dirs:pe}=h;if(h.el&&E!==void 0&&Z===-1)b=h.el=E(h.el);else{if(b=h.el=o(h.type,A,P&&P.is,P),F&8?u(b,h.children):F&16&&ve(h.children,b,null,w,v,A&&M!=="foreignObject",R,I),pe&&Wt(h,null,w,"created"),P){for(const de in P)de!=="value"&&!Gs(de)&&i(b,de,null,P[de],A,h.children,w,v,C);"value"in P&&i(b,"value",null,P.value),(T=P.onVnodeBeforeMount)&&vt(T,w,h)}Se(b,h,h.scopeId,R,w)}pe&&Wt(h,null,w,"beforeMount");const le=(!v||v&&!v.pendingBranch)&&H&&!H.persisted;le&&H.beforeEnter(b),s(b,p,m),((T=P&&P.onVnodeMounted)||le||pe)&&Ye(()=>{T&&vt(T,w,h),le&&H.enter(b),pe&&Wt(h,null,w,"mounted")},v)},Se=(h,p,m,w,v)=>{if(m&&g(h,m),w)for(let A=0;A<w.length;A++)g(h,w[A]);if(v){let A=v.subTree;if(p===A){const R=v.vnode;Se(h,R,R.scopeId,R.slotScopeIds,v.parent)}}},ve=(h,p,m,w,v,A,R,I,b=0)=>{for(let T=b;T<h.length;T++){const M=h[T]=I?Pt(h[T]):yt(h[T]);S(null,M,p,m,w,v,A,R,I)}},Qe=(h,p,m,w,v,A,R)=>{const I=p.el=h.el;let{patchFlag:b,dynamicChildren:T,dirs:M}=p;b|=h.patchFlag&16;const P=h.props||fe,F=p.props||fe;let H;m&&Qt(m,!1),(H=F.onVnodeBeforeUpdate)&&vt(H,m,p,h),M&&Wt(p,h,m,"beforeUpdate"),m&&Qt(m,!0);const Z=v&&p.type!=="foreignObject";if(T?Fe(h.dynamicChildren,T,I,m,w,Z,A):R||st(h,p,I,null,m,w,Z,A,!1),b>0){if(b&16)He(I,p,P,F,m,w,v);else if(b&2&&P.class!==F.class&&i(I,"class",null,F.class,v),b&4&&i(I,"style",P.style,F.style,v),b&8){const pe=p.dynamicProps;for(let le=0;le<pe.length;le++){const de=pe[le],lt=P[de],mn=F[de];(mn!==lt||de==="value")&&i(I,de,lt,mn,v,h.children,m,w,C)}}b&1&&h.children!==p.children&&u(I,p.children)}else!R&&T==null&&He(I,p,P,F,m,w,v);((H=F.onVnodeUpdated)||M)&&Ye(()=>{H&&vt(H,m,p,h),M&&Wt(p,h,m,"updated")},w)},Fe=(h,p,m,w,v,A,R)=>{for(let I=0;I<p.length;I++){const b=h[I],T=p[I],M=b.el&&(b.type===mt||!Xt(b,T)||b.shapeFlag&(6|64))?f(b.el):m;S(b,T,M,null,w,v,A,R,!0)}},He=(h,p,m,w,v,A,R)=>{if(m!==w){for(const I in w){if(Gs(I))continue;const b=w[I],T=m[I];b!==T&&I!=="value"&&i(h,I,T,b,R,p.children,v,A,C)}if(m!==fe)for(const I in m)!Gs(I)&&!(I in w)&&i(h,I,m[I],null,R,p.children,v,A,C);"value"in w&&i(h,"value",m.value,w.value)}},Rt=(h,p,m,w,v,A,R,I,b)=>{const T=p.el=h?h.el:a(""),M=p.anchor=h?h.anchor:a("");let{patchFlag:P,dynamicChildren:F,slotScopeIds:H}=p;H&&(I=I?I.concat(H):H),h==null?(s(T,m,w),s(M,m,w),ve(p.children,m,M,v,A,R,I,b)):P>0&&P&64&&F&&h.dynamicChildren?(Fe(h.dynamicChildren,F,m,v,A,R,I),(p.key!=null||v&&p===v.subTree)&&Yl(h,p,!0)):st(h,p,m,M,v,A,R,I,b)},dn=(h,p,m,w,v,A,R,I,b)=>{p.slotScopeIds=I,h==null?p.shapeFlag&512?v.ctx.activate(p,m,w,R,b):pn(p,m,w,v,A,R,b):Ce(h,p,b)},pn=(h,p,m,w,v,A,R)=>{const I=h.component=Cp(h,w,v);if(or(h)&&(I.ctx.renderer=he),Rp(I),I.asyncDep){if(v&&v.registerDep(I,ue),!h.el){const b=I.subTree=ot(Ot);U(null,b,p,m)}return}ue(I,h,p,m,v,A,R)},Ce=(h,p,m)=>{const w=p.component=h.component;if(Md(h,p,m))if(w.asyncDep&&!w.asyncResolved){oe(w,p,m);return}else w.next=p,Mp(w.update),w.update();else p.component=h.component,p.el=h.el,w.vnode=p},ue=(h,p,m,w,v,A,R)=>{const I=()=>{if(h.isMounted){let{next:M,bu:P,u:F,parent:H,vnode:Z}=h,pe=M,le;Qt(h,!1),M?(M.el=Z.el,oe(h,M,R)):M=Z,P&&Ti(P),(le=M.props&&M.props.onVnodeBeforeUpdate)&&vt(le,H,M,Z),Qt(h,!0);const de=Mi(h),lt=h.subTree;h.subTree=de,S(lt,de,f(lt.el),L(lt),h,v,A),M.el=de.el,pe===null&&Fd(h,de.el),F&&Ye(F,v),(le=M.props&&M.props.onVnodeUpdated)&&Ye(()=>vt(le,H,M,Z),v)}else{let M;const{el:P,props:F}=p,{bm:H,m:Z,parent:pe}=h,le=$i(p);if(Qt(h,!1),H&&Ti(H),!le&&(M=F&&F.onVnodeBeforeMount)&&vt(M,pe,p),Qt(h,!0),P&&K){const de=()=>{h.subTree=Mi(h),K(P,h.subTree,h,v,null)};le?p.type.__asyncLoader().then(()=>!h.isUnmounted&&de()):de()}else{const de=h.subTree=Mi(h);S(null,de,m,w,h,v,A),p.el=de.el}if(Z&&Ye(Z,v),!le&&(M=F&&F.onVnodeMounted)){const de=p;Ye(()=>vt(M,pe,de),v)}p.shapeFlag&256&&h.a&&Ye(h.a,v),h.isMounted=!0,p=m=w=null}},b=h.effect=new Ci(I,()=>lc(h.update),h.scope),T=h.update=b.run.bind(b);T.id=h.uid,Qt(h,!0),T()},oe=(h,p,m)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,ip(h,p.props,w,m),lp(h,p.children,m),Tn(),eo(void 0,h.update),zt()},st=(h,p,m,w,v,A,R,I,b=!1)=>{const T=h&&h.children,M=h?h.shapeFlag:0,P=p.children,{patchFlag:F,shapeFlag:H}=p;if(F>0){if(F&128){Et(T,P,m,w,v,A,R,I,b);return}else if(F&256){gn(T,P,m,w,v,A,R,I,b);return}}H&8?(M&16&&C(T,v,A),P!==T&&u(m,P)):M&16?H&16?Et(T,P,m,w,v,A,R,I,b):C(T,v,A,!0):(M&8&&u(m,""),H&16&&ve(P,m,w,v,A,R,I,b))},gn=(h,p,m,w,v,A,R,I,b)=>{h=h||yn,p=p||yn;const T=h.length,M=p.length,P=Math.min(T,M);let F;for(F=0;F<P;F++){const H=p[F]=b?Pt(p[F]):yt(p[F]);S(h[F],H,m,null,v,A,R,I,b)}T>M?C(h,v,A,!0,!1,P):ve(p,m,w,v,A,R,I,b,P)},Et=(h,p,m,w,v,A,R,I,b)=>{let T=0;const M=p.length;let P=h.length-1,F=M-1;for(;T<=P&&T<=F;){const H=h[T],Z=p[T]=b?Pt(p[T]):yt(p[T]);if(Xt(H,Z))S(H,Z,m,null,v,A,R,I,b);else break;T++}for(;T<=P&&T<=F;){const H=h[P],Z=p[F]=b?Pt(p[F]):yt(p[F]);if(Xt(H,Z))S(H,Z,m,null,v,A,R,I,b);else break;P--,F--}if(T>P){if(T<=F){const H=F+1,Z=H<M?p[H].el:w;for(;T<=F;)S(null,p[T]=b?Pt(p[T]):yt(p[T]),m,Z,v,A,R,I,b),T++}}else if(T>F)for(;T<=P;)rt(h[T],v,A,!0),T++;else{const H=T,Z=T,pe=new Map;for(T=Z;T<=F;T++){const Ze=p[T]=b?Pt(p[T]):yt(p[T]);Ze.key!=null&&pe.set(Ze.key,T)}let le,de=0;const lt=F-Z+1;let mn=!1,za=0;const Yn=new Array(lt);for(T=0;T<lt;T++)Yn[T]=0;for(T=H;T<=P;T++){const Ze=h[T];if(de>=lt){rt(Ze,v,A,!0);continue}let dt;if(Ze.key!=null)dt=pe.get(Ze.key);else for(le=Z;le<=F;le++)if(Yn[le-Z]===0&&Xt(Ze,p[le])){dt=le;break}dt===void 0?rt(Ze,v,A,!0):(Yn[dt-Z]=T+1,dt>=za?za=dt:mn=!0,S(Ze,p[dt],m,null,v,A,R,I,b),de++)}const Ga=mn?dp(Yn):yn;for(le=Ga.length-1,T=lt-1;T>=0;T--){const Ze=Z+T,dt=p[Ze],Wa=Ze+1<M?p[Ze+1].el:w;Yn[T]===0?S(null,dt,m,Wa,v,A,R,I,b):mn&&(le<0||T!==Ga[le]?ft(dt,m,Wa,2):le--)}}},ft=(h,p,m,w,v=null)=>{const{el:A,type:R,transition:I,children:b,shapeFlag:T}=h;if(T&6){ft(h.component.subTree,p,m,w);return}if(T&128){h.suspense.move(p,m,w);return}if(T&64){R.move(h,p,m,he);return}if(R===mt){s(A,p,m);for(let P=0;P<b.length;P++)ft(b[P],p,m,w);s(h.anchor,p,m);return}if(R===cr){W(h,p,m);return}if(w!==2&&T&1&&I)if(w===0)I.beforeEnter(A),s(A,p,m),Ye(()=>I.enter(A),v);else{const{leave:P,delayLeave:F,afterLeave:H}=I,Z=()=>s(A,p,m),pe=()=>{P(A,()=>{Z(),H&&H()})};F?F(A,Z,pe):pe()}else s(A,p,m)},rt=(h,p,m,w=!1,v=!1)=>{const{type:A,props:R,ref:I,children:b,dynamicChildren:T,shapeFlag:M,patchFlag:P,dirs:F}=h;if(I!=null&&Ki(I,null,m,h,!0),M&256){p.ctx.deactivate(h);return}const H=M&1&&F,Z=!$i(h);let pe;if(Z&&(pe=R&&R.onVnodeBeforeUnmount)&&vt(pe,p,h),M&6)k(h.component,m,w);else{if(M&128){h.suspense.unmount(m,w);return}H&&Wt(h,null,p,"beforeUnmount"),M&64?h.type.remove(h,p,m,v,he,w):T&&(A!==mt||P>0&&P&64)?C(T,p,m,!1,!0):(A===mt&&P&(128|256)||!v&&M&16)&&C(b,p,m),w&&fi(h)}(Z&&(pe=R&&R.onVnodeUnmounted)||H)&&Ye(()=>{pe&&vt(pe,p,h),H&&Wt(h,null,p,"unmounted")},m)},fi=h=>{const{type:p,el:m,anchor:w,transition:v}=h;if(p===mt){y(m,w);return}if(p===cr){ye(h);return}const A=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,b=()=>R(m,A);I?I(h.el,A,b):b()}else A()},y=(h,p)=>{let m;for(;h!==p;)m=d(h),r(h),h=m;r(p)},k=(h,p,m)=>{const{bum:w,scope:v,update:A,subTree:R,um:I}=h;w&&Ti(w),v.stop(),A&&(A.active=!1,rt(R,h,p,m)),I&&Ye(I,p),Ye(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(h,p,m,w=!1,v=!1,A=0)=>{for(let R=A;R<h.length;R++)rt(h[R],p,m,w,v)},L=h=>h.shapeFlag&6?L(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),ae=(h,p,m)=>{h==null?p._vnode&&rt(p._vnode,null,null,!0):S(p._vnode||null,h,p,null,null,null,m),hc(),p._vnode=h},he={p:S,um:rt,m:ft,r:fi,mt:pn,mc:ve,pc:st,pbc:Fe,n:L,o:t};let Q,K;return e&&([Q,K]=e(he)),{render:ae,hydrate:Q,createApp:up(ae,Q)}}function Qt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Yl(t,e,n=!1){const s=t.children,r=e.children;if(q(s)&&q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Pt(r[i]),a.el=o.el),n||Yl(o,a))}}function dp(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const pp=t=>t.__isTeleport,Xl="components";function WE(t,e){return mp(Xl,t,!0,e)||t}const gp=Symbol();function mp(t,e,n=!0,s=!1){const r=ut||Re;if(r){const i=r.type;if(t===Xl){const a=Op(i);if(a&&(a===e||a===pt(e)||a===Qs(pt(e))))return i}const o=Jl(r[t]||i[t],e)||Jl(r.appContext[t],e);return!o&&s?i:o}}function Jl(t,e){return t&&(t[e]||t[pt(e)]||t[Qs(pt(e))])}const mt=Symbol(void 0),zi=Symbol(void 0),Ot=Symbol(void 0),cr=Symbol(void 0),ss=[];let Yt=null;function QE(t=!1){ss.push(Yt=t?null:[])}function yp(){ss.pop(),Yt=ss[ss.length-1]||null}let ur=1;function Zl(t){ur+=t}function vp(t){return t.dynamicChildren=ur>0?Yt||yn:null,yp(),ur>0&&Yt&&Yt.push(t),t}function YE(t,e,n,s,r,i){return vp(tc(t,e,n,s,r,i,!0))}function Gi(t){return t?t.__v_isVNode===!0:!1}function Xt(t,e){return t.type===e.type&&t.key===e.key}const hr="__vInternal",ec=({key:t})=>t!=null?t:null,fr=({ref:t,ref_key:e,ref_for:n})=>t!=null?xe(t)||je(t)||G(t)?{i:ut,r:t,k:e,f:!!n}:t:null;function tc(t,e=null,n=null,s=0,r=null,i=t===mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ec(e),ref:e&&fr(e),scopeId:Cl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Wi(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),ur>0&&!o&&Yt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Yt.push(l),l}const ot=wp;function wp(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===gp)&&(t=Ot),Gi(t)){const a=An(t,e,!0);return n&&Wi(a,n),a}if(Pp(t)&&(t=t.__vccOpts),e){e=Ep(e);let{class:a,style:l}=e;a&&!xe(a)&&(e.class=gi(a)),_e(l)&&(wl(l)&&!q(l)&&(l=Ve({},l)),e.style=pi(l))}const o=xe(t)?1:Vd(t)?128:pp(t)?64:_e(t)?4:G(t)?2:0;return tc(t,e,n,s,r,o,i,!0)}function Ep(t){return t?wl(t)||hr in t?Ve({},t):t:null}function An(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Ip(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ec(a),ref:e&&e.ref?n&&r?q(r)?r.concat(fr(e)):[r,fr(e)]:fr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&An(t.ssContent),ssFallback:t.ssFallback&&An(t.ssFallback),el:t.el,anchor:t.anchor}}function Tp(t=" ",e=0){return ot(zi,null,t,e)}function XE(t,e){const n=ot(cr,null,t);return n.staticCount=e,n}function yt(t){return t==null||typeof t=="boolean"?ot(Ot):q(t)?ot(mt,null,t.slice()):typeof t=="object"?Pt(t):ot(zi,null,String(t))}function Pt(t){return t.el===null||t.memo?t:An(t)}function Wi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&(1|64)){const r=e.default;r&&(r._c&&(r._d=!1),Wi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(hr in e)?e._ctx=ut:r===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),s&64?(n=16,e=[Tp(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ip(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=gi([e.class,s.class]));else if(r==="style")e.style=pi([e.style,s.style]);else if(Ks(r)){const i=e[r],o=s[r];i!==o&&!(q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function vt(t,e,n,s=null){at(t,e,7,[n,s])}function JE(t,e,n,s){let r;const i=n&&n[s];if(q(t)||xe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Qi=t=>t?nc(t)?Yi(t)||t.proxy:Qi(t.parent):null,dr=Ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qi(t.parent),$root:t=>Qi(t.root),$emit:t=>t.emit,$options:t=>Vl(t),$forceUpdate:t=>()=>lc(t.update),$nextTick:t=>ac.bind(t.proxy),$watch:t=>Up.bind(t)}),Ap={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==fe&&ee(s,e))return o[e]=1,s[e];if(r!==fe&&ee(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ee(c,e))return o[e]=3,i[e];if(n!==fe&&ee(n,e))return o[e]=4,n[e];Bi&&(o[e]=0)}}const u=dr[e];let f,d;if(u)return e==="$attrs"&&et(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==fe&&ee(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ee(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;if(r!==fe&&ee(r,e))r[e]=n;else if(s!==fe&&ee(s,e))s[e]=n;else if(ee(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==fe&&ee(t,o)||e!==fe&&ee(e,o)||(a=i[0])&&ee(a,o)||ee(s,o)||ee(dr,o)||ee(r.config.globalProperties,o)}},bp=Ql();let Sp=0;function Cp(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||bp,i={uid:Sp++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bl(s,r),emitsOptions:Sl(s,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:s.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Od.bind(null,i),t.ce&&t.ce(i),i}let Re=null;const _p=()=>Re||ut,bn=t=>{Re=t,t.scope.on()},Jt=()=>{Re&&Re.scope.off(),Re=null};function nc(t){return t.vnode.shapeFlag&4}let pr=!1;function Rp(t,e=!1){pr=e;const{props:n,children:s}=t.vnode,r=nc(t);rp(t,n,r,e),ap(t,s);const i=r?Np(t,e):void 0;return pr=!1,i}function Np(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=El(new Proxy(t.ctx,Ap));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?xp(t):null;bn(t),Tn();const i=kt(s,t,0,[t.props,r]);if(zt(),Jt(),Ja(i)){if(i.then(Jt,Jt),e)return i.then(o=>{sc(t,o,e)}).catch(o=>{gr(o,t,0)});t.asyncDep=i}else sc(t,i,e)}else ic(t,e)}function sc(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=bl(e)),ic(t,n)}let rc;function ic(t,e,n){const s=t.type;if(!t.render){if(!e&&rc&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ve(Ve({isCustomElement:i,delimiters:a},o),l);s.render=rc(r,c)}}t.render=s.render||ct}bn(t),Tn(),Zd(t),zt(),Jt()}function Dp(t){return new Proxy(t.attrs,{get(e,n){return et(t,"get","$attrs"),e[n]}})}function xp(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Dp(t))},slots:t.slots,emit:t.emit,expose:e}}function Yi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(bl(El(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in dr)return dr[n](t)}}))}function Op(t){return G(t)&&t.displayName||t.name}function Pp(t){return G(t)&&"__vccOpts"in t}function kt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){gr(i,e,n)}return r}function at(t,e,n,s){if(G(t)){const i=kt(t,e,n,s);return i&&Ja(i)&&i.catch(o=>{gr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(at(t[i],e,n,s));return r}function gr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){kt(l,null,10,[t,o,a]);return}}kp(t,n,r,s)}function kp(t,e,n,s=!0){console.error(t)}let mr=!1,Xi=!1;const tt=[];let At=0;const rs=[];let is=null,Sn=0;const os=[];let Lt=null,Cn=0;const oc=Promise.resolve();let Ji=null,Zi=null;function ac(t){const e=Ji||oc;return t?e.then(this?t.bind(this):t):e}function Lp(t){let e=At+1,n=tt.length;for(;e<n;){const s=e+n>>>1;as(tt[s])<t?e=s+1:n=s}return e}function lc(t){(!tt.length||!tt.includes(t,mr&&t.allowRecurse?At+1:At))&&t!==Zi&&(t.id==null?tt.push(t):tt.splice(Lp(t.id),0,t),cc())}function cc(){!mr&&!Xi&&(Xi=!0,Ji=oc.then(fc))}function Mp(t){const e=tt.indexOf(t);e>At&&tt.splice(e,1)}function uc(t,e,n,s){q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),cc()}function Fp(t){uc(t,is,rs,Sn)}function Vp(t){uc(t,Lt,os,Cn)}function eo(t,e=null){if(rs.length){for(Zi=e,is=[...new Set(rs)],rs.length=0,Sn=0;Sn<is.length;Sn++)is[Sn]();is=null,Sn=0,Zi=null,eo(t,e)}}function hc(t){if(os.length){const e=[...new Set(os)];if(os.length=0,Lt){Lt.push(...e);return}for(Lt=e,Lt.sort((n,s)=>as(n)-as(s)),Cn=0;Cn<Lt.length;Cn++)Lt[Cn]();Lt=null,Cn=0}}const as=t=>t.id==null?1/0:t.id;function fc(t){Xi=!1,mr=!0,eo(t),tt.sort((n,s)=>as(n)-as(s));const e=ct;try{for(At=0;At<tt.length;At++){const n=tt[At];n&&n.active!==!1&&kt(n,null,14)}}finally{At=0,tt.length=0,hc(),mr=!1,Ji=null,(tt.length||rs.length||os.length)&&fc(t)}}const dc={};function yr(t,e,n){return pc(t,e,n)}function pc(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=fe){const a=Re;let l,c=!1,u=!1;if(je(t)?(l=()=>t.value,c=!!t._shallow):In(t)?(l=()=>t,s=!0):q(t)?(u=!0,c=t.some(In),l=()=>t.map(_=>{if(je(_))return _.value;if(In(_))return _n(_);if(G(_))return kt(_,a,2)})):G(t)?e?l=()=>kt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),at(t,a,3,[d])}:l=ct,e&&s){const _=l;l=()=>_n(_())}let f,d=_=>{f=S.onStop=()=>{kt(_,a,4)}};if(pr)return d=ct,e?n&&at(e,a,3,[l(),u?[]:void 0,d]):l(),ct;let g=u?[]:dc;const E=()=>{if(!!S.active)if(e){const _=S.run();(s||c||(u?_.some((U,z)=>Xn(U,g[z])):Xn(_,g)))&&(f&&f(),at(e,a,3,[_,g===dc?void 0:g,d]),g=_)}else S.run()};E.allowRecurse=!!e;let N;r==="sync"?N=E:r==="post"?N=()=>Ye(E,a&&a.suspense):N=()=>{!a||a.isMounted?Fp(E):E()};const S=new Ci(l,N);return e?n?E():g=S.run():r==="post"?Ye(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&yi(a.scope.effects,S)}}function Up(t,e,n){const s=this.proxy,r=xe(t)?t.includes(".")?gc(s,t):()=>s[t]:t.bind(s,s);let i;G(e)?i=e:(i=e.handler,n=e);const o=Re;bn(this);const a=pc(r,i.bind(s),n);return o?bn(o):Jt(),a}function gc(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function _n(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),je(t))_n(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)_n(t[n],e);else if(Xa(t)||vn(t))t.forEach(n=>{_n(n,e)});else if(el(t))for(const n in t)_n(t[n],e);return t}function mc(t,e,n){const s=arguments.length;return s===2?_e(e)&&!q(e)?Gi(e)?ot(t,null,[e]):ot(t,e):ot(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Gi(n)&&(n=[n]),ot(t,e,n))}const $p="3.2.26",Bp="http://www.w3.org/2000/svg",Rn=typeof document!="undefined"?document:null,yc=new Map,Hp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Rn.createElementNS(Bp,t):Rn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s){const r=n?n.previousSibling:e.lastChild;let i=yc.get(t);if(!i){const o=Rn.createElement("template");if(o.innerHTML=s?`<svg>${t}</svg>`:t,i=o.content,s){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}yc.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function jp(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function qp(t,e,n){const s=t.style,r=xe(n);if(n&&!r){for(const i in n)to(s,i,n[i]);if(e&&!xe(e))for(const i in e)n[i]==null&&to(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const vc=/\s*!important$/;function to(t,e,n){if(q(n))n.forEach(s=>to(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=Kp(t,e);vc.test(n)?t.setProperty(wn(s),n.replace(vc,""),"important"):t[s]=n}}const wc=["Webkit","Moz","ms"],no={};function Kp(t,e){const n=no[e];if(n)return n;let s=pt(e);if(s!=="filter"&&s in t)return no[e]=s;s=Qs(s);for(let r=0;r<wc.length;r++){const i=wc[r]+s;if(i in t)return no[e]=i}return e}const Ec="http://www.w3.org/1999/xlink";function zp(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ec,e.slice(6,e.length)):t.setAttributeNS(Ec,e,n);else{const i=$f(e);n==null||i&&!Qa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Gp(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Qa(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let vr=Date.now,Tc=!1;if(typeof window!="undefined"){vr()>document.createEvent("Event").timeStamp&&(vr=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Tc=!!(t&&Number(t[1])<=53)}let so=0;const Wp=Promise.resolve(),Qp=()=>{so=0},Yp=()=>so||(Wp.then(Qp),so=vr());function Xp(t,e,n,s){t.addEventListener(e,n,s)}function Jp(t,e,n,s){t.removeEventListener(e,n,s)}function Zp(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=eg(e);if(s){const c=i[e]=tg(s,r);Xp(t,a,c,l)}else o&&(Jp(t,a,o,l),i[e]=void 0)}}const Ic=/(?:Once|Passive|Capture)$/;function eg(t){let e;if(Ic.test(t)){e={};let n;for(;n=t.match(Ic);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[wn(t.slice(2)),e]}function tg(t,e){const n=s=>{const r=s.timeStamp||vr();(Tc||r>=n.attached-1)&&at(ng(s,n.value),e,5,[s])};return n.value=t,n.attached=Yp(),n}function ng(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s(r))}else return e}const Ac=/^on[a-z]/,sg=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?jp(t,s,r):e==="style"?qp(t,n,s):Ks(e)?mi(e)||Zp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rg(t,e,s,r))?Gp(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),zp(t,e,s,r))};function rg(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ac.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ac.test(e)&&xe(n)?!1:e in t}const ig={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Hd.props;const og=Ve({patchProp:sg},Hp);let bc;function ag(){return bc||(bc=hp(og))}const ZE=(...t)=>{const e=ag().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=lg(s);if(!r)return;const i=e._component;!G(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function lg(t){return xe(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Sc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Nn=t=>Sc?Symbol(t):"_vr_"+t,cg=Nn("rvlm"),Cc=Nn("rvd"),ro=Nn("r"),_c=Nn("rl"),io=Nn("rvl"),Dn=typeof window!="undefined";function ug(t){return t.__esModule||Sc&&t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function oo(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const ls=()=>{},hg=/\/$/,fg=t=>t.replace(hg,"");function ao(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=mg(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function dg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pg(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&xn(e.matched[s],n.matched[r])&&Nc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Nc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gg(t[n],e[n]))return!1;return!0}function gg(t,e){return Array.isArray(t)?Dc(t,e):Array.isArray(e)?Dc(e,t):t===e}function Dc(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function mg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var cs;(function(t){t.pop="pop",t.push="push"})(cs||(cs={}));var us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(us||(us={}));function yg(t){if(!t)if(Dn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fg(t)}const vg=/^[^#]+#/;function wg(t,e){return t.replace(vg,"#")+e}function Eg(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const wr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Tg(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Eg(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xc(t,e){return(history.state?history.state.position-e:-1)+t}const lo=new Map;function Ig(t,e){lo.set(t,e)}function Ag(t){const e=lo.get(t);return lo.delete(t),e}let bg=()=>location.protocol+"//"+location.host;function Oc(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Rc(l,"")}return Rc(n,t)+s+r}function Sg(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Oc(t,location),E=n.value,N=e.value;let S=0;if(d){if(n.value=g,e.value=d,o&&o===E){o=null;return}S=N?d.position-N.position:0}else s(g);r.forEach(_=>{_(n.value,E,{delta:S,type:cs.pop,direction:S?S>0?us.forward:us.back:us.unknown})})};function l(){o=n.value}function c(d){r.push(d);const g=()=>{const E=r.indexOf(d);E>-1&&r.splice(E,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(ce({},d.state,{scroll:wr()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Pc(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?wr():null}}function Cg(t){const{history:e,location:n}=window,s={value:Oc(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:bg()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(l,c){const u=ce({},e.state,Pc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=ce({},r.value,e.state,{forward:l,scroll:wr()});i(u.current,u,!0);const f=ce({},Pc(s.value,l,null),{position:u.position+1},c);i(l,f,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function _g(t){t=yg(t);const e=Cg(t),n=Sg(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ce({location:"",base:t,go:s,createHref:wg.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function e0(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),_g(t)}function Rg(t){return typeof t=="string"||t&&typeof t=="object"}function kc(t){return typeof t=="string"||typeof t=="symbol"}const Mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lc=Nn("nf");var Mc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mc||(Mc={}));function On(t,e){return ce(new Error,{type:t,[Lc]:!0},e)}function Zt(t,e){return t instanceof Error&&Lc in t&&(e==null||!!(t.type&e))}const Fc="[^/]+?",Ng={sensitive:!1,strict:!1,start:!0,end:!0},Dg=/[.+*?^${}()[\]/\\]/g;function xg(t,e){const n=ce({},Ng,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(Dg,"\\$&"),g+=40;else if(d.type===1){const{value:E,repeatable:N,optional:S,regexp:_}=d;i.push({name:E,repeatable:N,optional:S});const U=_||Fc;if(U!==Fc){g+=10;try{new RegExp(`(${U})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${E}" (${U}): `+W.message)}}let z=N?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;f||(z=S&&c.length<2?`(?:/${z})`:"/"+z),S&&(z+="?"),r+=z,g+=20,S&&(g+=-8),N&&(g+=-20),U===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",E=i[d-1];f[E.name]=g&&E.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:E,repeatable:N,optional:S}=g,_=E in c?c[E]:"";if(Array.isArray(_)&&!N)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const U=Array.isArray(_)?_.join("/"):_;if(!U)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);u+=U}}return u}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Og(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Pg(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Og(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const kg={type:0,value:""},Lg=/[a-zA-Z0-9_]/;function Mg(t){if(!t)return[[]];if(t==="/")return[[kg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function f(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:Lg.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Fg(t,e,n){const s=xg(Mg(t.path),n),r=ce(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Vg(t,e){const n=[],s=new Map;e=Uc({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,f,d){const g=!d,E=$g(u);E.aliasOf=d&&d.record;const N=Uc(e,u),S=[E];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of z)S.push(ce({},E,{components:d?d.record.components:E.components,path:W,aliasOf:d?d.record:E}))}let _,U;for(const z of S){const{path:W}=z;if(f&&W[0]!=="/"){const ye=f.record.path,Ee=ye[ye.length-1]==="/"?"":"/";z.path=f.record.path+(W&&Ee+W)}if(_=Fg(z,f,N),d?d.alias.push(_):(U=U||_,U!==_&&U.alias.push(_),g&&u.name&&!Vc(_)&&o(u.name)),"children"in E){const ye=E.children;for(let Ee=0;Ee<ye.length;Ee++)i(ye[Ee],_,d&&d.children[Ee])}d=d||_,l(_)}return U?()=>{o(U)}:ls}function o(u){if(kc(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&Pg(u,n[f])>=0;)f++;n.splice(f,0,u),u.record.name&&!Vc(u)&&s.set(u.record.name,u)}function c(u,f){let d,g={},E,N;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw On(1,{location:u});N=d.record.name,g=ce(Ug(f.params,d.keys.filter(U=>!U.optional).map(U=>U.name)),u.params),E=d.stringify(g)}else if("path"in u)E=u.path,d=n.find(U=>U.re.test(E)),d&&(g=d.parse(E),N=d.record.name);else{if(d=f.name?s.get(f.name):n.find(U=>U.re.test(f.path)),!d)throw On(1,{location:u,currentLocation:f});N=d.record.name,g=ce({},f.params,u.params),E=d.stringify(g)}const S=[];let _=d;for(;_;)S.unshift(_.record),_=_.parent;return{name:N,path:E,params:g,matched:S,meta:Hg(S)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ug(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function $g(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Bg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Bg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Vc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Hg(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function Uc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const $c=/#/g,jg=/&/g,qg=/\//g,Kg=/=/g,zg=/\?/g,Bc=/\+/g,Gg=/%5B/g,Wg=/%5D/g,Hc=/%5E/g,Qg=/%60/g,jc=/%7B/g,Yg=/%7C/g,qc=/%7D/g,Xg=/%20/g;function co(t){return encodeURI(""+t).replace(Yg,"|").replace(Gg,"[").replace(Wg,"]")}function Jg(t){return co(t).replace(jc,"{").replace(qc,"}").replace(Hc,"^")}function uo(t){return co(t).replace(Bc,"%2B").replace(Xg,"+").replace($c,"%23").replace(jg,"%26").replace(Qg,"`").replace(jc,"{").replace(qc,"}").replace(Hc,"^")}function Zg(t){return uo(t).replace(Kg,"%3D")}function em(t){return co(t).replace($c,"%23").replace(zg,"%3F")}function tm(t){return t==null?"":em(t).replace(qg,"%2F")}function Er(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function nm(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Bc," "),o=i.indexOf("="),a=Er(o<0?i:i.slice(0,o)),l=o<0?null:Er(i.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Kc(t){let e="";for(let n in t){const s=t[n];if(n=Zg(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&uo(i)):[s&&uo(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function sm(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function hs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ft(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(On(4,{from:n,to:e})):f instanceof Error?a(f):Rg(f)?a(On(2,{from:e,to:f})):(i&&s.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function ho(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(rm(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Ft(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ug(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ft(d,n,s,i,o)()}))}}return r}function rm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zc(t){const e=xt(ro),n=xt(_c),s=gt(()=>e.resolve(ns(t.to))),r=gt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(xn.bind(null,u));if(d>-1)return d;const g=Gc(l[c-2]);return c>1&&Gc(u)===g&&f[f.length-1].path!==g?f.findIndex(xn.bind(null,l[c-2])):d}),i=gt(()=>r.value>-1&&lm(n.params,s.value.params)),o=gt(()=>r.value>-1&&r.value===n.matched.length-1&&Nc(n.params,s.value.params));function a(l={}){return am(l)?e[ns(t.replace)?"replace":"push"](ns(t.to)).catch(ls):Promise.resolve()}return{route:s,href:gt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const im=xl({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zc,setup(t,{slots:e}){const n=es(zc(t)),{options:s}=xt(ro),r=gt(()=>({[Wc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Wc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:mc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),om=im;function am(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lm(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Gc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wc=(t,e,n)=>t!=null?t:e!=null?e:n,cm=xl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=xt(io),r=gt(()=>t.route||s.value),i=xt(Cc,0),o=gt(()=>r.value.matched[i]);ir(Cc,i+1),ir(cg,o),ir(io,r);const a=_d();return yr(()=>[a.value,o.value,t.name],([l,c,u],[f,d,g])=>{c&&(c.instances[u]=l,d&&d!==c&&l&&l===f&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),l&&c&&(!d||!xn(c,d)||!f)&&(c.enterCallbacks[u]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],f=t.name;if(!u)return Qc(n.default,{Component:u,route:l});const d=c.props[t.name],g=d?d===!0?l.params:typeof d=="function"?d(l):d:null,N=mc(u,ce({},g,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(c.instances[f]=null)},ref:a}));return Qc(n.default,{Component:N,route:l})||N}}});function Qc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const um=cm;function t0(t){const e=Vg(t.routes,t),n=t.parseQuery||nm,s=t.stringifyQuery||Kc,r=t.history,i=hs(),o=hs(),a=hs(),l=Rd(Mt);let c=Mt;Dn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oo.bind(null,y=>""+y),f=oo.bind(null,tm),d=oo.bind(null,Er);function g(y,k){let C,L;return kc(y)?(C=e.getRecordMatcher(y),L=k):L=y,e.addRoute(L,C)}function E(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function N(){return e.getRoutes().map(y=>y.record)}function S(y){return!!e.getRecordMatcher(y)}function _(y,k){if(k=ce({},k||l.value),typeof y=="string"){const K=ao(n,y,k.path),h=e.resolve({path:K.path},k),p=r.createHref(K.fullPath);return ce(K,h,{params:d(h.params),hash:Er(K.hash),redirectedFrom:void 0,href:p})}let C;if("path"in y)C=ce({},y,{path:ao(n,y.path,k.path).path});else{const K=ce({},y.params);for(const h in K)K[h]==null&&delete K[h];C=ce({},y,{params:f(y.params)}),k.params=f(k.params)}const L=e.resolve(C,k),ae=y.hash||"";L.params=u(d(L.params));const he=dg(s,ce({},y,{hash:Jg(ae),path:L.path})),Q=r.createHref(he);return ce({fullPath:he,hash:ae,query:s===Kc?sm(y.query):y.query||{}},L,{redirectedFrom:void 0,href:Q})}function U(y){return typeof y=="string"?ao(n,y,l.value.path):ce({},y)}function z(y,k){if(c!==y)return On(8,{from:k,to:y})}function W(y){return J(y)}function ye(y){return W(ce(U(y),{replace:!0}))}function Ee(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:C}=k;let L=typeof C=="function"?C(y):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=U(L):{path:L},L.params={}),ce({query:y.query,hash:y.hash,params:y.params},L)}}function J(y,k){const C=c=_(y),L=l.value,ae=y.state,he=y.force,Q=y.replace===!0,K=Ee(C);if(K)return J(ce(U(K),{state:ae,force:he,replace:Q}),k||C);const h=C;h.redirectedFrom=k;let p;return!he&&pg(s,L,C)&&(p=On(16,{to:h,from:L}),gn(L,L,!0,!1)),(p?Promise.resolve(p):ve(h,L)).catch(m=>Zt(m)?m:ue(m,h,L)).then(m=>{if(m){if(Zt(m,2))return J(ce(U(m.to),{state:ae,force:he,replace:Q}),k||h)}else m=Fe(h,L,!0,Q,ae);return Qe(h,L,m),m})}function Se(y,k){const C=z(y,k);return C?Promise.reject(C):Promise.resolve()}function ve(y,k){let C;const[L,ae,he]=hm(y,k);C=ho(L.reverse(),"beforeRouteLeave",y,k);for(const K of L)K.leaveGuards.forEach(h=>{C.push(Ft(h,y,k))});const Q=Se.bind(null,y,k);return C.push(Q),Pn(C).then(()=>{C=[];for(const K of i.list())C.push(Ft(K,y,k));return C.push(Q),Pn(C)}).then(()=>{C=ho(ae,"beforeRouteUpdate",y,k);for(const K of ae)K.updateGuards.forEach(h=>{C.push(Ft(h,y,k))});return C.push(Q),Pn(C)}).then(()=>{C=[];for(const K of y.matched)if(K.beforeEnter&&!k.matched.includes(K))if(Array.isArray(K.beforeEnter))for(const h of K.beforeEnter)C.push(Ft(h,y,k));else C.push(Ft(K.beforeEnter,y,k));return C.push(Q),Pn(C)}).then(()=>(y.matched.forEach(K=>K.enterCallbacks={}),C=ho(he,"beforeRouteEnter",y,k),C.push(Q),Pn(C))).then(()=>{C=[];for(const K of o.list())C.push(Ft(K,y,k));return C.push(Q),Pn(C)}).catch(K=>Zt(K,8)?K:Promise.reject(K))}function Qe(y,k,C){for(const L of a.list())L(y,k,C)}function Fe(y,k,C,L,ae){const he=z(y,k);if(he)return he;const Q=k===Mt,K=Dn?history.state:{};C&&(L||Q?r.replace(y.fullPath,ce({scroll:Q&&K&&K.scroll},ae)):r.push(y.fullPath,ae)),l.value=y,gn(y,k,C,Q),st()}let He;function Rt(){He=r.listen((y,k,C)=>{const L=_(y),ae=Ee(L);if(ae){J(ce(ae,{replace:!0}),L).catch(ls);return}c=L;const he=l.value;Dn&&Ig(xc(he.fullPath,C.delta),wr()),ve(L,he).catch(Q=>Zt(Q,4|8)?Q:Zt(Q,2)?(J(Q.to,L).then(K=>{Zt(K,4|16)&&!C.delta&&C.type===cs.pop&&r.go(-1,!1)}).catch(ls),Promise.reject()):(C.delta&&r.go(-C.delta,!1),ue(Q,L,he))).then(Q=>{Q=Q||Fe(L,he,!1),Q&&(C.delta?r.go(-C.delta,!1):C.type===cs.pop&&Zt(Q,4|16)&&r.go(-1,!1)),Qe(L,he,Q)}).catch(ls)})}let dn=hs(),pn=hs(),Ce;function ue(y,k,C){st(y);const L=pn.list();return L.length?L.forEach(ae=>ae(y,k,C)):console.error(y),Promise.reject(y)}function oe(){return Ce&&l.value!==Mt?Promise.resolve():new Promise((y,k)=>{dn.add([y,k])})}function st(y){Ce||(Ce=!0,Rt(),dn.list().forEach(([k,C])=>y?C(y):k()),dn.reset())}function gn(y,k,C,L){const{scrollBehavior:ae}=t;if(!Dn||!ae)return Promise.resolve();const he=!C&&Ag(xc(y.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return ac().then(()=>ae(y,k,he)).then(Q=>Q&&Tg(Q)).catch(Q=>ue(Q,y,k))}const Et=y=>r.go(y);let ft;const rt=new Set;return{currentRoute:l,addRoute:g,removeRoute:E,hasRoute:S,getRoutes:N,resolve:_,options:t,push:W,replace:ye,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:pn.add,isReady:oe,install(y){const k=this;y.component("RouterLink",om),y.component("RouterView",um),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ns(l)}),Dn&&!ft&&l.value===Mt&&(ft=!0,W(r.location).catch(ae=>{}));const C={};for(const ae in Mt)C[ae]=gt(()=>l.value[ae]);y.provide(ro,k),y.provide(_c,es(C)),y.provide(io,l);const L=y.unmount;rt.add(y),y.unmount=function(){rt.delete(y),rt.size<1&&(c=Mt,He&&He(),l.value=Mt,ft=!1,Ce=!1),L()}}}}function Pn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function hm(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>xn(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>xn(c,l))||r.push(l))}return[n,s,r]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dm(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tr())}function pm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mm(){return Tr().indexOf("Electron/")>=0}function ym(){const t=Tr();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vm(){return Tr().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="FirebaseError";class fo extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=wm,Object.setPrototypeOf(this,fo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yc.prototype.create)}}class Yc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Em(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new fo(r,a,s)}}function Em(t,e){return t.replace(Tm,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Tm=/\{\$([^}]+)}/g;function po(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Xc(i)&&Xc(o)){if(!po(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Xc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new fm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sm(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bm(t){return t===en?void 0:t}function Sm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Am(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const _m={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Rm=se.INFO,Nm={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Dm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Nm[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jc{constructor(e){this.name=e,this._logLevel=Rm,this._logHandler=Dm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_m[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Om(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Om(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const go="@firebase/app",Zc="0.7.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Jc("@firebase/app"),Pm="@firebase/app-compat",km="@firebase/analytics-compat",Lm="@firebase/analytics",Mm="@firebase/app-check-compat",Fm="@firebase/app-check",Vm="@firebase/auth",Um="@firebase/auth-compat",$m="@firebase/database",Bm="@firebase/database-compat",Hm="@firebase/functions",jm="@firebase/functions-compat",qm="@firebase/installations",Km="@firebase/installations-compat",zm="@firebase/messaging",Gm="@firebase/messaging-compat",Wm="@firebase/performance",Qm="@firebase/performance-compat",Ym="@firebase/remote-config",Xm="@firebase/remote-config-compat",Jm="@firebase/storage",Zm="@firebase/storage-compat",ey="@firebase/firestore",ty="@firebase/firestore-compat",ny="firebase",sy="9.4.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="[DEFAULT]",ry={[go]:"fire-core",[Pm]:"fire-core-compat",[Lm]:"fire-analytics",[km]:"fire-analytics-compat",[Fm]:"fire-app-check",[Mm]:"fire-app-check-compat",[Vm]:"fire-auth",[Um]:"fire-auth-compat",[$m]:"fire-rtdb",[Bm]:"fire-rtdb-compat",[Hm]:"fire-fn",[jm]:"fire-fn-compat",[qm]:"fire-iid",[Km]:"fire-iid-compat",[zm]:"fire-fcm",[Gm]:"fire-fcm-compat",[Wm]:"fire-perf",[Qm]:"fire-perf-compat",[Ym]:"fire-rc",[Xm]:"fire-rc-compat",[Jm]:"fire-gcs",[Zm]:"fire-gcs-compat",[ey]:"fire-fst",[ty]:"fire-fst-compat","fire-js":"fire-js",[ny]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map,yo=new Map;function iy(t,e){try{t.container.addComponent(e)}catch(n){mo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vo(t){const e=t.name;if(yo.has(e))return mo.debug(`There were multiple attempts to register component ${e}.`),!1;yo.set(e,t);for(const n of Ar.values())iy(n,t);return!0}function oy(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},br=new Yc("app","Firebase",ay);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=sy;function n0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:eu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw br.create("bad-app-name",{appName:String(s)});const r=Ar.get(s);if(r){if(po(t,r.options)&&po(n,r.config))return r;throw br.create("duplicate-app",{appName:s})}const i=new Cm(s);for(const a of yo.values())i.addComponent(a);const o=new ly(t,n,i);return Ar.set(s,o),o}function uy(t=eu){const e=Ar.get(t);if(!e)throw br.create("no-app",{appName:t});return e}function kn(t,e,n){var s;let r=(s=ry[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mo.warn(a.join(" "));return}vo(new Ir(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){vo(new Ir("platform-logger",e=>new xm(e),"PRIVATE")),kn(go,Zc,t),kn(go,Zc,"esm2017"),kn("fire-js","")}hy("");var fy="firebase",dy="9.4.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(fy,dy,"app");var py=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,wo=wo||{},$=py||self;function Sr(){}function Eo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gy(t){return Object.prototype.hasOwnProperty.call(t,To)&&t[To]||(t[To]=++my)}var To="closure_uid_"+(1e9*Math.random()>>>0),my=0;function yy(t,e,n){return t.call.apply(t.bind,arguments)}function vy(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Oe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Oe=yy:Oe=vy,Oe.apply(null,arguments)}function Cr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Vt(){this.s=this.s,this.o=this.o}var wy=0,Ey={};Vt.prototype.s=!1;Vt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),wy!=0)){var t=gy(this);delete Ey[t]}};Vt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},nu=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function Ty(t){e:{var e=fv;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function su(t){return Array.prototype.concat.apply([],arguments)}function Io(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function _r(t){return/^[\s\xa0]*$/.test(t)}var ru=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ke(t,e){return t.indexOf(e)!=-1}function Ao(t,e){return t<e?-1:t>e?1:0}var ze;e:{var iu=$.navigator;if(iu){var ou=iu.userAgent;if(ou){ze=ou;break e}}ze=""}function bo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function au(t){const e={};for(const n in t)e[n]=t[n];return e}var lu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cu(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<lu.length;i++)n=lu[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function So(t){return So[" "](t),t}So[" "]=Sr;function Iy(t){var e=Sy;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Ay=Ke(ze,"Opera"),Ln=Ke(ze,"Trident")||Ke(ze,"MSIE"),uu=Ke(ze,"Edge"),Co=uu||Ln,hu=Ke(ze,"Gecko")&&!(Ke(ze.toLowerCase(),"webkit")&&!Ke(ze,"Edge"))&&!(Ke(ze,"Trident")||Ke(ze,"MSIE"))&&!Ke(ze,"Edge"),by=Ke(ze.toLowerCase(),"webkit")&&!Ke(ze,"Edge");function fu(){var t=$.document;return t?t.documentMode:void 0}var Rr;e:{var _o="",Ro=function(){var t=ze;if(hu)return/rv:([^\);]+)(\)|;)/.exec(t);if(uu)return/Edge\/([\d\.]+)/.exec(t);if(Ln)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(by)return/WebKit\/(\S+)/.exec(t);if(Ay)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ro&&(_o=Ro?Ro[1]:""),Ln){var No=fu();if(No!=null&&No>parseFloat(_o)){Rr=String(No);break e}}Rr=_o}var Sy={};function Cy(){return Iy(function(){let t=0;const e=ru(String(Rr)).split("."),n=ru("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ao(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ao(r[2].length==0,i[2].length==0)||Ao(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Do;if($.document&&Ln){var du=fu();Do=du||parseInt(Rr,10)||void 0}else Do=void 0;var _y=Do,Ry=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",Sr,e),$.removeEventListener("test",Sr,e)}catch{}return t}();function Ue(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};function ds(t,e){if(Ue.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hu){e:{try{So(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ny[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ds.Z.h.call(this)}}Pe(ds,Ue);var Ny={2:"touch",3:"pen",4:"mouse"};ds.prototype.h=function(){ds.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ps="closure_listenable_"+(1e6*Math.random()|0),Dy=0;function xy(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++Dy,this.ca=this.fa=!1}function Nr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Dr(t){this.src=t,this.g={},this.h=0}Dr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Oo(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new xy(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function xo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=tu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Nr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Oo(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Po="closure_lm_"+(1e6*Math.random()|0),ko={};function pu(t,e,n,s,r){if(s&&s.once)return mu(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)pu(t,e[i],n,s,r);return null}return n=Vo(n),t&&t[ps]?t.N(e,n,fs(s)?!!s.capture:!!s,r):gu(t,e,n,!1,s,r)}function gu(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=fs(r)?!!r.capture:!!r,a=Mo(t);if(a||(t[Po]=a=new Dr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Oy(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Ry||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(vu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Oy(){function t(n){return e.call(t.src,t.listener,n)}var e=Py;return t}function mu(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)mu(t,e[i],n,s,r);return null}return n=Vo(n),t&&t[ps]?t.O(e,n,fs(s)?!!s.capture:!!s,r):gu(t,e,n,!0,s,r)}function yu(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)yu(t,e[i],n,s,r);else s=fs(s)?!!s.capture:!!s,n=Vo(n),t&&t[ps]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Oo(i,n,s,r),-1<n&&(Nr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Mo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Oo(e,n,s,r)),(n=-1<t?e[t]:null)&&Lo(n))}function Lo(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ps])xo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(vu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Mo(e))?(xo(n,t),n.h==0&&(n.src=null,e[Po]=null)):Nr(t)}}}function vu(t){return t in ko?ko[t]:ko[t]="on"+t}function Py(t,e){if(t.ca)t=!0;else{e=new ds(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Lo(t),t=n.call(s,e)}return t}function Mo(t){return t=t[Po],t instanceof Dr?t:null}var Fo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vo(t){return typeof t=="function"?t:(t[Fo]||(t[Fo]=function(e){return t.handleEvent(e)}),t[Fo])}function Ne(){Vt.call(this),this.i=new Dr(this),this.P=this,this.I=null}Pe(Ne,Vt);Ne.prototype[ps]=!0;Ne.prototype.removeEventListener=function(t,e,n,s){yu(this,t,e,n,s)};function ke(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ue(e,t);else if(e instanceof Ue)e.target=e.target||t;else{var r=e;e=new Ue(s,t),cu(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=xr(o,s,!0,e)&&r}if(o=e.g=t,r=xr(o,s,!0,e)&&r,r=xr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=xr(o,s,!1,e)&&r}Ne.prototype.M=function(){if(Ne.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Nr(n[s]);delete t.g[e],t.h--}}this.I=null};Ne.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ne.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function xr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&xo(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var Uo=$.JSON.stringify;function ky(){var t=Eu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ly{constructor(){this.h=this.g=null}add(e,n){const s=wu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var wu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new My,t=>t.reset());class My{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Fy(t){$.setTimeout(()=>{throw t},0)}function $o(t,e){Bo||Vy(),Ho||(Bo(),Ho=!0),Eu.add(t,e)}var Bo;function Vy(){var t=$.Promise.resolve(void 0);Bo=function(){t.then(Uy)}}var Ho=!1,Eu=new Ly;function Uy(){for(var t;t=ky();){try{t.h.call(t.g)}catch(n){Fy(n)}var e=wu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ho=!1}function Or(t,e){Ne.call(this),this.h=t||1,this.g=e||$,this.j=Oe(this.kb,this),this.l=Date.now()}Pe(Or,Ne);O=Or.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ke(this,"tick"),this.da&&(jo(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jo(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){Or.Z.M.call(this),jo(this),delete this.g};function qo(t,e,n){if(typeof t=="function")n&&(t=Oe(t,n));else if(t&&typeof t.handleEvent=="function")t=Oe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Tu(t){t.g=qo(()=>{t.g=null,t.i&&(t.i=!1,Tu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $y extends Vt{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tu(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(t){Vt.call(this),this.h=t,this.g={}}Pe(gs,Vt);var Iu=[];function Au(t,e,n,s){Array.isArray(n)||(n&&(Iu[0]=n.toString()),n=Iu);for(var r=0;r<n.length;r++){var i=pu(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function bu(t){bo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Lo(e)},t),t.g={}}gs.prototype.M=function(){gs.Z.M.call(this),bu(this)};gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pr(){this.g=!0}Pr.prototype.Aa=function(){this.g=!1};function By(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Hy(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Mn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qy(t,n)+(s?" "+s:"")})}function jy(t,e){t.info(function(){return"TIMEOUT: "+e})}Pr.prototype.info=function(){};function qy(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Uo(n)}catch{return e}}var tn={},Su=null;function kr(){return Su=Su||new Ne}tn.Ma="serverreachability";function Cu(t){Ue.call(this,tn.Ma,t)}Pe(Cu,Ue);function ms(t){const e=kr();ke(e,new Cu(e,t))}tn.STAT_EVENT="statevent";function _u(t,e){Ue.call(this,tn.STAT_EVENT,t),this.stat=e}Pe(_u,Ue);function Ge(t){const e=kr();ke(e,new _u(e,t))}tn.Na="timingevent";function Ru(t,e){Ue.call(this,tn.Na,t),this.size=e}Pe(Ru,Ue);function ys(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Lr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Nu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ko(){}Ko.prototype.h=null;function Du(t){return t.h||(t.h=t.i())}function xu(){}var vs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function zo(){Ue.call(this,"d")}Pe(zo,Ue);function Go(){Ue.call(this,"c")}Pe(Go,Ue);var Wo;function Mr(){}Pe(Mr,Ko);Mr.prototype.g=function(){return new XMLHttpRequest};Mr.prototype.i=function(){return{}};Wo=new Mr;function ws(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new gs(this),this.P=Ky,t=Co?125:void 0,this.W=new Or(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ou}function Ou(){this.i=null,this.g="",this.h=!1}var Ky=45e3,Qo={},Fr={};O=ws.prototype;O.setTimeout=function(t){this.P=t};function Yo(t,e,n){t.K=1,t.v=Hr(bt(e)),t.s=n,t.U=!0,Pu(t,null)}function Pu(t,e){t.F=Date.now(),Es(t),t.A=bt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Hu(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Ou,t.g=hh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new $y(Oe(t.Ia,t,t.g),t.O)),Au(t.V,t.g,"readystatechange",t.gb),e=t.H?au(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ms(1),By(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&St(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=St(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>u)&&(u!=3||Co||this.g&&(this.h.h||this.g.ga()||eh(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?ms(3):ms(2)),Vr(this);var n=this.g.ba();this.N=n;t:if(ku(this)){var s=eh(this.g);t="";var r=s.length,i=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){nn(this),Ts(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Hy(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_r(a)){var c=a;break t}}c=null}if(n=c)Mn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xo(this,n);else{this.i=!1,this.o=3,Ge(12),nn(this),Ts(this);break e}}this.U?(Lu(this,u,o),Co&&this.i&&u==3&&(Au(this.V,this.W,"tick",this.fb),this.W.start())):(Mn(this.j,this.m,o,null),Xo(this,o)),u==4&&nn(this),this.i&&!this.I&&(u==4?ah(this.l,this):(this.i=!1,Es(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),nn(this),Ts(this)}}}catch{}finally{}};function ku(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Lu(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=zy(t,n),r==Fr){e==4&&(t.o=4,Ge(14),s=!1),Mn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Qo){t.o=4,Ge(15),Mn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Mn(t.j,t.m,r,null),Xo(t,r);ku(t)&&r!=Fr&&r!=Qo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ge(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),la(e),e.L=!0,Ge(11))):(Mn(t.j,t.m,n,"[Invalid Chunked Response]"),nn(t),Ts(t))}O.fb=function(){if(this.g){var t=St(this.g),e=this.g.ga();this.C<e.length&&(Vr(this),Lu(this,t,e),this.i&&t!=4&&Es(this))}};function zy(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Fr:(n=Number(e.substring(n,s)),isNaN(n)?Qo:(s+=1,s+n>e.length?Fr:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,nn(this)};function Es(t){t.Y=Date.now()+t.P,Mu(t,t.P)}function Mu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ys(Oe(t.eb,t),e)}function Vr(t){t.B&&($.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(jy(this.j,this.A),this.K!=2&&(ms(3),Ge(17)),nn(this),this.o=2,Ts(this)):Mu(this,this.Y-t)};function Ts(t){t.l.G==0||t.I||ah(t.l,t)}function nn(t){Vr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,jo(t.W),bu(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Xo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ea(n.i,t))){if(n.I=t.N,!t.J&&ea(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Wr(n),zr(n);else break e;aa(n),Ge(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=ys(Oe(n.ab,n),6e3));if(1>=Ku(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else on(n,11)}else if((t.J||n.g==t)&&Wr(n),!_r(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const f=c[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const E=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=s.i;!i.g&&(Ke(E,"spdy")||Ke(E,"quic")||Ke(E,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(ta(i,i.h),i.h=null))}if(s.D){const N=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.sa=N,ge(s.F,s.D,N))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=uh(s,s.H?s.la:null,s.W),o.J){zu(s.i,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(Vr(a),Es(a)),s.g=o}else ih(s);0<n.l.length&&Gr(n)}else c[0]!="stop"&&c[0]!="close"||on(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?on(n,7):ia(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}ms(4)}catch{}}function Gy(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Eo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Jo(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Eo(t)||typeof t=="string")nu(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Eo(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=Gy(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Fn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Fn)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=Fn.prototype;O.R=function(){Zo(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return Zo(this),this.g.concat()};function Zo(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];sn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],sn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}O.get=function(t,e){return sn(this.h,t)?this.h[t]:e};O.set=function(t,e){sn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Fu=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function rn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof rn){this.g=e!==void 0?e:t.g,Ur(this,t.j),this.s=t.s,$r(this,t.i),Br(this,t.m),this.l=t.l,e=t.h;var n=new bs;n.i=e.i,e.g&&(n.g=new Fn(e.g),n.h=e.h),Vu(this,n),this.o=t.o}else t&&(n=String(t).match(Fu))?(this.g=!!e,Ur(this,n[1]||"",!0),this.s=Is(n[2]||""),$r(this,n[3]||"",!0),Br(this,n[4]),this.l=Is(n[5]||"",!0),Vu(this,n[6]||"",!0),this.o=Is(n[7]||"")):(this.g=!!e,this.h=new bs(null,this.g))}rn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(As(e,Uu,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(As(e,Uu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(As(n,n.charAt(0)=="/"?Zy:Jy,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",As(n,tv)),t.join("")};function bt(t){return new rn(t)}function Ur(t,e,n){t.j=n?Is(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $r(t,e,n){t.i=n?Is(e,!0):e}function Br(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vu(t,e,n){e instanceof bs?(t.h=e,nv(t.h,t.g)):(n||(e=As(e,ev)),t.h=new bs(e,t.g))}function ge(t,e,n){t.h.set(e,n)}function Hr(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qy(t){return t instanceof rn?bt(t):new rn(t,void 0)}function Yy(t,e,n,s){var r=new rn(null,void 0);return t&&Ur(r,t),e&&$r(r,e),n&&Br(r,n),s&&(r.l=s),r}function Is(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function As(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Xy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Uu=/[#\/\?@]/g,Jy=/[#\?:]/g,Zy=/[#\?]/g,ev=/[#\?@]/g,tv=/#/g;function bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ut(t){t.g||(t.g=new Fn,t.h=0,t.i&&Wy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=bs.prototype;O.add=function(t,e){Ut(this),this.i=null,t=Vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $u(t,e){Ut(t),e=Vn(t,e),sn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,sn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Zo(t)))}function Bu(t,e){return Ut(t),e=Vn(t,e),sn(t.g.h,e)}O.forEach=function(t,e){Ut(this),this.g.forEach(function(n,s){nu(n,function(r){t.call(e,r,s,this)},this)},this)};O.T=function(){Ut(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};O.R=function(t){Ut(this);var e=[];if(typeof t=="string")Bu(this,t)&&(e=su(e,this.g.get(Vn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=su(e,t[n])}return e};O.set=function(t,e){return Ut(this),this.i=null,t=Vn(this,t),Bu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Hu(t,e,n){$u(t,e),0<n.length&&(t.i=null,t.g.set(Vn(t,e),Io(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nv(t,e){e&&!t.j&&(Ut(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&($u(this,s),Hu(this,r,n))},t)),t.j=e}var sv=class{constructor(t,e){this.h=t,this.g=e}};function ju(t){this.l=t||rv,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rv=10;function qu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ku(t){return t.h?1:t.g?t.g.size:0}function ea(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ta(t,e){t.g?t.g.add(e):t.h=e}function zu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ju.prototype.cancel=function(){if(this.i=Gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Gu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Io(t.i)}function na(){}na.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};na.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function iv(){this.g=new na}function ov(t,e,n){const s=n||"";try{Jo(t,function(r,i){let o=r;fs(r)&&(o=Uo(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function av(t,e){const n=new Pr;if($.Image){const s=new Image;s.onload=Cr(jr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Cr(jr,n,s,"TestLoadImage: error",!1,e),s.onabort=Cr(jr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Cr(jr,n,s,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function jr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ss(t){this.l=t.$b||null,this.j=t.ib||!1}Pe(Ss,Ko);Ss.prototype.g=function(){return new qr(this.l,this.j)};Ss.prototype.i=function(t){return function(){return t}}({});function qr(t,e){Ne.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(qr,Ne);var sa=0;O=qr.prototype;O.open=function(t,e){if(this.readyState!=sa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_s(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=sa};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_s(this)),this.g&&(this.readyState=3,_s(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wu(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Wu(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cs(this):_s(this),this.readyState==3&&Wu(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,Cs(this))};O.Ta=function(t){this.g&&(this.response=t,Cs(this))};O.ha=function(){this.g&&Cs(this)};function Cs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_s(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _s(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lv=$.JSON.parse;function Te(t){Ne.call(this),this.headers=new Fn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Qu,this.K=this.L=!1}Pe(Te,Ne);var Qu="",cv=/^https?$/i,uv=["POST","PUT"];O=Te.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wo.g(),this.C=this.u?Du(this.u):Du(Wo),this.g.onreadystatechange=Oe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Yu(this,i);return}t=n||"";const r=new Fn(this.headers);s&&Jo(s,function(i,o){r.set(o,i)}),s=Ty(r.T()),n=$.FormData&&t instanceof $.FormData,!(0<=tu(uv,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zu(this),0<this.B&&((this.K=hv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Oe(this.pa,this)):this.A=qo(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Yu(this,i)}};function hv(t){return Ln&&Cy()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function fv(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof wo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function Yu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xu(t),Kr(t)}function Xu(t){t.D||(t.D=!0,ke(t,"complete"),ke(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ke(this,"complete"),ke(this,"abort"),Kr(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kr(this,!0)),Te.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Ju(this):this.cb())};O.cb=function(){Ju(this)};function Ju(t){if(t.h&&typeof wo!="undefined"&&(!t.C[1]||St(t)!=4||t.ba()!=2)){if(t.v&&St(t)==4)qo(t.Fa,0,t);else if(ke(t,"readystatechange"),St(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Fu)[1]||null;if(!r&&$.self&&$.self.location){var i=$.self.location.protocol;r=i.substr(0,i.length-1)}s=!cv.test(r?r.toLowerCase():"")}n=s}if(n)ke(t,"complete"),ke(t,"success");else{t.m=6;try{var o=2<St(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Xu(t)}}finally{Kr(t)}}}}function Kr(t,e){if(t.g){Zu(t);const n=t.g,s=t.C[0]?Sr:null;t.g=null,t.C=null,e||ke(t,"ready");try{n.onreadystatechange=s}catch{}}}function Zu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function St(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lv(e)}};function eh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Qu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function dv(t){let e="";return bo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ra(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=dv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function th(t){this.za=0,this.l=[],this.h=new Pr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Rs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Rs("baseRetryDelayMs",5e3,t),this.$a=Rs("retryDelaySeedMs",1e4,t),this.Ya=Rs("forwardChannelMaxRetries",2,t),this.ra=Rs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ju(t&&t.concurrentRequestLimit),this.Ca=new iv,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=th.prototype;O.ma=8;O.G=1;function ia(t){if(nh(t),t.G==3){var e=t.V++,n=bt(t.F);ge(n,"SID",t.J),ge(n,"RID",e),ge(n,"TYPE","terminate"),Ns(t,n),e=new ws(t,t.h,e,void 0),e.K=2,e.v=Hr(bt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=hh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Es(e)}ch(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function zr(t){t.g&&(la(t),t.g.cancel(),t.g=null)}function nh(t){zr(t),t.u&&($.clearTimeout(t.u),t.u=null),Wr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function oa(t,e){t.l.push(new sv(t.Za++,e)),t.G==3&&Gr(t)}function Gr(t){qu(t.i)||t.m||(t.m=!0,$o(t.Ha,t),t.C=0)}function pv(t,e){return Ku(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ys(Oe(t.Ha,t,e),lh(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new ws(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=au(i),cu(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rh(this,r,e),n=bt(this.F),ge(n,"RID",t),ge(n,"CVER",22),this.D&&ge(n,"X-HTTP-Session-Id",this.D),Ns(this,n),this.o&&i&&ra(n,this.o,i),ta(this.i,r),this.Ra&&ge(n,"TYPE","init"),this.ja?(ge(n,"$req",e),ge(n,"SID","null"),r.$=!0,Yo(r,n,null)):Yo(r,n,e),this.G=2}}else this.G==3&&(t?sh(this,t):this.l.length==0||qu(this.i)||sh(this))};function sh(t,e){var n;e?n=e.m:n=t.V++;const s=bt(t.F);ge(s,"SID",t.J),ge(s,"RID",n),ge(s,"AID",t.U),Ns(t,s),t.o&&t.s&&ra(s,t.o,t.s),n=new ws(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=rh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ta(t.i,n),Yo(n,s,e)}function Ns(t,e){t.j&&Jo({},function(n,s){ge(e,s,n)})}function rh(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Oe(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=i,0>c)i=Math.max(0,r[l].h-100),a=!1;else try{ov(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function ih(t){t.g||t.u||(t.Y=1,$o(t.Ga,t),t.A=0)}function aa(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ys(Oe(t.Ga,t),lh(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,oh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ys(Oe(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ge(10),zr(this),oh(this))};function la(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function oh(t){t.g=new ws(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=bt(t.oa);ge(e,"RID","rpc"),ge(e,"SID",t.J),ge(e,"CI",t.N?"0":"1"),ge(e,"AID",t.U),Ns(t,e),ge(e,"TYPE","xmlhttp"),t.o&&t.s&&ra(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Hr(bt(e)),n.s=null,n.U=!0,Pu(n,t)}O.ab=function(){this.v!=null&&(this.v=null,zr(this),aa(this),Ge(19))};function Wr(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function ah(t,e){var n=null;if(t.g==e){Wr(t),la(t),t.g=null;var s=2}else if(ea(t.i,e))n=e.D,zu(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=kr(),ke(s,new Ru(s,n,e,r)),Gr(t)}else ih(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&pv(t,e)||s==2&&aa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:on(t,5);break;case 4:on(t,10);break;case 3:on(t,6);break;default:on(t,2)}}}function lh(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function on(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Oe(t.jb,t);n||(n=new rn("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Ur(n,"https"),Hr(n)),av(n.toString(),s)}else Ge(2);t.G=0,t.j&&t.j.va(e),ch(t),nh(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ge(2)):(this.h.info("Failed to ping google.com"),Ge(1))};function ch(t){t.G=0,t.I=-1,t.j&&((Gu(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Io(t.l),t.l.length=0),t.j.ua())}function uh(t,e,n){let s=Qy(n);if(s.i!="")e&&$r(s,e+"."+s.i),Br(s,s.m);else{const r=$.location;s=Yy(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&bo(t.aa,function(r,i){ge(s,i,r)}),e=t.D,n=t.sa,e&&n&&ge(s,e,n),ge(s,"VER",t.ma),Ns(t,s),s}function hh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Te(new Ss({ib:!0})):new Te(t.qa),e.L=t.H,e}function fh(){}O=fh.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function Qr(){if(Ln&&!(10<=Number(_y)))throw Error("Environmental error: no available transport.")}Qr.prototype.g=function(t,e){return new nt(t,e)};function nt(t,e){Ne.call(this),this.g=new th(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!_r(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_r(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Un(this)}Pe(nt,Ne);nt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),$o(Oe(t.hb,t,e))),Ge(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=uh(t,null,t.W),Gr(t)};nt.prototype.close=function(){ia(this.g)};nt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,oa(this.g,e)}else this.v?(e={},e.__data__=Uo(t),oa(this.g,e)):oa(this.g,t)};nt.prototype.M=function(){this.g.j=null,delete this.j,ia(this.g),delete this.g,nt.Z.M.call(this)};function dh(t){zo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(dh,zo);function ph(){Go.call(this),this.status=1}Pe(ph,Go);function Un(t){this.g=t}Pe(Un,fh);Un.prototype.xa=function(){ke(this.g,"a")};Un.prototype.wa=function(t){ke(this.g,new dh(t))};Un.prototype.va=function(t){ke(this.g,new ph(t))};Un.prototype.ua=function(){ke(this.g,"b")};Qr.prototype.createWebChannel=Qr.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;Lr.NO_ERROR=0;Lr.TIMEOUT=8;Lr.HTTP_ERROR=6;Nu.COMPLETE="complete";xu.EventType=vs;vs.OPEN="a";vs.CLOSE="b";vs.ERROR="c";vs.MESSAGE="d";Ne.prototype.listen=Ne.prototype.N;Te.prototype.listenOnce=Te.prototype.O;Te.prototype.getLastError=Te.prototype.La;Te.prototype.getLastErrorCode=Te.prototype.Da;Te.prototype.getStatus=Te.prototype.ba;Te.prototype.getResponseJson=Te.prototype.Qa;Te.prototype.getResponseText=Te.prototype.ga;Te.prototype.send=Te.prototype.ea;var gv=function(){return new Qr},mv=function(){return kr()},ca=Lr,yv=Nu,vv=tn,gh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},wv=Ss,Yr=xu,Ev=Te;const mh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n="9.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Jc("@firebase/firestore");function yh(){return an.logLevel}function V(t,...e){if(an.logLevel<=se.DEBUG){const n=e.map(ua);an.debug(`Firestore (${$n}): ${t}`,...n)}}function $t(t,...e){if(an.logLevel<=se.ERROR){const n=e.map(ua);an.error(`Firestore (${$n}): ${t}`,...n)}}function vh(t,...e){if(an.logLevel<=se.WARN){const n=e.map(ua);an.warn(`Firestore (${$n}): ${t}`,...n)}}function ua(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${$n}) INTERNAL ASSERTION FAILED: `+t;throw $t(e),new Error(e)}function Ie(t,e){t||Y()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class Iv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class Av{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ln,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{V("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ie(typeof s.accessToken=="string"),new Tv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new Xe(e)}}class bv{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Xe.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class Sv{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new bv(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.g(s),this.p=s=>n.writeSequenceNumber(s))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ha.T=-1;class wh{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Cv(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ie(t,e){return t<e?-1:t>e?1:0}function Ds(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Bt.fromMillis(Date.now())}static fromDate(e){return Bt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Bt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Bt(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _v(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return xs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends xs{construct(e,n,s){return new we(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new we(n)}static emptyPath(){return new we([])}}const Rv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends xs{construct(e,n,s){return new ht(e,n,s)}static isValidIdentifier(e){return Rv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new $e(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new $e(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const Nv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=Nv.exec(t);if(Ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bn(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ih(t){const e=t.mapValue.fields.__previous_value__;return Th(e)?Ih(e):e}function Os(t){const e=Ht(t.mapValue.fields.__local_write_time__.timestampValue);return new Bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t){return t==null}function fa(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(we.fromString(e))}static fromName(e){return new j(we.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new we(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Th(t)?4:10:Y()}function wt(t,e){const n=cn(t);if(n!==cn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Os(t).isEqual(Os(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ht(s.timestampValue),o=Ht(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Bn(s.bytesValue).isEqual(Bn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ae(s.geoPointValue.latitude)===Ae(r.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ae(s.integerValue)===Ae(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ae(s.doubleValue),o=Ae(r.doubleValue);return i===o?fa(i)===fa(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Eh(i)!==Eh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!wt(i[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Ps(t,e){return(t.values||[]).find(n=>wt(n,e))!==void 0}function jn(t,e){const n=cn(t),s=cn(e);if(n!==s)return ie(n,s);switch(n){case 0:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ae(r.integerValue||r.doubleValue),a=Ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ah(t.timestampValue,e.timestampValue);case 4:return Ah(Os(t),Os(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Bn(r),a=Bn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ie(o[l],a[l]);if(c!==0)return c}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ie(Ae(r.latitude),Ae(i.latitude));return o!==0?o:ie(Ae(r.longitude),Ae(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=jn(o[l],a[l]);if(c)return c}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=ie(a[u],c[u]);if(f!==0)return f;const d=jn(o[a[u]],l[c[u]]);if(d!==0)return d}return ie(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Ah(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Ht(t),s=Ht(e),r=ie(n.seconds,s.seconds);return r!==0?r:ie(n.nanos,s.nanos)}function da(t){return pa(t)}function pa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Ht(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=pa(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${pa(s.fields[a])}`;return i+"}"}(t.mapValue):Y();var e,n}function ga(t){return!!t&&"integerValue"in t}function ma(t){return!!t&&"arrayValue"in t}function bh(t){return!!t&&"nullValue"in t}function Sh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ya(t){return!!t&&"mapValue"in t}function ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ks(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ya(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ks(n)}setAll(e){let n=ht.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ks(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ya(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ya(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Xr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ct(ks(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,s,r,i){this.key=e,this.documentType=n,this.version=s,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Be(e,0,re.min(),Ct.empty(),0)}static newFoundDocument(e,n,s){return new Be(e,1,n,s,0)}static newNoDocument(e,n){return new Be(e,2,n,Ct.empty(),0)}static newUnknownDocument(e,n){return new Be(e,3,n,Ct.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Be(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function Ch(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Dv(t,e,n,s,r,i,o)}function va(t){const e=te(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ov(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Hn(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Jr(e.startAt)),e.endAt&&(n+="|ub:",n+=Jr(e.endAt)),e.A=n}return e.A}function xv(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${da(s.value)}`;var s}).join(", ")}]`),Hn(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Jr(t.startAt)),t.endAt&&(e+=", endAt: "+Jr(t.endAt)),`Target(${e})`}function wa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!$v(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!wt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nh(t.startAt,e.startAt)&&Nh(t.endAt,e.endAt)}function Ea(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Je extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,s):new Pv(e,n,s):n==="array-contains"?new Mv(e,s):n==="in"?new Fv(e,s):n==="not-in"?new Vv(e,s):n==="array-contains-any"?new Uv(e,s):new Je(e,n,s)}static R(e,n,s){return n==="in"?new kv(e,s):new Lv(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(jn(n,this.value)):n!==null&&cn(this.value)===cn(n)&&this.P(jn(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Ov(t){return t.field.canonicalString()+t.op.toString()+da(t.value)}class Pv extends Je{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.P(n)}}class kv extends Je{constructor(e,n){super(e,"in",n),this.keys=_h("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Lv extends Je{constructor(e,n){super(e,"not-in",n),this.keys=_h("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _h(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class Mv extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ma(n)&&Ps(n.arrayValue,this.value)}}class Fv extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ps(this.value.arrayValue,n)}}class Vv extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ps(this.value.arrayValue,n)}}class Uv extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ma(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ps(this.value.arrayValue,s))}}class Ta{constructor(e,n){this.position=e,this.before=n}}function Jr(t){return`${t.before?"b":"a"}:${t.position.map(e=>da(e)).join(",")}`}class Ls{constructor(e,n="asc"){this.field=e,this.dir=n}}function $v(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Rh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=jn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return t.before?s<=0:s<0}function Nh(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function Bv(t,e,n,s,r,i,o,a){return new Zr(t,e,n,s,r,i,o,a)}function Ia(t){return new Zr(t)}function ei(t){return!Hn(t.limit)&&t.limitType==="F"}function Aa(t){return!Hn(t.limit)&&t.limitType==="L"}function Hv(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jv(t){for(const e of t.filters)if(e.v())return e.field;return null}function qv(t){return t.collectionGroup!==null}function Ms(t){const e=te(t);if(e.V===null){e.V=[];const n=jv(e),s=Hv(e);if(n!==null&&s===null)n.isKeyField()||e.V.push(new Ls(n)),e.V.push(new Ls(ht.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Ls(ht.keyField(),i))}}}return e.V}function un(t){const e=te(t);if(!e.S)if(e.limitType==="F")e.S=Ch(e.path,e.collectionGroup,Ms(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ms(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ls(i.field,o))}const s=e.endAt?new Ta(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Ta(e.startAt.position,!e.startAt.before):null;e.S=Ch(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.S}function Kv(t,e,n){return new Zr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ti(t,e){return wa(un(t),un(e))&&t.limitType===e.limitType}function Dh(t){return`${va(un(t))}|lt:${t.limitType}`}function ba(t){return`Query(target=${xv(un(t))}; limitType=${t.limitType})`}function ni(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!Rh(n.startAt,Ms(n),s)||n.endAt&&Rh(n.endAt,Ms(n),s))}(t,e)}function xh(t){return(e,n)=>{let s=!1;for(const r of Ms(t)){const i=zv(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function zv(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?jn(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fa(e)?"-0":e}}function Wv(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this._=void 0}}function Qv(t,e,n){return t instanceof Sa?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ri?Oh(t,e):t instanceof ii?Ph(t,e):function(s,r){const i=Xv(s,r),o=kh(i)+kh(s.C);return ga(i)&&ga(s.C)?Wv(o):Gv(s.N,o)}(t,e)}function Yv(t,e,n){return t instanceof ri?Oh(t,e):t instanceof ii?Ph(t,e):n}function Xv(t,e){return t instanceof Ca?ga(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Sa extends si{}class ri extends si{constructor(e){super(),this.elements=e}}function Oh(t,e){const n=Lh(e);for(const s of t.elements)n.some(r=>wt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ii extends si{constructor(e){super(),this.elements=e}}function Ph(t,e){let n=Lh(e);for(const s of t.elements)n=n.filter(r=>!wt(r,s));return{arrayValue:{values:n}}}class Ca extends si{constructor(e,n){super(),this.N=e,this.C=n}}function kh(t){return Ae(t.integerValue||t.doubleValue)}function Lh(t){return ma(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Jv(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ri&&s instanceof ri||n instanceof ii&&s instanceof ii?Ds(n.elements,s.elements,wt):n instanceof Ca&&s instanceof Ca?wt(n.C,s.C):n instanceof Sa&&s instanceof Sa}(t.transform,e.transform)}function oi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mh{}function Zv(t,e,n){t instanceof Uh?function(s,r,i){const o=s.value.clone(),a=Bh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ra?function(s,r,i){if(!oi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Bh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll($h(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function _a(t,e,n){t instanceof Uh?function(s,r,i){if(!oi(s.precondition,r))return;const o=s.value.clone(),a=Hh(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Vh(r),o).setHasLocalMutations()}(t,e,n):t instanceof Ra?function(s,r,i){if(!oi(s.precondition,r))return;const o=Hh(s.fieldTransforms,i,r),a=r.data;a.setAll($h(s)),a.setAll(o),r.convertToFoundDocument(Vh(r),a).setHasLocalMutations()}(t,e,n):function(s,r){oi(s.precondition,r)&&r.convertToNoDocument(re.min())}(t,e)}function Fh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ds(n,s,(r,i)=>Jv(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Vh(t){return t.isFoundDocument()?t.version:re.min()}class Uh extends Mh{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Ra extends Mh{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function $h(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bh(t,e,n){const s=new Map;Ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Yv(o,a,n[r]))}return s}function Hh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Qv(i,o,e))}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,X;function jh(t){if(t===void 0)return $t("GRPC error has no .code"),D.UNKNOWN;switch(t){case be.OK:return D.OK;case be.CANCELLED:return D.CANCELLED;case be.UNKNOWN:return D.UNKNOWN;case be.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case be.INTERNAL:return D.INTERNAL;case be.UNAVAILABLE:return D.UNAVAILABLE;case be.UNAUTHENTICATED:return D.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case be.NOT_FOUND:return D.NOT_FOUND;case be.ALREADY_EXISTS:return D.ALREADY_EXISTS;case be.PERMISSION_DENIED:return D.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case be.ABORTED:return D.ABORTED;case be.OUT_OF_RANGE:return D.OUT_OF_RANGE;case be.UNIMPLEMENTED:return D.UNIMPLEMENTED;case be.DATA_LOSS:return D.DATA_LOSS;default:return Y()}}(X=be||(be={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ai(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ai(this.root,e,this.comparator,!1)}getReverseIterator(){return new ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ai(this.root,e,this.comparator,!0)}}class ai{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Le.RED,this.left=r!=null?r:Le.EMPTY,this.right=i!=null?i:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Le(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qh(this.data.getIterator())}getIteratorFrom(e){return new qh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class qh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=new We(j.comparator);function hn(){return tw}const nw=new We(j.comparator);function Na(){return nw}new We(j.comparator);const sw=new Me(j.comparator);function me(...t){let e=sw;for(const n of t)e=e.add(n);return e}const rw=new Me(ie);function Kh(){return rw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Fs.createSynthesizedTargetChangeForCurrentChange(e,n)),new li(re.min(),s,Kh(),hn(),me())}}class Fs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Fs($e.EMPTY_BYTE_STRING,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,s,r){this.k=e,this.removedTargetIds=n,this.key=s,this.$=r}}class zh{constructor(e,n){this.targetId=e,this.O=n}}class Gh{constructor(e,n,s=$e.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Wh{constructor(){this.F=0,this.M=Yh(),this.L=$e.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=me(),n=me(),s=me();return this.M.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Y()}}),new Fs(this.L,this.B,e,n,s)}G(){this.U=!1,this.M=Yh()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class iw{constructor(e){this.tt=e,this.et=new Map,this.nt=hn(),this.st=Qh(),this.it=new Me(ie)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const s=this.ut(n);switch(e.state){case 0:this.ht(n)&&s.j(e.resumeToken);break;case 1:s.X(),s.q||s.G(),s.j(e.resumeToken);break;case 2:s.X(),s.q||this.removeTarget(n);break;case 3:this.ht(n)&&(s.Z(),s.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),s.j(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((s,r)=>{this.ht(r)&&n(r)})}ft(e){const n=e.targetId,s=e.O.count,r=this.dt(n);if(r){const i=r.target;if(Ea(i))if(s===0){const o=new j(i.path);this.ct(n,o,Be.newNoDocument(o,re.min()))}else Ie(s===1);else this.wt(n)!==s&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&Ea(a.target)){const l=new j(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.ct(o,l,Be.newNoDocument(l,e))}i.K&&(n.set(o,i.W()),i.G())}});let s=me();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.dt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))});const r=new li(e,n,this.it,this.nt,s);return this.nt=hn(),this.st=Qh(),this.it=new Me(ie),r}ot(e,n){if(!this.ht(e))return;const s=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,s),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,s){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,n)?r.H(n,1):r.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),s&&(this.nt=this.nt.insert(n,s))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Wh,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Me(ie),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Wh),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Qh(){return new We(j.comparator)}function Yh(){return new We(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),aw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class lw{constructor(e,n){this.databaseId=e,this.D=n}}function cw(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uw(t,e){return t.D?e.toBase64():e.toUint8Array()}function Vs(t){return Ie(!!t),re.fromTimestamp(function(e){const n=Ht(e);return new Bt(n.seconds,n.nanos)}(t))}function hw(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xh(t){const e=we.fromString(t);return Ie(sf(e)),e}function Da(t,e){const n=Xh(e);if(n.get(1)!==t.databaseId.projectId)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Zh(n))}function xa(t,e){return hw(t.databaseId,e)}function fw(t){const e=Xh(t);return e.length===4?we.emptyPath():Zh(e)}function Jh(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zh(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,c){return l.D?(Ie(c===void 0||typeof c=="string"),$e.fromBase64String(c||"")):(Ie(c===void 0||c instanceof Uint8Array),$e.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?D.UNKNOWN:jh(l.code);return new B(c,l.message||"")}(o);n=new Gh(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Da(t,s.document.name),i=Vs(s.document.updateTime),o=new Ct({mapValue:{fields:s.document.fields}}),a=Be.newFoundDocument(r,i,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new ci(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Da(t,s.document),i=s.readTime?Vs(s.readTime):re.min(),o=Be.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ci([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Da(t,s.document),i=s.removedTargetIds||[];n=new ci([],i,r,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new ew(r),o=s.targetId;n=new zh(o,i)}}return n}function pw(t,e){return{documents:[xa(t,e.path)]}}function gw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=xa(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xa(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(a){if(a.length===0)return;const l=a.map(c=>function(u){if(u.op==="=="){if(Sh(u.value))return{unaryFilter:{field:qn(u.field),op:"IS_NAN"}};if(bh(u.value))return{unaryFilter:{field:qn(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Sh(u.value))return{unaryFilter:{field:qn(u.field),op:"IS_NOT_NAN"}};if(bh(u.value))return{unaryFilter:{field:qn(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qn(u.field),op:ww(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(a){if(a.length!==0)return a.map(l=>function(c){return{field:qn(c.field),direction:vw(c.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,l){return a.D||Hn(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=tf(e.startAt)),e.endAt&&(n.structuredQuery.endAt=tf(e.endAt)),n}function mw(t){let e=fw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=ef(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Ls(Kn(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Hn(f)?null:f}(n.limit));let l=null;n.startAt&&(l=nf(n.startAt));let c=null;return n.endAt&&(c=nf(n.endAt)),Bv(e,r,o,i,a,"F",l,c)}function yw(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ef(t){return t?t.unaryFilter!==void 0?[Tw(t)]:t.fieldFilter!==void 0?[Ew(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ef(e)).reduce((e,n)=>e.concat(n)):Y():[]}function tf(t){return{before:t.before,values:t.position}}function nf(t){const e=!!t.before,n=t.values||[];return new Ta(n,e)}function vw(t){return ow[t]}function ww(t){return aw[t]}function qn(t){return{fieldPath:t.canonicalString()}}function Kn(t){return ht.fromServerFormat(t.fieldPath)}function Ew(t){return Je.create(Kn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Tw(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Kn(t.unaryFilter.field);return Je.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Kn(t.unaryFilter.field);return Je.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Kn(t.unaryFilter.field);return Je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Kn(t.unaryFilter.field);return Je.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function sf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const Iw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Aw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,s)=>{n(e)})}static reject(e){return new x((n,s)=>{s(e)})}static waitFor(e){return new x((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=x.resolve(!1);for(const s of e)n=n.next(r=>r?x.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Us(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Zv(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&_a(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&_a(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(re.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,(n,s)=>Fh(n,s))&&Ds(this.baseMutations,e.baseMutations,(n,s)=>Fh(n,s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,s,r,i=re.min(),o=re.min(),a=$e.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.Wt=e}}function Cw(t){const e=mw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kv(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.Gt=new Rw}addToCollectionParentIndex(e,n){return this.Gt.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Gt.getEntries(n))}}class Rw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Me(we.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Me(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new zn(0)}static ie(){return new zn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==Iw)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n])}else this.inner[s]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),!0;return!1}forEach(e){Xr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return _v(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.changes=new $s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:re.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Be.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?x.resolve(s.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,s){this.He=e,this.In=n,this.Ht=s}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Rn(e,n,s))}Rn(e,n,s){return this.He.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}bn(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Pn(e,n){return this.He.getEntries(e,n).next(s=>this.vn(e,s).next(()=>s))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.bn(n,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Vn(e,n.path):qv(n)?this.Sn(e,n,s):this.Dn(e,n,s)}Vn(e,n){return this.An(e,new j(n)).next(s=>{let r=Na();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Sn(e,n,s){const r=n.collectionGroup;let i=Na();return this.Ht.getCollectionParents(e,r).next(o=>x.forEach(o,a=>{const l=function(c,u){return new Zr(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.Dn(e,l,s).next(c=>{c.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}Dn(e,n,s){let r,i;return this.He.getDocumentsMatchingQuery(e,n,s).next(o=>(r=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Cn(e,i,r).next(a=>{r=a;for(const l of i)for(const c of l.mutations){const u=c.key;let f=r.get(u);f==null&&(f=Be.newInvalidDocument(u),r=r.insert(u,f)),_a(c,f,l.localWriteTime),f.isFoundDocument()||(r=r.remove(u))}}))).next(()=>(r.forEach((o,a)=>{ni(n,a)||(r=r.remove(o))}),r))}Cn(e,n,s){let r=me();for(const o of n)for(const a of o.mutations)a instanceof Ra&&s.get(a.key)===null&&(r=r.add(a.key));let i=s;return this.He.getEntries(e,r).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(i=i.insert(a,l))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Nn=s,this.xn=r}static kn(e,n){let s=me(),r=me();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Pa(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(re.min())?this.Fn(e,n):this.On.Pn(e,r).next(i=>{const o=this.Mn(n,i);return(ei(n)||Aa(n))&&this.Ln(n.limitType,o,r,s)?this.Fn(e,n):(yh()<=se.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ba(n)),this.On.getDocumentsMatchingQuery(e,n,s).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(e,n){let s=new Me(xh(e));return n.forEach((r,i)=>{ni(e,i)&&(s=s.add(i))}),s}Ln(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,n){return yh()<=se.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ba(n)),this.On.getDocumentsMatchingQuery(e,n,re.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n,s,r){this.persistence=e,this.Bn=n,this.N=r,this.Un=new We(ie),this.qn=new $s(i=>va(i),wa),this.Kn=re.min(),this.In=e.getMutationQueue(s),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new rf(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function Ow(t,e,n,s){return new xw(t,e,n,s)}async function of(t,e){const n=te(t);let s=n.In,r=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(l=>(a=l,s=n.persistence.getMutationQueue(e),r=new rf(n.jn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(o))).next(l=>{const c=[],u=[];let f=me();for(const d of a){c.push(d.batchId);for(const g of d.mutations)f=f.add(g.key)}for(const d of l){u.push(d.batchId);for(const g of d.mutations)f=f.add(g.key)}return r.Pn(o,f).next(d=>({Wn:d,removedBatchIds:c,addedBatchIds:u}))})});return n.In=s,n.Qn=r,n.Bn.$n(n.Qn),i}function af(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function Pw(t,e){const n=te(t),s=e.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const a=[];e.targetChanges.forEach((c,u)=>{const f=r.get(u);if(!f)return;a.push(n.ze.removeMatchingKeys(i,c.removedDocuments,u).next(()=>n.ze.addMatchingKeys(i,c.addedDocuments,u)));const d=c.resumeToken;if(d.approximateByteSize()>0){const g=f.withResumeToken(d,s).withSequenceNumber(i.currentSequenceNumber);r=r.insert(u,g),function(E,N,S){return Ie(N.resumeToken.approximateByteSize()>0),E.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,g,c)&&a.push(n.ze.updateTargetData(i,g))}});let l=hn();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(kw(i,o,e.documentUpdates,s,void 0).next(c=>{l=c})),!s.isEqual(re.min())){const c=n.ze.getLastRemoteSnapshotVersion(i).next(u=>n.ze.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(c)}return x.waitFor(a).next(()=>o.apply(i)).next(()=>n.Qn.vn(i,l)).next(()=>l)}).then(i=>(n.Un=r,i))}function kw(t,e,n,s,r){let i=me();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=hn();return n.forEach((l,c)=>{const u=o.get(l),f=(r==null?void 0:r.get(l))||s;c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(l,f),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,f),a=a.insert(l,c)):V("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),a})}function Lw(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.ze.getTargetData(s,e).next(i=>i?(r=i,x.resolve(r)):n.ze.allocateTargetId(s).next(o=>(r=new fn(e,o,0,s.currentSequenceNumber),n.ze.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Un.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(s.targetId,s),n.qn.set(e,s.targetId)),s})}async function ka(t,e,n){const s=te(t),r=s.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Us(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Un=s.Un.remove(e),s.qn.delete(r.target)}function lf(t,e,n){const s=te(t);let r=re.min(),i=me();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=te(a),f=u.qn.get(c);return f!==void 0?x.resolve(u.Un.get(f)):u.ze.getTargetData(l,c)}(s,o,un(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Bn.getDocumentsMatchingQuery(o,e,n?r:re.min(),n?i:me())).next(a=>({documents:a,Gn:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return x.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var s;return this.Yn.set(n.id,{id:(s=n).id,version:s.version,createTime:Vs(s.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Cw(s.bundledQuery),readTime:Vs(s.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.Zn=new Me(De.ts),this.es=new Me(De.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new De(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new De(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}cs(e){const n=new j(new we([])),s=new De(n,e),r=new De(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new j(new we([])),s=new De(n,e),r=new De(n,e+1);let i=me();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new De(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class De{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return j.comparator(e.key,n.key)||ie(e.ls,n.ls)}static ns(e,n){return ie(e.ls,n.ls)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Me(De.ts)}checkEmpty(e){return x.resolve(this.In.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new bw(i,n,s,r);this.In.push(o);for(const a of r)this.ds=this.ds.add(new De(a.key,i)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this._s(s),i=r<0?0:r;return x.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return x.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new De(n,0),r=new De(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this.ws(o.ls);i.push(a)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Me(ie);return n.forEach(r=>{const i=new De(r,0),o=new De(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),x.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new De(new j(i),0);let a=new Me(ie);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},o),x.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this.ws(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ie(this.ys(n.batchId,"removed")===0),this.In.shift();let s=this.ds;return x.forEach(n.mutations,r=>{const i=new De(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}te(e){}containsKey(e,n){const s=new De(n,0),r=this.ds.firstAfterOrEqual(s);return x.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,x.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new We(j.comparator),this.size=0}addEntry(e,n,s){const r=n.key,i=this.docs.get(r),o=i?i.size:0,a=this.ps(n);return this.docs=this.docs.insert(r,{document:n.clone(),size:a,readTime:s}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return x.resolve(s?s.document.clone():Be.newInvalidDocument(n))}getEntries(e,n){let s=hn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.clone():Be.newInvalidDocument(r))}),x.resolve(s)}getDocumentsMatchingQuery(e,n,s){let r=hn();const i=new j(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;c.compareTo(s)<=0||ni(n,l)&&(r=r.insert(l.key,l.clone()))}return x.resolve(r)}Ts(e,n){return x.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Uw(this)}getSize(e){return x.resolve(this.size)}}class Uw extends Nw{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.document.isValidDocument()?n.push(this.Se.addEntry(e,r.document,this.getReadTime(s))):this.Se.removeEntry(s)}),x.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.persistence=e,this.Es=new $s(n=>va(n),wa),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Is=0,this.As=new La,this.targetCount=0,this.Rs=zn.se()}forEachTarget(e,n){return this.Es.forEach((s,r)=>n(r)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Is&&(this.Is=n),x.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new zn(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.ce(n),x.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Es.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),x.waitFor(i).next(()=>r)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const s=this.Es.get(n)||null;return x.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),x.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),x.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return x.resolve(s)}containsKey(e,n){return x.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n){this.bs={},this.Le=new ha(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new $w(this),this.Ht=new _w,this.He=function(s,r){return new Vw(s,r)}(this.Ht,s=>this.referenceDelegate.Ps(s)),this.N=new Sw(n),this.Je=new Mw(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new Fw(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new Hw(this.Le.next());return this.referenceDelegate.vs(),s(r).next(i=>this.referenceDelegate.Vs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ss(e,n){return x.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class Hw extends Aw{constructor(e){super(),this.currentSequenceNumber=e}}class Ma{constructor(e){this.persistence=e,this.Ds=new La,this.Cs=null}static Ns(e){return new Ma(e)}get xs(){if(this.Cs)return this.Cs;throw Y()}addReference(e,n,s){return this.Ds.addReference(s,n),this.xs.delete(s.toString()),x.resolve()}removeReference(e,n,s){return this.Ds.removeReference(s,n),this.xs.add(s.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),x.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(r=>this.xs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.xs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.xs,s=>{const r=j.fromPath(s);return this.ks(e,r).next(i=>{i||n.removeEntry(r)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(s=>{s?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return x.or([()=>x.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class cf{constructor(){this.activeTargetIds=Kh()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jw{constructor(){this.yi=new cf,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,s){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new cf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{Ti(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,s,r){const i=this.Bi(e,n);V("RestConnection","Sending: ",i,s);const o={};return this.Ui(o,r),this.qi(e,i,o,s).then(a=>(V("RestConnection","Received: ",a),a),a=>{throw vh("RestConnection",`${e} failed with error: `,a,"url: ",i,"request:",s),a})}Ki(e,n,s,r){return this.Li(e,n,s,r)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+$n,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const s in n.authHeaders)n.authHeaders.hasOwnProperty(s)&&(e[s]=n.authHeaders[s])}Bi(e,n){const s=Kw[e];return`${this.Fi}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,s,r){return new Promise((i,o)=>{const a=new Ev;a.listenOnce(yv.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ca.NO_ERROR:const c=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(c)),i(c);break;case ca.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new B(D.DEADLINE_EXCEEDED,"Request time out"));break;case ca.HTTP_ERROR:const u=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(g){const E=g.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(E)>=0?E:D.UNKNOWN}(f.status);o(new B(d,f.message))}else o(new B(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(D.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,s,15)})}ji(e,n){const s=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=gv(),i=mv(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new wv({})),this.Ui(o.initMessageHeaders,n),dm()||gm()||mm()||ym()||vm()||pm()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");V("Connection","Creating WebChannel: "+a,o);const l=r.createWebChannel(a,o);let c=!1,u=!1;const f=new zw({vi:g=>{u?V("Connection","Not sending because WebChannel is closed:",g):(c||(V("Connection","Opening WebChannel transport."),l.open(),c=!0),V("Connection","WebChannel sending:",g),l.send(g))},Vi:()=>l.close()}),d=(g,E,N)=>{g.listen(E,S=>{try{N(S)}catch(_){setTimeout(()=>{throw _},0)}})};return d(l,Yr.EventType.OPEN,()=>{u||V("Connection","WebChannel transport opened.")}),d(l,Yr.EventType.CLOSE,()=>{u||(u=!0,V("Connection","WebChannel transport closed"),f.$i())}),d(l,Yr.EventType.ERROR,g=>{u||(u=!0,vh("Connection","WebChannel transport errored:",g),f.$i(new B(D.UNAVAILABLE,"The operation could not be completed")))}),d(l,Yr.EventType.MESSAGE,g=>{var E;if(!u){const N=g.data[0];Ie(!!N);const S=N,_=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(_){V("Connection","WebChannel received error:",_);const U=_.status;let z=function(ye){const Ee=be[ye];if(Ee!==void 0)return jh(Ee)}(U),W=_.message;z===void 0&&(z=D.INTERNAL,W="Unknown error status: "+U+" with message "+_.message),u=!0,f.$i(new B(z,W)),l.close()}else V("Connection","WebChannel received:",N),f.Oi(N)}}),d(i,vv.STAT_EVENT,g=>{g.stat===gh.PROXY?V("Connection","Detected buffering proxy"):g.stat===gh.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ki()},0),f}}function Fa(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){return new lw(t,!0)}class ff{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Qi=s,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),s=Math.max(0,Date.now()-this.Ji),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n,s,r,i,o,a){this.Oe=e,this.er=s,this.nr=r,this.sr=i,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new ff(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===D.RESOURCE_EXHAUSTED?($t(n.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(s=>{this.ir===n&&this.Er(s)},s=>{e(()=>{const r=new B(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ir(r)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(s=>{n(()=>this.Ir(s))}),this.stream.onMessage(s=>{n(()=>this.onMessage(s))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qw extends Ww{constructor(e,n,s,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i),this.N=r}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=dw(this.N,e),s=function(r){if(!("targetChange"in r))return re.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?Vs(i.readTime):re.min()}(e);return this.listener.Rr(n,s)}br(e){const n={};n.database=Jh(this.N),n.addTarget=function(r,i){let o;const a=i.target;return o=Ea(a)?{documents:pw(r,a)}:{query:gw(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=uw(r,i.resumeToken):i.snapshotVersion.compareTo(re.min())>0&&(o.readTime=cw(r,i.snapshotVersion.toTimestamp())),o}(this.N,e);const s=yw(this.N,e);s&&(n.labels=s),this.mr(n)}Pr(e){const n={};n.database=Jh(this.N),n.removeTarget=e,this.mr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw extends class{}{constructor(e,n,s){super(),this.credentials=e,this.sr=n,this.N=s,this.kr=!1}$r(){if(this.kr)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,s){return this.$r(),this.credentials.getToken().then(r=>this.sr.Li(e,n,s,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new B(D.UNKNOWN,r.toString())})}Ki(e,n,s){return this.$r(),this.credentials.getToken().then(r=>this.sr.Ki(e,n,s,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new B(D.UNKNOWN,r.toString())})}terminate(){this.kr=!0}}class Xw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?($t(n),this.Mr=!1):V("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(o=>{s.enqueueAndForget(async()=>{Hs(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=te(a);l.Wr.add(4),await Bs(l),l.Hr.set("Unknown"),l.Wr.delete(4),await ui(l)}(this))})}),this.Hr=new Xw(s,r)}}async function ui(t){if(Hs(t))for(const e of t.Gr)await e(!0)}async function Bs(t){for(const e of t.Gr)await e(!1)}function df(t,e){const n=te(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),$a(n)?Ua(n):Gn(n).hr()&&Va(n,e))}function pf(t,e){const n=te(t),s=Gn(n);n.Qr.delete(e),s.hr()&&gf(n,e),n.Qr.size===0&&(s.hr()?s.wr():Hs(n)&&n.Hr.set("Unknown"))}function Va(t,e){t.Jr.Y(e.targetId),Gn(t).br(e)}function gf(t,e){t.Jr.Y(e),Gn(t).Pr(e)}function Ua(t){t.Jr=new iw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),Gn(t).start(),t.Hr.Lr()}function $a(t){return Hs(t)&&!Gn(t).ur()&&t.Qr.size>0}function Hs(t){return te(t).Wr.size===0}function mf(t){t.Jr=void 0}async function Zw(t){t.Qr.forEach((e,n)=>{Va(t,e)})}async function eE(t,e){mf(t),$a(t)?(t.Hr.qr(e),Ua(t)):t.Hr.set("Unknown")}async function tE(t,e,n){if(t.Hr.set("Online"),e instanceof Gh&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Qr.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Qr.delete(o),s.Jr.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yf(t,s)}else if(e instanceof ci?t.Jr.rt(e):e instanceof zh?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(re.min()))try{const s=await af(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Jr._t(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Qr.get(l);c&&r.Qr.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=r.Qr.get(a);if(!l)return;r.Qr.set(a,l.withResumeToken($e.EMPTY_BYTE_STRING,l.snapshotVersion)),gf(r,a);const c=new fn(l.target,a,1,l.sequenceNumber);Va(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await yf(t,s)}}async function yf(t,e,n){if(!Us(e))throw e;t.Wr.add(1),await Bs(t),t.Hr.set("Offline"),n||(n=()=>af(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await ui(t)})}async function nE(t,e){const n=te(t);e?(n.Wr.delete(2),await ui(n)):e||(n.Wr.add(2),await Bs(n),n.Hr.set("Unknown"))}function Gn(t){return t.Yr||(t.Yr=function(e,n,s){const r=te(e);return r.$r(),new Qw(n,r.sr,r.credentials,r.N,s)}(t.datastore,t.asyncQueue,{Si:Zw.bind(null,t),Ci:eE.bind(null,t),Rr:tE.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),$a(t)?Ua(t):t.Hr.set("Unknown")):(await t.Yr.stop(),mf(t))})),t.Yr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ba(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(t,e){if($t("AsyncQueue",`${e}: ${t}`),Us(t))return new B(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=Na(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new Wn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Wn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.Zr=new We(j.comparator)}track(e){const n=e.doc.key,s=this.Zr.get(n);s?e.type!==0&&s.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&s.type!==1?this.Zr=this.Zr.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Zr=this.Zr.remove(n):e.type===1&&s.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):Y():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,s)=>{e.push(s)}),e}}class Qn{constructor(e,n,s,r,i,o,a,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Qn(e,n,Wn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ti(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.no=void 0,this.listeners=[]}}class rE{constructor(){this.queries=new $s(e=>Dh(e),ti),this.onlineState="Unknown",this.so=new Set}}async function iE(t,e){const n=te(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new sE),r)try{i.no=await n.onListen(s)}catch(o){const a=vf(o,`Initialization of query '${ba(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.io(n.onlineState),i.no&&e.ro(i.no)&&Ha(n)}async function oE(t,e){const n=te(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function aE(t,e){const n=te(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.ro(r)&&(s=!0);o.no=r}}s&&Ha(n)}function lE(t,e,n){const s=te(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ha(t){t.so.forEach(e=>{e.next()})}class cE{constructor(e,n,s){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=s||{}}ro(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Qn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.fo||!s)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=Qn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.key=e}}class Tf{constructor(e){this.key=e}}class uE{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=me(),this.mutatedKeys=me(),this.Io=xh(e),this.Ao=new Wn(this.Io)}get Ro(){return this.po}bo(e,n){const s=n?n.Po:new wf,r=n?n.Ao:this.Ao;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=ei(this.query)&&r.size===this.query.limit?r.last():null,c=Aa(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const d=r.get(u),g=ni(this.query,f)?f:null,E=!!d&&this.mutatedKeys.has(d.key),N=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;d&&g?d.data.isEqual(g.data)?E!==N&&(s.track({type:3,doc:g}),S=!0):this.vo(d,g)||(s.track({type:2,doc:g}),S=!0,(l&&this.Io(g,l)>0||c&&this.Io(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),S=!0):d&&!g&&(s.track({type:1,doc:d}),S=!0,(l||c)&&(a=!0)),S&&(g?(o=o.add(g),i=N?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),ei(this.query)||Aa(this.query))for(;o.size>this.query.limit;){const u=ei(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Ao:o,Po:s,Ln:a,mutatedKeys:i}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const i=e.Po.eo();i.sort((c,u)=>function(f,d){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return g(f)-g(d)}(c.type,u.type)||this.Io(c.doc,u.doc)),this.Vo(s);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,l=a!==this.To;return this.To=a,i.length!==0||l?{snapshot:new Qn(this.query,e.Ao,r,i,e.mutatedKeys,a===0,l,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new wf,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=me(),this.Ao.forEach(s=>{this.Co(s.key)&&(this.Eo=this.Eo.add(s.key))});const n=[];return e.forEach(s=>{this.Eo.has(s)||n.push(new Tf(s))}),this.Eo.forEach(s=>{e.has(s)||n.push(new Ef(s))}),n}No(e){this.po=e.Gn,this.Eo=me();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return Qn.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class hE{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class fE{constructor(e){this.key=e,this.ko=!1}}class dE{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new $s(a=>Dh(a),ti),this.Fo=new Map,this.Mo=new Set,this.Lo=new We(j.comparator),this.Bo=new Map,this.Uo=new La,this.qo={},this.Ko=new Map,this.jo=zn.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function pE(t,e){const n=TE(t);let s,r;const i=n.Oo.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.xo();else{const o=await Lw(n.localStore,un(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await gE(n,e,s,a==="current"),n.isPrimaryClient&&df(n.remoteStore,o)}return r}async function gE(t,e,n,s){t.Wo=(u,f,d)=>async function(g,E,N,S){let _=E.view.bo(N);_.Ln&&(_=await lf(g.localStore,E.query,!1).then(({documents:W})=>E.view.bo(W,_)));const U=S&&S.targetChanges.get(E.targetId),z=E.view.applyChanges(_,g.isPrimaryClient,U);return Sf(g,E.targetId,z.Do),z.snapshot}(t,u,f,d);const r=await lf(t.localStore,e,!0),i=new uE(e,r.Gn),o=i.bo(r.documents),a=Fs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),l=i.applyChanges(o,t.isPrimaryClient,a);Sf(t,n,l.Do);const c=new hE(e,n,i);return t.Oo.set(e,c),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),l.snapshot}async function mE(t,e){const n=te(t),s=n.Oo.get(e),r=n.Fo.get(s.targetId);if(r.length>1)return n.Fo.set(s.targetId,r.filter(i=>!ti(i,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ka(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),pf(n.remoteStore,s.targetId),ja(n,s.targetId)}).catch(Oa)):(ja(n,s.targetId),await ka(n.localStore,s.targetId,!0))}async function If(t,e){const n=te(t);try{const s=await Pw(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Bo.get(i);o&&(Ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ko=!0:r.modifiedDocuments.size>0?Ie(o.ko):r.removedDocuments.size>0&&(Ie(o.ko),o.ko=!1))}),await Cf(n,s,e)}catch(s){await Oa(s)}}function Af(t,e,n){const s=te(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Oo.forEach((i,o)=>{const a=o.view.io(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=te(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const f of u.listeners)f.io(o)&&(l=!0)}),l&&Ha(a)}(s.eventManager,e),r.length&&s.$o.Rr(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yE(t,e,n){const s=te(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Bo.get(e),i=r&&r.key;if(i){let o=new We(j.comparator);o=o.insert(i,Be.newNoDocument(i,re.min()));const a=me().add(i),l=new li(re.min(),new Map,new Me(ie),o,a);await If(s,l),s.Lo=s.Lo.remove(i),s.Bo.delete(e),qa(s)}else await ka(s.localStore,e,!1).then(()=>ja(s,e,n)).catch(Oa)}function ja(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Fo.get(e))t.Oo.delete(s),n&&t.$o.Go(s,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(s=>{t.Uo.containsKey(s)||bf(t,s)})}function bf(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(pf(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),qa(t))}function Sf(t,e,n){for(const s of n)s instanceof Ef?(t.Uo.addReference(s.key,e),vE(t,s)):s instanceof Tf?(V("SyncEngine","Document no longer in limbo: "+s.key),t.Uo.removeReference(s.key,e),t.Uo.containsKey(s.key)||bf(t,s.key)):Y()}function vE(t,e){const n=e.key,s=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(s)||(V("SyncEngine","New document in limbo: "+n),t.Mo.add(s),qa(t))}function qa(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new j(we.fromString(e)),s=t.jo.next();t.Bo.set(s,new fE(n)),t.Lo=t.Lo.insert(n,s),df(t.remoteStore,new fn(un(Ia(n.path)),s,2,ha.T))}}async function Cf(t,e,n){const s=te(t),r=[],i=[],o=[];s.Oo.isEmpty()||(s.Oo.forEach((a,l)=>{o.push(s.Wo(l,e,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=Pa.kn(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.$o.Rr(r),await async function(a,l){const c=te(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>x.forEach(l,f=>x.forEach(f.Nn,d=>c.persistence.referenceDelegate.addReference(u,f.targetId,d)).next(()=>x.forEach(f.xn,d=>c.persistence.referenceDelegate.removeReference(u,f.targetId,d)))))}catch(u){if(!Us(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const f=u.targetId;if(!u.fromCache){const d=c.Un.get(f),g=d.snapshotVersion,E=d.withLastLimboFreeSnapshotVersion(g);c.Un=c.Un.insert(f,E)}}}(s.localStore,i))}async function wE(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await of(n.localStore,e);n.currentUser=e,function(r,i){r.Ko.forEach(o=>{o.forEach(a=>{a.reject(new B(D.CANCELLED,i))})}),r.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Cf(n,s.Wn)}}function EE(t,e){const n=te(t),s=n.Bo.get(e);if(s&&s.ko)return me().add(s.key);{let r=me();const i=n.Fo.get(e);if(!i)return r;for(const o of i){const a=n.Oo.get(o);r=r.unionWith(a.view.Ro)}return r}}function TE(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=If.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yE.bind(null,e),e.$o.Rr=aE.bind(null,e.eventManager),e.$o.Go=lE.bind(null,e.eventManager),e}class IE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=hf(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return Ow(this.persistence,new Dw,e.initialUser,this.N)}Jo(e){return new Bw(Ma.Ns,this.N)}Ho(e){return new jw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Af(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wE.bind(null,this.syncEngine),await nE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rE}createDatastore(e){const n=hf(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Gw(r));var r;return function(i,o,a){return new Yw(i,o,a)}(e.credentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Af(this.syncEngine,a,0),o=uf.bt()?new uf:new qw,new Jw(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,l,c){const u=new dE(s,r,i,o,a,l);return c&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);V("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await Bs(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n,s){this.credentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=wh.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async r=>{V("FirestoreClient","Received user=",r.uid),await this.credentialListener(r),this.user=r})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const s=vf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function CE(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await of(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function _E(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RE(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>async function(i,o){const a=te(i);a.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const l=Hs(a);a.Wr.add(3),await Bs(a),l&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await ui(a)}(e.remoteStore,r)),t.onlineComponents=e}async function RE(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await CE(t,new IE)),t.offlineComponents}async function NE(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await _E(t,new AE)),t.onlineComponents}async function DE(t){const e=await NE(t),n=e.eventManager;return n.onListen=pE.bind(null,e.syncEngine),n.onUnlisten=mE.bind(null,e.syncEngine),n}function xE(t,e,n={}){const s=new ln;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,l){const c=new bE({next:f=>{i.enqueueAndForget(()=>oE(r,u));const d=f.docs.has(o);!d&&f.fromCache?l.reject(new B(D.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&a&&a.source==="server"?l.reject(new B(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),u=new cE(Ia(o.path),c,{includeMetadataChanges:!0,fo:!0});return iE(r,u)}(await DE(t),t.asyncQueue,e,n,s)),s.promise}class OE{constructor(e,n,s,r,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class js{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t,e,n){if(!n)throw new B(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kE(t,e,n,s){if(e===!0&&s===!0)throw new B(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rf(t){if(!j.isDocumentKey(t))throw new B(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function LE(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Nf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=LE(t);throw new B(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,kE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Df({}),this._settingsFrozen=!1,e instanceof js?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new B(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new js(s.options.projectId)}(e))}get app(){if(!this._app)throw new B(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Df(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new Iv;switch(n.type){case"gapi":const s=n.client;return Ie(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Sv(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new B(D.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=_f.get(e);n&&(V("ComponentProvider","Removing Datastore"),_f.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class Ka{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ka(this.firestore,e,this._query)}}class qs extends Ka{constructor(e,n,s){super(e,n,Ia(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new j(e))}withConverter(e){return new qs(this.firestore,e,this._path)}}function s0(t,e,...n){if(t=Im(t),arguments.length===1&&(e=wh.I()),PE("doc","path",e),t instanceof xf){const s=we.fromString(e,...n);return Rf(s),new _t(t,null,new j(s))}{if(!(t instanceof _t||t instanceof qs))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Rf(s),new _t(t.firestore,t instanceof qs?t.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new ff(this,"async_queue_retry"),this.Rc=()=>{const n=Fa();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=Fa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=Fa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new ln;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Us(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(s=>{this.Tc=s,this.Ec=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw $t("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ec=!1,s))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const r=Ba.createAndSchedule(this,e,n,s,i=>this.Vc(i));return this.yc.push(r),r}bc(){this.Tc&&Y()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}class Of extends xf{constructor(e,n){super(e,n),this.type="firestore",this._queue=new ME,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Pf(this),this._firestoreClient.terminate()}}function r0(t=uy()){return oy(t,"firestore").getImmediate()}function FE(t){return t._firestoreClient||Pf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pf(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new OE(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new SE(t._credentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hi($e.fromBase64String(e))}catch(n){throw new B(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hi($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}const UE=new RegExp("[~\\*/\\[\\]]");function $E(t,e,n){if(e.search(UE)>=0)throw Lf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kf(...e.split("."))._internalPath}catch{throw Lf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lf(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new B(D.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ff("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BE extends Mf{data(){return super.data()}}function Ff(t,e){return typeof e=="string"?$E(t,e):e instanceof kf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vf extends Mf{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jE(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ff("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class jE extends Vf{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{convertValue(e,n="none"){switch(cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const s={};return Xr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new VE(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ih(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Os(e));default:return null}}convertTimestamp(e){const n=Ht(e);return new Bt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=we.fromString(e);Ie(sf(s));const r=new js(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||$t(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t){t=Nf(t,_t);const e=Nf(t.firestore,Of);return xE(FE(e),t._key).then(n=>zE(e,t,n))}class KE extends qE{constructor(e){super(),this.firestore=e}convertBytes(e){return new hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function zE(t,e,n){const s=n.docs.get(e._key),r=new KE(t);return new Vf(t,r,e._key,s,new HE(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){$n=n})(cy),vo(new Ir("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Of(r,new Av(n.getProvider("auth-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),kn(mh,"3.3.0",t),kn(mh,"3.3.0","esm2017")})();export{mt as F,r0 as O,XE as a,tc as b,YE as c,ot as d,Tp as e,JE as f,_d as g,i0 as h,n0 as i,t0 as j,e0 as k,ZE as l,QE as o,WE as r,GE as t,s0 as v,Pd as w};
