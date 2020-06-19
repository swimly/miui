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
  @Prop() auto: string;
  @Prop() touch: boolean;
  @Prop() data: string;
  @Prop() indicateWidth: number = 15;
  @Element() el:HTMLElement;
  @Event() vclick: EventEmitter;
  $children;
  $indicate;
  $content;
  position;
  max;
  @Event() vchange: EventEmitter;
  @Watch('current')
  currentHandle (v: number) {
    // this.el.setAttribute('current', `${v}`)
    this.renderIndicate()
    this.vchange.emit({
      current: v
    })
  }
  componentDidLoad () {
    this.$content = this.el.shadowRoot.querySelector('.content')
    this.$indicate = this.el.shadowRoot.querySelector('.indicate')
    this.Init()
    this.renderIndicate()
  }
  componentDidUpdate () {
    this.Init()
  }
  render() {
    var children = Array.from(this.el.children)
    var data = []
    if (this.data) {
      data = this.data.indexOf('{') >= 0 ? JSON.parse(this.data) : this.data.split(',')
    } else {
      children.forEach(item => {
        data.push({
          label: item.innerHTML,
          value: item.getAttribute('value')
        })
      })
    }
    return (
      <Host>
        <div class="wrap">
          <div class="content" style={{
          justifyContent: this.align
          }}>
            {
              data.map((item, index) => {
                var label = typeof item == 'string' ? item : item.label
                return (
                  <hc-tab-item label={label} onVlabel={this.onLabelChange.bind(this)} active={this.current == index} onClick={this.onClick.bind(this, index)}>{label}</hc-tab-item>
                )
              })
            }
            <div class="indicate"></div>
          </div>
        </div>
      </Host>
    );
  }
  onLabelChange () {
    setTimeout(() => {
      this.Init()
      this.renderIndicate()
    }, 30)
  }
  onClick (index) {
    this.current = index
    this.vclick.emit({
      current: index
    })
  }
  renderIndicate () {
    var itemWidth = this.position[this.current].width
    var itemLeft = this.position[this.current].left
    var left = itemLeft + itemWidth / 2 - this.indicateWidth / 2
    this.$indicate.style.width = `${this.indicateWidth}px`
    this.$indicate.style.transform = `translate3d(${left}px, 0, 0)`
    var half = this.el.offsetWidth / 2
    if (left > half) {
      this.renderScroll(half)
    }
    if (left < half) {
      this.renderScroll(0)
    }
  }
  renderScroll (half) {
    if (this.max <= this.el.offsetWidth + this.el.offsetLeft) return
    var maxDis = this.max - this.el.offsetWidth
    var left = this.position[this.current].left
    var dis = half ? left - half > maxDis ? maxDis : left - half : half
    this.$content.style.transition = '0.3s'
    this.$content.style.transform = `translate3d(${-dis}px, 0, 0)`
  }
  bindTouch () {
    var hammer = new Hammer(this.el)
    hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL })
    hammer.on('panstart', () => {
    })
    hammer.on('pan', (e) => {
      console.log(e)
    })
    hammer.on('panend', (e) => {
      console.log(e)
    })
  }
  @Method()
  async MoveTo (index) {
    this.current = index
  }
  @Method()
  async Init () {
    this.$children = this.el.shadowRoot.querySelectorAll('hc-tab-item')
    var position = []
    this.$children.forEach(item => {
      position.push({
        left: item.offsetLeft,
        width: item.offsetWidth
      })
    })
    var last = position.length - 1
    this.max = position[last].left + position[last].width
    this.position = position
    if (this.max <= this.el.offsetWidth) {
      this.$content.style.transform = `translate3d(${0}px, 0, 0)`
    }
  }
}
