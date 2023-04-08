"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={tags:["Antd","React"],keywords:["antd","antd modal","antd \u5f39\u7a97"]},l="Antd \u5f39\u7a97\u5c01\u88c5",i={permalink:"/blog/2023/03/04/antd-create-modal",editUrl:"https://github.com/whinc/whinc.github.io/tree/master/website/blog/2023/03-04-antd-create-modal/index.mdx",source:"@site/blog/2023/03-04-antd-create-modal/index.mdx",title:"Antd \u5f39\u7a97\u5c01\u88c5",description:"\u5728 Antd \u4e2d\u5f39\u7a97\u7684\u4f7f\u7528\u9891\u7387\u5f88\u9ad8\uff0c\u4e00\u4e2a\u597d\u7528\u7684\u5f39\u7a97\u6211\u8ba4\u4e3a\u5e94\u8be5\u5177\u5907\u51e0\u4e2a\u7279\u70b9\uff1a",date:"2023-03-04T00:00:00.000Z",formattedDate:"March 4, 2023",tags:[{label:"Antd",permalink:"/blog/tags/antd"},{label:"React",permalink:"/blog/tags/react"}],readingTime:4.36,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["Antd","React"],keywords:["antd","antd modal","antd \u5f39\u7a97"]},prevItem:{title:"Knex.js \u6559\u7a0b",permalink:"/blog/2023/04/05/knex-tutorial"},nextItem:{title:"\u642d\u5efa\u535a\u5ba2\u7ad9\u70b9",permalink:"/blog/2023/03/04/how-to-setup-blog"}},c={authorsImageUrls:[]},p=[],d={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Antd \u4e2d\u5f39\u7a97\u7684\u4f7f\u7528\u9891\u7387\u5f88\u9ad8\uff0c\u4e00\u4e2a\u597d\u7528\u7684\u5f39\u7a97\u6211\u8ba4\u4e3a\u5e94\u8be5\u5177\u5907\u51e0\u4e2a\u7279\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301\u547d\u4ee4\u5f0f\u8c03\u7528\uff0c\u7c7b\u4f3c",(0,a.kt)("inlineCode",{parentName:"li"},"window.alert()"),"\u8fd9\u79cd\u65b9\u5f0f\uff08\u65e0\u9700\u5173\u6ce8\u5f39\u7a97\u7684\u58f0\u660e\u4f4d\u7f6e\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u80fd\u591f\u4e0e\u5f39\u7a97\u8fdb\u884c\u4ea4\u4e92\uff0c\u5373\u63d0\u4f9b\u53c2\u6570\u63a7\u5236\u5f39\u7a97\u7684\u6e32\u67d3\uff0c\u540c\u65f6\u5f39\u7a97\u5173\u95ed\u65f6\u80fd\u4ece\u4e2d\u83b7\u53d6\u6240\u9700\u6570\u636e\uff08\u8fd9\u4e2a\u5728\u8868\u5355\u573a\u666f\u5e38\u89c1\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u5f39\u7a97\u7684\u72b6\u6001\u4e0e\u5176\u6240\u5728\u7ec4\u4ef6\u6811\u9694\u79bb\uff08\u907f\u514d\u72b6\u6001\u6c61\u67d3\uff09")),(0,a.kt)("p",null,"Antd \u63d0\u4f9b\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://4x.ant.design/components/modal-cn/#Modal.method()"},"Modal.method()")," \u5f88\u597d\u7684\u5904\u7406\u4e86\u7b2c 1 \u548c 3 \u4e2a\u95ee\u9898\uff0c\u4f7f\u7528\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Modal.confirm({\n    title: '\u786e\u8ba4\uff1f',\n    content: <MyModalContent>,\n    onOk () {\n        // do something\n    }\n})\n")),(0,a.kt)("p",null,"\u4f46\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Modal.method()"),"\u5e76\u672a\u89e3\u51b3\u7b2c 2 \u4e2a\u95ee\u9898\uff0c\u5176\u5185\u5bb9\u5c55\u793a\u540e\u5c31\u4e0e\u5f53\u524d\u4e0a\u4e0b\u6587\u8131\u79bb\u8054\u7cfb\u4e86\uff0c\u4e3a\u4e86\u5b9e\u73b0\u6240\u671f\u671b\u7684\u5f39\u7a97\uff0c\u4e0b\u9762\u6211\u5c1d\u8bd5\u4e86\u51e0\u79cd\u5c01\u88c5\u65b9\u5f0f\uff0c\u8bd5\u56fe\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"))}s.isMDXComponent=!0}}]);