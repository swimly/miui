import { Component, ComponentInterface, Host, h, Prop, Watch, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-switch',
  styleUrl: 'hc-switch.scss',
  shadow: true,
})
export class HcSwitch implements ComponentInterface {
  @Prop() activeIcon: string;
  @Prop() offIcon: string;
  @Prop() iconSize: number = 36;
  @Prop() checked: boolean;
  @Prop() type: string;
  @Prop() custom: boolean;
  @Prop() activeColor: string;
  @Prop() readonly: boolean;
  @Prop() disabled: boolean;
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter;
  @Watch('checked')
  checkedHandle (v: boolean) {
    if (v) {
      this.el.setAttribute('checked', 'true')
    } else {
      this.el.removeAttribute('checked')
    }
    this.vchange.emit({
      checked: v
    })
  }
  render() {
    return (
      <Host onClick={this.onClick.bind(this)}>
        {this.renderSwitch()}
        <slot name="off">
          <hc-icon class="off" size={this.iconSize} name={this.offIcon}></hc-icon>
        </slot>
        <slot name="active">
          <hc-icon style={{marginLeft: `-${this.iconSize}px`}} class="active" size={this.iconSize} name={this.activeIcon} color={this.activeColor}></hc-icon>
        </slot>
        <slot></slot>
      </Host>
    );
  }
  renderSwitch () {
    if (!this.custom) {
      return (
        <span class="switch"></span>
      )
    }
  }
  onClick () {
    if (this.disabled || this.readonly) return;
    this.checked = !this.checked;
  }
}
