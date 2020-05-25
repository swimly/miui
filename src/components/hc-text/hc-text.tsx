import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';
import {cutStrByte} from '../../utils/letter'
@Component({
  tag: 'hc-text',
  styleUrl: 'hc-text.scss',
  shadow: true,
})
export class HcText {
  @Prop() max: number;
  @Prop() open: boolean;
  @Prop() row: number;
  @Prop() indent: number;
  @Prop() color: string;
  @Prop() background: string;
  @Prop() padding: string;
  @Prop() fontSize: string;
  @Element() el:HTMLElement;
  @Watch('open')
  openHandle (v: boolean) {
    if (v) {
      this.el.setAttribute('open', 'true')
    } else {
      this.el.removeAttribute('open')
    }
    setTimeout(() => {
      this.initPosition()
    }, 10)
  }
  componentDidLoad () {
    this.initPosition()
  }
  render() {
    var str = this.max && !this.open ? cutStrByte(this.el.innerHTML, this.max).cutStr : this.el.innerHTML;
    console.log(str)
    return (
      <Host style={{
        textIndent: `${this.indent}em`,
        webkitLineClamp: `${this.row}`,
        color: this.color,
        backgroundColor: this.background,
        padding: this.padding,
        fontSize: this.fontSize
      }}>
        {str}
        <span class="more-text">…</span>
        <span class="indicate"></span>
        {
          this.renderMore()
        }
      </Host>
    );
  }
  getIndicatePos () {
    var width = document.body.clientWidth;
    var indicate = this.el.shadowRoot.querySelector('.indicate')
    var ppos = width - this.el.offsetLeft - this.el.offsetWidth
    var p = indicate.getBoundingClientRect()
    var more = this.el.shadowRoot.querySelector('.more').getBoundingClientRect().width
    var pos = width - p.x - ppos - more
    return pos
  }
  renderMore () {
    if (this.max) {
      return (
        <span onClick={this.onClick.bind(this)} class="more">{this.open ? '收起' : '展开'}</span>
      )
    }
  }
  initPosition () {
    if (this.max) {
      console.log(this.getIndicatePos())
      if (this.getIndicatePos() > 0) {
        this.el.setAttribute('right', 'true')
      } else {
        this.el.removeAttribute('right')
      }
    }
  }
  onClick () {
    this.open = !this.open
  }
}
