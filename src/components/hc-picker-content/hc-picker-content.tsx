import { Component, Host, h, Element, Prop, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-picker-content',
  styleUrl: 'hc-picker-content.scss',
  shadow: true,
})
export class HcPickerContent {
  @Prop() value: string;
  @Prop() data: string;
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
    if (this.value) {
      this.el.setAttribute('value', this.value)
    }
    var data = this.data ? JSON.parse(this.data) : []
    var value = this.value ? this.value.split(',') : []
    var children = Array.from(this.el.children);
    children.forEach((view, index) => {
      view.addEventListener('vchange', (e) => {
        // this.value = (e as CustomEvent).detail.value;
        // this.current = (e as CustomEvent).detail.current;
        // view.setAttribute('data', this.data)
        view.setAttribute('current', `${data[index].indexOf(value[index])}`)
        console.log((e as CustomEvent).detail)
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
