import { Component, Host, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-popover-item',
  styleUrl: 'hc-popover-item.scss',
  shadow: true,
})
export class HcPopoverItem {
  @Event() vclick: EventEmitter;
  render() {
    return (
      <Host onClick={this.bindClick.bind(this)}>
        <slot></slot>
      </Host>
    );
  }
  bindClick (e) {
    this.vclick.emit({
      label: e.target.innerHTML
    })
  }
}
