import { Component, ComponentInterface, Host, h, Prop, Element, EventEmitter, Event, Watch, Method } from '@stencil/core';
import Hammer from 'hammerjs'
import {easeout} from '../../utils/picker'
@Component({
  tag: 'hc-picker-view',
  styleUrl: 'hc-picker-view.scss',
  shadow: true,
})
export class HcPickerView implements ComponentInterface {
  @Prop() value: string;
  @Prop() current: number = 0;
  @Prop() vis: number = 5;
  @Prop() rate: number = 8;
  @Prop() itemHeight: number = 44;
  @Prop() data: string;
  @Element() el: HTMLElement;
  $wrap: HTMLElement;
  $children: Element[];
  offset: number = 0;
  @Event() vscrollend: EventEmitter
  @Watch('current')
  currentHandle (v: number) {
    this.renderActive(v)
    var data = {
      label: this.$children[v].innerHTML,
      value: this.$children[v].getAttribute('value'),
      current: v
    }
    this.vscrollend.emit(data)
  }
  count() {
    return this.el.children.length
  }
  baseOffset() {
    return (this.itemHeight * (this.vis - 1)) / 2
  }
  componentDidLoad() {
    if (this.value) {
      this.el.setAttribute('value', this.value)
    }
    if (this.current) {
      this.el.setAttribute('current', `${this.current}`)
    }
    this.renderActive(this.current)
    this.bindTouch()
  }
  render() {
    this.$children = Array.from(this.el.children)
    this.offset = this.baseOffset() - this.current * this.itemHeight
    var data = []
    if (this.data) {
      data = JSON.parse(this.data)
    } else {
      this.$children.forEach(item => {
        data.push({
          label: item.innerHTML,
          value: item.getAttribute('value')
        })
      })
    }
    return (
      <Host style={{height: `${this.itemHeight * this.vis}px`}}>
        <div class="wrap" style={{
          transform: `translate3d(0,${this.offset}px,0)`
        }}>
          <slot>
          {
            data.map(item => (
              <hc-picker-item value={item.value}>{item.label}</hc-picker-item>
            ))
          }
          </slot>
        </div>
        <div class="indicate" style={{height: `${this.itemHeight}px`}}></div>
      </Host>
    );
  }
  renderActive (index) {
    this.$children.forEach((child, i) => {
      if (index == i) {
        child.setAttribute('active', 'true')
      } else {
        child.removeAttribute('active')
      }
    })
  }
  @Method()
  async Moving (number) {
    this.current = number
  }
  bindTouch() {
    this.$wrap = this.el.shadowRoot.querySelector('.wrap')
    var hammer = new Hammer(this.el)
    hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL })
    hammer.on('panstart', () => {
    })
    hammer.on('pan', (e) => {
      this.$wrap.style.transform = `translate3d(0,${this.offset + e.deltaY}px,0)`
    })
    hammer.on('panend', (e) => {
      this.offset += e.deltaY
      var rate = this.rate
      var distance = Math.abs(e.velocity) * this.el.clientHeight
      if (e.deltaTime < 3000) {
        if (e.deltaY < 0) {
          var target = this.offset - distance
          var current = Math.ceil((this.baseOffset() - target) / this.itemHeight)
          target = this.baseOffset() - (current * this.itemHeight)
          target = target < this.baseOffset() - this.$wrap.clientHeight + this.itemHeight ? this.baseOffset() - this.$wrap.clientHeight + this.itemHeight : target
        } else {
          var target = this.offset + distance
          var current = Math.floor((this.baseOffset() - target) / this.itemHeight)
          target = this.baseOffset() - (current * this.itemHeight)
          target = target > this.baseOffset() ? this.baseOffset() : target
        }
        easeout(this.offset, target, rate, (value) => {
          this.offset = value
          this.$wrap.style.transform = `translate3d(0,${value}px,0)`
        }, () => {
          this.current = current < 0 ? 0 : current > this.count() - 1 ? this.count() - 1 : current
        })
      }
    })
  }
}
