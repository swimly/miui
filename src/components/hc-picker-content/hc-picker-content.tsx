import { Component, Host, h, Element, Prop, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-picker-content',
  styleUrl: 'hc-picker-content.scss',
  shadow: true,
})
export class HcPickerContent {
  @Prop() current: string;
  @Prop() value: string;
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter
  @Watch('current')
  currentHandle (v:string) {
    this.vchange.emit({
      current: v,
      value: this.value
    })
  }
  componentDidLoad () {
    var children = Array.from(this.el.children);
    children.forEach((view, index) => {
      view.addEventListener('vchange', (e) => {
        this.value = (e as CustomEvent).detail.value;
        this.current = (e as CustomEvent).detail.current;
        // 将后面的列恢复到第一行
        children.forEach((child, i) => {
          if (i > index) {
            child.setAttribute('current', `0`)
          }
        })
      })
    })
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
