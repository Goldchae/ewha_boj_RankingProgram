"use strict";(()=>{var e={};e.id=660,e.ids=[660],e.modules={4420:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var n=t(6859),i=t.n(n),s=t(7518),o=t(997);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach(function(r){var n,i;n=r,i=t[r],(n=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}class c extends i(){static async getInitialProps(e){let r=new s.ServerStyleSheet,t=e.renderPage;try{e.renderPage=()=>t({enhanceApp:e=>t=>r.collectStyles(o.jsx(e,l({},t)))});let n=await i().getInitialProps(e);return l(l({},n),{},{styles:(0,o.jsxs)(o.Fragment,{children:[n.styles,r.getStyleElement()]})})}finally{r.seal()}}render(){return(0,o.jsxs)(n.Html,{children:[o.jsx(n.Head,{children:o.jsx("style",{children:"body { margin: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }"})}),(0,o.jsxs)("body",{children:[o.jsx(n.Main,{}),o.jsx(n.NextScript,{})]})]})}}},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},7518:e=>{e.exports=require("styled-components")},1017:e=>{e.exports=require("path")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[859],()=>t(4420));module.exports=n})();