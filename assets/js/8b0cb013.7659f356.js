"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||h[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u81ea\u5b9a\u4e49 useHash hooks",date:new Date("2020-11-25T00:00:00.000Z"),tags:["React","React Hooks"]},l=void 0,c={permalink:"/blog/2020/usehash",editUrl:"https://github.com/whinc/whinc.github.io/tree/master/website/blog/2020/usehash.md",source:"@site/blog/2020/usehash.md",title:"\u81ea\u5b9a\u4e49 useHash hooks",description:"\u52a8\u673a & \u76ee\u6807",date:"2020-11-25T00:00:00.000Z",formattedDate:"November 25, 2020",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"React Hooks",permalink:"/blog/tags/react-hooks"}],readingTime:10.52,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u81ea\u5b9a\u4e49 useHash hooks",date:"2020-11-25T00:00:00.000Z",tags:["React","React Hooks"]},prevItem:{title:"\u642d\u5efa\u535a\u5ba2\u7ad9\u70b9 \u2014\u2014 \u57fa\u4e8e Docusaurus",permalink:"/blog/2023/how-to-setup-blog"},nextItem:{title:"glob \u6a21\u5f0f\u5339\u914d",permalink:"/blog/2020/glob"}},i={authorsImageUrls:[]},s=[{value:"\u52a8\u673a &amp; \u76ee\u6807",id:"\u52a8\u673a--\u76ee\u6807",level:2}],p={toc:s},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u52a8\u673a--\u76ee\u6807"},"\u52a8\u673a & \u76ee\u6807"),(0,o.kt)("p",null,"\u5728\u57fa\u4e8e hash \u6a21\u5f0f\u7684 web \u5355\u9875\u5e94\u7528\u4e2d\uff0c\u7ecf\u5e38\u9700\u8981\u8bfb\u5199 hash \u4e2d\u7684\u67e5\u8be2\u53c2\u6570\uff0c\u4f8b\u5982\u4ece hash \u67e5\u8be2\u53c2\u6570\u4e2d\u8bfb\u53d6\u5546\u54c1 ID\u3002\u5728 React \u5e94\u7528\u4e2d\uff0c\u5982\u679c\u76f4\u63a5\u89e3\u6790",(0,o.kt)("inlineCode",{parentName:"p"},"window.location.hash"),"\u503c\uff0c\u5219 hash \u53d8\u5316\u65f6\u65e0\u6cd5\u6536\u5230\u66f4\u65b0\uff0c\u4f60\u8fd8\u9700\u8981\u76d1\u542c",(0,o.kt)("inlineCode",{parentName:"p"},"hashchange"),"\u4e8b\u4ef6\u6765\u66f4\u65b0\u5185\u90e8\u72b6\u6001\uff0c\u8fd9\u4e9b\u7e41\u7410\u7684\u6b65\u9aa4\u53ef\u4ee5\u5c01\u88c5\u6210\u81ea\u5b9a\u4e49 hooks\uff0c\u540c\u65f6\u66f4\u8fdb\u4e00\u6b65\u7ed9\u53c2\u6570\u52a0\u4e0a\u81ea\u52a8\u7c7b\u578b\u89e3\u6790\u548c\u5e8f\u5217\u5316\uff0c\u4f7f\u5176\u652f\u6301\u4efb\u610f\u53c2\u6570\u503c\u7c7b\u578b\uff08\u5305\u62ec\u5d4c\u5957\u7684 JSON \u5bf9\u8c61\uff09\uff0c\u5168\u90e8\u8fd9\u4e9b\u529f\u80fd\u4ec5\u9700\u8981\u4e00\u4e2a\u7b80\u5355\u7684 hook \u5373\u53ef\u5b9e\u73b0\u3002"))}h.isMDXComponent=!0}}]);