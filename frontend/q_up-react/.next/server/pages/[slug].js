(()=>{var e={};e.id=219,e.ids=[219,888,660],e.modules={5779:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i}),r(6764),r(5213);var s=r(997);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}let i=function({Component:e,pageProps:t}){return s.jsx(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var s,n;s=t,n=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(s))in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t))}},4420:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(6859),n=r.n(s),i=r(7518),o=r(997);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var s,n;s=t,n=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(s))in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}class c extends n(){static async getInitialProps(e){let t=new i.ServerStyleSheet,r=e.renderPage;try{e.renderPage=()=>r({enhanceApp:e=>r=>t.collectStyles(o.jsx(e,l({},r)))});let s=await n().getInitialProps(e);return l(l({},s),{},{styles:(0,o.jsxs)(o.Fragment,{children:[s.styles,t.getStyleElement()]})})}finally{t.seal()}}render(){return(0,o.jsxs)(s.Html,{children:[o.jsx(s.Head,{children:o.jsx("style",{children:"body { margin: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }"})}),(0,o.jsxs)("body",{children:[o.jsx(s.Main,{}),o.jsx(s.NextScript,{})]})]})}}},5055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>v,default:()=>d,getServerSideProps:()=>y,getStaticPaths:()=>P,getStaticProps:()=>g,reportWebVitals:()=>m,routeModule:()=>w,unstable_getServerProps:()=>O,unstable_getServerSideProps:()=>x,unstable_getStaticParams:()=>h,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>j});var s={};r.r(s),r.d(s,{default:()=>b,getStaticPaths:()=>p,getStaticProps:()=>f});var n=r(7093),i=r(5244),o=r(1323),a=r(4420),l=r(5779),c=r(1163),u=r(997);async function p(){return{paths:[{params:{slug:"post-1"}},{params:{slug:"post-2"}},{params:{slug:"post-3"}}],fallback:!1}}async function f({params:e}){return{props:{post:({"post-1":{title:"Post 1",content:"This is the content of Post 1."},"post-2":{title:"Post 2",content:"This is the content of Post 2."},"post-3":{title:"Post 3",content:"This is the content of Post 3."}})[e.slug]||null}}}let b=({post:e})=>(0,c.useRouter)().isFallback?u.jsx("div",{children:"Loading..."}):e?(0,u.jsxs)("div",{children:[u.jsx("h1",{children:e.title}),u.jsx("p",{children:e.content})]}):u.jsx("div",{children:"Post not found"}),d=(0,o.l)(s,"default"),g=(0,o.l)(s,"getStaticProps"),P=(0,o.l)(s,"getStaticPaths"),y=(0,o.l)(s,"getServerSideProps"),v=(0,o.l)(s,"config"),m=(0,o.l)(s,"reportWebVitals"),j=(0,o.l)(s,"unstable_getStaticProps"),S=(0,o.l)(s,"unstable_getStaticPaths"),h=(0,o.l)(s,"unstable_getStaticParams"),O=(0,o.l)(s,"unstable_getServerProps"),x=(0,o.l)(s,"unstable_getServerSideProps"),w=new n.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/[slug]",pathname:"/[slug]",bundlePath:"",filename:""},components:{App:l.default,Document:a.default},userland:s})},6764:()=>{},5213:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},3973:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7518:e=>{"use strict";e.exports=require("styled-components")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[859,695,163],()=>r(5055));module.exports=s})();