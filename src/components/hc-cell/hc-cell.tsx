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
  @Prop() valign: string = "center";
  @Prop() align: string;
  render() {
    var pos = {
      top: 'flex-start',
      center: 'center',
      bottom: 'flex-end'
    }
    return (
      <Host onClick={this.onClick.bind(this)} style={{
        alignItems: `${pos[this.valign]}`
      }}>
        <slot name="icon">
          {this.renderIcon()}
        </slot>
        <span class="label" style={{
          display: this.label ? 'inline-block' : 'none'
        }}>
          <slot name="label">{this.label}</slot>
        </span>
        <span class="value" style={{
          textAlign: this.align
        }}>
          <slot>{this.value}</slot>
        </span>
        <slot name="arrow">
          {this.renderArrow()}
        </slot>
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
  onClick () {
    if (this.href) {
      window.location.href = this.href
    }
  }
}
