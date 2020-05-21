import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-indexbar',
  styleUrl: 'hc-indexbar.css',
  shadow: true,
})
export class HcIndexbar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
