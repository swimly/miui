import { Component, Host, h, Element, Prop, Watch } from '@stencil/core';
import Hammer from 'hammerjs'
@Component({
  tag: 'hc-pullrefresh',
  styleUrl: 'hc-pullrefresh.scss',
  shadow: true,
})
export class HcPullrefresh {
  @Prop() scrolltop: number = 0;
  @Element() el: HTMLElement;
  $content;
  hammer;
  @Watch('scrolltop')
  scrollHandle (v: number) {
    this.el.setAttribute('scrolltop', `${v}`)
  }
  componentDidLoad () {
    this.el.setAttribute('scrolltop', `${this.scrolltop}`)
    this.$content = this.el.shadowRoot.querySelector('.content')
    this.bindTouch()
  }
  render() {
    return (
      <Host>
        <div class="mask" style={{display: this.scrolltop == 0 ? 'block' : 'none'}}></div>
        <div class="content" onScroll={this.onScroll.bind(this)}>
          <slot></slot>
        </div>
      </Host>
    );
  }
  onScroll (e) {
    this.scrolltop = e.target.scrollTop
  }
  bindTouch () {
    this.hammer = new Hammer(this.el.shadowRoot.querySelector('.mask'))
    this.hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL })
    this.hammer.on('panstart', () => {
      this.$content.style.transition = '0s'
    })
    this.hammer.on('pan', (e) => {
      if (e.deltaY < 0) {
        this.$content.scrollTop = -e.deltaY
      } else {
        this.$content.style.transform = `translate3d(0,${e.deltaY}px, 0)`
      }
    })
    this.hammer.on('panend', (e) => {
      this.$content.style.transition = '0.3s'
      this.$content.style.transform = `translate3d(0,${0}px, 0)`
    })
  }
}
