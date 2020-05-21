import { Component, ComponentInterface, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-swiper-item',
  styleUrl: 'hc-swiper-item.scss',
  shadow: true,
})
export class HcSwiperItem implements ComponentInterface {
  @Prop() width: number;
  @Prop() height: number;
  @Element() el: HTMLElement;
  componentDidLoad () {
    const slot = this.el.shadowRoot.querySelector('slot')
    const children = slot.assignedElements()
    children.forEach((item) => {
      item.setAttribute('width', `${this.width}`)
      item.setAttribute('height', `${this.height}`)
    })
  }
  render() {
    return (
      <Host style={{width: `${this.width}px`, height: `${this.height}px`}}>
        <slot></slot>
      </Host>
    );
  }

}
