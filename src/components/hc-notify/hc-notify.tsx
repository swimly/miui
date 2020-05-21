import { Component, Host, h, Method, Prop, Element, Watch } from '@stencil/core';

@Component({
  tag: 'hc-notify',
  styleUrl: 'hc-notify.scss',
  shadow: true,
})
export class HcNotify {
  @Prop() place: string = 'up'
  @Prop() align: string = 'left'
  @Prop() visible: boolean;
  @Prop() duration: number = 3000
  @Prop() icon: string;
  @Prop() closable: boolean;
  @Element() el:HTMLElement
  @Watch('visible')
  visibleHandle (v:boolean) {
    if (v) {
      this.el.setAttribute('visible', 'true')
    } else {
      this.el.removeAttribute('visible')
    }
  }
  componentWillRender () {
    this.el.setAttribute('place', this.place)
    this.el.setAttribute('align', this.align)
  }
  render() {
    return (
      <Host>
        <slot name="icon">
          <hc-icon size={24} name={this.icon}></hc-icon>
        </slot>
        <div class="content">
          <slot></slot>
        </div>
        <slot name="close">
          {this.renderClose()}
        </slot>
      </Host>
    );
  }
  renderClose () {
    if (this.closable) {
      return (
        <hc-icon name="close" onClick={this.destory.bind(this)}></hc-icon>
      )
    }
  }
  @Method()
  async show () {
    this.visible = true
    if (this.duration && !this.closable) {
      setTimeout(() => {
        this.destory()
      }, this.duration)
    }
  }
  @Method()
  async destory () {
    this.visible = false
  }
  @Method()
  async generate (option: Object = null) {
    if (option) {

    } else {
      this.show()
    }
  }
}
