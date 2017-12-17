# 动手实现 Promise

## 前言

为了增强对 ES6 `Promise`工作方式的理解，我实现了一个自己的`ES6Promise`类，接口与 ES6 的`Promise`类一致（包含构造函数、`then`、`catch`、`resolve`、`reject`）， 并且符合 [Promise/A+ 规范](https://promisesaplus.com/) 。下面从简单开始，一步步实现一个自己的`Promise`。

下面是最终实现的`ES6Promise`使用示例：

```javascript
import {ES6Promise} from './es6-promise'


let p1 = new ES6Promise((resolve, reject) => {
    resolve(1);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(999);
    }, 1000);
});

ES6Promise.resolve(1)
.then(value => value + 1, reason => reason)
.then(value => ES6Promise.reject(p2), reason => reason)
.catch((value) => console.log(value));                    // 999
```

## 创建 Promise

回想 ES6 的 `Promise`对象构造函数，它要求传入一个执行器，执行器有两个参数`resolve`和`reject`，两个参数都是函数类型，我们可以在执行器中调用这两个方法，将`Promise`变为`resolved`或`rejected`。先实现这个一步，代码如下：

```
const State = {
    pending: 0,
    resolved: 1,
    rejected: 2
}

class ES6Promise {
    constructor(executor) {
        this._state = State.pending;    // 保存状态，取值为 State 之一
        this._value = undefined;        // 保存 resolve 或 reject 时所传入的值
        this._callbacks = [];           // 保存状态监听函数，promise 状态变化时调用

        if (typeof executor === 'function') {
            let resolve = (value) => {
                this._transition(State.resolved, value);
            };

            let reject = (value) => {
                this._transition(State.rejected, value);
            };
            executor(resolve, reject);
        }
    }

    // 状态转移
    _transition(state, value) {        
        if (this._state === State.pending) {    
            this._state = state;               
            this._value = value;
            this._callbacks.forEach(callback => callback());
        } 
    }
}
```

使用：
```javascript
let promise1 = new ES6Promise((resolve, reject) => {
    resolve(1);
});
```

首先，在`MyPromise`构造函数中声明了两个成员变量`status`和`data`，分别表示`MyPromise`的状态和数据。根据`Promise`规范，其状态只能有三种：`pending`、`resolved`和`rejected`，初始状态是`pending`，一旦变化为`resolved`或`rejected`状态后，其状态不再变化。所以，初始设置`status`为`undefined`，当调用`resolve()`或`reject()`时，内部先判断其状态，如果状态已经发生变化，则直接返回，这样保证其状态不会被修改。否则，将状态标记为`resolved`或`rejected`，同时保存数据。

## 实现 then 方法

`Promise`对象可以链式调用`then()`方法，这得益于`then()`返回的也是`Promise`对象（准确说是`thenable`对象，即包含`then`方法的对象），例如：

```
let promise1 = new ES6Promise((resolve, reject) => {
    resolve(1);
});

let promise2 = promise1.then(function onResolved(){}, function onRejected() {});
```

所以下面`ES6Promise`的`then`函数实现中，首先创建并返回一个新的`ES6Promise`对象`promise2`，在传入`promise2`构造函数的执行器内部，通过`resolve`和`reject`方法修改`promise2`的状态。`promise2`状态何时变化，取决于当前`promise1`的状态，如果`promise1`状态是`pending`，则等待`promise1`被`resolved`或`rejected`时执行`scheduleFn()`，否则立即执行`scheduleFn()`。

`scheduleFn()`方法主要工作是，根据`promise1`当前状态是`resolved`（或`rejected`），调用`then(onResolved, onRejected)`方法参数中的`onResolved(promise1.value)`（或`onRejected(promise1.value)`），以`promise1`的内部值作为参数，返回结果传递给`promise2`的`resolve`（或`reject`）方法，从而改变`promise2`的状态和内部值。按 [Promise/A+ 规范](https://promisesaplus.com/) `scheduleFn()`必须是异步执行的，所以这里通过`setTimeout()`方法，让其在下个事件循环中处理。

```javascript
class ES6Promise {
    // 省略重复代码...

    then(onResolved, onRejected) {
        let self = this;

        let promise2 = new ES6Promise((resolve, reject) => {
            let scheduleFn = () => {
                setTimeout(() => {
    
                    onResolved = typeof onResolved === 'function' ? onResolved : v => v;
                    onRejected = typeof onRejected === 'function' ? onRejected : v => {throw v};
                    try {
                        if (self._state === State.resolved) {
                            resolve(onResolved(self._value));
                        } else {
                            resolve(onRejected(self._value));
                        }                    
                    } catch (e) {
                        reject(e);
                    }
                });
            }

            if (this._state === State.pending) {
                this._callbacks.push(scheduleFn);
            } else {
                scheduleFn();
            }
        });

        return promise2;
    }
}
```

## 实现 then 方法 v2

上面实现的`then()`方法中， 直接将`onResolved()`（或`onRejected()`）的返回值，传递给`resolve`（或`reject`），改变`promise2`的状态和内部值。这里有一个问题，如果`onResolved()`（或`onRejected()`）返回的也是一个`Promise`对象（或`thenable`对象），那么`promise2`不会等到这个返回的`Promise`对象`resolved`或的`rejected`后才执行，而是将返回的`Promise`对象作为`promise2`的内部值。看下面例子，最后一个`then()`方法执行后应该输出`2`才符合预期，而实际输出的是`ES6Promise`对象实例：

```javascript
let p1 = new ES6Promise((resolve, reject) => {
    resolve(1);
}).then(value => {
    return new ES6Promise((resolve, reject) => {
        setTimeout(() => resolve(value + 1), 1000);
    });
}).then(value => console.log(value));       // 输出：ES6Promise 对象
```

为了解决上面这个问题，需要对`onResolved()`（或`onRejected()`）的返回值（暂称之为`x`）进行判断和处理，这里引入一个`resolveProcedure()`方法，该方法根据`x`值的类型，决定何时调用`promise2`的`resolve`或`reject`方法。如果`x`是一个`thenable`对象，则等到该`thenable`对象状态确定时才调用调用`promise2`的`resolve`或`reject`方法，否则立即调用`promise2`的`resolve`，如果中间抛出异常，则立即调用`promise2`的`reject`方法。代码如下：

```javascript
class ES6Promise {
    // 省略重复代码...

    then(onResolved, onRejected) {
        let self = this;

        let promise2 = new ES6Promise((resolve, reject) => {
            let scheduleFn = () => {
                setTimeout(() => {
                    onResolved = typeof onResolved === 'function' ? onResolved : v => v;
                    onRejected = typeof onRejected === 'function' ? onRejected : v => {throw v};
                    try {
                        // 修改这里
                        let x = self._state === State.resolved ? onResolved(self._value) : onRejected(self._value);
                        resolveProcedure({ resolve, reject }, x);
                    } catch (e) {
                        reject(e);
                    }
                });
            }

            if (this._state === State.pending) {
                this._callbacks.push(scheduleFn);
            } else {
                scheduleFn();
            }
        });

        return promise2;
    }
}


// 根据 x 值，解析 promise 状态
 resolveProcedure(promise, x)function resolveProcedure({ resolve, reject, promise2 }, x) {
    // 2.3.1 If promise and x refer to the same object, reject promise with a TypeError as the reason.
    if (promise2 === x) {
        reject(new TypeError(x));
    }

    if (x instanceof ES6Promise) {    // 2.3.2 If x is a promise, adopt its state
        x.then(value => resolveProcedure({resolve, reject, promise2}, value), reason => reject(reason));
    } else if ((typeof x === 'object' && x !== null) || (typeof x === 'function')) {  // 2.3.3 
        let resolvedOrRejected = false;
        try {
            let then = x.then;      // 2.3.3.1 Let then be x.then
            if (typeof then === 'function') {   // 2.3.3 If then is a function, call it with x as this, first argument resolvePromise, and second argument rejectPromise, where:
                then.call(x, value => {
                    if (!resolvedOrRejected) {
                        resolveProcedure({ resolve, reject, promise2 }, value); // 2.3.3.3.1 If/when resolvePromise is called with a value y, run [[Resolve]](promise, y).
                        resolvedOrRejected = true;
                    }
                    // 2.3.3.3.3 If both resolvePromise and rejectPromise are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored.
                }, reason => {
                    if (!resolvedOrRejected) {
                        reject(reason);             // 2.3.3.3.2 If/when rejectPromise is called with a reason r, reject promise with r.
                        resolvedOrRejected = true;
                    }
                    // 2.3.3.3.3 If both resolvePromise and rejectPromise are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored.
                });
            } else {                // 2.3.3.4 If then is not a function, fulfill promise with x.
                resolve(x);
            }
        } catch (e) {
            if (!resolvedOrRejected) {
                // 2.3.3.2 If retrieving the property x.then results in a thrown exception e, reject promise with e as the reason.
                // 2.3.3.4 If calling then throws an exception e
                reject(e);
            }
        }
    } else {
        resolve(x);     // 2.3.4 If x is not an object or function, fulfill promise with x.
    }
}
```

修改后，再次运行上面测试代码，结果符合预期：
```javascript
let p1 = new ES6Promise((resolve, reject) => {
    resolve(1);
}).then(value => {
    return new ES6Promise((resolve, reject) => {
        setTimeout(() => resolve(value + 1), 1000);
    });
}).then(value => console.log(value));       // 输出： 2
```

## 实现 catch 方法

`ES6Promise`核心的`then`方法上面已经实现，`catch`方法不过是`then`方法的一种便捷形式，其实现如下：
```javascript
class ES6Promise {
    // 省略重复代码...

    catch(onRejected) {
        this.then(undefined, onRejected);
    }
}
```

## 实现 resolve/reject 静态

ES6 的`Promise`对象还提供了两个静态方法`Promise.resolve`和`Promise.reject`，通过这两个方法可以很方便的将一般`javascript`值封装成`Promise`对象。实现这两个方法也很简单，以`Promise.resolve`为例，首先这个方法要返回一个新的`Promise`对象，新的`Promise`对象解析传入的值，这个解析过程交由`resolveProcedure()`方法完成，由于这是`resolve`方法，所以即使`value`是一个被`rejected`的`Promise`，也要将其结果`resolve`，所以传递给`resolveProcedure()`方法的第一个参数都是`resolve`方法。`Promise.reject`方法实现类似，代码如下：

```javascript
class ES6Promise {
    // 省略重复代码...

    static resolve(value) {
        return new ES6Promise((resolve, reject) => resolveProcedure({resolve, reject: resolve}, value));
    }

    static reject(reason) {
        return new ES6Promise((resolve, reject) => resolveProcedure({resolve: reject, reject}, reason));
    }
}
```

## 测试

上面的`ES6Promsie`通过了 [promises-tests](https://github.com/promises-aplus/promises-tests) 提供的全部测试用例，意味着其完全符合了 Promise/A+ 规范。

可以通过 npm 安装后，查看源码和测试结果：

```
// 安装
$ npm install es6-promise
// 编译
$ npm run build
// 运行测试用例
$ npm run test
```


## 小结

`Promise`作为社区产物，最终被纳入 ECMAScript 规范，可见其是被大众所接收的。`Promise`改变了长久以来通过`callback`编写异步代码的方式，让异步回调以一种更优雅的方式链式调用，并拥有更清晰的错误处理。`Promise`同时也为`generator/yield`和`async/await`以同步方式编写异步代码提供了基础设施。`Promise`使用起来很简单，但是涉及到一些复杂或极端的例子，需要对`Promise`规范理解透彻才能正确得到结果。

附上一张根据自己理解画的`Promise`处理示意图：


 

最后附上项目地址和仓库地址：

github 地址 : <https://github.com/whinc/es6-promise>

npm 地址：<https://www.npmjs.com/package/whinc-es6-promise>

## 参考


* [Promise/A+ 规范](https://promisesaplus.com/)

* [Promise | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

* 崔鹏飞，[自己动手实现Promises/A+规范](http://cuipengfei.me/blog/2016/05/15/promise/)

* [promises-tests | github](https://github.com/promises-aplus/promises-tests)

* 阮一峰，[ECMAScript 6 入门 - Promise](http://es6.ruanyifeng.com/#docs/promise)