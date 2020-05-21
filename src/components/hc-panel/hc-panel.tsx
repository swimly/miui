import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-panel',
  styleUrl: 'hc-panel.scss',
  shadow: true,
})
export class HcPanel implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
