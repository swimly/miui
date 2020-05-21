import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-collapse',
  styleUrl: 'hc-collapse.css',
  shadow: true,
})
export class HcCollapse implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
