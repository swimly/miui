import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

@Component({
  tag: 'hc-actionsheet-item',
  styleUrl: 'hc-actionsheet-item.scss',
  shadow: true,
})
export class HcActionsheetItem {
  @Prop() value: string;
  @Prop() active: boolean;
  @Element() el: HTMLElement;
  @Watch('active')
  activeHandle (v: boolean) {
    if (v) {
      this.el.setAttribute('active', 'true')
    } else {
      this.el.removeAttribute('active')
    }
  }
  componentDidLoad () {
    if (this.value) {
      this.el.setAttribute('value', this.value)
    }
    if (this.active) {
      this.el.setAttribute('active', 'true')
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
