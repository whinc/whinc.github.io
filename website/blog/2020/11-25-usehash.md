---
tags: ["React", "React Hooks"]
---

# 自定义 hooks - useHash

## 动机 & 目标

在基于 hash 模式的 web 单页应用中，经常需要读写 hash 中的查询参数，例如从 hash 查询参数中读取商品 ID。在 React 应用中，如果直接解析`window.location.hash`值，则 hash 变化时无法收到更新，你还需要监听`hashchange`事件来更新内部状态，这些繁琐的步骤可以封装成自定义 hooks，同时更进一步给参数加上自动类型解析和序列化，使其支持任意参数值类型（包括嵌套的 JSON 对象），全部这些功能仅需要一个简单的 hook 即可实现。

<!-- truncate -->

下面是最终实现的 hook 效果，通过`useHashSearchParamsJSON` hook 读写指定的查询参数，并且自动解析出正确的类型。

```js
// http://a/b/c#/a/b/c?id=1&name="jim"

// 获取指定的查询参数值
const [id, setId] = useHashSearchParamsJSON("id");
console.log(id); // 1

// 获取全部查询参数
const [params, setParams] = useHashSearchParamsJSON();
console.log(params); // {id: 1, name: "jim"}

// 更新参数
setParams({ ...params, id: 2 });
// http://a/b/c#/a/b/c?id=2&name="jim"
```

上面的 hook 并非一步到位实现的，而是分为三个不同粒度的 hook，分别是`useHash`(读写 hash 串)、`useHashSearchParams`(读写查询参数)和`userHashSearchParamsJSON`(读写带类型的查询参数)，下面本文将介绍如何逐步实现这些自定义的 hooks，从中你除了可以将这些自定义 hooks 用到自己的项目中，同时还可以学习到如何封装自己的 hooks 以便提取可复用的逻辑。

## `useHash` - 读写 hash 值

路由参数包含在 URL 的 hash 值中，实现读写路由参数的基础是先实现读写 hash 值，hooks 原型如下：

```js
// hash: string - hash 串
// setHash: (hash: string) => void - 更新 hash 串
const [hash, setHash] = useHash();
```

它返回两个参数，第一个参数是当前 URL 中的 hash 串，第二个参数是 hash 串的更新函数，使用示例如下：

```js
// http://www.abc.com/#/path/to/page?id=1

const [hash, setHash] = useHash();
console.log(hash); // "#/path/to/page?id=1"

setHash("#/path/to/page?id=2");
console.log(hash); // "#/path/to/page?id=2"
```

基于以上的期望行为，实现`useHash`的代码如下，其关键点在于自动监听了`hashchange`事件，省去了需要使用者重复编写的代码（只有切实的减少工作量和错误，你封装的 hook 才可能会有被其他人使用的欲望）：

```ts
import { useState, useCallback, useEffect } from "react";

/**
 * 读写 URL hash 串，并自动响应 URL hash 串的变化
 */
export const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  const onHashChange = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  // 监听 hash 串的变化
  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const _setHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        window.location.hash = newHash;
      }
    },
    [hash]
  );

  return [hash, _setHash] as const;
};
```

> `useHash`的实现合入到 [react-use](https://github.com/streamich/react-use/blob/master/docs/useHash.md) 仓库，可以引入 react-use 包直接使用。

## `useHashSearchParams` - 读写 hash 的查询参数

有了`useHash`我们可以方便的读写 URL hash 值了，接下来要实现读写 hash 中的查询参数，查询参数格式是`key1=value1&key2=value2&...`，其核心是解析查询参数中的键值对。

hooks 的原型如下：

```js
// value: string - 指定 key 的值
// setValue: (value: string) => void - 更新指定 key 的值
const [value, setValue] = useHashSearchParams(key);

// query: Record<string, string> - 所有查询参数
// setQuery: (query: Record<string, string>) => void - 更新查询参数
const [query, setQuery] = useHashSearchParams();
```

它返回两个参数，第一个参数表示指定的 key 的值（或者所有 key/value 组成的对象），第二个参数用于更新指定的 key 的值（或者更新整个查询参数）。使用示例如下：

```js
// http://a/b/c#/a/b/c?id=1&name=jim

// 读取单个查询参数
const [id, setId] = useHashSearchParams("id");
console.log(id); // "1"
// 修改单个查询参数
setId(2);
console.log(id); // "2"

// 读取所有查询参数
const [params, setParams] = useHashSearchParams();
console.log(params); // {id: "1", name: "jim"}
// 修改整个查询参数
setParams({ name: "jack" });
console.log(params); // {id: "1", name: "jack"}
```

实现思路：读取时调用`useHash`获取 URL hash 值，然后截取 hash 中的查询串，并使用`URLSearchParams`解析成键值对返回。写入时修改键值对，然后拼接成查询串，调用`setHash`写回 URL hash 值。这里关键点是注意查询参数的 key/value 编码和解码，使用`URLSearchParams`解析 hash 串时，它会帮我们解码，将查询参数序列化成 hash 串时，我们需要自行进行编码。此外，要注意区分读写的是单个还是所有的查询参数。

最终代码实现如下：

```ts
import { useHash } from "./useHash";
import { useCallback } from "react";

// 重载函数签名
interface UseHashSearchParamsType {
  (key: string, defaultValue?: string): readonly [string, (value: any) => void];
  (): readonly [
    Record<string, string>,
    (searchParams: Record<string, any>) => void
  ];
}

export const useHashSearchParams: UseHashSearchParamsType = (
  key?: any,
  defaultValue?: any
): any => {
  const [hash, setHash] = useHash();
  const questionIndex = hash.indexOf("?");
  const search = questionIndex !== -1 ? hash.substring(questionIndex) : "";
  // 解析查询参数
  const usp = new URLSearchParams(search);

  const hashSearchParams: Record<string, string> = {};
  usp.forEach((value, key) => {
    hashSearchParams[key] = value;
  });

  const setHashSearchParams = useCallback(
    (searchParams: Record<string, any>) => {
      const searchPrefix =
        (questionIndex !== -1 ? hash.slice(0, questionIndex) : hash.slice(0)) +
        "?";
      // 拼接查询参数，并进行编码处理
      const search = Object.keys(searchParams).reduce((finalSearch, key) => {
        if (finalSearch) finalSearch += "&";
        const value = String(searchParams[key]);
        finalSearch += encodeURIComponent(key);
        // remove '=' if param with empty value
        if (value) {
          finalSearch += "=" + encodeURIComponent(value);
        }
        return finalSearch;
      }, "");
      setHash(searchPrefix + search);
    },
    [hash, questionIndex, setHash]
  );

  if (key) {
    return [
      hashSearchParams[key] === undefined
        ? defaultValue
        : hashSearchParams[key],
      (value: any) =>
        setHashSearchParams({ ...hashSearchParams, [key]: String(value) }),
    ];
  } else {
    return [hashSearchParams, setHashSearchParams];
  }
};
```

> `useHashSearchParams`已提交 PR 到 [react-use](https://github.com/streamich/react-use/pull/1300) 仓库，待合入后，可引入 react-use 包使用

## `useHashSearchParamsJSON` - 按 JSON 格式读写 hash 的查询参数

基于`useHashSearchParams`已经可以很方便的实现对 URL hash 中的查询参数进行读写了，但是这里的参数值都是字符串类型，实际使用时经常还需要根据字段所属类型进行类型解析，例如`http://a/b/c#/a/b/c?id=1&name=jim`中的 id 是数值类型，使用时需要先调用`parseInt`解析成数字，对于实际业务开发非常不便。

我期望路由参数能自包含数据类型，同时又能序列化成字符串，最佳的数据格式就是 JSON 格式了。将查询参数序列化为 JSON 后作为 hash 串，使用时解析 JSON 得到正确的数据类型，同时还可以支持在 hash 中存放复杂的 JSON 对象，从而支持页面间跳转时传递 JavaScript 纯对象。

hooks 原型如下：

```js
// value: any - 指定 key 的值，任意类型
// setValue: (value: any) => void - 更新指定 key 的值
const [value, setValue] = useHashSearchParamsJSON(key);

// query: Record<string, any> - 所有查询参数，其中值可以是任意类型
// setQuery: (query: Record<string, any>) => void - 更新查询参数
const [query, setQuery] = useHashSearchParamsJSON();
```

使用示例如下：

```ts
// http://a/b/c#/a/b/c?id=1&name="jim"

const [id, setId] = useHashSearchParamsJSON<number>("id");
console.log(id); // 1

const [name, setName] = useHashSearchParamsJSON<string>("name");
console.log(name); // "jim"

const [params, setParams] = useHashSearchParamsJSON();
console.log(params); // {id: 1, name: "jim"}
setParams({ empty: true });
console.log(params); // {id: 1, name: "jim", empty: true}
```

实现思路：读取时先通过`useHashSearchParams`获取查询参数值的字符串表示，然后通过`JSON.parse`解析得到 JS 类型。写入时先通过`JSON.stringify`序列化成字符串表示，然后通过`useHashSearchParams`提供的更新函数写回到 hash 串中。

实现代码如下：

```ts
import { useCallback } from "react";
import { useHashSearchParams } from "react-use";

const mapValues = (src, fn) =>
  Object.keys(src).reduce(
    (target, key) => Object.assign(target, { [key]: fn(src[key]) }),
    {}
  );

// 重载函数签名
interface UseRouteParamsType {
  <T = any>(key: string, defaultValue?: T): [T | undefined, (value: T) => void];
  <T = any>(): [
    Record<string, T | undefined>,
    (searchParams: Record<string, T>) => void
  ];
}

export const useHashSearchParamsJSON: UseRouteParamsType = (
  key?: any,
  defaultValue?: any
): any => {
  const dispatch = useTDispatch();
  // 获取指定 key 的 value 值，此时是字符串格式
  const [json, setJson] = useHashSearchParams(key);
  let value: any;

  // 调用 JSON.parse 解析 JSON 字符串到 JS 值，解析可能会失败需捕获异常处理
  try {
    value = key
      ? json === undefined
        ? defaultValue
        : JSON.parse(json)
      : _.mapValues(json, (v) => JSON.parse(v));
  } catch (err) {
    // debugErr(err)
  }

  // 调用 JSON.stringify 序列化 JS 值成 JSON 字符串
  const setValue = useCallback(
    (newValue: any) => {
      if (key) {
        setJson(JSON.stringify(newValue));
      } else {
        setJson(_.mapValues(newValue, (v) => JSON.stringify(v)));
      }
    },
    [dispatch.shared, key, setJson, value]
  );

  return [value, setValue];
};
```

> `useHashSearchParamsJSON`适用范围比较有限，不考虑合入 react-use，如果需要可以参考上述代码自行在项目中实现。

## 小结

本文实现的对路由参数进行读写的 hooks，本身具有很强的实用价值，其次可作为自定义 hooks 的学习参考。此外，遇到功能复杂的 hooks 可尝试像本文一样先分解 hooks 然后分步实现：先找出更通用的 hooks(如`useHash`)，再基于已有的 hook 实现功能更特定的 hooks(如`useHashSearchParams`)。
