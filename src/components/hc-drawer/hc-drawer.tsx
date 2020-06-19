import { Component, ComponentInterface, Host, h, Method, Prop, Element, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-drawer',
  styleUrl: 'hc-drawer.scss',
  shadow: true,
})
export class HcDrawer implements ComponentInterface {
  @Prop() place: string = 'down';
  @Prop() display: boolean;
  @Prop() clickable: boolean = true;
  @Prop() masker: boolean = true;
  @Prop() content: string;
  @Prop() rounder: boolean = true;
  @Prop() command: boolean;
  @Element() el: HTMLElement;
  @Event() vshow: EventEmitter;
  $mask;
  @Watch('display')
  Dhandle (v: boolean) {
    if (v) {
      this.el.setAttribute('display', `${v}`)
    } else {
      this.el.removeAttribute('display')
      if (this.command) {
        setTimeout(() => {
          document.body.removeChild(this.el)
        }, 300)
      }
    }
  }
  componentDidLoad () {
    this.$mask = this.el.shadowRoot.querySelector('hc-masker')
  }
  render() {
    return (
      <Host {...{
        place: this.place,
        clickable: this.clickable,
        masker: this.masker,
        rounder: this.rounder,
        command: this.command
      }}>
        <slot>
          <div innerHTML={this.content} class="content"></div>
        </slot>
      </Host>
    );
  }
  @Method()
  async onDisplay () {
    this.renderMasker()
    this.el.style.display = 'block'
    this.el.style.transition = '0.3s'
    setTimeout(() => {
      this.display = true
    }, 30)
  }
  @Method()
  async destory () {
    this.display = false
    this.$mask.destory()
    setTimeout(() => {
      this.el.style.display = 'none'
      this.el.style.transition = '0s'
    }, 300)
  }
  renderMasker () {
    var has = document.querySelector('hc-masker')
    if (has) {
      this.$mask = has
    } else {
      this.$mask = document.createElement('hc-masker')
      if (!this.masker) {
        this.$mask.setAttribute('fill', 'rgba(0,0,0,0)')
      }
      document.body.appendChild(this.$mask)
    }
    this.$mask.generate()
    if (this.clickable) {
      this.$mask.addEventListener('click', () => {
        this.destory()
      })
    }
  }
  @Method()
  async generate (option: object = null) {
    if (option) {
    } else {
      this.onDisplay()
    }
  }
}
