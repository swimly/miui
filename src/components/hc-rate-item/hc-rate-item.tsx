import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-rate-item',
  styleUrl: 'hc-rate-item.scss',
  shadow: true,
})
export class HcRateItem {
  @Prop() voidIcon: string = 'collection';
  @Prop() activeIcon: string = 'collection-fill'
  @Prop() size: number = 28;
  @Prop() voidColor: string;
  @Prop() activeColor: string;
  @Prop() active: boolean;
  @Prop() half: boolean;
  @Prop() label: string;
  render() {
    return (
      <Host style={{width: `${this.size}px`, height: `${this.size}px`}}>
        <slot>
          <hc-icon color={this.voidColor} name={this.voidIcon} size={this.size}></hc-icon>
          <hc-icon color={this.activeColor} name={this.activeIcon} size={this.size}></hc-icon>
        </slot>
      </Host>
    );
  }

}
