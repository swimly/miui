import { Component, Host, h, Prop, Element, EventEmitter, Event } from '@stencil/core';
import Hammer from 'hammerjs'
@Component({
  tag: 'hc-slider',
  styleUrl: 'hc-slider.scss',
  shadow: true,
})
export class HcSlider {
  @Prop() value: number = 0;
  @Prop() max: number = 100;
  @Prop() min: number = 0;
  @Prop() step: number;
  @Prop() disabled: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() color: string;
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter;
  offset: number = 0;
  $handle;
  $bar;
  maxWidth: number = 0;
  componentWillRender () {
    if (this.disabled) {
      this.el.setAttribute('disabled', 'true')
    }
  }
  componentDidLoad () {
    this.offset = Math.round((this.value - this.min) / (this.max - this.min) * this.el.offsetWidth)
    this.$handle = this.el.shadowRoot.querySelector('.handle') as HTMLElement
    this.$bar = this.el.shadowRoot.querySelector('.bar') as HTMLElement
    this.maxWidth = this.el.offsetWidth - this.$handle.offsetWidth * 2
    if (!this.disabled && !this.readonly) {
      this.bindTouch()
    }
  }
  render() {
    const {value, min, max} = this
    var offset = Math.round((value - min) / (max - min) * this.el.offsetWidth)
    return (
      <Host onClick={this.jump.bind(this)}>
        <div class="bar" style={{
          width: `${offset}px`,
          background: `${this.color}`
        }}></div>
        <div class="handle" style={{
          transform: `translate3d(${offset}px, 0, 0)`,
          background: `${this.color}`
        }}></div>
        <slot>
          {this.renderDiv()}
        </slot>
      </Host>
    );
  }
  jump (e) {
    console.log(e)
  }
  bindTouch () {
    var hammer = new Hammer(this.el)
    if (this.step){
      var stepwidth = this.el.offsetWidth / ((this.max - this.min) / this.step)
    }
    hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL })
    hammer.on('panstart', () => {
      this.$handle.style.transition = '0s'
      this.$bar.style.transition = '0s'
    })
    hammer.on('pan', (e) => {
      var dis = e.deltaX + this.offset <= 0 ? 0 : e.deltaX + this.offset > this.el.offsetWidth ? this.el.offsetWidth : e.deltaX + this.offset
      this.$handle.style.transform = `translate3d(${Math.round(dis)}px, 0, 0)`
      this.$bar.style.width = `${Math.round(dis)}px`
    })
    hammer.on('panend', (e) => {
      if (this.step) {
        var s = Math.round(e.deltaX / stepwidth)
        console.log(e.deltaX, stepwidth, s * stepwidth)
        this.offset += s * stepwidth
        this.$handle.style.transition = '0.3s'
        this.$bar.style.transition = '0.3s'
        this.$handle.style.transform = `translate3d(${Math.round(this.offset)}px, 0, 0)`
        this.$bar.style.width = `${Math.round(this.offset)}px`
      } else {
        this.offset += e.deltaX
        this.offset = this.offset < 0 ? 0 : this.offset > this.el.offsetWidth ? this.el.offsetWidth : this.offset
      }
      var bili = Math.round(this.offset / this.el.offsetWidth * 100)
      var result = {
        bili: bili,
        value: Math.round(this.min + bili * (this.max - this.min) / 100)
      }
      this.vchange.emit(result)
    })
  }
  renderDiv () {
    if (!this.step) return;
    var length = (this.max - this.min) / this.step
    var arr = new Array(length)
    arr.fill('a')
    var str = ''
    arr.forEach(item => {
      str += `<span>${item}</span>`
    })
    return (
      <div class="step" innerHTML={str}></div>
    )
  }
}
