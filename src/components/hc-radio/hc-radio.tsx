import { Component, ComponentInterface, Host, h, Prop, Element, Event, Watch, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'hc-radio',
  styleUrl: 'hc-radio.scss',
  shadow: true,
})
export class HcRadio implements ComponentInterface {
  @Prop() name: string;
  @Prop() value: string;
  @Prop() checked: boolean;
  @Prop() icon: string;
  @Prop() vertical: boolean;
  @Prop() reverse: boolean;
  @Prop() subline: boolean;
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter;
  @Watch('checked')
  checkedHandle (v) {
    if (v) {
      this.el.setAttribute('checked', 'true')
    } else {
      this.el.removeAttribute('checked')
    }
    this.vchange.emit({
      value: this.value
    })
  }
  render() {
    return (
      <Host onClick={this.onClick.bind(this)}>
        <span class="frame">
          <slot name="icon">
            <hc-icon name={this.icon}></hc-icon>
          </slot>
        </span>
        <span class="label">
          <slot></slot>
        </span>
      </Host>
    );
  }
  onClick () {
    this.checked = true
  }
  @Method()
  async Check (status) {
    this.checked = status
  }
}
