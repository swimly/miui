import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-search',
  styleUrl: 'hc-search.css',
  shadow: true,
})
export class HcSearch {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
