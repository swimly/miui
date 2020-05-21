import { Component, Host, h, Element, Prop } from '@stencil/core';
import {getparents} from '../../utils/dom'
@Component({
  tag: 'hc-sticky',
  styleUrl: 'hc-sticky.scss',
  shadow: true,
})
export class HcSticky {
  @Prop() offset: number = 0;
  @Element() el:HTMLElement
  $view;
  pos;
  $content;
  componentDidLoad () {
    var parents = getparents(this.el, document.querySelector('hc-view'))
    this.$view = parents[parents.length - 1]
    this.$content = this.el.shadowRoot.querySelector('.content')
    this.pos = this.el.getBoundingClientRect()
    this.$view.addEventListener('vscroll', (e) => {
      this.renderPosition(e)
    })
  }
  render() {
    return (
      <Host>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
  renderPosition (e) {
    var offset = this.pos.y - this.$view.offsetTop - this.offset
    if (e.detail.scrolltop > offset) {
      this.$content.style.top = `${this.offset + this.$view.offsetTop}px`
      this.$content.style.width = `${this.pos.width}px`
      this.$content.style.height = `${this.pos.height}px`
      this.$content.style.left = `${this.pos.x}px`
      this.el.setAttribute('fixed', 'true')
      this.el.style.height = `${this.pos.height}px`
    } else {
      this.el.removeAttribute('fixed')
    }
  }
}
