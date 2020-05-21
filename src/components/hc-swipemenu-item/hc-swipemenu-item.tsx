import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-swipemenu-item',
  styleUrl: 'hc-swipemenu-item.scss',
  shadow: true,
})
export class HcSwipemenuItem {
@Prop() color: string;
  render() {
    return (
      <Host style={{backgroundColor: this.color}}>
        <slot></slot>
      </Host>
    );
  }

}
