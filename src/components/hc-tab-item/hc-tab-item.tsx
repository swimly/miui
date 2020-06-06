import { Component, ComponentInterface, Host, h, Element, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-tab-item',
  styleUrl: 'hc-tab-item.scss',
  shadow: true,
})
export class HcTabItem implements ComponentInterface {
  @Prop() index: number;
  @Element() el:HTMLElement;
  @Event() vclick: EventEmitter;
  @Event() vchange: EventEmitter;
  componentDidLoad () {
    var slot = this.el.shadowRoot.querySelector('slot')
    slot.addEventListener('slotchange', () => {
      this.vchange.emit({
        label: this.el.innerText
      })
    })
  }
  render() {
    return (
      <Host onClick={this.bindClick.bind(this)}>
        <slot></slot>
      </Host>
    );
  }
  bindClick () {
    this.vclick.emit({
      index: this.index,
      props: this.el.getBoundingClientRect()
    })
  }
}
