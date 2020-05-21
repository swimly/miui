import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-col',
  styleUrl: 'hc-col.scss',
  shadow: true,
})
export class HcCol implements ComponentInterface {
  @Prop() span: number;
  @Prop() flex: number;
  @Prop() align: string;
  render() {
    return (
      <Host style={{width: `${this.span/24*100}%`, flex: `${this.flex}`, textAlign: this.align}}>
        <slot></slot>
      </Host>
    );
  }

}
