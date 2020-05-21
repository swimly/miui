import { Component, ComponentInterface, Host, h, Method, Prop, Watch, Element } from '@stencil/core';
@Component({
  tag: 'hc-toast',
  styleUrl: 'hc-toast.scss',
  shadow: true,
})
export class HcToast implements ComponentInterface {
  @Prop() icon: string;
  @Prop() iconSize: number = 48;
  @Prop() display: boolean = false;
  @Prop() duration: number = 3000;
  @Prop() place: string = 'center';
  @Prop() fill: string;
  @Prop() theme: string = 'dark';
  @Element() el:HTMLElement;
  $mask;
  @Watch('display')
  Dhandle (v: boolean) {
    if (v) {
      this.el.setAttribute('display', `${v}`)
    } else {
      this.el.removeAttribute('display')
    }
  }
  componentWillRender () {
  }
  render() {
    return (
      <Host style={{backgroundColor: this.fill}}>
        <slot name="icon">
          <hc-icon name={this.icon} size={this.iconSize}></hc-icon>
        </slot>
        <slot></slot>
      </Host>
    );
  }
  onDisplay () {
    this.display = true
    this.$mask = document.createElement('hc-masker')
    this.$mask.command = true
    this.$mask.fill = 'transparent';
    this.$mask.clickable = false;
    document.body.appendChild(this.$mask)
    this.$mask.generate()
    if (this.duration) {
      setTimeout(() => {
        this.display = false;
        this.$mask.destory()
      }, this.duration)
    }
  }
  @Method()
  async generate (option: object = null) {
    if (option) {

    } else {
      this.onDisplay()
    }
  }
}
