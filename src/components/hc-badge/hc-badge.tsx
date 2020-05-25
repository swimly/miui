import { Component, ComponentInterface, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-badge',
  styleUrl: 'hc-badge.scss',
  shadow: true,
})
export class HcBadge implements ComponentInterface {
  @Prop() value: number;
  @Prop() dot: boolean;
  @Prop() background: string;
  @Prop() max: number;
  @Element() el: HTMLElement;
  componentDidLoad () {
    if (this.dot) {
      this.el.setAttribute('dot', 'true')
    }
    var slot = this.el.shadowRoot.querySelector('slot')
    var child = slot.assignedElements()[0]
    var number = this.el.shadowRoot.querySelector('.number') as HTMLElement
    number.style.left = `${child.clientWidth}px`
  }
  render() {
    return (
      <Host>
        <span class="number" style={{
          backgroundColor: this.background
        }}>{this.value >= this.max && this.max ? `${this.max - 1}+` : this.value}</span>
        <slot></slot>
      </Host>
    );
  }

}
