import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-cell',
  styleUrl: 'hc-cell.scss',
  shadow: true,
})
export class HcCell implements ComponentInterface {
  @Prop() label: string;
  @Prop() value: string;
  @Prop() arrowIcon: string;
  @Prop() href: string;
  @Prop() icon: string;
  @Prop() iconSize: number = 28;
  render() {
    return (
      <Host>
        {this.renderIcon()}
        <span class="label">
          <slot name="label">{this.label}</slot>
        </span>
        <span class="value">
          <slot>{this.value}</slot>
        </span>
        {this.renderArrow()}
      </Host>
    );
  }
  renderIcon () {
    if (this.icon) {
      return (
        <hc-image width={this.iconSize} height={this.iconSize} src={this.icon}></hc-image>
      )
    }
  }
  renderArrow () {
    if (this.arrowIcon) {
      return (
        <hc-icon name={this.arrowIcon}></hc-icon>
      )
    }
  }
}
