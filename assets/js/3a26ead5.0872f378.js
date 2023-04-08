"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8580],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,g=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={tag:["Node.js","JavaScript"]},i="JavaScript \u9879\u76ee\u5fc5\u5907\u914d\u7f6e",l={permalink:"/blog/2019/07/30/setup-js-project",editUrl:"https://github.com/whinc/whinc.github.io/tree/master/website/blog/2019/07-30-setup-js-project/index.md",source:"@site/blog/2019/07-30-setup-js-project/index.md",title:"JavaScript \u9879\u76ee\u5fc5\u5907\u914d\u7f6e",description:"\u672c\u6587\u4ecb\u7ecd\u4e00\u4e9b\u524d\u7aef\u9879\u76ee\u7684\u901a\u7528\u914d\u7f6e\u53ca\u76f8\u5173\u8d44\u6e90\uff0c\u4ee5\u4fbf\u4f60\u4e86\u89e3\u9879\u76ee\u4e2d\u5e38\u89c1\u914d\u7f6e\u7684\u542b\u4e49\u4ee5\u53ca\u914d\u7f6e\u65b9\u5f0f\u3002",date:"2019-07-30T00:00:00.000Z",formattedDate:"July 30, 2019",tags:[],readingTime:9.915,hasTruncateMarker:!0,authors:[],frontMatter:{tag:["Node.js","JavaScript"]},prevItem:{title:"glob \u6a21\u5f0f\u5339\u914d\u6559\u7a0b",permalink:"/blog/2020/02/24/glob"},nextItem:{title:"Web \u524d\u7aef\u8def\u7531\u539f\u7406\u89e3\u6790\u548c\u5b9e\u73b0",permalink:"/blog/2019/03/12/web-router-principle"}},c={authorsImageUrls:[]},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e00\u4e9b\u524d\u7aef\u9879\u76ee\u7684\u901a\u7528\u914d\u7f6e\u53ca\u76f8\u5173\u8d44\u6e90\uff0c\u4ee5\u4fbf\u4f60\u4e86\u89e3\u9879\u76ee\u4e2d\u5e38\u89c1\u914d\u7f6e\u7684\u542b\u4e49\u4ee5\u53ca\u914d\u7f6e\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u76ee\u5f55"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".gitignore - \u8ba9 Git \u63d0\u4ea4\u65f6\u5ffd\u7565\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"editorconfig - \u8ba9\u7f16\u8f91\u5668\u6216IDEs\u4fdd\u6301\u4e00\u81f4\u7684\u7f16\u7801\u6837\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"husky - \u4f7f\u7528 git hooks \u89e6\u53d1\u52a8\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"lint-staged - \u5bf9 git \u6682\u5b58\u533a\u5339\u914d\u7684\u6587\u4ef6\u6267\u884c\u52a8\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"commitzen - \u547d\u4ee4\u884c\u4ea4\u4e92\u5f0f\u751f\u6210\u7b26\u5408",(0,a.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/zh-hans"},"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303"),"\u7684 commit message"),(0,a.kt)("li",{parentName:"ul"},"commitlint - \u786e\u4fdd commit message \u7b26\u5408\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303"),(0,a.kt)("li",{parentName:"ul"},"Prettier - \u7f8e\u5316\u4ee3\u7801\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"ESLint - \u68c0\u67e5 JS \u4ee3\u7801\u8d28\u91cf"),(0,a.kt)("li",{parentName:"ul"},"Stylelint - \u68c0\u67e5 CSS \u4ee3\u7801\u8d28\u91cf")))}m.isMDXComponent=!0}}]);