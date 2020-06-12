import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-actionsheet-handle',
  styleUrl: 'hc-actionsheet-handle.css',
  shadow: true,
})
export class HcActionsheetHandle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
