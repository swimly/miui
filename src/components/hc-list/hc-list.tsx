import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-list',
  styleUrl: 'hc-list.css',
  shadow: true,
})
export class HcList implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
