import QuarkElement, { customElement } from '@quarkd/core'
import style from './index.css'

@customElement({
  tag: 'my-element',
  style,
})
class MyElement extends QuarkElement {
  render() {
    return (
      <div>
        <h1>🎉 Congratulations!</h1>
      </div>
    )
  }
}

document.body.innerHTML = `<my-element />`
