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
  @Element() el:HTMLElement;
  @Event() vclose: EventEmitter;
  render() {
    return (
      <Host style={{
        backgroundColor: this.plain ? 'none' : this.background,
        color: this.plain ? this.background : this.color,
        borderColor: this.background
      }}>
        <span class="label">
          <slot></slot>
        </span>
        {this.renderClose()}
      </Host>
    );
  }
  renderClose () {
    if (this.closable) {
      return (
        <hc-icon onClick={this.onClose.bind(this)} id="close" name="close"></hc-icon>
      )
    }
  }
  onClose (e) {
    this.vclose.emit(e)
  }

}
