# 在 JavaScript 中实现枚举类型

JavaScript 是一门弱类型语言，它没有枚举类型，实践中一般是通过常量值来表示枚举值，但是这种“伪枚举”与 Java 这类强类型语言中的枚举类型的特点和行为相去甚远，本文首先介绍一般的 JavaScript “伪枚举”的实现，然后介绍 Java 语言的枚举类型作为比较，最后通过纯 JavaScript 实现类似 Java 语言中的“真枚举”类型。


## JavaScript 实现的”伪枚举“

Javascript 作为一门弱类型语言，没有`枚举类型，但可以通过一定方式，模拟枚举类型所具有的特点：
枚举值是常量
枚举值都具有相同的枚举类型
枚举值具有自身的属性和方法
Java 中的枚举类型
先看下 Java 中的枚举类型：
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

// 测试
Color.RED == Color.RED     // true
Color.RED instanceof Color // true
Color.RED.getName()        // 'red'
Color.RED = Color.BLUE     // error：不能修改枚举常量
Java 中枚举类型由关键字 enum 定义，枚举类型的定义与 class 非常相似，可以很方便实现枚举定义。
Javascript 中的枚举类型
const Color = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue'
}

Object.freeze(Color);

class Color {
    static get RED() { return 'red';}
    static get GREEN() { return 'green';}
    static get BLUE() { return 'blue';}
}

在 Javascript 同样可以做到和 Java 类似的枚举类型，不过是通过类来模拟。
每个枚举值都是类的一个实例，这样所有枚举值都具有类型（这样可通过 instanceof 判断类型），且每个枚举值和普通对象一样具有自身的属性和方法。

枚举值可通过枚举类型名直接引用，因此每个枚举值必须是类的静态属性。
枚举值是常量，所以第一次赋值后，冻结枚举类型，之后不能再修改。
综上几点，实现代码如下：
class Color {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

Color.RED = new Color('xxx');
Color.GREEN = new Color('green');
Color.BLUE = new Color('blue');

Object.freeze(Color);               // 冻结对象，防止修改

export {Color}


// 测试
console.log(Color.RED === Color.RED);       // true
console.log(Color.RED instanceof Color);    // true
console.log(Color.RED.getName());           // 'red'
Color.RED = new Color('xx');                // error 不能修改枚举常量
Color.RED = Color.BLUE;                     // error 不能修改枚举常量


小结
Javascript 虽然没有枚举类型，但是完全可以通过类来模拟。枚举类型平时用到的很多，上面的枚举类型为了实现和 Java 枚举类似的行为，做了一些额外工作。
实际工作中，如果你所需要的枚举类型，仅仅是为了区分不同值，并不需要枚举类型判断和方法属性，完全可以简化为下面这样的实现方式：

const Color = {
    RED: 0,
    GREEN: 1,
    BLUE: 2
}

Object.freeze(Color);

Color.RED === Color.RED     // true
Color.RED = 4;              // error 不能修改枚举常量

无论选择怎样的实现方式，都是为了保证代码可读性、易维护性。