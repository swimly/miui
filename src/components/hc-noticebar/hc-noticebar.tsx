import { Component, Host, h, Element, Prop, EventEmitter, Event, Method } from '@stencil/core';

@Component({
  tag: 'hc-noticebar',
  styleUrl: 'hc-noticebar.scss',
  shadow: true,
})
export class HcNoticebar {
  @Prop() speed: number = 80;
  @Prop() icon: string;
  @Prop() closable: boolean;
  @Prop() scrollable: boolean = true;
  @Prop() color: string;
  @Element() el:HTMLElement;
  @Event() vhide: EventEmitter;
  $wrap;
  width;
  duration;
  timer;
  componentDidLoad () {
    this.$wrap = this.el.shadowRoot.querySelector('.wrap')
    this.width = this.$wrap.clientWidth
    this.duration = Math.round(this.width / this.speed)
    if (this.color) {
      console.log(this.el.querySelector(':after'))
    }
    if (this.scrollable && this.width > this.el.shadowRoot.querySelector('.content').clientWidth) {
      this.marquee(this)
    }
  }
  render() {
    return (
      <Host style={{
        color: this.color
      }}>
        <div class="bg" style={{
          backgroundColor: this.color
        }}></div>
        <slot name="icon">
          <hc-icon name={this.icon}></hc-icon>
        </slot>
        <div class="content">
          <div class="wrap" style={{
            position: this.scrollable ? 'absolute' : 'static',
            width: this.scrollable ? 'auto' : '100%'
          }}>
            <slot></slot>
          </div>
        </div>
        <div class="close" onClick={this.destory.bind(this)}>
          <slot name="close">
            {this.renderClose()}
          </slot>
        </div>
      </Host>
    );
  }
  renderClose () {
    if (this.closable) {
      return (
        <hc-icon name="close"></hc-icon>
      )
    }
  }
  @Method()
  async destory () {
    this.el.style.display = 'none'
  }
  marquee (_this) {
    _this.$wrap.style.transform = `translate3d(${-_this.width}px, 0, 0)`
    _this.$wrap.style.transitionDuration = `${_this.duration}s`
    _this.$wrap.addEventListener('transitionend', () => {
      _this.$wrap.style.transform = `translate3d(${0}px, 0, 0)`
      _this.$wrap.style.transitionDuration = `${0}s`
      setTimeout(() => {
        _this.$wrap.style.transform = `translate3d(${-_this.width}px, 0, 0)`
        _this.$wrap.style.transitionDuration = `${_this.duration}s`
      }, 10)
    })
  }
}
