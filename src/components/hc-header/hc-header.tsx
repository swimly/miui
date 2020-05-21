import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-header',
  styleUrl: 'hc-header.scss',
  shadow: true,
})
export class HcHeader implements ComponentInterface {
  @Prop() label: string;
  render() {
    return (
      <Host>
        <div class="area left" onClick={this.back.bind(this)}>
          <slot name="left">
            <hc-icon size={28} name="arrow-lift"></hc-icon>
            <span class="label">返回</span>
          </slot>
        </div>
        <h1>
          <slot>
            {this.label}
          </slot>
        </h1>
        <div class="area right">
          <slot name="right"></slot>
        </div>
      </Host>
    );
  }
  back () {
    window.history.go(-1)
  }
}
