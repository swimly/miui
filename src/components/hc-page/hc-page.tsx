import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-page',
  styleUrl: 'hc-page.scss',
  shadow: true,
})
export class HcPage implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
