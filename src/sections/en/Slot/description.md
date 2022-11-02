# Slot (slot)

The HTML <slot> element, as part of the web components technology suite, is a placeholder within a web component. This placeholder can be populated later with your own markup language, so that you can create a separate DOM tree and combine it with other components.

## Usage 

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

Define styles for elements in slots:

```tsx
::slotted(*) {
  border: 1px solid #409EFF;
  padding: 6px;
}

```


## slot name 属性

The slot with the name attribute is called a named slot. You can select a specific target element through the `::slotted()` selector:


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

For example, try to transform the example of this article into the following code:

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

Congratulations on learning to use slots!