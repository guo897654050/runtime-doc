import QuarkElement, { customElement } from '@quarkd/core'

@customElement({
  tag: 'test-component',
})
class TestComponent extends QuarkElement {
  render() {
    return (
      <div>
        <h1>Hello Quark!</h1>
      </div>
    )
  }
}

const el = document.createElement('test-component')
document.body.appendChild(el)
