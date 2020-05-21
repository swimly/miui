import { Component, Host, h, Prop, Element, Method } from '@stencil/core';

@Component({
  tag: 'hc-actionsheet',
  styleUrl: 'hc-actionsheet.scss',
  shadow: true,
})
export class HcActionsheet {
  @Prop() titles: string = "请选择";
  @Prop() mode: string = 'single'; //multiple
  @Element() el:HTMLElement;
  $drawer;
  $handle;
  componentDidLoad () {
    this.$handle = this.el.shadowRoot.querySelector('slot')
    this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
    this.bindClick()
    this.bindChange()
  }
  render() {
    return (
      <Host>
        <slot name="handle"></slot>
        <hc-drawer place="down" rounder>
          <h2 class="title">{this.titles}</h2>
          <div class="wrap">
            <slot></slot>
          </div>
          <hc-row class="footer">
            <hc-col span={12}>
              <hc-button onClick={this.destory.bind(this)} type="info" rounder={true}>取消</hc-button>
            </hc-col>
            <hc-col align="right" span={12}>
            <hc-button onClick={this.destory.bind(this)} type="primary" rounder={true}>确定</hc-button>
            </hc-col>
          </hc-row>
        </hc-drawer>
      </Host>
    );
  }
  bindClick () {
    this.$handle.addEventListener('click', () => {
      this.$drawer.generate()
    })
  }
  @Method()
  async destory () {
    this.$drawer.destory()
  }
  bindChange () {
    var slot = this.el.shadowRoot.querySelectorAll('slot')[1]
    var children = slot.assignedElements()
    children.forEach((child) => {
      child.addEventListener('click', () => {
        if (this.mode == 'single') {
          children.forEach(c => {
            c.removeAttribute('active')
          })
        }
        child.setAttribute('active', 'true')
      })
    })
  }
}
