import { Component, ComponentInterface, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'hc-ripple',
  styleUrl: 'hc-ripple.scss',
  shadow: true,
})
export class HcRipple implements ComponentInterface {
  @Prop() color: string;
  @Prop() size: number;
  @Prop() mask: boolean;
  @Element() el:HTMLElement;
  componentDidLoad () {
    if (this.mask) {
      this.el.setAttribute('mask', 'true')
    }
  }
  render() {
    return (
      <Host onClick={this.onClick.bind(this)}>
        <span class="ripple" style={{
          backgroundColor: `${this.color}`,
          width: `${this.size}px`,
          height: `${this.size}px`
        }}></span>
        <slot></slot>
      </Host>
    );
  }
  onClick (e) {
    if (!this.mask) {
      var circle = this.el.shadowRoot.querySelector('.ripple') as HTMLElement
      var rect = this.el.getBoundingClientRect()
      var top = rect.y;
      var left = rect.x;
      var x = e.clientX;
      var y = e.clientY;
      circle.style.left = `${x - left}px`;
      circle.style.top = `${y - top}px`;
      circle.classList.add('active');
      setTimeout(() => {
        circle.classList.remove('active')
      }, 400)
    }
  }
}
