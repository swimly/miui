import { Component, ComponentInterface, Host, h, Prop, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-tag',
  styleUrl: 'hc-tag.scss',
  shadow: true,
})
export class HcTag implements ComponentInterface {
  @Prop() closable: boolean = false;
  @Prop() color: string;
  @Prop() plain: boolean;
  @Prop() background: string;
  @Prop() outline: boolean;
  @Prop() light: boolean;
  @Prop() rounder: boolean;
  @Prop() conner: boolean;
  @Prop() type: string;
  @Prop() size: string;
  @Element() el:HTMLElement;
  @Event() vclose: EventEmitter;
  componentWillLoad () {
    if (this.rounder) {
      this.el.setAttribute('rounder', 'true')
    }
    if (this.conner) {
      this.el.setAttribute('conner', 'true')
    }
    if (this.size) {
      this.el.setAttribute('size', `${this.size}`)
    }
    if (this.type) {
      this.el.setAttribute('type', `${this.type}`)
    }
    if (this.outline) {
      this.el.setAttribute('outline', `${this.outline}`)
    }
  }
  render() {
    var color;
    if (this.plain || this.light || this.outline) {
      color = this.background;
    } else {
      color = this.color
    }
    return (
      <Host style={{
        color: color,
        borderColor: this.background
      }}>
        <span class="label">
          <slot></slot>
        </span>
        <span class="bg" style={{
          backgroundColor: this.background
        }}></span>
        {this.renderClose()}
      </Host>
    );
  }
  renderClose () {
    if (this.closable) {
      return (
        <hc-icon size={18} onClick={this.onClose.bind(this)} id="close" name="close"></hc-icon>
      )
    }
  }
  onClose (e) {
    var parent = this.el.parentNode
    parent.removeChild(this.el)
    this.vclose.emit(e)
  }

}
