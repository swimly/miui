import { Component, ComponentInterface, Host, h, Element, Prop, Watch, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-tab',
  styleUrl: 'hc-tab.scss',
  shadow: true,
})
export class HcTab implements ComponentInterface {
  @Prop() current: number = 0;
  @Prop() direction: string = 'horizontal';
  @Prop() align: string = 'flex-start';
  @Element() el:HTMLElement;
  offset: number = 0;
  scroll: number = 0;
  width: number = 0;
  prev: number = 0;
  pos: number[] = [];
  $slot;
  $wrap;
  $indicate: HTMLElement;
  $children: Element[];
  @Event() vchange: EventEmitter;
  @Watch('current')
  currentHandle (v: number) {
    this.vchange.emit({
      current: v
    })
  }
  componentDidLoad () {
    this.$slot = this.el.shadowRoot.querySelector('slot')
    this.$wrap = this.el.shadowRoot.querySelector('.wrap')
    this.$indicate = this.el.shadowRoot.querySelector('.indicate')
    this.$children = this.$slot.assignedElements()
    this.offset = this.direction == 'horizontal' ? this.el.offsetLeft : this.el.offsetTop
    this.width = this.el.offsetWidth;
    this.$children.forEach((child, index) => {
      child.setAttribute('index', `${index}`)
      this.pos.push(Math.round(child.getBoundingClientRect().x))
      child.addEventListener('vchange', this.onChange.bind(this))
    })
    this.renderScroll(this.current)
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
  onChange (e) {
    this.current = e.detail.index
    this.renderScroll(e.detail.index)
  }
  renderScroll (index) {
    this.$children.forEach(item => {
      item.removeAttribute('active')
    })
    this.$children[index].setAttribute('active', 'true')
    if (this.pos[this.pos.length - 1] + this.$children[this.pos.length - 1].clientWidth > this.width + this.offset) {
      if (this.pos[index] > this.width / 2) {
        this.scroll = this.pos[index] - this.width / 2
      }
      if (this.pos[this.pos.length - 1] - this.scroll < this.width) {
        this.scroll = this.pos[this.pos.length - 1] - (this.width) + this.offset / 2
      }
      if (this.pos[index] <= this.width / 2) {
        this.scroll = 0
      }
      this.$wrap.style.transform = `translateX(${-this.scroll}px)`
    }
    this.$indicate.style.transform = `translateX(${this.pos[index] - this.offset + (this.$children[index].clientWidth - this.$indicate.offsetWidth) / 2}px)`
  }
}
