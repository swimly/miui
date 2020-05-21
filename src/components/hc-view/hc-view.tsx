import { Component, ComponentInterface, Host, h, EventEmitter, Event, Element } from '@stencil/core';

@Component({
  tag: 'hc-view',
  styleUrl: 'hc-view.scss',
  shadow: true,
})
export class HcView implements ComponentInterface {
  @Event() vscroll: EventEmitter;
  @Element() el:HTMLElement;
  render() {
    return (
      <Host onScroll={this.onScroll.bind(this)}>
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
