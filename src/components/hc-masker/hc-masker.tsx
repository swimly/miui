import { Component, ComponentInterface, Host, h, Method, Prop, Watch, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-masker',
  styleUrl: 'hc-masker.scss',
  shadow: true,
})
export class HcMasker implements ComponentInterface {
  @Prop() fill: string = 'rgba(0,0,0,0.7)';
  @Prop() display: boolean = false;
  @Prop() clickable: boolean = true;
  @Prop() command: boolean = false;
  @Prop() place: string;
  @Prop() offset: number;
  @Element() el:HTMLElement;
  @Event() vclick:EventEmitter;
  @Watch('display')
  Dhandle (v: boolean) {
    if (v) {
      this.el.setAttribute('display', `${v}`)
    } else {
      this.el.removeAttribute('display')
      if (this.command) {
        setTimeout(() => {
          document.body.removeChild(this.el)
        }, 300)
      }
    }
  }
  componentDidRender () {
  }
  render() {
    let background = this.fill;
    if (this.place == 'bottom') {
      background = `linear-gradient(rgba(0,0,0,0) 0px, rgba(0,0,0,0) ${this.offset}px, ${this.fill} ${this.offset}px, ${this.fill} 100%)`
    }
    if (this.place == 'top') {
      background = `linear-gradient(${this.fill} 0px, ${this.fill} ${this.offset}px, rgba(0,0,0,0) ${this.offset}px, rgba(0,0,0,0) 100%)`
    }
    return (
      <Host 
        onClick={this.onClick.bind(this)} 
        style={{background: background}}
      >
        <slot></slot>
      </Host>
    );
  }
  onClick () {
    if (this.clickable) {
      this.destory()
    }
    this.vclick.emit()
  }
  @Method()
  async destory () {
    this.display = false;
  }
  onDisplay () {
    this.display = true;
  }
  @Method()
  async generate (option: object = null) {
    if (option) {
      this.generateDom('hc-masker', option)
    } else {
      this.onDisplay()
    }
  }
  generateDom (tag, option) {
    let dom = document.createElement(tag)
    option.command = true;
    if (option.event) {
      const pos = option.event.target.getBoundingClientRect()
      option.offset = option.place == 'top' ? pos.y : pos.y + pos.height
    }
    for (let key in option) {
      dom.setAttribute(key, option[key])
    }
    document.body.appendChild(dom)
    dom.generate()
    return dom
  }
}
