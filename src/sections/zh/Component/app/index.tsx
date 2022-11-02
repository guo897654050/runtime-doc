import QuarkElement, { customElement, property } from '@quarkd/core'
import style from './index.css'

@customElement({
  tag: 'my-counter',
  style,
})
export default class MyCounter extends QuarkElement {
  @property()
  count: number = 0

  add = () => {
    this.count++
  }

  render() {
    return (
      <div>
        <button onClick={this.add} type='button'>
          count is {this.count}
        </button>
      </div>
    )
  }
}

const el = document.createElement('my-counter')
document.body.appendChild(el)
