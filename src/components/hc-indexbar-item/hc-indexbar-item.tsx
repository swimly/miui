import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-indexbar-item',
  styleUrl: 'hc-indexbar-item.scss',
  shadow: true,
})
export class HcIndexbarItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
