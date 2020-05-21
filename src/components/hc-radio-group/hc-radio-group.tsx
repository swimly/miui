import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-radio-group',
  styleUrl: 'hc-radio-group.css',
  shadow: true,
})
export class HcRadioGroup implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
