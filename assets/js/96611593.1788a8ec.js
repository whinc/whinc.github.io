"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3357],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,y=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},c="React UI \u7ec4\u4ef6\u5e93\u6362\u80a4\u8bbe\u8ba1\u601d\u8def",i={permalink:"/blog/2018/02/25/switch-react-component-theme-dynamically",editUrl:"https://github.com/whinc/whinc.github.io/tree/master/website/blog/2018/02-25-switch-react-component-theme-dynamically/index.md",source:"@site/blog/2018/02-25-switch-react-component-theme-dynamically/index.md",title:"React UI \u7ec4\u4ef6\u5e93\u6362\u80a4\u8bbe\u8ba1\u601d\u8def",description:"\u57fa\u4e8e React \u7684 UI \u7ec4\u4ef6\u5e93\u5c42\u51fa\u4e0d\u7a77\uff0c\u4f5c\u4e3a\u7ec4\u4ef6\u5e93\u5f88\u91cd\u8981\u7684\u4e00\u4e2a\u529f\u80fd\u5c31\u662f\u5b9e\u73b0\u4e3b\u9898\u6362\u80a4\u529f\u80fd\u3002\u901a\u8fc7\u7ec4\u4ef6\u5e93\u63d0\u4f9b\u7684\u4e3b\u9898\u5b9a\u5236\u63a5\u53e3\uff0c\u7528\u6237\u53ea\u9700\u8981\u4fee\u6539\u4e00\u4e9b\u7ec4\u4ef6\u7684 UI \u53c2\u6570\uff0c\u5c31\u53ef\u4ee5\u8fbe\u5230\u4fee\u6539\u6574\u4e2a\u7ec4\u4ef6\u5e93\u6837\u5f0f\u3002",date:"2018-02-25T00:00:00.000Z",formattedDate:"February 25, 2018",tags:[],readingTime:11.345,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"\u81ea\u5df1\u52a8\u624b\u5b9e\u73b0 ES6 Promise",permalink:"/blog/2018/02/25/implement-promise"}},l={authorsImageUrls:[]},p=[],u={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u57fa\u4e8e React \u7684 UI \u7ec4\u4ef6\u5e93\u5c42\u51fa\u4e0d\u7a77\uff0c\u4f5c\u4e3a\u7ec4\u4ef6\u5e93\u5f88\u91cd\u8981\u7684\u4e00\u4e2a\u529f\u80fd\u5c31\u662f\u5b9e\u73b0\u4e3b\u9898\u6362\u80a4\u529f\u80fd\u3002\u901a\u8fc7\u7ec4\u4ef6\u5e93\u63d0\u4f9b\u7684\u4e3b\u9898\u5b9a\u5236\u63a5\u53e3\uff0c\u7528\u6237\u53ea\u9700\u8981\u4fee\u6539\u4e00\u4e9b\u7ec4\u4ef6\u7684 UI \u53c2\u6570\uff0c\u5c31\u53ef\u4ee5\u8fbe\u5230\u4fee\u6539\u6574\u4e2a\u7ec4\u4ef6\u5e93\u6837\u5f0f\u3002"),(0,o.kt)("p",null,"\u76ee\u6807\uff1a\u53ef\u5b9a\u5236\u6027\u5f3a\uff0c\u5e76\u4e14\u6613\u5b66\u6613\u7528\u3002"))}s.isMDXComponent=!0}}]);