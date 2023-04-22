"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6853],{83429:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294);const l={},r=(e,n)=>{const[t,r]=(0,a.useState)(e?"loading":"unset"),s=(0,a.useRef)();return(0,a.useEffect)((()=>{if(!e)return void r("unset");const t=e.replace(/[|#].*$/,"");if("css"===(null==n?void 0:n.type)||!(null==n?void 0:n.type)&&/(^css!|\.css$)/.test(t)){const t=((e,n={})=>{const t=document.querySelector(`link[href="${e}"]`);if(!t){const t=document.createElement("link");return t.rel="stylesheet",t.href=e,Object.keys(n).forEach((e=>{t[e]=n[e]})),"hideFocus"in t&&t.relList&&(t.rel="preload",t.as="style"),t.setAttribute("data-status","loading"),document.head.appendChild(t),{ref:t,status:"loading"}}return{ref:t,status:t.getAttribute("data-status")||"ready"}})(e,null==n?void 0:n.css);s.current=t.ref,r(t.status)}else if("js"===(null==n?void 0:n.type)||!(null==n?void 0:n.type)&&/(^js!|\.js$)/.test(t)){const t=((e,n={})=>{const t=document.querySelector(`script[src="${e}"]`);if(!t){const t=document.createElement("script");return t.src=e,Object.keys(n).forEach((e=>{t[e]=n[e]})),t.setAttribute("data-status","loading"),document.body.appendChild(t),{ref:t,status:"loading"}}return{ref:t,status:t.getAttribute("data-status")||"ready"}})(e,null==n?void 0:n.js);s.current=t.ref,r(t.status)}else console.error("Cannot infer the type of external resource, and please provide a type ('js' | 'css'). Refer to the https://ahooks.js.org/hooks/dom/use-external/#options");if(!s.current)return;void 0===l[e]?l[e]=1:l[e]+=1;const a=e=>{var n;const t="load"===e.type?"ready":"error";null===(n=s.current)||void 0===n||n.setAttribute("data-status",t),r(t)};return s.current.addEventListener("load",a),s.current.addEventListener("error",a),()=>{var n,t,r;null===(n=s.current)||void 0===n||n.removeEventListener("load",a),null===(t=s.current)||void 0===t||t.removeEventListener("error",a),l[e]-=1,0===l[e]&&(null===(r=s.current)||void 0===r||r.remove()),s.current=void 0}}),[e]),t}},25140:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(73945),l=t(83429),r=t(67294);function s(e){let{source:n,...t}=e;const[s,o]=(0,r.useState)(!1),i=(0,l.Z)("https://embed.runkit.com",{type:"js",js:{defer:!0}}),u=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if("ready"===i&&window.RunKit&&u.current){o(!0);window.RunKit.createNotebook({element:u.current,nodeVersion:"18.x.x",source:n.trim(),...t}).onLoad=()=>o(!1)}}),[i]),r.createElement(r.Fragment,null,("ready"!==i||s)&&r.createElement(a.Z,{language:"javascript"},n.trim()),r.createElement("div",{ref:u}),!1)}},73945:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),l=t(90814);function r(e){return a.createElement(a.Fragment,null,a.createElement(l.Z,e))}},61227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=t(87462),l=(t(67294),t(3905)),r=t(25140),s=t(73361);const o={tags:["Node.js","ORM"],keywords:["knex","orm","query builder"]},i="Knex.js \u6559\u7a0b",u={permalink:"/blog/2023/04/05/knex-tutorial",editUrl:"https://github.com/whinc/whinc.github.io/tree/master/website/blog/2023/04-05-knex-tutorial/index.mdx",source:"@site/blog/2023/04-05-knex-tutorial/index.mdx",title:"Knex.js \u6559\u7a0b",description:"\u4ec0\u4e48\u662f Knex.js \uff1f",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"Node.js",permalink:"/blog/tags/node-js"},{label:"ORM",permalink:"/blog/tags/orm"}],readingTime:12.535,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["Node.js","ORM"],keywords:["knex","orm","query builder"]},nextItem:{title:"Ant Design \u5f39\u7a97\u5c01\u88c5\uff1a\u6613\u7528\u548c\u6613\u7ef4\u62a4",permalink:"/blog/2023/03/04/antd-create-modal"}},p={authorsImageUrls:[]},c=[{value:"\u4ec0\u4e48\u662f Knex.js \uff1f",id:"\u4ec0\u4e48\u662f-knexjs-",level:2},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u8fde\u63a5\u6c60\u914d\u7f6e",id:"\u8fde\u63a5\u6c60\u914d\u7f6e",level:3},{value:"CRUD \u5b9e\u6218\u793a\u4f8b",id:"crud-\u5b9e\u6218\u793a\u4f8b",level:2},{value:"\u63d2\u5165\u8bb0\u5f55",id:"\u63d2\u5165\u8bb0\u5f55",level:3},{value:"\u67e5\u8be2\u8bb0\u5f55",id:"\u67e5\u8be2\u8bb0\u5f55",level:3},{value:"\u66f4\u65b0\u8bb0\u5f55",id:"\u66f4\u65b0\u8bb0\u5f55",level:3},{value:"\u5220\u9664\u8bb0\u5f55",id:"\u5220\u9664\u8bb0\u5f55",level:3},{value:"\u5206\u9875\u67e5\u8be2",id:"\u5206\u9875\u67e5\u8be2",level:3},{value:"\u6279\u91cf\u63d2\u5165",id:"\u6279\u91cf\u63d2\u5165",level:3},{value:"\u8054\u7ed3\u67e5\u8be2",id:"\u8054\u7ed3\u67e5\u8be2",level:3},{value:"\u4e8b\u52a1\u5904\u7406",id:"\u4e8b\u52a1\u5904\u7406",level:3},{value:"Raw Query",id:"raw-query",level:3},{value:"Schema Builder \u5e93\u7ba1\u7406",id:"schema-builder-\u5e93\u7ba1\u7406",level:2},{value:"Migrations \u5e93\u8fc1\u79fb",id:"migrations-\u5e93\u8fc1\u79fb",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],d={toc:c},k="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(k,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-knexjs-"},"\u4ec0\u4e48\u662f Knex.js \uff1f"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/knex/knex"},"Knex.js")," \u662f\u4e00\u4e2a\u6d41\u884c\u7684Node.js SQL\u67e5\u8be2\u6784\u5efa\u5668\uff0c\u5b83\u5141\u8bb8\u4f60\u4f7f\u7528JavaScript\u8bed\u8a00\u7f16\u5199SQL\u67e5\u8be2\uff0c\u800c\u65e0\u9700\u76f4\u63a5\u7f16\u5199SQL\u8bed\u53e5\u3002\u5b83\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\uff0c\u5305\u62ecMySQL\uff0cPostgreSQL\uff0cSQLite\u548cMicrosoft SQL Server\u7b49\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528Knex.js\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u6784\u5efa\u590d\u6742\u7684SQL\u67e5\u8be2\uff0c\u5305\u62ec\u8054\u63a5\u3001\u5b50\u67e5\u8be2\u548c\u805a\u5408\u51fd\u6570\u7b49\u3002\u5b83\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u65b9\u4fbf\u7684\u529f\u80fd\uff0c\u5982\u4e8b\u52a1\u5904\u7406\uff0c\u6279\u91cf\u63d2\u5165\u548c\u66f4\u65b0\u7b49\uff0c\u66f4\u591a\u4fe1\u606f\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://knexjs.org/guide"},"Knex.js Guide")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f Knex \u7684\u4f7f\u7528\u793a\u4f8b\uff0c\u4f7f\u7528 js \u5b9e\u73b0\u7684 DSL \u8bfb\u5199\u4e0a\u4e0e SQL \u975e\u5e38\u76f8\u4f3c\u3002"),(0,l.kt)(r.Z,{evaluateOnLoad:!0,source:`\n${s.Z}\np(db.table('aa').select('b', 'c'))\n`,mdxType:"RunKitEmbed"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u4fee\u6539\u4e0a\u9762\u4ea4\u4e92\u5f0f\u4ee3\u7801\uff0c\u5e76\u8fd0\u884c\u67e5\u770b\u751f\u6210\u7684 SQL \u8bed\u53e5\u8fdb\u884c\u63a2\u7d22\u3002")),(0,l.kt)("h2",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),(0,l.kt)("p",null,"\u7531\u4e8e Node.js \u6ca1\u6709\u63d0\u4f9b\u50cf java \u4e2d\u7684 JDBC \u8fd9\u6837\u7684\u6570\u636e\u5e93\u8bbf\u95ee\u62bd\u8c61\u5c42\uff0c\u5bfc\u81f4\u57fa\u4e8e\u539f\u751f\u7684 Node.js \u8fdb\u884c\u6570\u636e\u5e93\u7f16\u7a0b\u65f6\uff0c\u9700\u8981\u9762\u5411\u4e0d\u540c\u7684\u6570\u636e\u5e93\u7c7b\u578b\u63d0\u4f9b\u7684\u5e95\u5c42 SDK \u7f16\u7a0b\uff0c\u5b66\u4e60\u6210\u672c\u9ad8\u3001\u4e0d\u53ef\u79fb\u690d\u3002"),(0,l.kt)("p",null,'Knex \u5efa\u7acb\u5728\u5e95\u5c42\u6570\u636e\u5e93\u63d0\u4f9b\u7684 SDK \u4e4b\u4e0a\uff0c\u63d0\u4f9b\u7edf\u4e00\u7684 API \u6570\u636e\u5e93\u63a5\u53e3\uff0c\u53ef\u4ee5\u5c06\u5176\u770b\u6210\u662f Node.js \u4e2d\u7c7b\u4f3c"JDBC"\u7684\u5b58\u5728\uff0c\u4ee3\u7801\u4e0e\u5e95\u5c42\u6570\u636e\u5e93\u8026\u5408\u5f31\uff0c\u65b9\u4fbf\u5728\u6570\u636e\u5e93\u4e4b\u95f4\u8fc1\u79fb\uff08\u5982\u672c\u5730\u5f00\u53d1\u6d4b\u8bd5\u7528 sqlite3\uff0c\u7ebf\u4e0a\u7528MySQL\uff09\uff0c\u65e0\u9700\u5b66\u4e60 SQL \u65b9\u8a00\u3002'),(0,l.kt)("mermaid",{value:"flowchart TD\n    A[Application] --\x3e|DSL based on javascript| B(Knex)\n    B --\x3e |native sql|MySQL\n    B --\x3e |native sql|PostgreSQL\n    B --\x3e |native sql| SQLite3\n    B --\x3e |native sql|SQLServer[SQL Server]\n    B --\x3e |native sql|Oracle"}),(0,l.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7b80\u5355\u6613\u7528"),"\uff1aKnex.js\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5355\u800c\u76f4\u89c2\u7684API\uff0c\u4f7f\u5f97\u6784\u5efa\u548c\u6267\u884cSQL\u67e5\u8be2\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8de8\u6570\u636e\u5e93\u652f\u6301"),"\uff1aKnex.js\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\uff0c\u5305\u62ecMySQL\u3001PostgreSQL\u3001SQLite\u548cOracle\u7b49\uff0c\u4f7f\u5f97\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u8f7b\u677e\u5730\u5728\u4e0d\u540c\u7684\u6570\u636e\u5e93\u4e4b\u95f4\u5207\u6362\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5b89\u5168\u6027"),"\uff1aKnex.js\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5b89\u5168\u529f\u80fd\uff0c\u4f8b\u5982\u53c2\u6570\u5316\u67e5\u8be2\u548c\u9632\u6b62SQL\u6ce8\u5165\u653b\u51fb\u7b49\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u4fdd\u62a4\u5e94\u7528\u7a0b\u5e8f\u514d\u53d7\u5b89\u5168\u6f0f\u6d1e\u7684\u5f71\u54cd\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53ef\u6d4b\u8bd5\u6027"),"\uff1aKnex.js\u7684\u67e5\u8be2\u6784\u5efa\u5668\u53ef\u4ee5\u8f7b\u677e\u5730\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\uff0c\u4f7f\u5f97\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u6d4b\u8bd5\u5176\u5e94\u7528\u7a0b\u5e8f\u7684\u67e5\u8be2\u903b\u8f91\u3002")),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6027\u80fd"),"\uff1aKnex.js\u7684\u6027\u80fd\u53ef\u80fd\u4e0d\u5982\u539f\u751f\u7684SQL\u67e5\u8be2\uff0c\u56e0\u4e3a\u5b83\u9700\u8981\u5c06\u67e5\u8be2\u6784\u5efa\u5668\u8f6c\u6362\u4e3aSQL\u67e5\u8be2\u8bed\u53e5\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u6027\u80fd\u635f\u5931\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u9650\u5236"),"\uff1aKnex.js\u7684\u67e5\u8be2\u6784\u5efa\u5668\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u6240\u6709\u7684\u67e5\u8be2\u9700\u6c42\uff0c\u56e0\u4e3a\u5b83\u662f\u57fa\u4e8e\u4e00\u7ec4\u9884\u5b9a\u4e49\u7684API\u6784\u5efa\u7684\uff0c\u800c\u4e0d\u662f\u539f\u751f\u7684SQL\u67e5\u8be2\u8bed\u53e5\u3002")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0a\u9762\u7f3a\u70b9\u4e2d\u63d0\u5230\u4e86\u6027\u80fd\u548c\u9650\u5236\u5728\u5b9e\u9645\u4e2d\u4e0d\u5fc5\u8fc7\u4e8e\u62c5\u5fc3\uff0c\u56e0\u4e3a kenx.js \u652f\u6301\u6267\u884c\u539f\u751f SQL\uff0c\u5bf9\u4e8e\u8ffd\u6c42\u9ad8\u6027\u80fd\u548c\u81ea\u7531\u6027\u7684\u573a\u666f\uff0c\u4f7f\u7528\u539f\u751f SQL \u66ff\u4ee3\u5373\u53ef\u3002")),(0,l.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Web\u5e94\u7528\u7a0b\u5e8f\uff1aKnex.js\u53ef\u4ee5\u7528\u4e8e\u6784\u5efaWeb\u5e94\u7528\u7a0b\u5e8f\u7684\u540e\u7aef\uff0c\u4ee5\u4fbf\u4e0e\u6570\u636e\u5e93\u8fdb\u884c\u4ea4\u4e92\u3002\u5b83\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u8f7b\u677e\u5730\u6784\u5efa\u548c\u6267\u884cSQL\u67e5\u8be2\uff0c\u4ece\u800c\u7b80\u5316\u4e86Web\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u8fc7\u7a0b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5206\u6790\uff1aKnex.js\u53ef\u4ee5\u7528\u4e8e\u6570\u636e\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\uff0c\u4ee5\u4fbf\u4ece\u6570\u636e\u5e93\u4e2d\u68c0\u7d22\u548c\u5206\u6790\u6570\u636e\u3002\u5b83\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u8f7b\u677e\u5730\u6784\u5efa\u590d\u6742\u7684\u67e5\u8be2\uff0c\u4ece\u800c\u4f7f\u6570\u636e\u5206\u6790\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\uff1aKnex.js\u53ef\u4ee5\u7528\u4e8e\u6784\u5efa\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\uff0c\u4ee5\u4fbf\u7ba1\u7406\u548c\u7ef4\u62a4\u6570\u636e\u5e93\u3002\u5b83\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u8f7b\u677e\u5730\u6267\u884c\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u4f8b\u5982\u521b\u5efa\u8868\u683c\u3001\u63d2\u5165\u6570\u636e\u548c\u66f4\u65b0\u6570\u636e\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u7aef\u6e32\u67d3\uff1aKnex.js\u53ef\u4ee5\u7528\u4e8e\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u5e94\u7528\u7a0b\u5e8f\uff0c\u4ee5\u4fbf\u4ece\u6570\u636e\u5e93\u4e2d\u68c0\u7d22\u6570\u636e\u5e76\u5c06\u5176\u5448\u73b0\u4e3aHTML\u3002\u5b83\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u8f7b\u677e\u5730\u6784\u5efa\u590d\u6742\u7684\u67e5\u8be2\uff0c\u4ece\u800c\u4f7f\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002")),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u4f7f\u7528 Knex.js \u524d\uff0c\u9664\u4e86\u9700\u8981\u5b89\u88c5 knex.js \u5305\u81ea\u8eab\uff0c\u8fd8\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u5e95\u5c42\u6570\u636e\u5e93\u9a71\u52a8\uff0c\u4f8b\u5982\u4e0b\u9762\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install knex\n\nnpm install sqlite3\nnpm install mysql\n")),(0,l.kt)("p",null,"\u7531\u4e8e\u6211\u672c\u5730\u540c\u65f6\u4f7f\u7528 sqlite3(\u672c\u5730\u5f00\u53d1) \u548c mysql(\u7ebf\u4e0a\u90e8\u7f72)\u6570\u636e\u5e93\uff0c\u6240\u4ee5\u540c\u65f6\u5b89\u88c5\u4e86\u4e24\u8005\u7684\u539f\u751f\u6570\u636e\u5e93\u9a71\u52a8\u5305\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5e95\u5c42\u9a71\u52a8\u6d89\u53ca C++ \u6a21\u5757\u7f16\u8bd1\uff0c\u5982\u679c\u9047\u5230\u7248\u672c\u4e0d\u5339\u914d\uff0c\u53ef\u5c1d\u8bd5\u5347\u7ea7\u672c\u673a C/C++ \u4f9d\u8d56\u5e93\u7248\u672c\uff0c\u6216\u8005\u964d\u7ea7 npm \u4f9d\u8d56\u7684\u7248\u672c\uff0c\u4ee5\u6ee1\u8db3\u7f16\u8bd1\u8981\u6c42")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u5b89\u88c5\u7ec6\u8282\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://knexjs.org/guide/#node-js"},"Knex.js Installation"))),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("h3",{id:"\u8fde\u63a5\u6c60\u914d\u7f6e"},"\u8fde\u63a5\u6c60\u914d\u7f6e"),(0,l.kt)("p",null,"\u5728\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u5408\u9002\u7684\u8fde\u63a5\u6c60\u6709\u52a9\u4e8e\u4f18\u5316\u6570\u636e\u5e93\u6027\u80fd\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://knexjs.org/guide/#pool"},"pool")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const knex = require('knex')({\n  client: 'mysql',\n  connection: {\n    host: 'localhost',\n    user: 'root',\n    password: 'password',\n    database: 'mydatabase'\n  },\n  // highlight-start\n  pool: {\n    min: 0,\n    max: 10\n  }\n  // highlight-end\n});\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u914d\u7f6e\u7ec6\u8282\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://knexjs.org/guide/#configuration-options"},"Knex.js Configuration Options"))),(0,l.kt)("h2",{id:"crud-\u5b9e\u6218\u793a\u4f8b"},"CRUD \u5b9e\u6218\u793a\u4f8b"),(0,l.kt)("p",null,"\u4e0b\u9762\u793a\u4f8b\u4e2d knex.js \u6267\u884c\u8fd4\u56de\u7684\u5747\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\uff0c\u6267\u884c\u6210\u529f\u65f6 fulfill \u6267\u884c\u7ed3\u679c\uff0c\u6267\u884c\u5931\u8d25\u65f6 reject \u9519\u8bef\u4fe1\u606f\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u8282\u51fa\u73b0\u7684\u793a\u4f8b\u7684\u4ee3\u7801\u653e\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/whinc/nodejs-examples/tree/main/knex"},"Github"))),(0,l.kt)("h3",{id:"\u63d2\u5165\u8bb0\u5f55"},"\u63d2\u5165\u8bb0\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"knex('users').insert({ name: 'John', email: 'john@example.com' })\n")),(0,l.kt)("h3",{id:"\u67e5\u8be2\u8bb0\u5f55"},"\u67e5\u8be2\u8bb0\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// select all\nknex('users').select('*')\n")),(0,l.kt)("h3",{id:"\u66f4\u65b0\u8bb0\u5f55"},"\u66f4\u65b0\u8bb0\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// update by id\nknex('users').where({ id: 1 }).update({ name: 'Jane' })\n")),(0,l.kt)("h3",{id:"\u5220\u9664\u8bb0\u5f55"},"\u5220\u9664\u8bb0\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// delete by id\nknex('users').where({ id: 1 }).del()\n")),(0,l.kt)("h3",{id:"\u5206\u9875\u67e5\u8be2"},"\u5206\u9875\u67e5\u8be2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const page = 2; // \u7b2c\u4e8c\u9875\nconst pageSize = 10; // \u6bcf\u987510\u6761\u8bb0\u5f55\n\nknex('users')\n  .select('*')\n  // highlight-start\n  // \u6307\u5b9a\u67e5\u8be2\u7ed3\u679c\u7684\u504f\u79fb\u91cf\n  .offset((page - 1) * pageSize)\n  // \u9650\u5236\u67e5\u8be2\u7ed3\u679c\u8fd4\u56de\u7684\u6570\u91cf\n  .limit(pageSize)\n  // highlight-end\n  // \u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f\n  .orderBy('name', 'asc')\n  .then((rows) => {\n    console.log(rows);\n  })\n  .catch((err) => {\n    console.error(err);\n  });\n")),(0,l.kt)("h3",{id:"\u6279\u91cf\u63d2\u5165"},"\u6279\u91cf\u63d2\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"knex.batchInsert('users', [\n  { name: 'John', email: 'john@example.com' },\n  { name: 'Jane', email: 'jane@example.com' },\n  { name: 'Bob', email: 'bob@example.com' }\n])\n")),(0,l.kt)("h3",{id:"\u8054\u7ed3\u67e5\u8be2"},"\u8054\u7ed3\u67e5\u8be2"),(0,l.kt)("p",null,"\u5728Knex.js\u4e2d\u5b9e\u73b0\u8054\u7ed3\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://knexjs.org/guide/query-builder.html#join-methods"},"join")," \u65b9\u6cd5\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"join"),"\u65b9\u6cd5\u7528\u4e8e\u5c06\u4e24\u4e2a\u6216\u591a\u4e2a\u8868\u683c\u8054\u7ed3\u5728\u4e00\u8d77\uff0c\u4ee5\u4fbf\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528\u5b83\u4eec\u7684\u5217\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"knex('users').join('accounts', 'users.id', '=', 'accounts.user_id')\n  .select('users.name', 'accounts.balance')\n  .then((rows) => {\n    console.log(rows);\n  })\n  .catch((err) => {\n    console.error(err);\n  });\n")),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"join"),"\u65b9\u6cd5\u5c06users\u8868\u683c\u548corders\u8868\u683c\u8054\u7ed3\u5728\u4e00\u8d77\uff0c\u4ee5\u4fbf\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528\u5b83\u4eec\u7684\u5217\u3002\u6211\u4eec\u4f7f\u7528select\u65b9\u6cd5\u9009\u62e9users.name\u548corders.order_number\u5217\u3002\u8fd9\u5c06\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u7528\u6237\u540d\u79f0\u548c\u8ba2\u5355\u53f7\u7684\u7ed3\u679c\u96c6\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7c7b\u578b\u7684\u8054\u7ed3\uff0c\u4f8b\u5982\u5de6\u8054\u7ed3\u6216\u53f3\u8054\u7ed3\uff0c\u5219\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"join"),"\u65b9\u6cd5\u4e4b\u524d\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"leftJoin"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"rightJoin"),"\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"knex('users')\n  .leftJoin('orders', 'users.id', '=', 'orders.user_id')\n  .select('users.name', 'orders.order_number')\n  .then((rows) => {\n    console.log(rows);\n  })\n  .catch((err) => {\n    console.error(err);\n  });\n")),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528leftJoin\u65b9\u6cd5\u6267\u884c\u5de6\u8054\u7ed3\u3002\u8fd9\u5c06\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u7528\u6237\u548c\u4ed6\u4eec\u7684\u8ba2\u5355\uff08\u5982\u679c\u6709\uff09\u7684\u7ed3\u679c\u96c6\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Knex.js \u652f\u6301\u56db\u79cd\u4e0d\u540c\u8054\u7ed3\u7c7b\u578b\uff0c\u5206\u522b\u662f join(innerJoin), leftJoin(leftOuterJoin), rightJoin(rightOuterJoin), fullOuterJoin\uff0c\u4ed6\u4eec\u7684\u533a\u522b\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://www.w3schools.com/sql/sql_join.asp"},"SQL Joins"))),(0,l.kt)("h3",{id:"\u4e8b\u52a1\u5904\u7406"},"\u4e8b\u52a1\u5904\u7406"),(0,l.kt)("p",null,"\u4f7f\u7528transaction\u65b9\u6cd5\u53ef\u4ee5\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\u6267\u884c\u591a\u4e2a\u67e5\u8be2\uff0c\u5e76\u786e\u4fdd\u5b83\u4eec\u90fd\u6210\u529f\u6216\u90fd\u5931\u8d25\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"knex.transaction((trx) => {\n  knex('users').transacting(trx).insert({ name: 'John', email: 'john@example.com' })\n    .then(() => {\n      return knex('accounts').transacting(trx).insert({ user_id: 1, balance: 100 });\n    })\n    .then(trx.commit)\n    .catch(trx.rollback);\n})\n.then(() => {\n  console.log('Transaction complete');\n})\n.catch((err) => {\n  console.error(err);\n});\n")),(0,l.kt)("h3",{id:"raw-query"},"Raw Query"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"raw"),"\u65b9\u6cd5\u53ef\u4ee5\u6267\u884c\u539f\u59cb\u7684 SQL \u67e5\u8be2\uff0c\u5f53\u9884\u8bbe\u7684 API \u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\u65f6\uff0c\u4f5c\u4e3a\u515c\u5e95\u7684\u624b\u6bb5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"knex.raw('SELECT * FROM users WHERE name = ?', ['John'])\n  .then((rows) => {\n    console.log(rows);\n  })\n  .catch((err) => {\n    console.error(err);\n  });\n")),(0,l.kt)("h2",{id:"schema-builder-\u5e93\u7ba1\u7406"},"Schema Builder \u5e93\u7ba1\u7406"),(0,l.kt)("p",null,"knex.js\u7684 Schema Builder \u529f\u80fd\u975e\u5e38\u5f3a\u5927\u548c\u7075\u6d3b\uff0c\u4f7f\u7528\u5b83\u53ef\u4ee5\u8f7b\u677e\u6784\u5efa\u548c\u7ba1\u7406\u5e38\u89c1\u7684\u6570\u636e\u5e93\u6a21\u5f0f\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8868\u683c\uff1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"createTable"),"\u65b9\u6cd5\u53ef\u4ee5\u521b\u5efa\u65b0\u7684\u6570\u636e\u5e93\u8868\u683c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"knex.schema.createTable('users', (table) => {\n  table.increments('id');\n  table.string('name');\n  table.string('email');\n})\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u683c\uff1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"alterTable"),"\u65b9\u6cd5\u53ef\u4ee5\u4fee\u6539\u73b0\u6709\u7684\u6570\u636e\u5e93\u8868\u683c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"knex.schema.alterTable('users', (table) => {\n  table.string('password');\n})\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664\u8868\u683c\uff1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"dropTable"),"\u65b9\u6cd5\u53ef\u4ee5\u5220\u9664\u73b0\u6709\u7684\u6570\u636e\u5e93\u8868\u683c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"knex.schema.dropTable('users')\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5217\uff1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"string/integer/date/..."),"\u7b49\u7c7b\u578b\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5411\u73b0\u6709\u7684\u6570\u636e\u5e93\u8868\u683c\u6dfb\u52a0\u65b0\u5217\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"knex.schema.table('users', (table) => {\n  table.string('password');\n})\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5217")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"knex.schema.table('users', (table) => {\n  table.string('password').notNullable().defaultTo('');\n})\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u7d22\u5f15\uff1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"index"),"\u65b9\u6cd5\u53ef\u4ee5\u5411\u73b0\u6709\u7684\u6570\u636e\u5e93\u8868\u683c\u6dfb\u52a0\u7d22\u5f15\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"knex.schema.table('users', (table) => {\n  table.index('email');\n})\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5916\u952e\uff1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"foreign"),"\u65b9\u6cd5\u53ef\u4ee5\u5411\u73b0\u6709\u7684\u6570\u636e\u5e93\u8868\u683c\u6dfb\u52a0\u5916\u952e\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"knex.schema.table('orders', (table) => {\n  table.integer('user_id').unsigned().references('id').inTable('users');\n})\n")),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5916\u952e\uff1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"dropForeign"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"foreign"),"\u65b9\u6cd5\u53ef\u4ee5\u4fee\u6539\u73b0\u6709\u7684\u6570\u636e\u5e93\u8868\u683c\u5916\u952e\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"knex.schema.table('orders', (table) => {\n  table.dropForeign('user_id');\n  table.integer('customer_id').unsigned().references('id').inTable('customers');\n})\n")),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u552f\u4e00\u7ea6\u675f\uff1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"unique"),"\u65b9\u6cd5\u53ef\u4ee5\u5411\u73b0\u6709\u7684\u6570\u636e\u5e93\u8868\u683c\u6dfb\u52a0\u552f\u4e00\u7ea6\u675f\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"knex.schema.table('users', (table) => {\n  table.unique('email');\n})\n")),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u573a\u666f\u5916\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"raw"),"\u65b9\u6cd5\u8fd8\u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u5e93\u539f\u751f\u7684\u4e00\u4e9b\u6a21\u5f0f\uff0c\u5982MySQL\u4e2d\u7684\u89c6\u56fe\u3001\u5b58\u50a8\u8fc7\u7a0b\u3001\u89e6\u53d1\u5668\u3001\u5e8f\u5217\u7b49\u529f\u80fd\u3002"),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u89c6\u56fe\uff1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"raw"),"\u65b9\u6cd5\u53ef\u4ee5\u521b\u5efa\u65b0\u7684\u6570\u636e\u5e93\u89c6\u56fe\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"knex.raw('CREATE VIEW active_users AS SELECT * FROM users WHERE active = 1')\n")),(0,l.kt)("h2",{id:"migrations-\u5e93\u8fc1\u79fb"},"Migrations \u5e93\u8fc1\u79fb"),(0,l.kt)("p",null,"Knex.js \u63d0\u4f9b\u4e86\u6570\u636e\u5e93\u5de5\u5177\uff0c\u4f7f\u7528 Knex.js API \u7f16\u5199\u597d\u6570\u636e\u5e93\u8fc1\u79fb\u811a\u672c\u540e\uff0c\u4ea4\u7ed9 Knex.js cli \u6267\u884c\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u4e0d\u540c\u6570\u636e\u5e93\u4e4b\u95f4\u8fc1\u79fb\u6570\u636e\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TODO...")),(0,l.kt)("p",null,"\u6b64\u5916\uff0cKnex.js \u8fd8\u63d0\u4f9b\u4e86\u6570\u636e\u586b\u5145\u5de5\u5177\uff0c\u4f7f\u7528 Knex.js API \u7f16\u5199\u586b\u5145\u6570\u636e\u7684\u811a\u672c\u540e\uff0c\u4ea4\u7ed9 Knex.js cli \u6267\u884c\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u586b\u5145\u6570\u636e\u5e93\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TODO...")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86Knex.js\u7684\u57fa\u672c\u6982\u5ff5\u3001\u4f18\u7f3a\u70b9\u53ca\u5e94\u7528\u573a\u666f\u3001\u914d\u7f6e\u548c\u5b9e\u6218\u793a\u4f8b\u3002\u9996\u5148\uff0c\u4ecb\u7ecd\u4e86\u4ec0\u4e48\u662fKnex.js\uff0c\u5e76\u8bb2\u89e3\u4e86\u5b83\u7684\u4f18\u70b9\u548c\u9002\u7528\u573a\u666f\u3002\u63a5\u7740\uff0c\u8be6\u7ec6\u8bb2\u89e3\u4e86\u5982\u4f55\u5b89\u88c5\u548c\u914d\u7f6eKnex.js\uff0c\u5e76\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u914d\u7f6e\u9009\u9879\uff0c\u5305\u62ec\u8fde\u63a5\u6c60\u914d\u7f6e\u3002\u7136\u540e\uff0c\u901a\u8fc7\u5b9e\u6218\u793a\u4f8b\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528Knex.js\u8fdb\u884c\u6570\u636e\u5e93\u7684\u521b\u5efa\u3001\u67e5\u8be2\u3001\u66f4\u65b0\u548c\u5220\u9664\u7b49\u64cd\u4f5c\uff0c\u5305\u62ecSchema Building\u3001CRUD \u589e\u5220\u6539\u67e5\u3001\u5206\u9875\u67e5\u8be2\u3001\u6279\u91cf\u63d2\u5165\u3001\u8054\u7ed3\u67e5\u8be2\u3001\u4e8b\u52a1\u5904\u7406\u548cRaw Query\u7b49\u3002\u6bcf\u4e2a\u793a\u4f8b\u90fd\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u4ee3\u7801\u548c\u89e3\u91ca\uff0c\u975e\u5e38\u9002\u5408\u521d\u5b66\u8005\u5b66\u4e60\u548c\u5165\u95e8\u3002"))}m.isMDXComponent=!0},73361:(e,n,t)=>{t.d(n,{Z:()=>a});const a="const knex = require('knex');\nconst db = knex({ client: 'mysql' });\nconst p = (builder) => {\n    const sql = builder.toSQL()\n    console.log(sql.toNative ? sql.toNative() : sql)\n}"}}]);