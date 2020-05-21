import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-calendar',
  styleUrl: 'hc-calendar.css',
  shadow: true,
})
export class HcCalendar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
