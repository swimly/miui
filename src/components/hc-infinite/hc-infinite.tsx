import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-infinite',
  styleUrl: 'hc-infinite.css',
  shadow: true,
})
export class HcInfinite {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
