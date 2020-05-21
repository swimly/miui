import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-noticebar',
  styleUrl: 'hc-noticebar.css',
  shadow: true,
})
export class HcNoticebar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
