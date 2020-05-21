import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';
import Hammer from 'hammerjs'
@Component({
  tag: 'hc-rate',
  styleUrl: 'hc-rate.scss',
  shadow: true,
})
export class HcRate {
  @Prop() voidIcon: string = 'collection';
  @Prop() activeIcon: string = 'collection-fill'
  @Prop() size: number = 28;
  @Prop() voidColor: string;
  @Prop() activeColor: string;
  @Prop() value: number = 0;
  @Prop() half: boolean;
  @Element() el:HTMLElement;
  @Prop() label: string;
  $children;
  itemWidth;
  @Watch('value')
  valueHandle (v: number) {
    this.renderActive(v)
    this.renderText(v)
  }
  componentDidLoad () {
    var slot = this.el.shadowRoot.querySelector('slot')
    this.$children = slot.assignedElements()
    this.itemWidth = this.$children[0].offsetWidth;
    this.$children.forEach((child, index) => {
      child.setAttribute('void-icon', this.voidIcon)
      child.setAttribute('active-icon', this.activeIcon)
      child.setAttribute('size', this.size)
      child.setAttribute('void-color', this.voidColor)
      child.setAttribute('active-color', this.activeColor)
      child.addEventListener('click', this.bindClick.bind(this, index))
    })
    this.renderActive(this.value)
    this.bindTouch()
    this.renderText(this.value)
  }
  render() {
    return (
      <Host>
        <slot></slot>
        <span>{this.label}</span>
      </Host>
    );
  }
  renderText (index) {
    if (this.$children[Math.round(index - 1)]) {
      this.label = this.$children[Math.round(index - 1)].getAttribute('label')
    }
  }
  bindClick (index) {
    this.value = index + 1
    console.log(index)
  }
  renderActive (index) {
    this.$children.forEach((child, idx) => {
      if (idx <= index - 1) {
        child.setAttribute('active', 'true')
      } else {
        child.removeAttribute('active')
        child.removeAttribute('half')
      }
    })
  }
  bindTouch () {
    var hammer = new Hammer(this.el)
    var offset = this.el.offsetLeft
    var start = 0
    hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL })
    hammer.on('panstart', (e) => {
      start = e.center.x - offset
      this.value = (e.center.x - offset) / this.itemWidth
    })
    hammer.on('pan', (e) => {
      this.value = (start + e.deltaX) / this.itemWidth
    })
  }
}
