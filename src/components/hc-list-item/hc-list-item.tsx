import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-list-item',
  styleUrl: 'hc-list-item.scss',
  shadow: true,
})
export class HcListItem implements ComponentInterface {
  @Prop() heading: string;
  @Prop() date: string;
  @Prop() type: string = 'simple';
  @Prop() cover: string;
  @Prop() appendIcon: string;
  @Prop() appendColor: string;
  @Prop() coverWidth: number = 36;
  @Prop() coverHeight: number = 36;
  render() {
    return (
      <Host>
        <slot name="cover">
          {this.renderCover()}
        </slot>
        <div class="content">
          <hc-row>
            <hc-col class="heading" flex={1}>
              <slot name="heading">{this.heading}</slot>
            </hc-col>
            <hc-col class="append">
              <slot name="append">
                <hc-icon color={this.appendColor} name={this.appendIcon}></hc-icon>
              </slot>
            </hc-col>
          </hc-row>
          <hc-row class="date" justify="space-between">
            {
              (() => {
                if (this.type == "complex") {
                  return (
                    <hc-col>
                      <slot name="attach"></slot>
                    </hc-col>
                  )
                }
              })()
            }
            <hc-col>
              <slot name="date">{this.date}</slot>
            </hc-col>
          </hc-row>
        </div>
      </Host>
    );
  }
  renderCover() {
    if (this.cover) {
      return (
        <hc-image width={this.coverWidth} height={this.coverHeight} class="cover" src={this.cover}></hc-image>
      )
    }
  }
}
