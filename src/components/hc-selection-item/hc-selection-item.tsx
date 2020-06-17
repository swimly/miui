import { Component, Host, h, Prop, Element, Event, EventEmitter, Watch } from '@stencil/core';
@Component({
  tag: 'hc-selection-item',
  styleUrl: 'hc-selection-item.scss',
  shadow: true,
})
export class HcSelectionItem {
  @Prop() value: string;
  @Prop() index: number;
  @Prop() active: boolean;
  @Element() el: HTMLElement;
  @Event() vclick: EventEmitter;
  @Watch('active')
  activeHandle (v: boolean) {
    if (v) {
      this.el.setAttribute('active', 'true')
    } else {
      this.el.removeAttribute('active')
    }
  }
  componentDidLoad () {
    if (this.index !== undefined) {
      this.el.setAttribute('index', `${this.index}`)
    }
    if (this.value) {
      this.el.setAttribute('value', this.value)
    }
    if (this.active) {
      this.el.setAttribute('active', 'true')
    }
  }
  render() {
    return (
      <Host onClick={this.onClick.bind(this)}>
        <slot></slot>
      </Host>
    );
  }
  onClick () {
    this.vclick.emit({
      value: this.value,
      label: this.el.innerHTML,
      index: this.index
    })
  }
}
