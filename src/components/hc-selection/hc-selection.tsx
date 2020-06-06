import { Component, Host, h, Element, Prop, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'hc-selection',
  styleUrl: 'hc-selection.scss',
  shadow: true,
})
export class HcSelection {
  @Prop() heading: string = '请选择所在地区'
  @Prop() value: string = '';
  @Prop() level: number = 0;
  @Prop() data: string;
  @Prop() command: boolean;
  @Element() el: HTMLElement;
  @Event() vchoice: EventEmitter;
  @Event() vlevel: EventEmitter;
  $drawer;
  $tab;
  $children;
  $content;
  $swiper;
  componentDidLoad () {
    this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
    this.$tab = this.el.shadowRoot.querySelector('hc-tab')
    this.$swiper = this.el.shadowRoot.querySelector('hc-swiper')
    this.$content = this.el.shadowRoot.querySelector('hc-selection-content')
    this.$drawer.addEventListener('vshow', () => {
      this.$tab.auto = true
    })
    this.$content.addEventListener('vchange', (e) => {
      this.onItemClick(e)
    })
    this.$tab.addEventListener('vchange', (e) => {
      var children = Array.from(this.$tab.children)
      children.forEach((child, i) => {
        if (i > e.detail.current) {
          this.$tab.removeChild(child)
        }
      })
      this.vlevel.emit({
        level: e.detail.current
      })
    })
  }
  render() {
    this.$children = Array.from(this.el.children)
    return (
      <Host>
        {this.renderHandle(this.$children)}
        <hc-drawer rounder place="down">
          <h2 class="title">{this.heading}</h2>
          <div class="handle">
            <hc-tab auto={false}>
              <hc-tab-item>请选择</hc-tab-item>
            </hc-tab>
          </div>
          {this.renderContent(this.$children)}
        </hc-drawer>
      </Host>
    );
  }
  onDisplay () {
    this.$drawer.generate()
  }
  renderHandle (children) {
    if (!this.command) {
      var wrap = document.createElement('div')
      wrap.appendChild(children[0])
      return (
        <div onClick={this.onDisplay.bind(this)} innerHTML={wrap.innerHTML}></div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
  renderContent (children) {
    if (!this.command) {
      var wrap = document.createElement('div')
      wrap.appendChild(children[1])
      return (
        <div innerHTML={wrap.innerHTML}></div>
      )
    } else {
      var data = eval(`(${this.data})`)
      var html = ''
      data.forEach(item => {
        html += `<hc-selection-item value="${item.value}">${item.label}</hc-selection-item>`
      })
      return (
        <hc-selection-content onVchange={this.onItemClick.bind(this)} innerHTML={html}>
        </hc-selection-content>
      )
    }
  }
  onItemClick (e) {
    this.$tab.children[this.$tab.children.length - 1].innerHTML = e.detail.label
    // 显示加载
    this.$content.Loading()
    this.vchoice.emit(e.detail)
  }
  @Method()
  async SetData (arr) {
    var tabitem = document.createElement('hc-tab-item')
    tabitem.innerText = '请选择'
    this.$tab.appendChild(tabitem)
    var length = this.$tab.children.length
    this.$tab.Switch(length - 1)
    var str = ''
    arr.forEach(item => {
      str += `<hc-selection-item value="${item.value}">${item.label}</hc-selection-item>`
    })
    this.$content.innerHTML = str
    this.$content.Loaded()
  }
  @Method()
  async Finish () {
    this.$content.Loaded()
    this.destory()
  }
  @Method()
  async destory () {
    this.$drawer.destory()
    if (this.command) {
      setTimeout(() => {
        document.body.removeChild(this.el)
      }, 300)
    }
  }
  @Method()
  async generate (option: object = null) {
    if (option) {
      var selection = document.createElement('hc-selection')
      for (let key in option) {
        var prop;
        if (typeof option[key] == 'object') {
          prop = JSON.stringify(option[key])
        } else {
          prop = option[key]
        }
        selection.setAttribute(key, prop)
      }
      selection.setAttribute('command', 'true')
      document.body.appendChild(selection)
      setTimeout(() => {
        selection.generate()
      }, 100)
    } else {
      this.onDisplay()
    }
  }
}
