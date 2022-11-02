# 组件定义和使用

这一节来学习组件定义和使用。

## 定义 Counter 组件

```tsx
import QuarkElement, { customElement, property, state } from '@quarkd/core'
import style from './index.css'

@customElement({
  tag: 'my-counter',
  style,
})
export default class MyCounter extends QuarkElement {
  @property()
  count: number = 0;

  add = () => {
    this.count++
  }

  render() {
    return (
      <div>
        <div class='card'>
          <button onClick={this.add} type='button'>
            count is {this.count}
          </button>
        </div>
      </div>
    )
  }
}

```

## 使用 Counter 组件

```tsx
const el = document.createElement('my-counter')
document.body.appendChild(el);
```

或者直接在Vue组件或者React组件中引入

```tsx
<my-counter></my-counter>
```

## 给 Counter 属性初始值

```tsx
class MyCounter extends QuarkElement {
  @property()
  count: number = 0;
}
```

然后就可以使用了: 

```tsx
<my-counter count="20" />
```

## 自定义事件

```tsx
add = () => {
  this.count++
}
```

通过 `onClick` 监听:

```tsx
<my-counter onClick={this.add} />
```

恭喜你学习组件定义和使用了！