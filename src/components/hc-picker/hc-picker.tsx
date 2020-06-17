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
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter;
  $drawer;
  $handle;
  $content;
  @Watch('value')
  valueHandle (v: string) {
    this.el.setAttribute('value', v)
  }
  componentDidLoad () {
    this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
  }
  render() {
    var data = this.computedData()
    return (
      <Host>
        <hc-picker-handle onClick={this.onDisplay.bind(this)} innerHTML={data.handle}></hc-picker-handle>
        <hc-drawer place="down" rounder>
          <h2 class="title">{this.titles}</h2>
          <hc-picker-content>
            {data.data.map((column, index) => (
              <hc-picker-view value={data.value[index]} current={this.renderCurrent.bind(this, {
                data: data.data[index],
                value: data.value[index]
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
    var handle = this.command ? '' : this.el.children[0].innerHTML
    if (this.command) {
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
  async destory () {
    this.$drawer.destory()
    this.vchange.emit({
      value: this.value
    })
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
}
