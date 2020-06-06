import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-address',
  styleUrl: 'hc-address.css',
  shadow: true,
})
export class HcAddress {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
