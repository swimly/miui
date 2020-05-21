import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-dialog',
  styleUrl: 'hc-dialog.css',
  shadow: true,
})
export class HcDialog implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
