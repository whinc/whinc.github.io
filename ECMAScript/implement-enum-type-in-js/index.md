# 在 JavaScript 中实现枚举类型

JavaScript 是一门弱类型语言，它没有枚举类型，实践中一般是通过常量值来表示枚举值，但是这种“伪枚举”与 Java 这类强类型语言中的枚举类型的特点和行为相去甚远，本文首先介绍一般的 JavaScript “伪枚举”的实现，然后介绍 Java 语言的枚举类型作为比较，最后介绍如何通过纯 JavaScript 实现类似 Java 语言中的“真枚举”类型。

## JavaScript 实现”伪枚举“

枚举类型最重要的好处是可以将一组相关的常量放在一起管理，使用的人对取值范围一目了然，同时避免了直接使用字面值可方便以后重构。

下面是一个 JavaScript 实现的“枚举”：
```javascript
const Color = {
    RED: 0,
    GREEN: 1,
    BLUE: 2
}

Object.freeze(Color)
```

上面代码中的`Object.freeze()`方法冻结`Color`对象，使其无法动态的添加、删除和修改定义好的枚举值。

使用上面的`Color`枚举：
```javascript
Color.RED === Color.RED     // true
Color.RED = 4              // error 不能修改枚举常量
```

## Java 中的枚举类型

```java
public enum Color {
    RED('red'),
    GREEN('green'),
    BLUE('blue'),

    private final String name;

    Color(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name
    }
}
```

```java
Color.RED == Color.RED     // true
Color.RED instanceof Color // true (枚举值是枚举类型的实例）
Color.RED.getName()        // 'red' (调用枚举值的成员方法)
Color.RED = Color.BLUE     // Error：不能修改枚举常量
```

## JavaScript 实现“真枚举”

```javascript
class Color {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

Color.RED = new Color('xxx')
Color.GREEN = new Color('green')
Color.BLUE = new Color('blue')

Object.freeze(Color)               // 冻结对象，防止修改

export { Color }
```

```javascript
// 测试
console.log(Color.RED === Color.RED)       // true
console.log(Color.RED instanceof Color)    // true
console.log(Color.RED.getName())           // 'red'
Color.RED = new Color('xx')                // error 不能修改枚举常量
Color.RED = Color.BLUE                     // error 不能修改枚举常量
```