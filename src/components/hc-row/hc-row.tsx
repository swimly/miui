import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-row',
  styleUrl: 'hc-row.scss',
  shadow: true,
})
export class HcRow implements ComponentInterface {
  @Prop() align: string = 'flex-start'
  @Prop() valign: string = 'center'
  @Prop() wrap: boolean;
  @Prop() direction: string = 'row'
  render() {
    var pos = {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end'
    }
    var pos1 = {
      top: 'flex-start',
      center: 'center',
      bottom: 'flex-end'
    }
    return (
      <Host style={{flexDirection: this.direction,justifyContent: `${pos[this.align]}`, alignItems: pos1[this.valign], flexWrap: this.wrap ? 'wrap' : 'nowrap'}}>
        <slot></slot>
      </Host>
    );
  }

}
