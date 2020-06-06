import { Component, ComponentInterface, Host, h, Element, Prop, Watch, EventEmitter, Event, Method } from '@stencil/core';
import Hammer from 'hammerjs'
@Component({
  tag: 'hc-tab',
  styleUrl: 'hc-tab.scss',
  shadow: true,
})
export class HcTab implements ComponentInterface {
  @Prop() current: number = 0;
  @Prop() direction: string = 'horizontal';
  @Prop() align: string = 'flex-start';
  @Prop() auto: boolean = true;
  @Prop() touch: boolean;
  @Element() el:HTMLElement;
  offset: number = 0;
  scroll: number = 0;
  width: number = 0;
  prev: number = 0;
  pos = [];
  $slot;
  $wrap;
  max;
  $indicate: HTMLElement;
  $children: Element[];
  @Event() vchange: EventEmitter;
  @Watch('current')
  currentHandle (v: number) {
    this.renderScroll(v)
    this.vchange.emit({
      current: v
    })
  }
  @Watch('auto')
  autoHandle (v:boolean) {
    if (v) {
      this.computed()
    }
  }
  componentDidLoad () {
    this.$slot = this.el.shadowRoot.querySelector('slot')
    this.$wrap = this.el.shadowRoot.querySelector('.wrap')
    this.$indicate = this.el.shadowRoot.querySelector('.indicate')
    this.$children = this.$slot.assignedElements()
    this.offset = this.el.offsetLeft
    this.width = this.el.offsetWidth;
    if (this.auto) {
      this.computed()
    }
    this.$slot.addEventListener('slotchange', () => {
      this.pos = []
      this.$children = this.$slot.assignedElements()
      setTimeout(() => {
        this.computed()
      }, 30)
    })
    this.$children.forEach((item) => {
      item.addEventListener('vchange', () => {
        this.pos = []
        this.computed()
      })
    })
  }
  render() {
    return (
      <Host>
        <div class="wrap" style={{
          justifyContent: this.align
        }}>
          <slot></slot>
          <div class="indicate"></div>
        </div>
      </Host>
    );
  }
  bindTouch () {
    var last = this.pos[this.pos.length - 1]
    if (last.x + last.width <= this.el.offsetWidth + this.el.offsetLeft || !this.touch) {
      return false;
    }
    var hammer = new Hammer(this.el)
    hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL })
    hammer.on('panstart', () => {
      this.$wrap.style.transition = '0s'
    })
    hammer.on('pan', (e) => {
      var dis = this.scroll + e.deltaX
      dis = dis > 0 ? 0 : dis < -this.max ? -this.max : dis
      this.$wrap.style.transform = `translate3d(${dis}px, 0, 0)`;
    })
    hammer.on('panend', (e) => {
      this.scroll += e.deltaX
    })
  }
  onChange (e) {
    this.current = e.detail.index
  }
  // 计算每个hc-tab-item的位置
  computed () {
    this.$children.forEach((child, index) => {
      child.setAttribute('index', `${index}`)
      this.pos.push(child.getBoundingClientRect())
      child.addEventListener('vclick', this.onChange.bind(this))
    })
    this.renderScroll(this.current)
    this.bindTouch()
  }
  // 渲染indicate和wrap的运动
  renderScroll (index) {
    var move = 0;
    var fullwidth = this.el.clientWidth;
    this.$children.forEach(item => {
      item.removeAttribute('active')
    })
    this.$wrap.style.transition = '0.3s'
    this.$children[index].setAttribute('active', 'true')
    var indicateLeft = this.pos[index].x - this.offset + (this.pos[index].width - this.$indicate.offsetWidth) / 2
    var last = this.pos[this.pos.length - 1]
    var isFull = last.x + last.width - this.pos[0].x > this.el.offsetWidth
    var maxDis = last.x + last.width - this.pos[0].x - this.el.offsetWidth
    this.max = maxDis
    if (this.pos[index].x > fullwidth / 2 && isFull) {
      move = this.pos[index].x + this.pos[index].width / 2 - fullwidth / 2 - this.offset
      move = move > maxDis ? maxDis : move
      this.$wrap.style.transform = `translate3d(${-move}px, 0, 0)`
    } else {
      this.$wrap.style.transform = `translate3d(${0}px, 0, 0)`
    }
    this.scroll = -move
    this.$indicate.style.transform = `translate3d(${indicateLeft}px, 0, 0)`
  }
  // 选中第几个
  @Method()
  async Switch (number) {
    setTimeout(() => {
      this.current = number
    }, 30)
  }
}
