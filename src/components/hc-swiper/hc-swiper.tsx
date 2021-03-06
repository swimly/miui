import { Component, ComponentInterface, Host, h, Element, Prop, Method, EventEmitter, Event, Watch } from '@stencil/core';
import Hammer from 'hammerjs'

@Component({
  tag: 'hc-swiper',
  styleUrl: 'hc-swiper.scss',
  shadow: true,
})
export class HcSwiper implements ComponentInterface {
  @Prop() height: number;
  @Prop() width: number;
  @Prop() current: number = 0;
  @Prop() vertical: boolean;
  @Prop() loop: boolean = false;
  @Prop() autoplay: boolean = false;
  @Prop() duration: number = 3000;
  @Prop() indicate: string;
  @Prop() auto: boolean;
  @Prop() notouch: boolean;
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter;
  children: Element[];
  $wrap: HTMLElement;
  offset: number;
  timer;
  moca = 0.8;
  hammer;
  @Watch('current')
  notouchHandle (v: boolean) {
    this.el.setAttribute('current', `${v}`)
  }
  componentDidLoad () {
    if (this.indicate) {
      this.el.setAttribute('indicate', this.indicate)
    }
    if (this.notouch) {
      this.el.setAttribute('notouch', 'true')
    }
    if (!this.notouch) {
      this.bindTouch()
    }
    this.autoMove()
    var children = this.el.shadowRoot.querySelectorAll('hc-touch')
    children.forEach(item => {
      item.addEventListener('vchange', (e) => {
        this.notouch = (e as CustomEvent).detail.value
      })
    })
  }
  render() {
    var children = Array.from(this.el.children)
    var width = this.width ? this.width : this.el.clientWidth
    children.forEach((item) => {
      item.setAttribute('width', `${width}`)
      item.setAttribute('height', `${this.height}`)
    })
    this.children = this.loop ? [...children, ...children, ...children] : children
    this.offset = this.loop ? 
      this.vertical ? -(this.current + this.children.length / 3 ) * this.height : -(this.current + this.children.length / 3 ) * this.el.offsetWidth
      : 
      this.vertical ? -(this.current) * this.height : -(this.current) * this.el.offsetWidth
    var length = this.loop ? this.children.length / 3 : this.children.length;
    var arr = new Array(length)
    arr.fill('line')
    return (
      <Host
        style={{
          height: `${this.height}px`,
          width: `${this.width}px`
        }}
      >
        <div class="wrap" 
          style={{
            width: this.vertical ? 'auto' : `${this.el.offsetWidth * this.children.length * 3}px`,
            transform: this.vertical ? `translateY(${this.offset}px)` : `translateX(${this.offset}px)`,
            flexDirection: this.vertical ? 'column' : 'row'
          }}
        >
          {
            this.children.map((item) => {
              return (
                <div innerHTML={item.outerHTML}></div>
              )
            })
          }
        </div>
        <slot name="indicate">
          <div class="indicate">
            {
              arr.map((item, index) => {
                return (
                  <span class={this.current == index ? 'active' : ''}>{item}</span>
                )
              })
            }
          </div>
        </slot>
      </Host>
    );
  }
  jump (current) {
    this.moca = this.moca > 0.6 ? this.moca - 0.09 : 0.6
    return current * this.moca
  }
  bindTouch () {
    this.$wrap = this.el.shadowRoot.querySelector('.wrap')
    this.hammer = new Hammer(this.el)
    // this.vertical ? hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL }) : hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL })
    this.hammer.get('pinch').set({
      enable: true
    })
    this.hammer.on('doubletap panstart pan pinch panend pinchend', (ev) => {
      if (ev.type == 'panstart') {
        this.$wrap.style.transition = '0s'
        clearInterval(this.timer)
      }
      //pan    
      if (ev.type == 'pan') {
        if (this.notouch) return
        if (ev.pointers.length > 1) {
          return false
        }
        var dis = this.vertical ? ev.deltaY : ev.deltaX
        dis = this.jump(dis)
        this.renderMove(this.offset + dis)
      }
      //panend
      if (ev.type == "panend") {
        if (this.notouch) return
        var dis = this.vertical ? ev.deltaY : ev.deltaX
        this.$wrap.style.transition = '0.3s'
        if (dis > 150) {
          this.slidePrev()
        } else if (dis < -150) {
          this.slideNext()
        } else {
          this.$wrap.style.transform = this.vertical ? `translateY(${this.offset}px)` : `translateX(${this.offset}px)`
        }
        this.autoMove()
      }
    })
  }
  @Method()
  async slidePrev () {
    var move = this.vertical ? this.height : this.el.offsetWidth;
    this.$wrap.style.transition = '0.3s'
    if (this.loop) {
      // 循环模式
      var one = this.vertical ? this.height : this.el.offsetWidth
      this.offset += move
      this.renderMove(this.offset)
      if (this.offset >= 0) {
        this.offset = -(this.children.length / 3) * one
        setTimeout(() => {
          this.$wrap.style.transition = '0s'
          this.$wrap.style.transform = this.vertical ? `translateY(${this.offset}px)` : `translateX(${this.offset}px)`
        }, 300)
      }
    } else {
      // 非循环模式
      if (this.offset < 0) {
        this.offset += move
      }
      this.renderMove(this.offset)
    }
    this.renderIndicate()
  }
  @Method()
  async slideNext () {
    var move = this.vertical ? this.height : this.el.offsetWidth;
    this.$wrap.style.transition = '0.3s'
    if (this.loop) {
      // 循环模式
      var one = this.vertical ? this.height : this.el.offsetWidth
      this.offset -= move
      this.renderMove(this.offset)
      if (this.offset <= - (this.children.length / 3 * 2) * one) {
        this.offset = -(this.children.length / 3) * one
        setTimeout(() => {
          this.$wrap.style.transition = '0s'
          this.$wrap.style.transform = this.vertical ? `translateY(${this.offset}px)` : `translateX(${this.offset}px)`
        }, 300)
      }
    } else {
      // 非循环模式
      var one = this.vertical ? this.height : this.el.offsetWidth
      if (this.offset > - (this.children.length - 1) * one) {
        this.offset -= move
      }
      this.renderMove(this.offset)
    }
    this.renderIndicate()
  }
  @Method()
  async slideTo (index, duration: number = 300) {
    this.$wrap.style.transition = `${duration/1000}s`
    this.current = index
  }
  autoMove () {
    clearInterval(this.timer)
    if (this.autoplay) {
      this.timer = setInterval(() => {
        this.$wrap.style.transition = '0.3s'
        this.slideNext()
      }, this.duration)
    }
  }
  renderMove (offset) {
    this.vertical ? this.$wrap.style.transform = `translateY(${offset}px)` : this.$wrap.style.transform = `translateX(${offset}px)` 
  }
  renderIndicate () {
    var one = this.vertical ? this.height : this.el.offsetWidth
    var length = this.loop ? this.children.length / 3 : this.children.length
    var current = Math.abs(this.offset / one) < length ? Math.abs(this.offset / one) : Math.abs(Math.abs(this.offset / one) - length)
    var indicate = this.el.shadowRoot.querySelector('.indicate')
    var indicates = indicate.querySelectorAll('span')
    indicates.forEach((item, index) => {
      item.classList.remove('active')
      if (index == current) {
        item.classList.add('active')
      }
    })
    this.vchange.emit({
      current: current
    })
  }
}
