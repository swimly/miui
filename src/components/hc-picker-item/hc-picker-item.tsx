import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-picker-item',
  styleUrl: 'hc-picker-item.scss',
  shadow: true,
})
export class HcPickerItem {
  @Prop() active: boolean;
  @Prop() height: number = 44;
  render() {
    return (
      <Host style={{
        height: `${this.height}px`
      }}>
        <slot></slot>
      </Host>
    );
  }

}
