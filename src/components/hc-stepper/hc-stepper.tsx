import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-stepper',
  styleUrl: 'hc-stepper.css',
  shadow: true,
})
export class HcStepper {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
