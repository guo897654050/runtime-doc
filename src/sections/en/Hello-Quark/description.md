# Getting started

Welcome to Quark tutorial!

The goal of this tutorial is to let you quickly experience the use of Omi to develop **cross framework components** or build **entire applications**, using jxs/tsx you are familiar with.

##  Preconditions

This tutorial assumes that you are basically familiar with HTML, CSS, javascript/typescript, and jsx/tsx.

## Hello Quark

Import dependencies from @quarkd/core

```tsx
import QuarkElement, { customElement, property, state } from '@quarkd/core'
```

Declare custom element label name:

```tsx
@customElement({
  tag: 'test-component',
})
```

Define custom element:

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


Use in Vue Or React:

```js
<test-component />
```

Render custom elements to body.Because it is a standard custom element, you can directly use the DOM API to achieve the same effect as above::

```tsx
document.body.appendChild(document.creatElement('test-component'))
```
Congratulations on getting started!