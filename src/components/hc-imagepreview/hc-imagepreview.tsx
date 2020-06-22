import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-imagepreview',
  styleUrl: 'hc-imagepreview.scss',
  shadow: true,
})
export class HcImagepreview {
  @Prop() data: string;
  @Element() el: HTMLElement;
  $swiper;
  $masker;
  componentDidLoad () {
    this.$swiper = this.el.shadowRoot.querySelector('hc-swiper')
    this.$masker = this.el.shadowRoot.querySelector('hc-masker')
    var children = Array.from(this.el.children)
    children.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.$swiper.current = index
        this.$masker.generate()
      })
    })
  }
  render() {
    var data = this.data ? this.data.split(',') : this.getData()
    var width = document.body.offsetWidth;
    var height = document.body.offsetHeight;
    return (
      <Host>
        <slot></slot>
        <hc-masker fill="rgba(0,0,0,0.95)">
          <hc-swiper height={height} width={width}>
            {
              data.map(item => {
                return (
                  <hc-swiper-item>
                    <hc-touch>
                      <img style={{width: `${width * 0.9}px`, height: `${height}px`, objectFit: 'contain'}} src={item} alt=""/>
                    </hc-touch>
                  </hc-swiper-item>
                )
              })
            }
          </hc-swiper>
        </hc-masker>
      </Host>
    );
  }
  getData () {
    var children = Array.from(this.el.children)
    var data = []
    children.forEach(item => {
      data.push(item.getAttribute('src'))
    })
    return data;
  }
}
