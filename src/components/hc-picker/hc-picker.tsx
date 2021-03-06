import { Component, Host, h, Element, Method, Prop, Watch, Event, EventEmitter } from '@stencil/core';
import {parse} from '../../utils/picker'
@Component({
  tag: 'hc-picker',
  styleUrl: 'hc-picker.scss',
  shadow: true,
})
export class HcPickerView {
  @Prop() titles: string = '请选择';
  @Prop() value: string = '';
  @Prop() data: string;
  @Prop() command: boolean
  @Prop() reset: boolean = true;
  @Prop() footer: boolean = true;
  @Prop() event: boolean;
  @Element() el: HTMLElement;
  @Event() vdone: EventEmitter;
  @Event() vhide: EventEmitter;
  $drawer;
  $handle;
  $content;
  $data;
  @Watch('value')
  valueHandle (v: string) {
    this.el.setAttribute('value', v)
  }
  componentDidLoad () {
    this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
    if (this.data) {
      this.el.setAttribute('data', this.data)
    }
  }
  render() {
    this.$data = this.computedData()
    var footer = null;
    if (this.footer) {
      footer = (
        <hc-row class="footer">
          <hc-col span={12}>
            <hc-button type="info" onClick={this.destory.bind(this)} rounder={true}>取消</hc-button>
          </hc-col>
          <hc-col align="right" span={12}>
            <hc-button type="primary" onClick={this.destory.bind(this)} rounder={true}>确定</hc-button>
          </hc-col>
        </hc-row>
      )
    }
    return (
      <Host>
        <hc-picker-handle onClick={this.onDisplay.bind(this)} innerHTML={this.$data.handle}></hc-picker-handle>
        <hc-drawer place="down" rounder>
          <h2 class="title">{this.titles}</h2>
          <hc-picker-content>
            {this.$data.data.map((column, index) => (
              <hc-picker-view value={this.$data.value[index]} current={this.renderCurrent.bind(this, {
                data: this.$data.data[index],
                value: this.$data.value[index]
              })()} onVscrollend={this.onDataChange.bind(this, index)}>
                {
                  column.map(item => {
                    return (
                      <hc-picker-item value={item.value}>{item.label}</hc-picker-item>
                      )
                  })
                }
              </hc-picker-view>
            ))}
          </hc-picker-content>
          {footer}
        </hc-drawer>
      </Host>
    );
  }
  onDataChange (index, e) {
    var value = this.value.split(',')
    for (var i = 0; i < value.length; i ++) {
      if (i > index && this.reset) {
        if (this.command) {
          value[i] = ''
        } else {
          value[i] = this.computedData().data[i][0].label
        }
      }
      if (i == index) {
        value[i] = e.detail.label
      }
    }
    if (this.command) {
      var result = parse(JSON.parse(this.data), value.join(','))
      this.value = result.valueString
    } else {
      this.value = value.join(',')
    }
  }
  renderCurrent (data) {
    var index = 0;
    data.data.forEach((item, i) => {
      if (item.label == data.value) {
        index = i
      }
    })
    return index;
  }
  // 将内容转换成数组
  computedData () {
    var data = []
    var value = []
    var handle = !this.el.children.length ? '' : this.el.children[0].innerHTML
    if (!this.el.children.length) {
      var computed = parse(JSON.parse(this.data), this.value)
      data = computed.data
      value = computed.value
    } else {
      var children = Array.from(this.el.children[1].children)
      children.forEach(view => {
        var column = []
        Array.from(view.children).forEach(item => {
          column.push({
            label: item.innerHTML,
            value: item.getAttribute('value')
          })
        })
        data.push(column)
      })
    }
    value = this.value ? this.value.split(',') : []
    return {
      data,
      handle,
      value
    }
  }
  @Method()
  async onDisplay () {
    this.$drawer.generate()
  }
  @Method()
  async hide () {
    this.$drawer.destory()
  }
  @Method()
  async destory () {
    this.$drawer.destory()
    var value = this.value ? this.value : `${this.$data.data[0][0].label},${this.$data.data[1][0].label},${this.$data.data[2][0].label}`
    this.vdone.emit({
      value: value
    })
    setTimeout(() => {
      if (this.command && document.querySelector('hc-picker')) {
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
}
