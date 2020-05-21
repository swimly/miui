import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-row',
  styleUrl: 'hc-row.scss',
  shadow: true,
})
export class HcRow implements ComponentInterface {
  @Prop() justify: string = 'flex-start'
  @Prop() valign: string = 'center'
  render() {
    return (
      <Host style={{justifyContent: `${this.justify}`, alignItems: this.valign}}>
        <slot></slot>
      </Host>
    );
  }

}
