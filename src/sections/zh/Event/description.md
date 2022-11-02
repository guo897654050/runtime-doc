## Event

通过 onClick 方式直接绑定 dom 元素自带的事件:

```tsx
<button onClick={this.onClick}>Click Me</button>
```

### Custom Event

`$on`支持为指定元素增加事件监听，并会在组件销毁时自动移除。

`$emit` 在当前组件中抛出自定义事件。

```jsx
@customElement({
  tag: 'my-counter',
  style,
})
export default class MyCounter extends QuarkElement {
  @property()
  count: number = 0

  add = () => {
    this.count++
    this.$emit('emitEvent')
  }

  render() {
    return (
      <div>
        <button onClick={this.add} type='button'>
          count is {this.count}
        </button>
      </div>
    )
  }
}
```

然后在你的自定义元素上绑定事件，例如Vue中：

```jsx
<my-counter @emitEvent="()=> {console.log('count add!')}"></my-counter>
```
或者

```js
myElement.addEventListener('my-event', (evt) => {})
```