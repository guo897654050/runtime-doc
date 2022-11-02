import QuarkElement, { Fragment, createRef, customElement } from '@quarkd/core'
import style from './index.css'

@customElement({
  tag: 'my-element',
  style,
})
class MyElement extends QuarkElement {
  render() {
    return (
      <Fragment>
        <p>Fragement!</p>
      </Fragment>
    )
  }
}

document.body.innerHTML = `<my-element />`
