import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';
import china from '../../utils/china'
@Component({
  tag: 'hc-address',
  styleUrl: 'hc-address.scss',
  shadow: true,
})
export class HcAddress {
  @Prop() type: string = 'picker'
  @Element() el: HTMLElement;
  @Event() vfinish: EventEmitter;
  $picker
  componentDidLoad () {
    this.$picker = this.el.shadowRoot.querySelector(`hc-${this.type}`)
  }
  render() {
    var content = null
    if (this.type == 'picker') {
      content = (
        <hc-picker onVdone={this.getValue.bind(this)} onVhide={this.onHide.bind(this)} event={true} command={true} data={JSON.stringify(china)}></hc-picker>
      )
    } else {
      content = (
        <hc-selection onVdone={this.getValue.bind(this)} data={JSON.stringify(china)}></hc-selection>
      )
    }
    return (
      <Host>
        <div class="handle" onClick={this.renderDom.bind(this)}>
          <slot></slot>
        </div>
        {content}
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
    this.vfinish.emit({
      value: e.detail.value
    })
  }
}
