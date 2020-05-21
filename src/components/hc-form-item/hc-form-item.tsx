import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-form-item',
  styleUrl: 'hc-form-item.scss',
  shadow: true,
})
export class HcFormItem implements ComponentInterface {
  @Prop() label: string;
  @Prop() value: string;
  @Prop() direction: string = 'horizontal';
  @Prop() range: string = 'right';
  render() {
    return (
      <Host style={{flexDirection: `${this.direction}`}}>
        <h2 class="label">
          <slot name="label">{this.label}</slot>
        </h2>
        <p class="value" style={{textAlign: this.range}}>
          <slot>{this.value}</slot>
        </p>
      </Host>
    );
  }

}
