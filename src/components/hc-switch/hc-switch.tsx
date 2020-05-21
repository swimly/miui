import { Component, ComponentInterface, Host, h, Prop, Watch, Element } from '@stencil/core';

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
  @Prop() type: string = 'default';
  @Element() el:HTMLElement;
  @Watch('checked')
  checkedHandle (v) {
    if (v) {
      this.el.setAttribute('checked', 'true')
    } else {
      this.el.removeAttribute('checked')
    }
  }
  render() {
    return (
      <Host onClick={this.onClick.bind(this)}>
        {this.renderSwitch()}
        <slot name="off">
          <hc-icon class="off" size={this.iconSize} name={this.offIcon}></hc-icon>
        </slot>
        <slot name="active">
          <hc-icon style={{marginLeft: `-${this.iconSize}px`}} class="active" size={this.iconSize} name={this.activeIcon}></hc-icon>
        </slot>
        <slot></slot>
      </Host>
    );
  }
  renderSwitch () {
    if (this.type == 'default') {
      return (
        <span class="switch"></span>
      )
    }
  }
  onClick () {
    this.checked = !this.checked;
  }
}
