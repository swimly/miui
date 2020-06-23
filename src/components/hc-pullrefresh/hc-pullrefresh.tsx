import { Component, Host, h, Element, Prop, Watch, Event, EventEmitter, Method } from '@stencil/core';
@Component({
  tag: 'hc-pullrefresh',
  styleUrl: 'hc-pullrefresh.scss',
  shadow: true,
})
export class HcPullrefresh {
  @Prop() offset: number = 0;
  @Prop() footer: boolean;
  @Prop() maxHeight: number = 60;
  @Element() el: HTMLElement;
  @Event() vrefresh: EventEmitter;
  @Event() vloading: EventEmitter;
  $content;
  $refresh;
  $loading;
  $scroll;
  startY = 0;
  moca = 0.8;
  canPull = false;
  dis = 0;
  maxScroll = 0;
  @Watch('offset')
  scrollHandle (v: number) {
    this.el.setAttribute('offset', `${v}`)
    this.canPull = v > 0 ? false : true;
    console.log(this.canPull)
  }
  @Watch('footer')
  footerHandle (v: boolean) {
    console.log(v)
  }
  componentDidLoad () {
    this.$content = this.el.shadowRoot.querySelector('.content')
    this.$refresh = this.el.shadowRoot.querySelector('.up')
    this.$loading = this.el.shadowRoot.querySelector('.down')
    var wrap = this.el.shadowRoot.querySelector('.wrap').clientHeight
    this.$scroll = this.el.shadowRoot.querySelector('.scroll');
    this.maxScroll = wrap - this.$scroll.clientHeight
  }
  render() {
    return (
      <Host
        {...{offset: this.offset}}
        onTouchstart={this.onTouchStart.bind(this)}
        onTouchmove={this.onTouchMove.bind(this)}
        onTouchend={this.onTouchEnd.bind(this)}
      >
        <div class="content">
          <hc-pullrefresh-indicate height={this.maxHeight} class="up"></hc-pullrefresh-indicate>
          <div class="scroll" onScroll={this.onScroll.bind(this)}>
            <div class="wrap">
              <slot></slot>
            </div>
          </div>
          <hc-pullrefresh-indicate icons="rising,falling,loading,success,cry" labels="上拉加载,松手加载,加载中,加载成功,加载失败" height={this.maxHeight} class="down"></hc-pullrefresh-indicate>
        </div>
      </Host>
    );
  }
  onScroll (e) {
    this.offset = e.target.scrollTop
    if (this.maxScroll == this.offset) {
      this.footer = true
    } else {
      this.footer = false
    }
  }
  onTouchStart (e) {
    this.$content.style.transition = '0s'
    this.startY = e.changedTouches[0].pageY
    if (this.offset == 0) {
      this.canPull = true
      this.$refresh.status = 0
      this.$loading.status = 0
    }
  }
  onTouchMove (e) {
    var touch = e.changedTouches[0]
    var deltaY = touch.pageY - this.startY
    this.dis = this.jump(deltaY)
    if (this.canPull && deltaY > 0) {
      // 下拉刷新
      e.preventDefault()
      this.$content.style.transform = `translate3d(0,${this.dis}px,0)`
      if (this.dis > this.maxHeight) {
        this.$refresh.status = 1
      }
    }
    if (this.footer && deltaY < 0) {
      // 上拉加载
      e.preventDefault()
      this.$content.style.transform = `translate3d(0,${this.dis}px,0)`
      if (this.dis < -this.maxHeight) {
        this.$loading.status = 1
      }
    }
  }
  onTouchEnd () {
    this.$content.style.transition = '0.3s'
    if (this.dis > this.maxHeight && this.canPull) {
      this.$refresh.status = 2
      this.$content.style.transform = `translate3d(0,${this.maxHeight}px,0)`
      this.vrefresh.emit()
    } else if (this.dis < -this.maxHeight && this.footer) {
      this.$loading.status = 2
      this.$content.style.transform = `translate3d(0,${-this.maxHeight}px,0)`
      this.vloading.emit()
    } else if (this.canPull || this.footer) {
      this.$content.style.transform = `translate3d(0,0,0)`
    }
    this.moca = 0.8
  }
  jump (current) {
    this.moca = this.moca > 0.4 ? this.moca - 0.08 : 0.4
    return current * this.moca
  }
  @Method()
  async RefreshSuccess () {
    this.$refresh.status = 3
    setTimeout(() => {
      this.$content.style.transform = `translate3d(0,0,0)`
      this.$scroll.scrollTop = 1;
    }, 1000)
  }
  @Method()
  async RefreshFailed () {
    this.$refresh.status = 4
    setTimeout(() => {
      this.$content.style.transform = `translate3d(0,0,0)`
      this.$scroll.scrollTop = 1;
    }, 1000)
  }
  @Method()
  async LoadingSuccess () {
    this.$loading.status = 3
    setTimeout(() => {
      this.$content.style.transform = `translate3d(0,0,0)`
      this.$scroll.scrollTop = this.maxScroll - 1
    }, 1000)
  }
  @Method()
  async LoadingFailed () {
    this.$loading.status = 4
    setTimeout(() => {
      this.$content.style.transform = `translate3d(0,0,0)`
      this.$scroll.scrollTop = this.maxScroll - 1
    }, 1000)
  }
}
