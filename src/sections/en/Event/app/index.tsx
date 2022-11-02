import QuarkElement, { customElement, property } from '@quarkd/core'

@customElement({
  tag: 'my-element',
})
class MyElement extends QuarkElement {
  @property()
  count: number = 0

  add = () => {
    this.count++
    this.$emit('eventEmit')
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

document.body.innerHTML = `<my-element count="100" />`
