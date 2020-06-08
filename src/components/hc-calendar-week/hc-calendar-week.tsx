import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-calendar-week',
  styleUrl: 'hc-calendar-week.scss',
  shadow: true,
})
export class HcCalendarWeek {
  @Prop() width: number;
  @Prop() week: number;
  render() {
    return (
      <Host {...{week: this.week}}>
        <slot></slot>
      </Host>
    );
  }

}
