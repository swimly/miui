import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-dropdown',
  styleUrl: 'hc-dropdown.css',
  shadow: true,
})
export class HcDropdown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
