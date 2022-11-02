import QuarkElement, { customElement, property } from '@quarkd/core'
import style from './index.css'

@customElement({
  tag: 'hello-quark',
  style,
})
class HelloQuark extends QuarkElement {
  @property() msg: string = ''

  render() {
    return (
      <p>
        <span>{this.msg}!</span>
      </p>
    )
  }
}

document.body.innerHTML = `<hello-quark msg='Hello Quark' />`
