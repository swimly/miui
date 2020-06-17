import { Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'hc-selection-view',
  styleUrl: 'hc-selection-view.scss',
  shadow: true,
})
export class HcSelectionView {
  @Prop() width: number;
  render() {
    return (
      <Host style={{width: `${this.width}px`}}>
        <slot></slot>
      </Host>
    );
  }

}
