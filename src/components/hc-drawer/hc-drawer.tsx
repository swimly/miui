import { Component, ComponentInterface, Host, h, Method, Prop, Element, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-drawer',
  styleUrl: 'hc-drawer.scss',
  shadow: true,
})
export class HcDrawer implements ComponentInterface {
  @Prop() place: string = 'down';
  @Prop() display: boolean;
  @Prop() clickable: boolean = true;
  @Prop() masker: boolean = true;
  @Prop() content: string;
  @Prop() rounder: boolean;
  @Prop() command: boolean = false;
  @Element() el: HTMLElement;
  @Event() vshow: EventEmitter;
  $mask;
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
  componentDidLoad () {
    if (this.rounder) {
      this.el.setAttribute('rounder', `true`)
    }
    if (this.place) {
      this.el.setAttribute('place', this.place)
    }
    if (this.display) {
      this.el.setAttribute('display', `${this.display}`)
      this.vshow.emit(null)
    }
  }
  render() {
    return (
      <Host>
        <slot>
          <div innerHTML={this.content}></div>
        </slot>
      </Host>
    );
  }
  onDisplay () {
    this.el.style.transition = '0.3s'
    this.display = true
    this.$mask = document.createElement('hc-masker')
    this.$mask.command = true
    this.$mask.clickable = false;
    if (!this.masker) {
      this.$mask.fill = 'transparent';
    }
    document.body.appendChild(this.$mask)
    this.$mask.generate()
    if (this.clickable && this.masker) {
      this.$mask.addEventListener('vclick', () => {
        this.destory()
      })
    }
    // 通知drawer已经打开
    setTimeout((e) => {
      this.vshow.emit({e})
    }, 300)
  }
  @Method()
  async destory () {
    this.display = false;
    this.$mask.destory()
  }
  @Method()
  async generate (option: object = null) {
    if (option) {
      this.generateDom('hc-drawer', option)
    } else {
      this.onDisplay()
    }
  }
  generateDom (tag, option) {
    let dom = document.createElement(tag)
    option.command = true;
    for (let key in option) {
      dom.setAttribute(key, option[key])
    }
    document.body.appendChild(dom)
    setTimeout(() => {
      dom.generate()
    }, 30)
    return dom
  }
}
