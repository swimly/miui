import { Component, ComponentInterface, Host, h, Prop, Watch, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-checkbox',
  styleUrl: 'hc-checkbox.scss',
  shadow: true,
})
export class HcCheckbox implements ComponentInterface {
  @Prop() name: string;
  @Prop() value: string;
  @Prop() checked: boolean;
  @Prop() icon: string = 'seleted';
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
      value: this.value,
      checked: v
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
        <slot></slot>
      </Host>
    );
  }
  onClick () {
    this.checked = !this.checked
  }
}
