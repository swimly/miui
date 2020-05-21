import { Component, Host, h, Element } from '@stencil/core';
import Hammer from 'hammerjs'
@Component({
  tag: 'hc-swipemenu',
  styleUrl: 'hc-swipemenu.scss',
  shadow: true,
})
export class HcSwipemenu {
  @Element() el:HTMLElement;
  offset: number = 0;
  componentDidLoad () {
    this.bindTouch()
  }
  render() {
    return (
      <Host>
        <div class="handle">
          <slot name="handle"></slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
  bindTouch () {
    var handle = this.el.shadowRoot.querySelector('.handle') as HTMLElement
    var content = this.el.shadowRoot.querySelector('.content') as HTMLElement
    var hammer = new Hammer(this.el)
    var itemWidth = handle.clientWidth;
    var length = handle.children.length
    hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL })
    hammer.on('panstart', () => {
      content.style.transition = '0s'
    })
    hammer.on('pan', (e) => {
      var dis = this.offset == 0 && e.deltaX > 0 ? 0 :e.deltaX;
      content.style.transform = `translate3d(${dis + this.offset}px, 0, 0)`;
    })
    hammer.on('panend', (e) => {
      this.offset += e.deltaX;
      content.style.transition = '0.3s'
      if (e.deltaX > -itemWidth) {
        this.offset = 0
      }
      if (e.deltaX < -itemWidth / 2) {
        this.offset = -itemWidth * length
      }
      content.style.transform = `translate3d(${this.offset}px, 0, 0)`;
      console.log(this.offset)
    })
  }
}
