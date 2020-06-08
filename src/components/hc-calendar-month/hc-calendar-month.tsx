import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-calendar-month',
  styleUrl: 'hc-calendar-month.scss',
  shadow: true,
})
export class HcCalendarMonth {
  @Prop() width: number;
  @Prop() month: number;
  @Prop() multiple: boolean;
  @Prop() range: number;
  @Element() el: HTMLElement;
  componentDidLoad () {
    var children = Array.from(this.el.children)
    if (this.multiple && this.range) {
      children.forEach((item, index) => {
        if (index == children.length - 1) {
          item.setAttribute('hide', 'true')
        }
      })
    }
  }
  render() {
    return (
      <Host {...{month: this.month, multiple: this.multiple, range: this.range}} style={{width: `${this.width}px`}}>
        <slot></slot>
      </Host>
    );
  }

}
