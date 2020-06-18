import { Component, Host, h, Element } from '@stencil/core';
import china from '../../utils/china'
@Component({
  tag: 'hc-address',
  styleUrl: 'hc-address.scss',
  shadow: true,
})
export class HcAddress {
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
          <hc-picker onVclick={this.onHide.bind(this)} event={true} command={true} data={JSON.stringify(china)}></hc-picker>
        </div>
      </Host>
    );
  }
  renderDom () {
    this.$picker.generate()
  }
  onHide () {
    console.log('可以关闭了')
  }
}
