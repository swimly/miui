import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-square-item',
  styleUrl: 'hc-square-item.scss',
  shadow: true,
})
export class HcSquareItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
