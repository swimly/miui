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
  @Prop() path: string;
  @Prop() view: number = 1024;
  @Element() el: HTMLElement;
  $use;
  $svg;
  $path;
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
  @Watch('path')
  pathHandle (v: string) {
    this.$path.setAttribute('d', v)
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
  }
  renderIcon() {
    const svg = this.el.shadowRoot.querySelector('.hc-icon') as HTMLElement;
    if (this.path) {
      this.$path = this.el.shadowRoot.querySelector('#path')
      this.$path.setAttribute('d', this.path)
    } else if (this.name) {
      this.$use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `./assets/iconfont.svg#icon-${this.name}`);
    } else {
      this.el.style.display = 'none'
    }
    if (this.size) {
      svg.style.fontSize = `${this.size}px`
      svg.style.width = `${this.size}px`
      svg.style.height = `${this.size}px`
    }
    svg.style.color = this.color;
    if (this.spin) {
      this.el.setAttribute('spin', 'true')
    }
    
  }
  render() {
    return (
      <Host onClick={this.onClick.bind(this)} style={{height: `${this.size}px`}}>
        <svg class="hc-icon" aria-hidden="true" viewBox={`0 0 ${this.view} ${this.view}`}>
          {this.renderCore()}
        </svg>
      </Host>
    );
  }
  onClick (e) {
    this.vclick.emit(e)
  }
  renderCore () {
    if (this.path) {
      return (
        <path id="path"></path>
      )
    } else {
      return (
        <use id="use" />
      )
    }
  }
}
