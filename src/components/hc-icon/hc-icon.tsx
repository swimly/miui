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
  $use;
  $svg;
  @Watch('spin')
  spinHandle(newValue: boolean) {
    if (newValue) {
      this.el.setAttribute('spin', `${newValue}`)
    } else {
      this.el.removeAttribute('spin')
    }
  }
  @Watch('name')
  nameHandle(v) {
    this.renderIcon()
    if (v) {
      this.el.style.display = 'inline-block'
    } else {
      this.el.style.display = 'none'
    }
  }
  @Watch('color')
  colorHandle () {
    this.renderIcon()
  }
  @Event() vclick: EventEmitter;
  componentDidLoad() {
    this.$use = this.el.shadowRoot.querySelector('#use') as HTMLElement;
    this.$svg = this.el.shadowRoot.querySelector('.hc-icon') as HTMLElement;
    this.renderIcon()
    if (!this.name) {
      this.el.style.display = 'none'
    }
  }
  renderIcon() {
    this.$use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `./assets/iconfont.svg#icon-${this.name}`);
  }
  render() {
    return (
      <Host onClick={this.onClick.bind(this)} style={{
        fontSize: `${this.size}px`,
        width: `${this.size}px`,
        height: `${this.size}px`,
        color: this.color
      }}>
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
