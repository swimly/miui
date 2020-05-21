import { Component, Host, h, Element, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'hc-popover',
  styleUrl: 'hc-popover.scss',
  shadow: true,
})
export class HcPopover {
  @Prop() visible: boolean;
  @Prop() place: string = '';
  @Prop() masker: boolean;
  @Prop() offset: number = 10;
  @Element() el: HTMLElement;
  $handle;
  $content;
  $masker;
  pos;
  @Watch('visible')
  visibleHandle (v:boolean) {
    if (v) {
      this.$content.style.display = 'block'
      if (this.masker) {
        this.$masker.generate()
      }
      setTimeout(() => {
        this.el.setAttribute('visible', 'true')
      }, 30)
    } else {
      this.el.removeAttribute('visible')
      setTimeout(() => {
        if (this.$masker) {
          this.$masker.destory()
        }
        this.$content.style.display = 'none'
      }, 300)
    }
  }
  @Watch('place')
  placeHandle (v: string) {
    this.el.setAttribute('place', v)
    this.generate(v)
  }
  componentDidLoad () {
    var slot = this.el.shadowRoot.querySelectorAll('slot')
    this.$masker = this.el.shadowRoot.querySelector('hc-masker')
    this.$handle = slot[0]
    this.$content = this.el.shadowRoot.querySelector('.content')
    this.bindClick()
    var children = this.$content.assignedElements()
    children.forEach(child => {
      child.addEventListener('vclick', (e) => {
        this.destory()
        console.log(e)
      })
    })
  }
  render() {
    return (
      <Host>
        <hc-masker></hc-masker>
        <slot name="handle"></slot>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
  generate (v) {
    var place = v.split(',')
    var maxHeight = document.body.clientHeight
    var maxWidth = document.body.clientWidth;
    if (place[0] == 'top') {
      this.$content.style.top = 'auto'
      this.$content.style.bottom = `${maxHeight - this.pos.y + this.offset}px`;
    } else {
      this.$content.style.bottom = 'auto'
      this.$content.style.top = `${this.pos.y + this.pos.height + this.offset}px`
    }
    if (place[1] == 'left') {
      this.$content.style.right = 'auto'
      this.$content.style.left = `${this.pos.x}px`
    } else {
      this.$content.style.left = 'auto'
      this.$content.style.right = `${maxWidth - (this.pos.x + this.pos.width)}px`
    }
  }
  destory () {
    this.visible = false
  }
  bindClick () {
    document.body.addEventListener('click', () => {
      this.destory()
    })
    this.$handle.addEventListener('click', (e) => {
      e.stopPropagation()
      var place = this.place.split(',')
      var pos = e.target.getBoundingClientRect()
      this.pos = pos
      var maxHeight = document.body.clientHeight
      var maxWidth = document.body.clientWidth;
      if (pos.y < maxHeight - pos.y){
        place[0] = 'bottom'
      } else {
        place[0] = 'top'
      }
      if (pos.x > maxWidth - pos.x) {
        place[1] = 'right'
      } else {
        place[1] = 'left'
      }
      this.visible = true
      this.place = place.join(',')
    })
  }
}
