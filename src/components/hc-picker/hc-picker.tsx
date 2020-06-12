import { Component, Host, h, Element, Method, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'hc-picker',
  styleUrl: 'hc-picker.scss',
  shadow: true,
})
export class HcPickerView {
  @Prop() titles: string = '请选择';
  @Prop() value: string = '';
  @Prop() data: string;
  @Prop() valueProp: string = 'value'
  @Prop() labelProp: string = 'label'
  @Prop() command: boolean
  @Element() el: HTMLElement
  $drawer;
  $handle;
  $content;
  @Watch('value')
  valueHandle (v:string) {
    console.log(v)
  }
  componentDidLoad () {
    this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
  }
  render() {
    var handle = null
    var data = []
    if (this.command && this.data) {
      var source = JSON.parse(this.data)
      data = this.parse(source, this.value).data
      console.log(data)
    } else {
      var children = this.el.children
      var content = Array.from(children[1].children)
      content.forEach((group) => {
        var items = Array.from(group.children)
        var child = []
        items.forEach(item => {
          child.push({
            label: item.innerHTML,
            value: item.getAttribute('value')
          })
        })
        data.push(child)
      })
      handle = children[0].innerHTML
    }
    return (
      <Host>
        <hc-picker-handle onClick={this.onDisplay.bind(this)} innerHTML={handle}></hc-picker-handle>
        <hc-drawer place="down" rounder>
          <h2 class="title">{this.titles}</h2>
          <hc-picker-content data={JSON.stringify(data)} value={this.value} onVchange={this.onChange.bind(this)}>
            {data.map(group => (
              <hc-picker-view>
                {
                  group.map(item => (
                    <hc-picker-item value={item[this.valueProp]}>{item[this.labelProp]}</hc-picker-item>
                  ))
                }
              </hc-picker-view>
            ))}
          </hc-picker-content>
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
  onChange (e) {
    console.log(e.detail)
  }
  @Method()
  async onDisplay () {
    this.$drawer.generate()
  }
  @Method()
  async destory () {
    this.$drawer.destory()
    setTimeout(() => {
      if (this.command) {
        setTimeout(() => {
          document.body.removeChild(this.el)
        }, 300)
      }
    }, 300)
  }
  @Method()
  async generate (option: object = null) {
    if (option) {
      var picker = document.createElement('hc-picker')
      for (let key in option) {
        var prop;
        if (typeof option[key] !== 'string') {
          prop = JSON.stringify(option[key])
        } else {
          prop = option[key]
        }
        picker.setAttribute(key, prop)
      }
      picker.setAttribute('command', 'true')
      document.body.appendChild(picker)
      picker.generate()
      return picker;
    } else {
      setTimeout(() => {
        this.onDisplay()
      }, 30)
    }
  }
  // 格式化数据
  parse(source, value) {
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
