import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-actionsheet-content',
  styleUrl: 'hc-actionsheet-content.css',
  shadow: true,
})
export class HcActionsheetContent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
