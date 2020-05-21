import { Component, ComponentInterface, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-button',
  styleUrl: 'hc-button.scss',
  shadow: true,
})
export class HcButton implements ComponentInterface {
  @Prop() type: string;
  @Prop() rounder: boolean;
  @Prop() conner: boolean;
  @Prop() plain: boolean;
  @Prop() icon: string;
  @Element() el: HTMLElement;
  componentDidLoad () {
    if (this.type) {
      this.el.setAttribute('type', `${this.type}`)
    }
    if (this.rounder) {
      this.el.setAttribute('rounder', 'true')
    }
    if (this.conner) {
      this.el.setAttribute('conner', 'true')
    }
    if (this.plain) {
      this.el.setAttribute('plain', 'true')
    }
  }
  render() {
    return (
      <Host>
        <slot name="icon">
          <hc-icon name={this.icon}></hc-icon>
        </slot>
        <slot></slot>
      </Host>
    );
  }
}
