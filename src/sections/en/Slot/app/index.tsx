import QuarkElement, { customElement, property } from '@quarkd/core'
import style from './index.css'

@customElement({
  tag: 'my-element',
  style,
})
class MyElement extends QuarkElement {
  render() {
    return (
      <div>
        <slot name='a'></slot>
        <slot name='b'></slot>
      </div>
    )
  }
}

document.body.innerHTML = `
<my-element>
  <p slot="a" class="a">One</p>
  <p slot="b">Two</p>
</my-element>
`
