import { Component, ComponentInterface, Host, h, Prop, Element, Method, Watch } from '@stencil/core';

@Component({
  tag: 'hc-button',
  styleUrl: 'hc-button.scss',
  shadow: true,
})
export class HcButton implements ComponentInterface {
  @Prop() type: string;
  @Prop() rounder: boolean;
  @Prop() conner: boolean;
  @Prop() plain: boolean;
  @Prop() light: boolean;
  @Prop() icon: string = '';
  @Prop() ripple: boolean;
  @Prop() rippleColor: string;
  @Prop() loading: boolean;
  @Prop() disabled: boolean;
  @Prop() backgroundColor: string;
  @Prop() color: string;
  @Prop() borderColor: string;
  @Prop() label: string;
  @Element() el: HTMLElement;
  @Watch('loading')
  loadingHandle (v:boolean) {
    var $icon = this.el.shadowRoot.querySelector('hc-icon')
    var icon = this.icon ? this.icon : ''
    console.log(v, $icon, icon)
    if (v) {
      $icon.setAttribute('name', 'loading')
      $icon.setAttribute('spin', 'true')
    } else {
      $icon.setAttribute('name', icon)
      $icon.removeAttribute('spin')
    }
  }
  componentDidLoad () {
    if (this.type) {
      this.el.setAttribute('type', `${this.type}`)
    }
    if (this.rounder) {
      this.el.setAttribute('rounder', 'true')
    }
    if (this.conner) {
      this.el.setAttribute('conner', 'true')
    }
    if (this.plain) {
      this.el.setAttribute('plain', 'true')
    }
    if (this.ripple) {
      this.el.setAttribute('ripple', 'true')
    }
  }
  render() {
    return (
      <Host>
        <hc-ripple mask={!this.ripple} color={this.rippleColor}>
          <div class="button" style={{
            backgroundColor: this.backgroundColor,
            color: this.color
          }}>
            <span class="line" style={{
              borderColor: this.borderColor
            }}></span>
            <hc-icon name={this.icon}></hc-icon>
            <span class="label"><slot>{this.label}</slot></span>
          </div>
        </hc-ripple>
      </Host>
    );
  }
  @Method()
  async Loading () {
    this.loading = true
  }
  @Method()
  async Loaded () {
    this.loading = false
  }
}
