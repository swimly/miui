import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-score',
  styleUrl: 'hc-score.css',
  shadow: true,
})
export class HcScore {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
