# 入门

欢迎来到 Quark-Element 教程！

本教程的目标是让您快速体验使用 Quark-Element 开发标准的**跨框架组件**或者构建**整个应用**，使用您熟悉的 JXS/TSX 进行开发。

## 前置条件

本教程假设您基本熟悉HTML、CSS、JavaScript/TypeScript以及 JSX/TSX。

## Hello World

从 @quarkd/core 导入依赖:

```tsx
import QuarkElement, { customElement, property, state } from '@quarkd/core'
```

声明自定义元素标签名称:

```tsx
@customElement({
  tag: 'test-component',
})
```

定义自定义元素:

```tsx
class TestComponent extends QuarkElement {
  render() {
    return (
      <div>
        <h1>Hello Quark!</h1>
      </div>
    )
  }
}
```

在Vue或者React中使用：
```js
<test-component />
```

渲染自定义元素到 body，因为是标准的自定义元素，你可以直接使用 dom api 进行操作:

```tsx
document.body.appendChild(document.creatElement('test-component'))
```

恭喜你入门了！