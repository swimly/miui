import { Component, ComponentInterface, Host, h, Prop, Watch, Element, EventEmitter, Event, Method } from '@stencil/core';
import {checkRegx} from '../../utils/pattern'
@Component({
  tag: 'hc-input',
  styleUrl: 'hc-input.scss',
  shadow: true,
})
export class HcInput implements ComponentInterface {
  @Prop() type: string = 'text';
  @Prop() placeholder: string;
  @Prop() prefixIcon: string;
  @Prop() suffixIcon: string;
  @Prop() iconColor: string;
  @Prop() iconSize: number;
  @Prop() align: string;
  @Prop() rows: number = 3;
  @Prop() clearable: boolean = false;
  @Prop() clearIcon: string = 'reeor-fill'
  @Prop() maxLength: number;
  @Prop() minLength: number;
  @Prop() size: string;
  @Prop() light: boolean;
  @Prop() conner: boolean;
  @Prop () rounder: boolean;
  @Prop() dark: boolean;
  @Prop() focusin: boolean;
  @Prop() verify: string;
  @Prop() value: string;
  @Prop() readonly: boolean;
  @Prop() disabled: boolean;
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter;
  @Watch('value')
  valueHandle (v) {
    this.el.setAttribute('value', v)
    this.vchange.emit({
      value: v
    })
  }
  @Watch('verify')
  verifyHandle (v: string) {
    this.el.setAttribute('verify', v)
  }
  @Watch('focusin')
  focusHandle (v: boolean) {
    if (v) {
      this.el.setAttribute('focusin', `${v}`)
    } else {
      this.el.removeAttribute('focusin')
    }
  }
  componentDidLoad () {
    if (this.size) {
      this.el.setAttribute('size', this.size)
    }
    if (this.light) {
      this.el.setAttribute('light', `${this.light}`)
    }
    if (this.conner) {
      this.el.setAttribute('conner', `${this.conner}`)
    }
    if (this.dark) {
      this.el.setAttribute('dark', `${this.dark}`)
    }
    if (this.focusin) {
      this.el.setAttribute('focus', `${this.focusin}`)
      var core = this.el.shadowRoot.querySelector('#core') as HTMLElement
      core.focus()
    }
  }
  render() {
    return (
      <Host>
        <slot name="prefix">
          {this.renderIcon('prefixIcon')}
        </slot>
        {
          this.renderCore()
        }
        {this.renderCount()}
        {this.renderClear()}
        <slot name="suffix">
          {this.renderIcon('suffixIcon')}
        </slot>
      </Host>
    );
  }
  renderIcon (name) {
    if (this[name]) {
      return (
        <hc-icon size={this.iconSize} class={name} color={this.iconColor} name={this[name]}></hc-icon>
      )
    }
  }
  renderCore () {
    if (this.type == 'textarea') {
      return (
        <textarea 
          onBlur={this.bindBlur.bind(this)} 
          onFocus={this.bindFocus.bind(this)} 
          maxLength={this.maxLength} 
          minLength={this.minLength} 
          id="core" 
          onKeyUp={this.onChange.bind(this)} 
          value={this.value} 
          rows={this.rows} 
          style={{textAlign: this.align}} 
          placeholder={this.placeholder}
          readonly={this.readonly}
          disabled={this.disabled}
        ></textarea>
      )
    } else {
      return (
        <input 
          onBlur={this.bindBlur.bind(this)} 
          onFocus={this.bindFocus.bind(this)} 
          maxLength={this.maxLength} 
          minLength={this.minLength} 
          value={this.value} 
          id="core" 
          onKeyUp={this.onChange.bind(this)} 
          style={{textAlign: this.align}} 
          type={this.type} 
          placeholder={this.placeholder}
          readonly={this.readonly}
          disabled={this.disabled}
        />
      )
    }
  }
  bindBlur () {
    this.focusin = false
    if (this.value && !checkRegx(this.type, this.value)) {
      this.verify = 'error'
    }
  }
  bindFocus () {
    this.focusin = true
  }
  onChange (e) {
    this.value = e.target.value
  }
  renderClear () {
    if (this.clearable && this.value) {
      return (
        <hc-icon class="clear" onClick={this.onClear.bind(this)} name={this.clearIcon}></hc-icon>
      )
    }
  }
  onClear () {
    this.value = ''
  }
  renderCount () {
    var current = this.value ? this.value.length : 0
    if (this.maxLength) {
      return (
        <span class="count">{current}/{this.maxLength}</span>
      )
    }
    if (this.minLength) {
      return (
        <span class="count">{this.minLength}/{current}</span>
      )
    }
  }
  @Method()
  async Verify (status) {
    this.verify = status
  }
}
