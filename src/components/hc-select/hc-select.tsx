import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-select',
  styleUrl: 'hc-select.css',
  shadow: true,
})
export class HcSelect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
