import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-form',
  styleUrl: 'hc-form.scss',
  shadow: true,
})
export class HcForm implements ComponentInterface {
  @Prop() range: string = 'horizontal'
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
