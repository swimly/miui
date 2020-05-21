import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-countdown',
  styleUrl: 'hc-countdown.css',
  shadow: true,
})
export class HcCountdown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
