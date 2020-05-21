import { Component, ComponentInterface, Host, h, Prop, Method, Watch, Element } from '@stencil/core';

@Component({
  tag: 'hc-skeleton',
  styleUrl: 'hc-skeleton.scss',
  shadow: true,
})
export class HcSkeleton implements ComponentInterface {
  @Prop() titles: boolean;
  @Prop() rows: number;
  @Prop() avatar: boolean;
  @Prop() cover: boolean;
  @Prop() reverse: boolean;
  @Prop() animation: boolean = true;
  @Prop() visible: boolean = false;
  @Element() el:HTMLElement;
  @Watch('visible')
  visibleHandle (v: boolean) {
    if (v) {
      this.el.setAttribute('visible', 'true')
    } else {
      this.el.removeAttribute('visible')
    }
  }
  render() {
    var arr = new Array(this.rows)
    arr.fill('row')
    return (
      <Host>
        <div class={`skeleton ${this.animation ? 'animation' : ''}`}>
          {this.renderAvatar()}
          {this.renderCover()}
          <div class="content">
            {this.renderTitle()}
            {
              arr.map(() => {
                return (
                  <p class="row"></p>
                )
              })
            }
          </div>
        </div>
        <slot>

        </slot>
      </Host>
    );
  }
  renderAvatar () {
    if (this.avatar) {
      return (
        <div class="avatar"></div>
      )
    }
  }
  renderCover () {
    if (this.cover) {
      return (
        <div class="cover"></div>
      )
    }
  }
  renderTitle () {
    if (this.titles) {
      return (
        <h2 class="title"></h2>
      )
    }
  }
  @Method()
  async loaded () {
    this.visible = true
  }
  @Method()
  async loading () {
    this.visible = false
  }
}
