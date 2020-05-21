import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-checkbox-group',
  styleUrl: 'hc-checkbox-group.css',
  shadow: true,
})
export class HcCheckboxGroup implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
