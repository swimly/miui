import { Component, Host, h, Prop, Method, Element, Event, EventEmitter } from '@stencil/core';
import {dateFormat, getMonthLength} from '../../utils/calendar'
@Component({
  tag: 'hc-date',
  styleUrl: 'hc-date.scss',
  shadow: true,
})
export class HcDate {
  @Prop() type: string = 'YYYY,MM,DD';
  @Prop() value: string = dateFormat(this.type, new Date());
  @Prop() start: number = 1980;
  @Prop() end: number = 2050;
  @Prop() heading: string;
  @Prop() footer: boolean = true;
  @Prop() indicate: boolean;
  @Prop() command: boolean;
  @Event() vchange: EventEmitter;
  @Element() el: HTMLElement;
  date;
  YYYY;
  MM;
  DD;
  hh;
  mm;
  ss;
  $drawer;
  componentDidLoad () {
    this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
  }
  render() {
    var type = this.type.split(',')
    var heading = null
    var footer = null
    var types = null
    this.date = this.value.split(',');
    this.YYYY = Array.from({length: this.end - this.start + 1}, (v, k) => `${k + this.start}`).reverse()
    this.MM = this.computedArray(12, 1);
    this.DD = this.computedArray(getMonthLength(this.date[0], this.date[1]), 1)
    this.hh = this.computedArray(24, 0)
    this.mm = this.computedArray(60, 0)
    this.ss = this.computedArray(60, 0)
    if (this.heading) {
      heading = (
        <h2 class="title">{this.heading}</h2>
      )
    }
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
    if (this.indicate) {
      var unit = {
        YYYY: '年',
        MM: '月',
        DD: '日',
        hh: '时',
        mm: '分',
        ss: '秒'
      }
      types = (
        <hc-row class="type">
          {
            type.map(item => (
              <hc-col flex={1} align="center">{unit[item]}</hc-col>
            ))
          }
        </hc-row>
      )
    }
    var content = (
      <div>
        {heading}
        {types}
        <hc-picker-content onVvaluechange={this.onChange.bind(this)}>
            {
              type.map((item, index) => {
                return this.renderDom(item, index)
              })
            }
        </hc-picker-content>
        {footer}
      </div>
    )
    if (this.command || this.el.children.length) {
      content = (
        <hc-drawer clickable={false} rounder place="down">
          {heading}
          {types}
          <hc-picker-content onVvaluechange={this.onChange.bind(this)}>
              {
                type.map((item, index) => {
                  return this.renderDom(item, index)
                })
              }
          </hc-picker-content>
          {footer}
        </hc-drawer>
      )
    }
    return (
      <Host>
        <div class="slot" onClick={this.onDisplay.bind(this)}>
          <slot></slot>
        </div>
        {content}
      </Host>
    );
  }
  computedArray (length, dis) {
    return Array.from({length: length}, (v, k) => {
      return k + dis >= 10 ? `${k + dis}` : `0${k + dis}`
    })
  }
  onChange (e) {
    this.value = e.detail.value
  }
  renderDom (id, index) {
    if (!this[id]) return false
    var date = this.value.split(',')
    var current = this[id].indexOf(date[index])
    return (
      <hc-picker-view index={index} id={id} current={current} value={date[index]}>
        {
          this[id].map((item) => (
          <hc-picker-item value={item}>{item}</hc-picker-item>
          ))
        }
      </hc-picker-view>
    )
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
  async onDisplay () {
    this.$drawer.generate()
  }
  @Method()
  async generate (option: object = null) {
    if (option) {
      var date = document.createElement('hc-date')
      for (let key in option) {
        var prop;
        if (typeof option[key] !== 'string') {
          prop = JSON.stringify(option[key])
        } else {
          prop = option[key]
        }
        date.setAttribute(key, prop)
      }
      date.setAttribute('command', 'true')
      document.body.appendChild(date)
      date.generate()
      return date;
    } else {
      setTimeout(() => {
        this.onDisplay()
      }, 30)
    }
  }
}
