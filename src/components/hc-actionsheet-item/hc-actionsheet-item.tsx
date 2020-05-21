import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-actionsheet-item',
  styleUrl: 'hc-actionsheet-item.scss',
  shadow: true,
})
export class HcActionsheetItem {

  render() {
    return (
      <Host>
        <slot></slot>
        <hc-icon name="seleted"></hc-icon>
      </Host>
    );
  }

}
