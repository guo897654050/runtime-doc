# 插槽 (slot)

HTML <slot> 元素 ，作为 Web Components 技术套件的一部分，是 Web 组件内的一个占位符。该占位符可以在后期使用自己的标记语言填充，这样您就可以创建单独的 DOM 树，并将它与其它的组件组合在一起。

## 使用 

```tsx
import QuarkElement, { customElement, property } from '@quarkd/core'

@customElement({
  tag: 'my-element'
})
class MyElement extends QuarkElement {
  render() {
    return (
      <div>
        <slot></slot>
      </div>
    )
  }
}

document.body.innerHTML = `
<my-element>
  <p>One</p>
  <p>Two</p>
</my-element>
```

为插槽内元素定义样式:

```tsx
::slotted(*) {
  border: 1px solid #409EFF;
  padding: 6px;
}

```


## slot name 属性

拥有 name 属性的插槽叫具名插槽。可以通过 `::slotted()` 选择器选中特定目标元素:

```css
/* Selects any element placed inside a slot */
::slotted(*) {
  font-weight: bold;
}

/* Selects any <span> placed inside a slot */
::slotted(span) {
  font-weight: bold;
}
```

比如试试改造一下本文的例子为下面的代码：

```tsx
::slotted(.a) {
  border: 1px solid #07c160;
  padding: 6px;
}
```

```tsx
import QuarkElement, { customElement, property } from '@quarkd/core'

@tag('my-element')
class MyElement extends WeElement {

  render() {
    return (
      <div>
        <slot name='a' class="a"></slot>
        <slot name='b'></slot>
      </div>
    )
  }
}

document.body.innerHTML = `
<my-element>
  <p slot="a">One</p>
  <p slot="b">Two</p>
</my-element>
```

恭喜你学会了使用插槽！