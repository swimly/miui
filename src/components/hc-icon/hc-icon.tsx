import { Component, ComponentInterface, Host, h, Prop, Element, Watch, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-icon',
  styleUrl: 'hc-icon.scss',
  shadow: true,
})
export class HcIcon implements ComponentInterface {

  @Prop() name: string;
  @Prop() size: number;
  @Prop() color: string;
  @Prop() spin: boolean = false
  @Element() el: HTMLElement;
  componentDidLoad() {
    this.renderIcon()
  }
  @Watch('spin')
  spinHandle(newValue: boolean) {
    if (newValue) {
      this.el.setAttribute('spin', `${newValue}`)
    } else {
      this.el.removeAttribute('spin')
    }
  }
  @Watch('name')
  nameHandle() {
    this.renderIcon()
  }
  @Watch('color')
  colorHandle () {
    this.renderIcon()
  }
  @Event() vclick: EventEmitter;
  renderIcon() {
    const use = this.el.shadowRoot.querySelector('#use') as HTMLElement;
    const svg = this.el.shadowRoot.querySelector('.hc-icon') as HTMLElement;
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `../assets/iconfont.svg#icon-${this.name}`);
    if (this.size) {
      svg.style.fontSize = `${this.size}px`
      svg.style.width = `${this.size}px`
      svg.style.height = `${this.size}px`
    }
    if (this.color) {
      svg.style.color = this.color;
    }
    if (!this.name) {
      this.el.style.display = 'none'
    }
    if (this.spin) {
      this.el.setAttribute('spin', 'true')
    }
  }
  render() {
    return (
      <Host onClick={this.onClick.bind(this)}>
        <svg class="hc-icon" aria-hidden="true">
          <use id="use" />
        </svg>
      </Host>
    );
  }
  onClick (e) {
    this.vclick.emit(e)
  }

}
