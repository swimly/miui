import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-indexbar-group',
  styleUrl: 'hc-indexbar-group.css',
  shadow: true,
})
export class HcIndexbarGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
