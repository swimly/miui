import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-actionsheet-item',
  styleUrl: 'hc-actionsheet-item.scss',
  shadow: true,
})
export class HcActionsheetItem {
  @Prop() value: string;
  @Element() el: HTMLElement;
  componentDidLoad () {
    if (this.value) {
      this.el.setAttribute('value', this.value)
    }
  }
  render() {
    return (
      <Host>
        <slot></slot>
        <hc-icon name="seleted"></hc-icon>
      </Host>
    );
  }

}
