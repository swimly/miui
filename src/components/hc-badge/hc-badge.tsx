import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-badge',
  styleUrl: 'hc-badge.css',
  shadow: true,
})
export class HcBadge implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
