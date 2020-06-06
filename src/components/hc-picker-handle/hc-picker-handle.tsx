import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-picker-handle',
  styleUrl: 'hc-picker-handle.scss',
  shadow: true,
})
export class HcPickerHandle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
