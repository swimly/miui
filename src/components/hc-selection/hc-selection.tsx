import { Component, Host, h, Element, Prop, Event, EventEmitter, Method } from '@stencil/core';
import {parse} from '../../utils/picker'
@Component({
  tag: 'hc-selection',
  styleUrl: 'hc-selection.scss',
  shadow: true,
})
export class HcSelection {
  @Prop() heading: string = '请选择所在地区'
  @Prop() value: string = '请选择';
  @Prop() level: number = 0;
  @Prop() data: string;
  @Prop() current: number = 0;
  @Prop() command: boolean;
  @Prop() width: number;
  @Prop() footer: boolean = true;
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter;
  $drawer;
  $tab;
  $data;
  $value;
  componentDidLoad () {
    this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
    this.$tab = this.el.shadowRoot.querySelector('hc-tab')
  }
  render() {
    this.$value = this.value.split(',')
    this.$data = parse(JSON.parse(this.data), this.value).data
    return (
      <Host>
        <hc-drawer rounder place="down">
          <h2 class="title">{this.heading}</h2>
          <div class="handle">
            <hc-tab onVclick={this.onIndexChange.bind(this)} current={this.current} data={this.value}></hc-tab>
          </div>
          <hc-selection-content width={this.width * this.$data.length} offset={-this.current * this.width}>
            {
              this.$data.map((view, index) => (
                <hc-selection-view width={this.width}>
                  {
                    view.map((item) => (
                      <hc-selection-item active={this.$value.indexOf(item.label) >= 0} value={item.value} onClick={this.onClick.bind(this, item, index)}>{item.label}</hc-selection-item>
                    ))
                  }
                </hc-selection-view>
              ))
            }
          </hc-selection-content>
          {this.renderFooter()}
        </hc-drawer>
      </Host>
    );
  }
  onIndexChange (e) {
    var value = this.value.split(',')
    value[e.detail.current] = '请选择'
    value = value.slice(0, e.detail.current + 1)
    this.value = value.join(',')
    this.current = e.detail.current
  }
  onClick (item, index) {
    this.$value[index] = item.label
    if (this.current < this.$data.length - 1) {
      this.$value[index + 1] = '请选择'
    }
    this.value = this.$value.join(',')
    setTimeout(() => {
      this.current = this.current < this.$data.length - 1 ? index + 1 : this.$data.length - 1;
    }, 50)
    if (this.current == this.$data.length - 1) {
      setTimeout(() => {
        this.$tab.auto = new Date().getTime()
      }, 120)
    }
  }
  onDisplay () {
    this.$drawer.generate()
    this.$tab.auto = true
    this.width = this.el.offsetWidth
  }
  renderFooter () {
    var dom = null
    if (this.footer) {
      dom = (
        <hc-row class="footer">
          <hc-col span={12}>
            <hc-button onClick={this.destory.bind(this)} type="info" rounder={true}>取消</hc-button>
          </hc-col>
          <hc-col align="right" span={12}>
          <hc-button onClick={this.destory.bind(this)} type="primary" rounder={true}>确定</hc-button>
          </hc-col>
        </hc-row>
      )
    }
    return dom
  }
  @Method()
  async destory () {
    this.$drawer.destory()
    this.vchange.emit({
      value: this.value
    })
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
