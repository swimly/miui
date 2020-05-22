import { Component, Host, h, Prop, Element, Watch, EventEmitter, Event } from '@stencil/core';
import Hammer from 'hammerjs'
import {findCloseNum} from '../../utils/number'
@Component({
  tag: 'hc-indexbar',
  styleUrl: 'hc-indexbar.scss',
  shadow: true,
})
export class HcIndexbar {
  @Prop() letter: string = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
  @Prop() offset: number = 10;
  @Prop() index: number = 0;
  @Element() el:HTMLElement;
  pos: number[] = [];
  scroll = [];
  $children;
  @Event() vchange: EventEmitter;
  @Watch('index')
  indexHandle (v: number) {
    var prev = v-1 <=  0 ? 0 : v-1
    var next = v + 1 >= this.$children.length -1 ? this.$children.length - 1 : v + 1;
    this.$children.forEach(child => {
      child.classList.remove('prev')
      child.classList.remove('active')
      child.classList.remove('next')
    })
    var current = v < 0 ? 0 : v > this.$children.length - 1 ? this.$children.length - 1 : v
    this.$children[prev].classList.add('prev')
    this.$children[current].classList.add('active')
    this.$children[next].classList.add('next')
    this.renderScroll(this.letter.split(',')[current])
    this.vchange.emit({
      index: current,
      letter: this.letter.split(',')[v]
    })
  }
  componentDidLoad () {
    var children = Array.from(this.el.shadowRoot.querySelector('.letter').children)
    this.$children = children;
    var letter = this.letter.split(',')
    children.forEach((child, index) => {
      var pos = child.getBoundingClientRect()
      this.pos.push(Math.round(pos.y))
      child.setAttribute('top', `${Math.round(pos.y)}`)
      child.setAttribute('letter', letter[index])
      child.addEventListener('click', () => {
        this.renderScroll(letter[index])
      })
    })
    var slot = this.el.shadowRoot.querySelector('slot')
    var items = slot.assignedElements()
    items.forEach(item => {
      if (item.tagName == 'HC-INDEXBAR-TITLE') {
        this.scroll.push({
          letter: item.innerHTML,
          offset: (item as HTMLElement).offsetTop
        })
      }
    })
    this.bindTouch()
    this.bindScroll()
  }
  render() {
    var letters = this.letter.split(',')
    var offsettop = this.el.offsetTop
    var offsetright = document.body.clientWidth - this.el.offsetLeft - this.el.offsetWidth
    var offsetbottom = document.body.clientHeight - this.el.offsetTop - this.el.offsetHeight
    return (
      <Host>
        <div class="content" onScroll={this.bindScroll.bind(this)}>
          <slot></slot>
        </div>
        <ul class="letter"
          style={{
            top: `${this.offset + offsettop}px`,
            bottom: `${this.offset + offsetbottom}px`,
            right: `${this.offset + offsetright}px`
          }}
        >
          {
            letters.map((letter, index) => {
              return (
                <li class={this.index == index ? 'active' : ''}>
                  <span {...{id: `${index}`}}>{letter}</span>
                </li>
              )
            })
          }
        </ul>
      </Host>
    );
  }
  bindScroll () {
    var content = this.el.shadowRoot.querySelector('.content')
    this.scroll.forEach((item, index) => {
      if (content.scrollTop >= item.offset && content.scrollTop < this.scroll[index + 1].offset) {
        console.log(item.letter)
        Array.from(this.$children).forEach(child => {
          (child as HTMLElement).classList.remove('active')
          if ((child as HTMLElement).getAttribute('letter') == item.letter) {
            (child as HTMLElement).classList.add('active')
          }
        })
      }
    })

  }
  renderScroll (letter) {
    this.scroll.forEach(item => {
      if (letter == item.letter) {
        this.el.shadowRoot.querySelector('.content').scrollTop = item.offset
      }
    })
  }
  bindTouch () {
    var hammer = new Hammer(this.el.shadowRoot.querySelector('.letter'))
    hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL })
    var start = 0;
    hammer.on('panstart', (e) => {
      start = e.center.y
      this.el.shadowRoot.querySelector('.letter').classList.add('touch')
    })
    hammer.on('pan', (e) => {
      var index = findCloseNum(this.pos, e.deltaY + start - this.$children[0].clientHeight)
      this.index = index
    })
    hammer.on('panend', () => {
      this.el.shadowRoot.querySelector('.letter').classList.remove('touch')
    })
  }
}
