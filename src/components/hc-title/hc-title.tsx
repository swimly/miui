import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-title',
  styleUrl: 'hc-title.scss',
  shadow: true,
})
export class HcTitle implements ComponentInterface {
  @Prop() label: string;
  @Prop() subTitle: string;
  @Prop() more: string = '';
  render() {
    return (
      <Host>
        <h2>
          <span class="label">
            <slot>
              {this.label}
            </slot>
          </span>
          <span class="more">
            <slot name="more">
              {this.more}
            </slot>
          </span>
        </h2>
        <p class="sub">{this.subTitle}</p>
      </Host>
    );
  }

}
