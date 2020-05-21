import { Component, ComponentInterface, Host, h, Method, Element, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'hc-alert',
  styleUrl: 'hc-alert.scss',
  shadow: true,
})
export class HcAlert implements ComponentInterface {
  @Prop() display: boolean
  @Prop() masker: boolean = true
  @Prop() clickable: boolean = true
  @Element() el: HTMLElement
  $mask
  command
  @Watch('display')
  Dhandle (v: boolean) {
    if (v) {
      this.el.removeAttribute('style')
      setTimeout(() => {
        this.el.setAttribute('display', `${v}`)
      }, 30)
    } else {
      this.el.removeAttribute('display')
      setTimeout(() => {
        this.el.style.display = 'none'
      }, 300)
      if (this.command) {
        setTimeout(() => {
          document.body.removeChild(this.el)
        }, 300)
      }
    }
  }
  componentDidLoad () {
    this.el.style.display = 'none'
  }
  render() {
    return (
      <Host>
        <div class="close">
          <slot name="close">
            <hc-icon onClick={this.destory.bind(this)} name="close"></hc-icon>
          </slot>
        </div>
        <h2 class="title">
          <slot name="title"></slot>
        </h2>
        <div class="content">
          <slot></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </Host>
    );
  }
  onDisplay () {
    this.el.style.zIndex = `100`
    setTimeout(() => {
      this.display = true
      this.$mask = document.createElement('hc-masker')
      this.$mask.command = true
      this.$mask.clickable = false;
      if (!this.masker) {
        this.$mask.fill = 'transparent';
      }
      document.body.appendChild(this.$mask)
      this.$mask.generate()
      if (this.clickable && this.masker) {
        this.$mask.addEventListener('vclick', () => {
          this.destory()
        })
      }
    }, 30)
  }
  @Method()
  async destory () {
    this.display = false;
    this.$mask.destory()
  }
  @Method()
  async generate (option: object = null) {
    if (option) {

    } else {
      this.onDisplay()
    }
  }
}
