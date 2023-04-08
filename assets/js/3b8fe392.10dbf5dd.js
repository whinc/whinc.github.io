"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[764],{77978:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(73945),s=r(67294);const o={},a=(e,t)=>{const[r,n]=(0,s.useState)(e?"loading":"unset"),a=(0,s.useRef)();return(0,s.useEffect)((()=>{if(!e)return void n("unset");const r=e.replace(/[|#].*$/,"");if("css"===(null==t?void 0:t.type)||!(null==t?void 0:t.type)&&/(^css!|\.css$)/.test(r)){const r=((e,t={})=>{const r=document.querySelector(`link[href="${e}"]`);if(!r){const r=document.createElement("link");return r.rel="stylesheet",r.href=e,Object.keys(t).forEach((e=>{r[e]=t[e]})),"hideFocus"in r&&r.relList&&(r.rel="preload",r.as="style"),r.setAttribute("data-status","loading"),document.head.appendChild(r),{ref:r,status:"loading"}}return{ref:r,status:r.getAttribute("data-status")||"ready"}})(e,null==t?void 0:t.css);a.current=r.ref,n(r.status)}else if("js"===(null==t?void 0:t.type)||!(null==t?void 0:t.type)&&/(^js!|\.js$)/.test(r)){const r=((e,t={})=>{const r=document.querySelector(`script[src="${e}"]`);if(!r){const r=document.createElement("script");return r.src=e,Object.keys(t).forEach((e=>{r[e]=t[e]})),r.setAttribute("data-status","loading"),document.body.appendChild(r),{ref:r,status:"loading"}}return{ref:r,status:r.getAttribute("data-status")||"ready"}})(e,null==t?void 0:t.js);a.current=r.ref,n(r.status)}else console.error("Cannot infer the type of external resource, and please provide a type ('js' | 'css'). Refer to the https://ahooks.js.org/hooks/dom/use-external/#options");if(!a.current)return;void 0===o[e]?o[e]=1:o[e]+=1;const s=e=>{var t;const r="load"===e.type?"ready":"error";null===(t=a.current)||void 0===t||t.setAttribute("data-status",r),n(r)};return a.current.addEventListener("load",s),a.current.addEventListener("error",s),()=>{var t,r,n;null===(t=a.current)||void 0===t||t.removeEventListener("load",s),null===(r=a.current)||void 0===r||r.removeEventListener("error",s),o[e]-=1,0===o[e]&&(null===(n=a.current)||void 0===n||n.remove()),a.current=void 0}}),[e]),r};function l(e){let{source:t,...r}=e;const[o,l]=(0,s.useState)(!1),u=a("/js/runkit.js",{js:{async:!0}}),i=(0,s.useRef)(null);return(0,s.useEffect)((()=>{if("ready"===u&&window.RunKit&&i.current){l(!0);window.RunKit.createNotebook({element:i.current,nodeVersion:"18.x.x",source:t.trim(),...r}).onLoad=()=>l(!1)}}),[u]),s.createElement(s.Fragment,null,("ready"!==u||o)&&s.createElement(n.Z,{language:"javascript"},t.trim()),s.createElement("div",{ref:i}),!1)}},73945:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),s=r(90814);function o(e){return n.createElement(n.Fragment,null,n.createElement(s.Z,e))}},63185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(87462),s=(r(67294),r(3905)),o=r(77978),a=r(73361);const l={tags:["Node.js","ORM"],keywords:["knex","orm","query builder"]},u="Knex.js \u6559\u7a0b",i={permalink:"/blog/2023/04/05/knex-tutorial",editUrl:"https://github.com/whinc/whinc.github.io/tree/master/website/blog/2023/04-05-knex-tutorial/index.mdx",source:"@site/blog/2023/04-05-knex-tutorial/index.mdx",title:"Knex.js \u6559\u7a0b",description:"\u4ec0\u4e48\u662f Knex \uff1f",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"Node.js",permalink:"/blog/tags/node-js"},{label:"ORM",permalink:"/blog/tags/orm"}],readingTime:3.035,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["Node.js","ORM"],keywords:["knex","orm","query builder"]},nextItem:{title:"Antd \u5f39\u7a97\u5c01\u88c5",permalink:"/blog/2023/03/04/antd-create-modal"}},c={authorsImageUrls:[]},d=[{value:"\u4ec0\u4e48\u662f Knex \uff1f",id:"\u4ec0\u4e48\u662f-knex-",level:2}],m={toc:d},p="wrapper";function k(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u4ec0\u4e48\u662f-knex-"},"\u4ec0\u4e48\u662f Knex \uff1f"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/knex/knex"},"Knex")," \u662f\u4e00\u4e2a\u4f7f\u7528 javascript \u5b9e\u73b0\u7684\u8de8\u6570\u636e\u5e93\u7684 SQL Query Builder\uff0c\u57fa\u4e8e javascript \u5b9e\u73b0\u4e86\u4e00\u5957\u7075\u6d3b\u3001\u53ef\u79fb\u690d\u3001\u6613\u4e8e\u4f7f\u7528 SQL DSL\uff0c\u652f\u6301\u7684\u6570\u636e\u5e93\u6709 PostgreSQL, MySQL, CockroachDB, SQL Server, SQLite3 \u548c Oracle\uff0c\u652f\u6301\u4e8b\u52a1\u3001\u6570\u636e\u8fc1\u79fb\u7b49\uff0c\u540c\u65f6\u652f\u6301 Node.js \u548c\u6d4f\u89c8\u5668\u3002"),(0,s.kt)("p",null,"\u4e0b\u9762\u662f Knex \u7684\u4f7f\u7528\u793a\u4f8b\uff0c\u4f7f\u7528 js \u5b9e\u73b0\u7684 DSL \u8bfb\u5199\u4e0a\u4e0e SQL \u975e\u5e38\u76f8\u4f3c\u3002"),(0,s.kt)(o.Z,{evaluateOnLoad:!0,source:`\n${a.Z}\np(db.table('aa').select('b', 'c'))\n`,mdxType:"RunKitEmbed"}))}k.isMDXComponent=!0},73361:(e,t,r)=>{r.d(t,{Z:()=>n});const n="const knex = require('knex');\nconst db = knex({ client: 'mysql' });\nconst p = (builder) => {\n    const sql = builder.toSQL()\n    console.log(sql.toNative ? sql.toNative() : sql)\n}"}}]);