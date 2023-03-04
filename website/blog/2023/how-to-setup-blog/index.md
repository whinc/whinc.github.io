# 如何搭建博客站点

本文主要记录个人站点 [whinc.github.io](https://whinc.github.io/) 的搭建过程，以及后续的维护更新，可以看做是个人站点自身的一份 changelog

站点基于 [Docusaurus](https://docusaurus.io/) 搭建，其提供了博客、文档(MDX)、React 单单页应用多种模式构建站点，可以满足大部分的个人定制化的需求。

## 添加评论

[giscus](https://github.com/giscus/giscus) 是一个基于 Github 的开源免费的评论系统，其原理是基于 github 的 discussion 功能来实现评论的存储。

通过[giscus 配置页](https://giscus.app/zh-CN)生成`<script>`标签，将该标签放在需要出现评论的地方，即可实现一套与 discussion 类似的评论

如果使用的是 webcomponent/react/vue 等框架，推荐使用 [giscus-component](https://github.com/giscus/giscus-component)

如何集成到 docusaurus 可以参考这篇文章 [How to add Giscus comments to Docusaurus](https://m19v.github.io/blog/how-to-add-giscus-to-docusaurus)
