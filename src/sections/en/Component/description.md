# Component

In this section, you will learn the definition and use of components.

## Define Counter Component

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

## Use Counter Component

```tsx
const el = document.createElement('my-counter')
document.body.appendChild(el);
```

Use in Vue Or React

```tsx
<my-counter></my-counter>
```

## Initial prop value of counter

```tsx
class MyCounter extends QuarkElement {
  @property()
  count: number = 0;
}
```

Then you can use it: 

```tsx
<my-counter count="20" />
```

## Custom Event

```tsx
add = () => {
  this.count++
}
```

Listen it through `onClick`:

```tsx
<my-counter onClick={this.add} />
```

Congratulations on learning component definition and use!