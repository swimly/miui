import { Component, ComponentInterface, Host, h, Prop, Element, EventEmitter, Event, Watch, Method } from '@stencil/core';
import Hammer from 'hammerjs'
@Component({
  tag: 'hc-picker-view',
  styleUrl: 'hc-picker-view.scss',
  shadow: true,
})
export class HcPickerView implements ComponentInterface {
  @Prop() current: number = 0;
  @Prop() vis: number = 5;
  @Prop() rate: number = 8;
  @Prop() itemHeight: number = 44;
  @Element() el: HTMLElement;
  $wrap: HTMLElement;
  $children: Element[];
  offset: number = 0;
  @Event() vchange: EventEmitter
  count() {
    return this.el.children.length
  }
  @Watch('current')
  currentHandle (v: number) {
    this.$children.forEach(child => {
      child.removeAttribute('active')
    })
    this.$children[v].setAttribute('active', `true`)
    this.vchange.emit({
      current: v,
      value: this.$children[v].innerHTML
    })
  }
  baseOffset() {
    return (this.itemHeight * (this.vis - 1)) / 2
  }
  componentDidLoad() {
    this.$wrap = this.el.shadowRoot.querySelector('.wrap')
    var slot = this.el.shadowRoot.querySelector('slot')
    this.$children = slot.assignedElements()
    this.$children.forEach(child => {
      child.setAttribute('height', `${this.itemHeight}`)
    })
    this.$children[this.current].setAttribute('active', `true`)
    this.bindTouch()
  }
  render() {
    this.offset = this.baseOffset() - this.current * this.itemHeight
    return (
      <Host style={{height: `${this.itemHeight * this.vis}px`}}>
        <div class="wrap" style={{
          transform: `translate3d(0,${this.offset}px,0)`
        }}>
          <slot></slot>
        </div>
        <div class="indicate" style={{height: `${this.itemHeight}px`}}></div>
      </Host>
    );
  }
  @Method()
  async Moving (number) {
    this.current = number
  }
  bindTouch() {
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
          this.easeout(this.offset, target, rate, (value) => {
            this.offset = value
            this.$wrap.style.transform = `translate3d(0,${value}px,0)`
          }, () => {
            this.current = current > this.count() - 1 ? this.count() - 1 : current
          })
        } else {
          var target = this.offset + distance
          var current = Math.floor((this.baseOffset() - target) / this.itemHeight)
          target = this.baseOffset() - (current * this.itemHeight)
          target = target > this.baseOffset() ? this.baseOffset() : target
          this.easeout(this.offset, target, rate, (value) => {
            this.offset = value
            this.$wrap.style.transform = `translate3d(0,${value}px,0)`
          }, () => {
            this.current = current < 0 ? 0 : current
          })
        }
      }
    })
  }
  easeout = function (A, B, rate, callback, callback1) {
    if (A == B || typeof A != 'number') {
      return;
    }
    B = B || 0;
    rate = rate || 2;

    var step = function () {
      A = A + (B - A) / rate;

      if (Math.abs(A - B) < 0.2) {
        callback(B, true);
        callback1()
        return;
      }
      callback(A, false);
      requestAnimationFrame(step);
    };
    step();
  }
}
