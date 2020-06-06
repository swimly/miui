import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-calendar-content',
  styleUrl: 'hc-calendar-content.scss',
  shadow: true,
})
export class HcCalendarContent {
  @Prop() width: number;
  @Element() el: HTMLElement;
  componentDidLoad () {
    var children = Array.from(this.el.children)
    children.forEach((child) => {
      child.setAttribute('width', `${this.width}`)
    })
  }
  render() {
    return (
      <Host>
        <div class="wrap" style={{width: `${this.width * 3}px`, transform: `translate3d(${-this.width}px, 0,0)`}}>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
