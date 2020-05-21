import { Component, ComponentInterface, Host, h, Prop, Element, Watch } from '@stencil/core';
@Component({
  tag: 'hc-image',
  styleUrl: 'hc-image.scss',
  shadow: true,
})
export class HcImage implements ComponentInterface {
  @Prop() src: string;
  @Prop() lazy: boolean = true;
  @Prop() width: number;
  @Prop() height: number;
  @Prop() radius: number;
  @Prop() status: number = 0;
  @Prop() fit: string = 'cover'
  @Prop() watermark: string;
  @Element() el:HTMLElement;
  loadImage(image) {
    image.src = this.src
    var width = this.el.offsetWidth
    image.onload = () => {
      var scale = image.width / image.height
      this.width = image.width < width ? image.width : width
      this.height = this.width / scale
      this.status = 1
    }
    image.onerror = () => {
      this.status = -1
    }
  }
  componentDidLoad () {
    // this.el.setAttribute('status', `${this.status}`)
    const image = this.el.shadowRoot.querySelector('.core') as HTMLElement;
    if (!this.lazy) {
      this.loadImage(image)
    } else {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry && entry.isIntersecting) {
            if (this.lazy) {
              this.loadImage(entry.target)
            }
            io.unobserve(entry.target)
          }
        })
      })
      io.observe(image)
    }
  }
  @Watch('status')
  statusHandle (value: number) {
    this.el.setAttribute('status', `${value}`)
  }
  render() {
    return (
      <Host style={{width: `${this.width}px`, height: `${this.height}px`, borderRadius: `${this.radius}px`}}>
        <slot>
          <img style={{objectFit: this.fit, width: `${this.width}px`, height: `${this.height}px`}} class="core" alt=""/>
          <p class="watermark">{this.watermark}</p>
        </slot>
        <slot name="loading">
          <hc-icon size={32} name="loading" spin={true}></hc-icon>
          <span>加载中</span>
        </slot>
        <slot name="error">
          <hc-icon size={38} name="cry"></hc-icon>
          <span>加载失败</span>
        </slot>
      </Host>
    );
  }

}
