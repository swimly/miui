import { Component, Host, h, Prop, Element } from '@stencil/core';
import {chunk} from '../../utils/number'
@Component({
  tag: 'hc-square',
  styleUrl: 'hc-square.scss',
  shadow: true,
})
export class HcSquare {
  @Prop() column: number = 3;
  @Prop() row: number;
  @Prop() autoplay: boolean;
  @Element() el: HTMLElement;
  componentDidLoad () {
  }
  render() {
    return (
      <Host>
        {this.renderDom()}
      </Host>
    );
  }
  renderDom () {
    var children = Array.from(this.el.children)
    children.forEach((child) => {
      (child as HTMLElement).style.width = `${100 / this.column}%`
    })
    console.log(children)
    if (this.row) {
      // 可以左右切换
      var arr = chunk(children, this.column * this.row)
      console.log(this.el.offsetWidth)
      var str = `<hc-swiper loop ${this.autoplay ? 'autoplay' : ''} indicate="light" width="${this.el.offsetWidth}">`
      arr.forEach(group => {
        str += `<hc-swiper-item>`
        group.forEach(child => {
          var div = document.createElement('div')
          div.append(child)
          str += `${div.innerHTML}`
        })
        str += `</hc-swiper-item>`
      })
      str += `</hc-swiper>`
      return (
        <div innerHTML={str}></div>
      )
    } else {
      var str = this.el.innerHTML
      return (
        <hc-row innerHTML={str}></hc-row>
      )
    }
  }
}