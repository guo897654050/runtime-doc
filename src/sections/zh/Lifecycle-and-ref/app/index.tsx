import QuarkElement, { Fragment, createRef, customElement } from '@quarkd/core'

@customElement({
  tag: 'my-ref',
})
class MyRef extends QuarkElement {
  customRef: any = createRef()

  handleClick = () => {
    const { current } = this.customRef
    if (current) {
      current.style.color = 'red'
    }
  }

  render() {
    return (
      <Fragment>
        <p ref={this.customRef} onClick={this.handleClick}>
          this is ref
        </p>
      </Fragment>
    )
  }
}

document.body.innerHTML = `<my-ref />`
