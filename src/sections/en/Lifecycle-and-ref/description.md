
###  Lifecycle

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `componentDidMount`        | componentDidMount |
| `shouldComponentUpdate`      | Used to control whether the current property change causes the component to re-render |
| `componentDidUpdate`      | Fired after component update                |
| `componentWillUnmount`   |  Execute before remove                  |
For example:

```js
import QuarkElement, { customElement } from '@quarkd/core'

@customElement({
  tag: 'my-timer',
})
class MyTimer extends QuarkElement {

  data = {
    seconds: 0
  }

  tick() {
    this.data.seconds++
  }

  componentDidMount() {
     this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
     clearInterval(this.interval)
  }

  render() {
    return <div>Seconds: {this.data.seconds}</div>
  }
}

document.body.innerHTML = `<my-timer />`
```

## Ref

### createRef

you can use `createRef` to create ref:

```jsx
import QuarkElement, {
  Fragment,
  createRef,
  customElement
} from '@quarkd/core';

@customElement({
  tag: 'my-ref'
})

class MyRef extends QuarkElement {

  customRef = createRef()

  handleClick = () => {
     const { current } = this.rightSlotRef;
     if (current) {
      current.style.color = 'red';
    }
  }
  

  render() {
    return (
      <Fragment>
        <span ref={this.customRef} onClick={this.handleClick}>this is ref</span>
      </Fragment>
    )
  }
}
```