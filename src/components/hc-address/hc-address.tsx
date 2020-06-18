import { Component, Host, h, Element, Prop } from '@stencil/core';
import china from '../../utils/china'
@Component({
  tag: 'hc-address',
  styleUrl: 'hc-address.scss',
  shadow: true,
})
export class HcAddress {
  @Prop() type: string = 'picker'
  @Element() el: HTMLElement;
  $picker
  componentDidLoad () {
    this.$picker = this.el.shadowRoot.querySelector('hc-picker')
  }
  render() {
    return (
      <Host>
        <div class="handle" onClick={this.renderDom.bind(this)}>
          <slot></slot>
        </div>
        <hc-picker onVchange={this.getValue.bind(this)} onVhide={this.onHide.bind(this)} event={true} command={true} data={JSON.stringify(china)}></hc-picker>
      </Host>
    );
  }
  renderDom () {
    this.$picker.generate()
  }
  onHide () {
    this.$picker.destory()
  }
  getValue (e) {
    console.log(e.detail.value)
  }
}
