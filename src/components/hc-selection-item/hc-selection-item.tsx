import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-selection-item',
  styleUrl: 'hc-selection-item.scss',
  shadow: true,
})
export class HcSelectionItem {
  @Prop() value: string;
  @Element() el: HTMLElement;
  @Event() vclick: EventEmitter;
  render() {
    return (
      <Host onClick={this.onClick.bind(this)}>
        <slot></slot>
      </Host>
    );
  }
  onClick () {
    this.vclick.emit({
      value: this.value,
      label: this.el.innerText
    })
  }
}
