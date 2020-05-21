import { Component, ComponentInterface, Host, h, Prop, Watch, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-input',
  styleUrl: 'hc-input.scss',
  shadow: true,
})
export class HcInput implements ComponentInterface {
  @Prop() type: string = 'text';
  @Prop() value: string;
  @Prop() placeholder: string;
  @Prop() prefixIcon: string;
  @Prop() suffixIcon: string;
  @Prop() iconColor: string;
  @Prop() align: string;
  @Prop() rows: number = 3;
  @Prop() clearable: boolean = false;
  @Prop() clearIcon: string = 'reeor-fill'
  @Prop() maxLength: number;
  @Prop() minLength: number;
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter;
  @Watch('value')
  valueHandle (v) {
    this.vchange.emit({
      value: v
    })
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
        <hc-icon class={name} color={this.iconColor} name={this[name]}></hc-icon>
      )
    }
  }
  renderCore () {
    if (this.type == 'textarea') {
      return (
        <textarea maxLength={this.maxLength} minLength={this.minLength} id="core" onKeyUp={this.onChange.bind(this)} value={this.value} rows={this.rows} style={{textAlign: this.align}} placeholder={this.placeholder}></textarea>
      )
    } else {
      return (
        <input maxLength={this.maxLength} minLength={this.minLength} value={this.value} id="core" onKeyUp={this.onChange.bind(this)} style={{textAlign: this.align}} type={this.type} placeholder={this.placeholder}/>
      )
    }
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
}
