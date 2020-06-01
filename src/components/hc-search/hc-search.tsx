import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-search',
  styleUrl: 'hc-search.scss',
  shadow: true,
})
export class HcSearch {
  @Prop() placeholder: string;
  @Prop() icon: string = 'search'
  @Prop() iconSize: number = 24
  @Prop() shape: string = 'conner'
  @Prop() clearable: boolean
  render() {
    return (
      <Host>
        <hc-row>
          <hc-col flex={1}>
            <hc-input 
              placeholder={this.placeholder} 
              {...{
                [this.shape]: 'true', 
                clearable: this.clearable
              }} 
              dark 
              type="search" 
              icon-size={this.iconSize}
              prefix-icon={this.icon}
            ></hc-input>
          </hc-col>
          <hc-col>
            <slot></slot>
          </hc-col>
        </hc-row>
      </Host>
    );
  }

}
