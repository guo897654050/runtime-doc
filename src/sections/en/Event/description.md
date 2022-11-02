## Event

Directly bind the events of DOM elements through `onClick`:

```tsx
<button onClick={this.onClick}>Click Me</button>
```

### Custom Event

`$on`supports adding event listeners to specified element

`$emit` throws custom event in the current element


The complete code is as follows:
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

then bind the event on your custom element，use in Vue or React：

```jsx
<my-counter @emitEvent="()=> {console.log('count add!')}"></my-counter>
```

or:

```js
myElement.addEventListener('emit-event', (evt) => {})
```

