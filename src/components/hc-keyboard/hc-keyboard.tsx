import { Component, Host, h, Prop, Element, Watch, Method, Event } from '@stencil/core';
import keys from '../../utils/keyboard'
import { EventEmitter } from 'events';
@Component({
  tag: 'hc-keyboard',
  styleUrl: 'hc-keyboard.scss',
  shadow: true,
})
export class HcKeyboard {
  @Prop() type: string;
  @Prop() change: boolean = false;
  @Prop() value: string = '';
  @Prop() vibrate: number = 100;
  @Prop() current: string;
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter;
  $drawer;
  $type;
  @Watch('type')
  typeHandle (v: string) {
    this.el.setAttribute('type', v)
  }
  @Watch('value')
  valueHandle (v) {
    this.vchange.emit(v)
    if (this.$type == 'carnumber') {
      if (v.length == 0) {
        this.type = 'carnumber'
      }
    }
  }
  componentDidLoad () {
    if (this.type) {
      this.el.setAttribute('type', this.type)
    }
    this.$type = this.type
    var slot = this.el.shadowRoot.querySelector('slot')
    slot.addEventListener('click', () => {
      this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
      this.value = ''
      this.$drawer.generate()
    })
  }
  render() {
    var data = keys[this.type]
    return (
      <Host>
        <slot></slot>
        <hc-drawer place="down" masker={false}>
          <hc-row class="head" valign="center">
            <hc-col></hc-col>
            <hc-col flex={1}>安全键盘</hc-col>
            <hc-icon onClick={this.destory.bind(this)} size={24} name="arrow-down"></hc-icon>
          </hc-row>
          <div class="keys">
            {
              data.map(row => {
                return (
                  <hc-row>
                    {
                      row.map(item => {
                        return (
                          <hc-col id={item.label} flex={item.flex ? item.flex : 1} onClick={this.onClick.bind(this, item)}>
                            {this.renderItem(item)}
                          </hc-col>
                        )
                      })
                    }
                  </hc-row>
                )
              })
            }
          </div>
        </hc-drawer>
      </Host>
    );
  }
  renderItem (item) {
    if (item.icon) {
      return (
        <span class="key" style={{backgroundColor: item.background, color: item.color, fontSize: item.fontSize}}>
          <hc-icon size={20} name={item.icon}></hc-icon>
        </span>
      )
    } else {
      return (
        <span class="key" style={{backgroundColor: item.background, color: item.color, fontSize: item.fontSize}}>{
          item.label
        }</span>
      )
    }
  }
  onClick (item) {
    this.current = item.label
    this.touchVibrate()
    if (item.label == 'back') {
      this.value = this.value.substring(0, this.value.length - 1)
    } else if (item.label == '完成'){
      this.destory()
    } else {
      this.value += item.label
    }
    if (this.type == 'carnumber') {
      if (this.value.length == 1) {
        this.type = 'EN'
      }
    }
    if ( !this.change) return;
    if (item.label == 'en') {
      this.type = 'en'
    }
    if (item.label == 'EN') {
      this.type = 'EN'
    }
    if (item.label == '!?#') {
      this.type = 'char'
    }
    if (item.label == '123') {
      this.type = 'number'
    }
  }
  @Method()
  async destory () {
    this.vchange.emit(this.value)
    this.$drawer.destory()
  }
  touchVibrate() {
    if (this.vibrate !== null) {
      var timer
      if (this.vibrate >= 0) {
        timer = this.vibrate;
      }
      if (navigator.vibrate) {
        navigator.vibrate(timer);
      }
    }
  }
}
