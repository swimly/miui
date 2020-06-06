import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-calendar-month',
  styleUrl: 'hc-calendar-month.scss',
  shadow: true,
})
export class HcCalendarMonth {
  @Prop() width: number;
  render() {
    return (
      <Host style={{width: `${this.width}px`}}>
        <slot></slot>
      </Host>
    );
  }

}
