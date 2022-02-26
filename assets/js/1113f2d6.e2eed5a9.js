"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[316],{3905:function(e,a,n){n.d(a,{Zo:function(){return i},kt:function(){return m}});var s=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,s)}return n}function h(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,s,t=function(e,a){if(null==e)return{};var n,s,t={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=s.createContext({}),c=function(e){var a=s.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):h(h({},a),e)),n},i=function(e){var a=c(e.components);return s.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},p=s.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=t,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?s.createElement(d,h(h({ref:a},i),{},{components:n})):s.createElement(d,h({ref:a},i))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,h=new Array(r);h[0]=p;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,h[1]=o;for(var c=2;c<r;c++)h[c]=n[c];return s.createElement.apply(null,h)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4767:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return i},toc:function(){return u},default:function(){return m}});var s=n(7462),t=n(3366),r=(n(7294),n(3905)),h=["components"],o={title:"useHash \u8bfb\u5199\u8def\u7531\u53c2\u6570",tags:["useHash","\u8def\u7531\u53c2\u6570"]},l=void 0,c={permalink:"/blog/2020/11/25/usehash",editUrl:"https://github.com/whinc/whinc.github.io/tree/master/website/blog/2020-11-25-usehash.md",source:"@site/blog/2020-11-25-usehash.md",title:"useHash \u8bfb\u5199\u8def\u7531\u53c2\u6570",description:"\u76ee\u5f55",date:"2020-11-25T00:00:00.000Z",formattedDate:"November 25, 2020",tags:[{label:"useHash",permalink:"/blog/tags/use-hash"},{label:"\u8def\u7531\u53c2\u6570",permalink:"/blog/tags/\u8def\u7531\u53c2\u6570"}],readingTime:10.7,truncated:!1,authors:[],frontMatter:{title:"useHash \u8bfb\u5199\u8def\u7531\u53c2\u6570",tags:["useHash","\u8def\u7531\u53c2\u6570"]}},i={authorsImageUrls:[]},u=[{value:"\u52a8\u673a &amp; \u76ee\u6807",id:"\u52a8\u673a--\u76ee\u6807",children:[],level:2},{value:"<code>useHash</code> - \u8bfb\u5199 hash \u503c",id:"usehash---\u8bfb\u5199-hash-\u503c",children:[],level:2},{value:"<code>useHashSearchParams</code> - \u8bfb\u5199 hash \u7684\u67e5\u8be2\u53c2\u6570",id:"usehashsearchparams---\u8bfb\u5199-hash-\u7684\u67e5\u8be2\u53c2\u6570",children:[],level:2},{value:"<code>useHashSearchParamsJSON</code> - \u6309 JSON \u683c\u5f0f\u8bfb\u5199 hash \u7684\u67e5\u8be2\u53c2\u6570",id:"usehashsearchparamsjson---\u6309-json-\u683c\u5f0f\u8bfb\u5199-hash-\u7684\u67e5\u8be2\u53c2\u6570",children:[],level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[],level:2}],p={toc:u};function m(e){var a=e.components,n=(0,t.Z)(e,h);return(0,r.kt)("wrapper",(0,s.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76ee\u5f55")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u52a8\u673a & \u76ee\u6807"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useHash")," - \u8bfb\u5199 hash \u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useHashSearchParams")," - \u8bfb\u5199 hash \u7684\u67e5\u8be2\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useHashSearchParamsJSON")," - \u6309 JSON \u683c\u5f0f\u8bfb\u5199 hash \u7684\u67e5\u8be2\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u5c0f\u7ed3")),(0,r.kt)("h2",{id:"\u52a8\u673a--\u76ee\u6807"},"\u52a8\u673a & \u76ee\u6807"),(0,r.kt)("p",null,"\u5728\u57fa\u4e8e hash \u6a21\u5f0f\u7684 web \u5355\u9875\u5e94\u7528\u4e2d\uff0c\u7ecf\u5e38\u9700\u8981\u8bfb\u5199 hash \u4e2d\u7684\u67e5\u8be2\u53c2\u6570\uff0c\u4f8b\u5982\u4ece hash \u67e5\u8be2\u53c2\u6570\u4e2d\u8bfb\u53d6\u5546\u54c1 ID\u3002\u5728 React \u5e94\u7528\u4e2d\uff0c\u5982\u679c\u76f4\u63a5\u89e3\u6790",(0,r.kt)("inlineCode",{parentName:"p"},"window.location.hash"),"\u503c\uff0c\u5219 hash \u53d8\u5316\u65f6\u65e0\u6cd5\u6536\u5230\u66f4\u65b0\uff0c\u4f60\u8fd8\u9700\u8981\u76d1\u542c",(0,r.kt)("inlineCode",{parentName:"p"},"hashchange"),"\u4e8b\u4ef6\u6765\u66f4\u65b0\u5185\u90e8\u72b6\u6001\uff0c\u8fd9\u4e9b\u7e41\u7410\u7684\u6b65\u9aa4\u53ef\u4ee5\u5c01\u88c5\u6210\u81ea\u5b9a\u4e49 hooks\uff0c\u540c\u65f6\u66f4\u8fdb\u4e00\u6b65\u7ed9\u53c2\u6570\u52a0\u4e0a\u81ea\u52a8\u7c7b\u578b\u89e3\u6790\u548c\u5e8f\u5217\u5316\uff0c\u4f7f\u5176\u652f\u6301\u4efb\u610f\u53c2\u6570\u503c\u7c7b\u578b\uff08\u5305\u62ec\u5d4c\u5957\u7684 JSON \u5bf9\u8c61\uff09\uff0c\u5168\u90e8\u8fd9\u4e9b\u529f\u80fd\u4ec5\u9700\u8981\u4e00\u4e2a\u7b80\u5355\u7684 hook \u5373\u53ef\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u6700\u7ec8\u5b9e\u73b0\u7684 hook \u6548\u679c\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"useHashSearchParamsJSON")," hook \u8bfb\u5199\u6307\u5b9a\u7684\u67e5\u8be2\u53c2\u6570\uff0c\u5e76\u4e14\u81ea\u52a8\u89e3\u6790\u51fa\u6b63\u786e\u7684\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// http://a/b/c#/a/b/c?id=1&name="jim"\n\n// \u83b7\u53d6\u6307\u5b9a\u7684\u67e5\u8be2\u53c2\u6570\u503c\nconst [id, setId] = useHashSearchParamsJSON("id");\nconsole.log(id); // 1\n\n// \u83b7\u53d6\u5168\u90e8\u67e5\u8be2\u53c2\u6570\nconst [params, setParams] = useHashSearchParamsJSON();\nconsole.log(params); // {id: 1, name: "jim"}\n\n// \u66f4\u65b0\u53c2\u6570\nsetParams({ ...params, id: 2 });\n// http://a/b/c#/a/b/c?id=2&name="jim"\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u7684 hook \u5e76\u975e\u4e00\u6b65\u5230\u4f4d\u5b9e\u73b0\u7684\uff0c\u800c\u662f\u5206\u4e3a\u4e09\u4e2a\u4e0d\u540c\u7c92\u5ea6\u7684 hook\uff0c\u5206\u522b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"useHash"),"(\u8bfb\u5199 hash \u4e32)\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"useHashSearchParams"),"(\u8bfb\u5199\u67e5\u8be2\u53c2\u6570)\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"userHashSearchParamsJSON"),"(\u8bfb\u5199\u5e26\u7c7b\u578b\u7684\u67e5\u8be2\u53c2\u6570)\uff0c\u4e0b\u9762\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u9010\u6b65\u5b9e\u73b0\u8fd9\u4e9b\u81ea\u5b9a\u4e49\u7684 hooks\uff0c\u4ece\u4e2d\u4f60\u9664\u4e86\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u81ea\u5b9a\u4e49 hooks \u7528\u5230\u81ea\u5df1\u7684\u9879\u76ee\u4e2d\uff0c\u540c\u65f6\u8fd8\u53ef\u4ee5\u5b66\u4e60\u5230\u5982\u4f55\u5c01\u88c5\u81ea\u5df1\u7684 hooks \u4ee5\u4fbf\u63d0\u53d6\u53ef\u590d\u7528\u7684\u903b\u8f91\u3002"),(0,r.kt)("h2",{id:"usehash---\u8bfb\u5199-hash-\u503c"},(0,r.kt)("inlineCode",{parentName:"h2"},"useHash")," - \u8bfb\u5199 hash \u503c"),(0,r.kt)("p",null,"\u8def\u7531\u53c2\u6570\u5305\u542b\u5728 URL \u7684 hash \u503c\u4e2d\uff0c\u5b9e\u73b0\u8bfb\u5199\u8def\u7531\u53c2\u6570\u7684\u57fa\u7840\u662f\u5148\u5b9e\u73b0\u8bfb\u5199 hash \u503c\uff0chooks \u539f\u578b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// hash: string - hash \u4e32\n// setHash: (hash: string) => void - \u66f4\u65b0 hash \u4e32\nconst [hash, setHash] = useHash();\n")),(0,r.kt)("p",null,"\u5b83\u8fd4\u56de\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u5f53\u524d URL \u4e2d\u7684 hash \u4e32\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f hash \u4e32\u7684\u66f4\u65b0\u51fd\u6570\uff0c\u4f7f\u7528\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// http://www.abc.com/#/path/to/page?id=1\n\nconst [hash, setHash] = useHash();\nconsole.log(hash); // "#/path/to/page?id=1"\n\nsetHash("#/path/to/page?id=2");\nconsole.log(hash); // "#/path/to/page?id=2"\n')),(0,r.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u7684\u671f\u671b\u884c\u4e3a\uff0c\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"useHash"),"\u7684\u4ee3\u7801\u5982\u4e0b\uff0c\u5176\u5173\u952e\u70b9\u5728\u4e8e\u81ea\u52a8\u76d1\u542c\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"hashchange"),"\u4e8b\u4ef6\uff0c\u7701\u53bb\u4e86\u9700\u8981\u4f7f\u7528\u8005\u91cd\u590d\u7f16\u5199\u7684\u4ee3\u7801\uff08\u53ea\u6709\u5207\u5b9e\u7684\u51cf\u5c11\u5de5\u4f5c\u91cf\u548c\u9519\u8bef\uff0c\u4f60\u5c01\u88c5\u7684 hook \u624d\u53ef\u80fd\u4f1a\u6709\u88ab\u5176\u4ed6\u4eba\u4f7f\u7528\u7684\u6b32\u671b\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useState, useCallback, useEffect } from "react";\n\n/**\n * \u8bfb\u5199 URL hash \u4e32\uff0c\u5e76\u81ea\u52a8\u54cd\u5e94 URL hash \u4e32\u7684\u53d8\u5316\n */\nexport const useHash = () => {\n  const [hash, setHash] = useState(() => window.location.hash);\n\n  const onHashChange = useCallback(() => {\n    setHash(window.location.hash);\n  }, []);\n\n  // \u76d1\u542c hash \u4e32\u7684\u53d8\u5316\n  useEffect(() => {\n    window.addEventListener("hashchange", onHashChange);\n    return () => {\n      window.removeEventListener("hashchange", onHashChange);\n    };\n  }, []);\n\n  const _setHash = useCallback(\n    (newHash: string) => {\n      if (newHash !== hash) {\n        window.location.hash = newHash;\n      }\n    },\n    [hash]\n  );\n\n  return [hash, _setHash] as const;\n};\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"useHash"),"\u7684\u5b9e\u73b0\u5408\u5165\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/streamich/react-use/blob/master/docs/useHash.md"},"react-use")," \u4ed3\u5e93\uff0c\u53ef\u4ee5\u5f15\u5165 react-use \u5305\u76f4\u63a5\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"usehashsearchparams---\u8bfb\u5199-hash-\u7684\u67e5\u8be2\u53c2\u6570"},(0,r.kt)("inlineCode",{parentName:"h2"},"useHashSearchParams")," - \u8bfb\u5199 hash \u7684\u67e5\u8be2\u53c2\u6570"),(0,r.kt)("p",null,"\u6709\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"useHash"),"\u6211\u4eec\u53ef\u4ee5\u65b9\u4fbf\u7684\u8bfb\u5199 URL hash \u503c\u4e86\uff0c\u63a5\u4e0b\u6765\u8981\u5b9e\u73b0\u8bfb\u5199 hash \u4e2d\u7684\u67e5\u8be2\u53c2\u6570\uff0c\u67e5\u8be2\u53c2\u6570\u683c\u5f0f\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"key1=value1&key2=value2&..."),"\uff0c\u5176\u6838\u5fc3\u662f\u89e3\u6790\u67e5\u8be2\u53c2\u6570\u4e2d\u7684\u952e\u503c\u5bf9\u3002"),(0,r.kt)("p",null,"hooks \u7684\u539f\u578b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// value: string - \u6307\u5b9a key \u7684\u503c\n// setValue: (value: string) => void - \u66f4\u65b0\u6307\u5b9a key \u7684\u503c\nconst [value, setValue] = useHashSearchParams(key);\n\n// query: Record<string, string> - \u6240\u6709\u67e5\u8be2\u53c2\u6570\n// setQuery: (query: Record<string, string>) => void - \u66f4\u65b0\u67e5\u8be2\u53c2\u6570\nconst [query, setQuery] = useHashSearchParams();\n")),(0,r.kt)("p",null,"\u5b83\u8fd4\u56de\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u8868\u793a\u6307\u5b9a\u7684 key \u7684\u503c\uff08\u6216\u8005\u6240\u6709 key/value \u7ec4\u6210\u7684\u5bf9\u8c61\uff09\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7528\u4e8e\u66f4\u65b0\u6307\u5b9a\u7684 key \u7684\u503c\uff08\u6216\u8005\u66f4\u65b0\u6574\u4e2a\u67e5\u8be2\u53c2\u6570\uff09\u3002\u4f7f\u7528\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// http://a/b/c#/a/b/c?id=1&name=jim\n\n// \u8bfb\u53d6\u5355\u4e2a\u67e5\u8be2\u53c2\u6570\nconst [id, setId] = useHashSearchParams("id");\nconsole.log(id); // "1"\n// \u4fee\u6539\u5355\u4e2a\u67e5\u8be2\u53c2\u6570\nsetId(2);\nconsole.log(id); // "2"\n\n// \u8bfb\u53d6\u6240\u6709\u67e5\u8be2\u53c2\u6570\nconst [params, setParams] = useHashSearchParams();\nconsole.log(params); // {id: "1", name: "jim"}\n// \u4fee\u6539\u6574\u4e2a\u67e5\u8be2\u53c2\u6570\nsetParams({ name: "jack" });\nconsole.log(params); // {id: "1", name: "jack"}\n')),(0,r.kt)("p",null,"\u5b9e\u73b0\u601d\u8def\uff1a\u8bfb\u53d6\u65f6\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"useHash"),"\u83b7\u53d6 URL hash \u503c\uff0c\u7136\u540e\u622a\u53d6 hash \u4e2d\u7684\u67e5\u8be2\u4e32\uff0c\u5e76\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"URLSearchParams"),"\u89e3\u6790\u6210\u952e\u503c\u5bf9\u8fd4\u56de\u3002\u5199\u5165\u65f6\u4fee\u6539\u952e\u503c\u5bf9\uff0c\u7136\u540e\u62fc\u63a5\u6210\u67e5\u8be2\u4e32\uff0c\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"setHash"),"\u5199\u56de URL hash \u503c\u3002\u8fd9\u91cc\u5173\u952e\u70b9\u662f\u6ce8\u610f\u67e5\u8be2\u53c2\u6570\u7684 key/value \u7f16\u7801\u548c\u89e3\u7801\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"URLSearchParams"),"\u89e3\u6790 hash \u4e32\u65f6\uff0c\u5b83\u4f1a\u5e2e\u6211\u4eec\u89e3\u7801\uff0c\u5c06\u67e5\u8be2\u53c2\u6570\u5e8f\u5217\u5316\u6210 hash \u4e32\u65f6\uff0c\u6211\u4eec\u9700\u8981\u81ea\u884c\u8fdb\u884c\u7f16\u7801\u3002\u6b64\u5916\uff0c\u8981\u6ce8\u610f\u533a\u5206\u8bfb\u5199\u7684\u662f\u5355\u4e2a\u8fd8\u662f\u6240\u6709\u7684\u67e5\u8be2\u53c2\u6570\u3002"),(0,r.kt)("p",null,"\u6700\u7ec8\u4ee3\u7801\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useHash } from "./useHash";\nimport { useCallback } from "react";\n\n// \u91cd\u8f7d\u51fd\u6570\u7b7e\u540d\ninterface UseHashSearchParamsType {\n  (key: string, defaultValue?: string): readonly [string, (value: any) => void];\n  (): readonly [\n    Record<string, string>,\n    (searchParams: Record<string, any>) => void\n  ];\n}\n\nexport const useHashSearchParams: UseHashSearchParamsType = (\n  key?: any,\n  defaultValue?: any\n): any => {\n  const [hash, setHash] = useHash();\n  const questionIndex = hash.indexOf("?");\n  const search = questionIndex !== -1 ? hash.substring(questionIndex) : "";\n  // \u89e3\u6790\u67e5\u8be2\u53c2\u6570\n  const usp = new URLSearchParams(search);\n\n  const hashSearchParams: Record<string, string> = {};\n  usp.forEach((value, key) => {\n    hashSearchParams[key] = value;\n  });\n\n  const setHashSearchParams = useCallback(\n    (searchParams: Record<string, any>) => {\n      const searchPrefix =\n        (questionIndex !== -1 ? hash.slice(0, questionIndex) : hash.slice(0)) +\n        "?";\n      // \u62fc\u63a5\u67e5\u8be2\u53c2\u6570\uff0c\u5e76\u8fdb\u884c\u7f16\u7801\u5904\u7406\n      const search = Object.keys(searchParams).reduce((finalSearch, key) => {\n        if (finalSearch) finalSearch += "&";\n        const value = String(searchParams[key]);\n        finalSearch += encodeURIComponent(key);\n        // remove \'=\' if param with empty value\n        if (value) {\n          finalSearch += "=" + encodeURIComponent(value);\n        }\n        return finalSearch;\n      }, "");\n      setHash(searchPrefix + search);\n    },\n    [hash, questionIndex, setHash]\n  );\n\n  if (key) {\n    return [\n      hashSearchParams[key] === undefined\n        ? defaultValue\n        : hashSearchParams[key],\n      (value: any) =>\n        setHashSearchParams({ ...hashSearchParams, [key]: String(value) }),\n    ];\n  } else {\n    return [hashSearchParams, setHashSearchParams];\n  }\n};\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"useHashSearchParams"),"\u5df2\u63d0\u4ea4 PR \u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/streamich/react-use/pull/1300"},"react-use")," \u4ed3\u5e93\uff0c\u5f85\u5408\u5165\u540e\uff0c\u53ef\u5f15\u5165 react-use \u5305\u4f7f\u7528")),(0,r.kt)("h2",{id:"usehashsearchparamsjson---\u6309-json-\u683c\u5f0f\u8bfb\u5199-hash-\u7684\u67e5\u8be2\u53c2\u6570"},(0,r.kt)("inlineCode",{parentName:"h2"},"useHashSearchParamsJSON")," - \u6309 JSON \u683c\u5f0f\u8bfb\u5199 hash \u7684\u67e5\u8be2\u53c2\u6570"),(0,r.kt)("p",null,"\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"useHashSearchParams"),"\u5df2\u7ecf\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5b9e\u73b0\u5bf9 URL hash \u4e2d\u7684\u67e5\u8be2\u53c2\u6570\u8fdb\u884c\u8bfb\u5199\u4e86\uff0c\u4f46\u662f\u8fd9\u91cc\u7684\u53c2\u6570\u503c\u90fd\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5b9e\u9645\u4f7f\u7528\u65f6\u7ecf\u5e38\u8fd8\u9700\u8981\u6839\u636e\u5b57\u6bb5\u6240\u5c5e\u7c7b\u578b\u8fdb\u884c\u7c7b\u578b\u89e3\u6790\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"http://a/b/c#/a/b/c?id=1&name=jim"),"\u4e2d\u7684 id \u662f\u6570\u503c\u7c7b\u578b\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u5148\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"parseInt"),"\u89e3\u6790\u6210\u6570\u5b57\uff0c\u5bf9\u4e8e\u5b9e\u9645\u4e1a\u52a1\u5f00\u53d1\u975e\u5e38\u4e0d\u4fbf\u3002"),(0,r.kt)("p",null,"\u6211\u671f\u671b\u8def\u7531\u53c2\u6570\u80fd\u81ea\u5305\u542b\u6570\u636e\u7c7b\u578b\uff0c\u540c\u65f6\u53c8\u80fd\u5e8f\u5217\u5316\u6210\u5b57\u7b26\u4e32\uff0c\u6700\u4f73\u7684\u6570\u636e\u683c\u5f0f\u5c31\u662f JSON \u683c\u5f0f\u4e86\u3002\u5c06\u67e5\u8be2\u53c2\u6570\u5e8f\u5217\u5316\u4e3a JSON \u540e\u4f5c\u4e3a hash \u4e32\uff0c\u4f7f\u7528\u65f6\u89e3\u6790 JSON \u5f97\u5230\u6b63\u786e\u7684\u6570\u636e\u7c7b\u578b\uff0c\u540c\u65f6\u8fd8\u53ef\u4ee5\u652f\u6301\u5728 hash \u4e2d\u5b58\u653e\u590d\u6742\u7684 JSON \u5bf9\u8c61\uff0c\u4ece\u800c\u652f\u6301\u9875\u9762\u95f4\u8df3\u8f6c\u65f6\u4f20\u9012 JavaScript \u7eaf\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"hooks \u539f\u578b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// value: any - \u6307\u5b9a key \u7684\u503c\uff0c\u4efb\u610f\u7c7b\u578b\n// setValue: (value: any) => void - \u66f4\u65b0\u6307\u5b9a key \u7684\u503c\nconst [value, setValue] = useHashSearchParamsJSON(key);\n\n// query: Record<string, any> - \u6240\u6709\u67e5\u8be2\u53c2\u6570\uff0c\u5176\u4e2d\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\n// setQuery: (query: Record<string, any>) => void - \u66f4\u65b0\u67e5\u8be2\u53c2\u6570\nconst [query, setQuery] = useHashSearchParamsJSON();\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// http://a/b/c#/a/b/c?id=1&name="jim"\n\nconst [id, setId] = useHashSearchParamsJSON<number>("id");\nconsole.log(id); // 1\n\nconst [name, setName] = useHashSearchParamsJSON<string>("name");\nconsole.log(name); // "jim"\n\nconst [params, setParams] = useHashSearchParamsJSON();\nconsole.log(params); // {id: 1, name: "jim"}\nsetParams({ empty: true });\nconsole.log(params); // {id: 1, name: "jim", empty: true}\n')),(0,r.kt)("p",null,"\u5b9e\u73b0\u601d\u8def\uff1a\u8bfb\u53d6\u65f6\u5148\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"useHashSearchParams"),"\u83b7\u53d6\u67e5\u8be2\u53c2\u6570\u503c\u7684\u5b57\u7b26\u4e32\u8868\u793a\uff0c\u7136\u540e\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.parse"),"\u89e3\u6790\u5f97\u5230 JS \u7c7b\u578b\u3002\u5199\u5165\u65f6\u5148\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify"),"\u5e8f\u5217\u5316\u6210\u5b57\u7b26\u4e32\u8868\u793a\uff0c\u7136\u540e\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"useHashSearchParams"),"\u63d0\u4f9b\u7684\u66f4\u65b0\u51fd\u6570\u5199\u56de\u5230 hash \u4e32\u4e2d\u3002"),(0,r.kt)("p",null,"\u5b9e\u73b0\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useCallback } from "react";\nimport { useHashSearchParams } from "react-use";\n\nconst mapValues = (src, fn) =>\n  Object.keys(src).reduce(\n    (target, key) => Object.assign(target, { [key]: fn(src[key]) }),\n    {}\n  );\n\n// \u91cd\u8f7d\u51fd\u6570\u7b7e\u540d\ninterface UseRouteParamsType {\n  <T = any>(key: string, defaultValue?: T): [T | undefined, (value: T) => void];\n  <T = any>(): [\n    Record<string, T | undefined>,\n    (searchParams: Record<string, T>) => void\n  ];\n}\n\nexport const useHashSearchParamsJSON: UseRouteParamsType = (\n  key?: any,\n  defaultValue?: any\n): any => {\n  const dispatch = useTDispatch();\n  // \u83b7\u53d6\u6307\u5b9a key \u7684 value \u503c\uff0c\u6b64\u65f6\u662f\u5b57\u7b26\u4e32\u683c\u5f0f\n  const [json, setJson] = useHashSearchParams(key);\n  let value: any;\n\n  // \u8c03\u7528 JSON.parse \u89e3\u6790 JSON \u5b57\u7b26\u4e32\u5230 JS \u503c\uff0c\u89e3\u6790\u53ef\u80fd\u4f1a\u5931\u8d25\u9700\u6355\u83b7\u5f02\u5e38\u5904\u7406\n  try {\n    value = key\n      ? json === undefined\n        ? defaultValue\n        : JSON.parse(json)\n      : _.mapValues(json, (v) => JSON.parse(v));\n  } catch (err) {\n    // debugErr(err)\n  }\n\n  // \u8c03\u7528 JSON.stringify \u5e8f\u5217\u5316 JS \u503c\u6210 JSON \u5b57\u7b26\u4e32\n  const setValue = useCallback(\n    (newValue: any) => {\n      if (key) {\n        setJson(JSON.stringify(newValue));\n      } else {\n        setJson(_.mapValues(newValue, (v) => JSON.stringify(v)));\n      }\n    },\n    [dispatch.shared, key, setJson, value]\n  );\n\n  return [value, setValue];\n};\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"useHashSearchParamsJSON"),"\u9002\u7528\u8303\u56f4\u6bd4\u8f83\u6709\u9650\uff0c\u4e0d\u8003\u8651\u5408\u5165 react-use\uff0c\u5982\u679c\u9700\u8981\u53ef\u4ee5\u53c2\u8003\u4e0a\u8ff0\u4ee3\u7801\u81ea\u884c\u5728\u9879\u76ee\u4e2d\u5b9e\u73b0\u3002")),(0,r.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,r.kt)("p",null,"\u672c\u6587\u5b9e\u73b0\u7684\u5bf9\u8def\u7531\u53c2\u6570\u8fdb\u884c\u8bfb\u5199\u7684 hooks\uff0c\u672c\u8eab\u5177\u6709\u5f88\u5f3a\u7684\u5b9e\u7528\u4ef7\u503c\uff0c\u5176\u6b21\u53ef\u4f5c\u4e3a\u81ea\u5b9a\u4e49 hooks \u7684\u5b66\u4e60\u53c2\u8003\u3002\u6b64\u5916\uff0c\u9047\u5230\u529f\u80fd\u590d\u6742\u7684 hooks \u53ef\u5c1d\u8bd5\u50cf\u672c\u6587\u4e00\u6837\u5148\u5206\u89e3 hooks \u7136\u540e\u5206\u6b65\u5b9e\u73b0\uff1a\u5148\u627e\u51fa\u66f4\u901a\u7528\u7684 hooks(\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"useHash"),")\uff0c\u518d\u57fa\u4e8e\u5df2\u6709\u7684 hook \u5b9e\u73b0\u529f\u80fd\u66f4\u7279\u5b9a\u7684 hooks(\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"useHashSearchParams"),")\u3002"))}m.isMDXComponent=!0}}]);