import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-progress',
  styleUrl: 'hc-progress.css',
  shadow: true,
})
export class HcProgress {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
