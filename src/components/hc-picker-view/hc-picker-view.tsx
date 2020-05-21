import { Component, Host, h, Element, Method, Prop } from '@stencil/core';

@Component({
  tag: 'hc-picker-view',
  styleUrl: 'hc-picker-view.scss',
  shadow: true,
})
export class HcPickerView {
  @Prop() titles: string = '请选择';
  @Element() el: HTMLElement
  $drawer;
  $handle;
  componentDidLoad () {
    this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
    this.$handle = this.el.shadowRoot.querySelector('slot')
    this.$drawer.setAttribute('place', 'down')
    this.$drawer.setAttribute('rounder', `true`)
    this.bindClick()
  }
  render() {
    return (
      <Host>
        <slot name="handle"></slot>
        <hc-drawer place="down">
          <h2 class="title">{this.titles}</h2>
          <div>
            <slot></slot>
          </div>
          <hc-row class="footer">
            <hc-col span={12}>
              <hc-button type="info" onClick={this.destory.bind(this)} rounder={true}>取消</hc-button>
            </hc-col>
            <hc-col align="right" span={12}>
              <hc-button type="primary" onClick={this.destory.bind(this)} rounder={true}>确定</hc-button>
            </hc-col>
          </hc-row>
        </hc-drawer>
      </Host>
    );
  }
  bindClick () {
    this.$handle.addEventListener('click', () => {
      this.$drawer.generate()
    })
  }
  @Method()
  async destory () {
    this.$drawer.destory()
  }
  @Method()
  // 格式化数据
  async parse(source, value) {
    var index = 0
    var format = []
    var selected = []
    var label = value.split(',')
    var current = this.isCascade(source) ? source : source[index]
    while (current && Array.isArray(current) && current.length) {
      format.push(current)
      if (label && label[index] !== undefined) {
        current.some((item) => {
          if (item.name == label[index]) {
            selected[index] = item
            return true
          }
        })
      }
      if (!selected[index]) {
        selected[index] = current[0]
      }
      index ++
      current = this.isCascade(source) ? selected[selected.length - 1].children : source[index]
    }
    return {
      source: source,
      data: format,
      value: selected,
      valueString: value
    }
  }
  isCascade (data) {
    return data[0] && this.isPlainObject(data[0])
  }
  isPlainObject(obj) {
    return this._typeof(obj) === 'object'
  }
  _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }
}
