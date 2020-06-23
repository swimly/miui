import { Component, ComponentInterface, Host, h, EventEmitter, Event, Element, Prop } from '@stencil/core';

@Component({
  tag: 'hc-view',
  styleUrl: 'hc-view.scss',
  shadow: true,
})
export class HcView implements ComponentInterface {
  @Event() vscroll: EventEmitter;
  @Prop() background: string;
  @Prop() padding: number;
  @Element() el:HTMLElement;
  render() {
    return (
      <Host onScroll={this.onScroll.bind(this)} style={{
        backgroundColor: this.background,
        padding: `${this.padding}px`
      }}>
        <slot></slot>
      </Host>
    );
  }
  onScroll (e) {
    this.vscroll.emit({
      event: e,
      scrolltop: this.el.scrollTop
    })
  }
}
