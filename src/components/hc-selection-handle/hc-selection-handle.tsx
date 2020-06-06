import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-selection-handle',
  styleUrl: 'hc-selection-handle.scss',
  shadow: true,
})
export class HcSelectionHandle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
