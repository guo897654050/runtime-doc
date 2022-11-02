
### 生命周期

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `componentDidMount`        | 组件已挂载 |
| `shouldComponentUpdate`      | 用于控制当前属性变化是否导致组件重新渲染 |
| `componentDidUpdate`      | 组件更新后触发                 |
| `componentWillUnmount`   |  dom移除前执行                         |
举个例子:

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

你也可以使用 `createRef` 来创建ref:

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