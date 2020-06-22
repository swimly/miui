import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-image',
  styleUrl: 'hc-image.scss',
  shadow: true,
})
export class HcImage {
  @Prop() src: string;
  @Prop() width: number;
  @Prop() height: number;
  @Prop() lazy: boolean;
  @Prop() fit: string = 'cover';
  @Prop() watermark: string;
  @Element() el: HTMLElement;
  $image
  scale;
  componentDidLoad () {
    this.$image = this.el.shadowRoot.querySelector('.core')
    if (this.src) {
      this.el.setAttribute('src', this.src)
      if (!this.lazy) {
        this.loading()
      } else {
        this.bindobverse()
      }
    }
    if (this.width) {
      this.el.setAttribute('width', `${this.width}`)
    }
    if (this.height) {
      this.el.setAttribute('height', `${this.height}`)
    }
  }
  render() {
    return (
      <Host style={{
        width: `${this.width}px`,
        height: `${this.height}px`
      }}>
        <img class="core" src={this.src} alt=""/>
        <slot></slot>
        <p class="watermark">{this.watermark}</p>
      </Host>
    );
  }
  loading () {
    var image = document.createElement('img')
    image.src = this.src
    var timer = !this.width && !this.height ? setInterval(() => {
      this.getSize(image)
      if (this.scale && this.width && this.height) {
        clearInterval(timer)
      }
    }, 10) : null
    image.addEventListener('load', () => {
      this.$image.style.opacity = `1`;
    })
  }
  getSize (image) {
    var width = image.width
    var height = image.height
    this.scale = width / height
    this.width = width > this.el.offsetWidth ? this.el.offsetWidth : width
    this.height = width > this.el.offsetTop ? this.el.offsetWidth / this.scale : height
  }
  bindobverse () {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry && entry.isIntersecting) {
          if (this.lazy) {
            this.loading()
          }
          io.unobserve(entry.target)
        }
      })
    })
    io.observe(this.el)
  }

}
