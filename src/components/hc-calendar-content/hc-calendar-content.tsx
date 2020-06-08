import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import Hammer from 'hammerjs'
@Component({
  tag: 'hc-calendar-content',
  styleUrl: 'hc-calendar-content.scss',
  shadow: true,
})
export class HcCalendarContent {
  @Prop() width: number;
  @Prop() vertical: boolean;
  @Prop() isWeek: boolean;
  @Prop() range: number;
  @Element() el: HTMLElement;
  @Event() vswitch: EventEmitter;
  componentDidLoad () {
    if (this.vertical) {
      this.el.setAttribute('vertical', 'true')
    }
    if (!this.vertical) {
      this.bindTouch()
    }
  }
  render() {
    var width = this.vertical ? this.width : this.width * 3;
    return (
      <Host {...{'is-week': this.isWeek, range: this.range}}>
        <div class="wrap" style={{width: `${width}px`, transform: `translate3d(${this.vertical ? 0 : -this.width}px, 0, 0)`}}>
          <slot></slot>
        </div>
      </Host>
    );
  }
  bindTouch () {
    var offset = -this.width;
    var wrap = this.el.shadowRoot.querySelector('.wrap') as HTMLElement
    var hammer = new Hammer(this.el)
    hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL })
    hammer.on('panstart', () => {
      wrap.style.transition = `0s`
    })
    hammer.on('pan', (e) => {
      wrap.style.transform = `translate3d(${offset + e.deltaX}px, 0, 0)`
    })
    hammer.on('panend', (e) => {
      wrap.style.transition = `0.3s`
      if (e.deltaX > 100) {
        wrap.style.transform = `translate3d(0px, 0, 0)`
        setTimeout(() => {
          wrap.style.transition = `0s`
          wrap.style.transform = `translate3d(${-this.width}px, 0, 0)`
          this.vswitch.emit('prev')
        }, 300)
      } else if (e.deltaX < -100) {
        wrap.style.transform = `translate3d(${-this.width * 2}px, 0, 0)`
        setTimeout(() => {
          wrap.style.transition = `0s`
          wrap.style.transform = `translate3d(${-this.width}px, 0, 0)`
          this.vswitch.emit('next')
        }, 300)
      } else {
        wrap.style.transform = `translate3d(${-this.width}px, 0, 0)`
      }
    })
  }
}
