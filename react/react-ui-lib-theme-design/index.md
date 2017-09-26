# React组件库主题设计

基于 React 的 UI 组件库层出不穷，作为组件库很重要的一个功能就是实现主题功能。通过组件库提供的主题定制接口，用户只需要修改一些组件的 UI 参数，就可以达到修改整个组件库样式。


## 一种简单的主题设计方案

为了支持根据主题改变外观，组件库中每个组件都要求暴露一个`style`属性，以便外部可以通过传入不同样式控制组件的外观。
```javascript
<Button style={style}>
```

为了切换主题，先定义黑白两套主题。不同主题之间只是样式取值不一样，数据结构必须保持一致。每种主题详细定义了每个组件的`style`值。
```javascript
const DarkTheme = {
  ButtonStyle: {...},
  InputStyle: {...}
}

const LightTheme = {
  ButtonStyle: {...},
  InputStyle: {...}
}
```

接下来就是切换主题了，应用内不直接引用具体的某个主题，而是引用主题的抽象，由于不同主题数据结构相同，只需要在创建`theme`对象时，赋予不同的主题即可达到切换整个应用外观的目的。
```javascript
const theme = DarkTheme
//const theme = LightTheme
<App>
  <Button style={theme.ButtonStyle} />
  <Input style={theme.InputStyle} />
</App>
```

到这里，一个主题切换方案就设计完了。除了每次都要在组件中声明`style`为当前主题样式外，其他都非常完美，你可以修改全局主题，也可以修改单独某个组件的默认样式。
```javascript
const theme = DarkTheme
// 修改全局 Button 的默认样式
theme.ButtonStyle = {...this.ButtonStyle, color: 'red'}
<App>
  {/* 修改单个 Button 的默认样式 */} 
  <Button style={[theme.ButtonStyle, {color: 'blue'}]} />
  <Input style={theme.InputStyle} />
</App>
```

只要解决“每个组件需要显式声明`style`为主题的默认样式”的问题，那这就会是一个简单强大的主题切换方案了，接下来我会解决这个问题。


## 基于 Context 的组件主题设计方案

Context 是 React 15 引入的实验特性（现实情况是已经广泛用于各种库），可以从父组件传递数据给子孙组件，而不必依赖于中间组件的层层传递，整个过程对中间的组件是透明的。

通过组件的 Context 特性，可以将在根组件中定义的主题对象传递给子组件，这样子组件就不必依赖外部传入`style`属性来设置默认主题样式。

思路有了，接下来就开始动手实现了。提供主题的根组件命名为`ThemeProvider`（命名随便取）

```javascript
class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.element,
    theme: PropTypes.object
  }

  static childContextTypes = {
    theme: PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      theme: this.props.theme || createTheme()
    }
  }

  render() {
    return this.props.children
  }
}
```