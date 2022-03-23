---
title: Node.js 包管理的变迁
tags: ["npm", "yarn", "pnpm", "monorepo", "lerna"]
draft: true
---

## 模块和包

### 文件模块

在 Node.js 模块系统中，每个文件都被视为独立的模块。

例如，模块 a.js 导出变量 name

```js title="a.js"
exports.name = "a";
```

模块 b.js 从模块 a.js 中导入变量 name

```js title="b.js"
const { name } = require("a");
console.log(`hello ${name}`);
```

### 目录模块

### 模块解析策略

## 包管理器

### npm

- node_modules v1/v3/v5 布局变化
- 依赖黑洞
- 幽灵依赖
- package.json
- package-lock.json
- package-shriwke.json

### yarn

- 特点，解决的问题
- yarn.lock

### pnpm

- 特点，解决的问题

### 包管理器比较

## monorepo

### npm workspace

- 实战，demo 仓库

### yarn workspace

- 实战，demo 仓库

### pnpm workspace

- 实战，demo 仓库

### lerna

- 实战，demo 仓库

### monorepo 方案比较

## 参考资料

- [CommonJS 模块][nodejs-modules-commonjs]
- [package 包模块][nodejs-modules-commonjs]
- [Why should we use pnpm?][why-should-we-use-pnpm]
- [扁平的 node_modules 不是唯一的方法][flat-node-modules-is-not-the-only-way]
- [基于符号链接的 node_modules 结构][symlinked-node-modules-structure]

[why-should-we-use-pnpm]: https://www.kochan.io/nodejs/why-should-we-use-pnpm.html
[nodejs-modules-commonjs]: http://nodejs.cn/api/modules.html
[nodejs-modules-packages]: http://nodejs.cn/api/packages.html
[flat-node-modules-is-not-the-only-way]: https://pnpm.io/zh/blog/2020/05/27/flat-node-modules-is-not-the-only-way
[symlinked-node-modules-structure]: https://pnpm.io/zh/symlinked-node-modules-structure
