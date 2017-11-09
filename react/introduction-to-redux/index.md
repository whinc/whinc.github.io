待补充：
* 图示
* demo 在线示例（stackbliz)
* 项目代码


## redux 是什么？

redux 是一个前端状态管理库，是 Flux 思想的一种实现。

这样的解释还是没能说明 redux 有什么鸟用。因为状态我们用变量保存，然后操作和使用它，一切都很简单，为什么要搞个状态管理库来增加复杂度和学习成本呢？这样讲没错，简单的项目用 redux 就是折腾自己，我也不建议你用，但是大项目就完全是另一回事了。

随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state(状态)。 这些 state 可能包括服务器响应、缓存数据、本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。

管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应 model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么。state 在什么时候？由于什么原因？如何变化？已然不受控制。 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。

举个例子，一个登录页面有账号输入框、密码输入框和登录按钮，现在要实现，输入的密码符合条件时，登录按钮高亮可点击，不符合条件时，登录按钮置灰不可点击，同时显示提示信息。这里需要三个变量来表示页面 state：password（密码）、isLogBtnDisabled(按钮是否可用)和 isTipsVisible(提示信息是否显示)。

为了实现这个功能，你需要监听输入框的变化事件，检测到变化时，就判断 password 是否符合条件，然后更新 isLogBtnDisabled 和 isTipsVisible 状态。很多人觉得这个很简单啊，OK，这里逻辑再加上账户输入框的变化时，也更新按钮和提示状态呢？如果再加上账户输入时，要实时后台校验是否已注册，然后更新按钮和提示状态呢？如果这个页面再复杂一点呢？这个时候，你很难快速找出按钮变化是由于哪个变量因素引起的。

这里的复杂性很大程度上来自于，我们总是将两个难以理清的概念混淆在一起：**变化**和**异步**。通过限制更新发生的时间和方式，**Redux 试图让 state 的变化变得可预测**。这些限制条件反映在 Redux 的三大原则中（后面提到）。

说了这么多，可能还是不知道 redux 是什么，但至少知道 redux 似乎可以解决上面这个状态管理的问题。抽象的东西结合实践比较容易理解，接下来看下 redux 的核心概念和具体使用。


## redux 核心概念

redux 本身非常简单，它只有三个核心概念：**state**、**action**和**reducer**，三者的关系如下图：

![](./images/reducer-action-state.png)


**state**

redux 的 state 是一个纯 JS 对象，用于保存应用的状态数据。

下面是一个 TODOs 应用的 state 结构：

```javascript

{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

redux 的 state 就是一个普通的 JavaScript 对象，唯一限制就是不能直接修改它（这是 redux 设计上的要求，并非语言层面的限制）。


**action**

要想更新 state 中的数据，你需要发起一个 action。Action 也是一个普通 JavaScript 对象，用来描述发生了什么。下面是一些 action 的示例：

```javascript
// 新增一个 TODO
{ type: 'ADD_TODO', text: 'Go to swimming pool' } 

// 切换一个 TODO 的完成状态
{ type: 'TOGGLE_TODO', index: 1 }

// 显示所有状态（完成和未完成）的 TODO
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

强制使用 action 来描述所有变化带来的好处是可以清晰地知道应用中到底发生了什么。如果一些东西改变了，就可以知道为什么变。

**reducer**

reducer 是一个纯函数，它接收两个参数 state 和 action，并返回**新的 state**，用伪代码描述：
```javascript
reducer = (state, action) => new_state
```

下面是一个 TODO 应用的 reducer 示例：

**补充配图**：reducer 的分裂与合并

```javascript
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
}
```

```javascript
function todos(state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return {}state.concat([{ text: action.text, completed: false }]);
  case 'TOGGLE_TODO':
    return state.map((todo, index) =>
      action.index === index ?
        { text: todo.text, completed: !todo.completed } :
        todo
   )
  default:
    return state;
  }
}
```

```javascript
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}
```

这差不多就是 Redux 思想的全部。几乎没有介绍到 Redux 的 API，Redux 90% 的是思想，这部分都是纯 JavaScript 代码。

## Redux API

Redux 的 API 主要是提供了 Store，它的作用就是将这几个概念串联起来。Store 有以下职责：
* 维持应用的 state；
* 提供 getState() 方法获取 state；
* 提供 dispatch(action) 方法更新 state；
* 通过 subscribe(listener) 注册监听器;
* 通过 subscribe(listener) 返回的函数注销监听器。

```javascript
import { createStore } from 'redux'
// 应用的初始状态
const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL' 
}
const store = createStore(todoApp, initialState)

// 根据当前应用 state 渲染 UI，例如展示 TODOs 列表
renderUI(store.getState())

// 当 UI 发生交互行为修改了 state，例如新增一条 TODO 项
store.dispatch({ type: 'ADD_TODO', text: 'Go to swimming pool' })

store.subscribe(function onStateUpdate() {
  // 修改完状态后，重新渲染 UI
  renderUI(store.getState())
})
```

redux 的核心 API 源码非常短（加上注释也不到 250 行），源码地址 <https://github.com/reactjs/redux/blob/master/src/createStore.js>，其他几个 API 接口都是为了简化 action 和 reducer 的创建，以及支持 middleware，并不影响到 redux 的核心。


## Redux 三大原则


## redux 生态

react-redux

redux-actions

redux middleware

## 参考

* [redux 中文文档](http://cn.redux.js.org/index.html)：文中部分描述和示例都来自该文档，如果想进一步深入，建议阅读原文。

