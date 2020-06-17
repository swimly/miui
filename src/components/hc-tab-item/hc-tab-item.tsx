import { Component, ComponentInterface, Host, h, Element, Prop, EventEmitter, Event, Watch } from '@stencil/core';

@Component({
  tag: 'hc-tab-item',
  styleUrl: 'hc-tab-item.scss',
  shadow: true,
})
export class HcTabItem implements ComponentInterface {
  @Prop() index: number;
  @Prop() label: string;
  @Prop() active: boolean;
  @Element() el:HTMLElement;
  @Event() vclick: EventEmitter;
  @Event() vchange: EventEmitter;
  @Event() vlabel: EventEmitter;
  @Watch('active')
  activeHandle (v: boolean) {
    if (v) {
      this.el.setAttribute('active', 'true')
    } else {
      this.el.removeAttribute('active')
    }
  }
  @Watch('label')
  labelHandle (v) {
    this.el.setAttribute('label', v)
    this.vlabel.emit(this.el.getBoundingClientRect())
  }
  componentDidLoad () {
    if (this.active) {
      this.el.setAttribute('active', `${this.active}`)
    }
    if (this.index !== undefined) {
      this.el.setAttribute('index', `${this.index}`)
    }
    if (this.label) {
      this.el.setAttribute('label', this.label)
    }
  }
  render() {
    return (
      <Host onClick={this.bindClick.bind(this)}>
        <slot></slot>
      </Host>
    );
  }
  bindClick () {
    this.vclick.emit({
      index: this.index,
      props: this.el.getBoundingClientRect()
    })
  }
}
