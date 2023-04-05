---
tags: ["Other"]
keywords: ["blog", "博客", "博客搭建", "Docusaurus"]
---

# 搭建博客站点 —— 基于 Docusaurus 

本文主要记录个人站点 [whinc.github.io](https://whinc.github.io/) 的搭建过程，以及后续的维护更新，可以看做是个人站点自身的一份 changelog

站点基于 [Docusaurus](https://docusaurus.io/) 搭建，其提供了博客、文档(MDX)、React 单单页应用多种模式构建站点，可以满足大部分的个人定制化的需求。

## 添加文章评论 - Giscus

[giscus](https://github.com/giscus/giscus) 是一个基于 Github 的开源免费的评论系统，其原理是基于 github 的 discussion 功能来实现评论的存储。

接入步骤：参考 [How to add Giscus comments to Docusaurus](https://m19v.github.io/blog/how-to-add-giscus-to-docusaurus)，参考文档[giscus 配置页](https://giscus.app/zh-CN) 和 [giscus-component](https://github.com/giscus/giscus-component)


## 添加 MDX 互动代码 - RunKit

[RunKit](https://runkit.com/home) 提供运行在网页中嵌入 Node.js 代码片段，并执行显示输出的能力，适合交互式演示代码片段。



接入步骤：

1. 引入 RunKit 包：参考 [docusaurus scripts](https://docusaurus.io/docs/2.3.1/api/docusaurus-config#scripts) 文档，在 docusaurus.config.js 中添加下面代码段
```js
export.modules = {
  scripts: [
    {
      src: "https://embed.runkit.com",
      defer: true,
    }
  ],
}
```

2. 封装 RunKitEmbed 组件：[RunKit Embed](https://runkit.com/docs/embed) 文档提供了原生 JS 嵌入 RunKit 的方法，也提供了 WebComponent 和 React 的封装，不过 React 的封装版本太旧了(react 16)，于是自行封装了一个 React hooks 组件（如下），可在 MDX 中直接使用。

import CodeBlock from '@theme/CodeBlock';
import RunKitEmbed_ from '!!raw-loader!@site/src/components/RunKitEmbed';

<CodeBlock language="tsx">{RunKitEmbed_}</CodeBlock>

3. 在 MDX 中嵌入 RunKit：引入上面封装的 RunKitEmbed 组件，传入 source 源码即可，如果想对 RunKit 做细粒度的控制，参考上面的 RunKit Embed 文档

```jsx
import RunKitEmbed from '@site/src/components/RunKitEmbed';

<RunKitEmbed source={`
    const knex = require('knex');
    const db = knex({client: 'mysql'});
    await db.table('aa').select('b', 'c').toSQL().toNative()
`} />
```

## 添加 MD/MDX 图表 - Mermaid

[mermaid](https://github.com/mermaid-js/mermaid) 是基于 javascript 的纯文本图渲染库，常用于扩展 Markdown 的图表达能力，支持 Sequence/Flow/Class/State/Git/Mindmap等多种图。

接入方式：参考 [docusaurus diagrams](https://docusaurus.io/docs/2.3.1/markdown-features/diagrams)