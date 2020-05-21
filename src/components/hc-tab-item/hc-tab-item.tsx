import { Component, ComponentInterface, Host, h, Element, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-tab-item',
  styleUrl: 'hc-tab-item.scss',
  shadow: true,
})
export class HcTabItem implements ComponentInterface {
  @Prop() index: number;
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter;  
  render() {
    return (
      <Host onClick={this.bindClick.bind(this)}>
        <slot></slot>
      </Host>
    );
  }
  bindClick () {
    this.vchange.emit({
      index: this.index,
      props: this.el.getBoundingClientRect()
    })
  }
}
