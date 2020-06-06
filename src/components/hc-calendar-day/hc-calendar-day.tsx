import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-calendar-day',
  styleUrl: 'hc-calendar-day.scss',
  shadow: true,
})
export class HcCalendarDay {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
