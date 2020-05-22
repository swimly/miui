import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-indexbar-title',
  styleUrl: 'hc-indexbar-title.scss',
  shadow: true,
})
export class HcIndexbarIndicate {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
