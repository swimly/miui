import { Component, ComponentInterface, Host, h, Method, Prop, Watch, Element } from '@stencil/core';
@Component({
  tag: 'hc-toast',
  styleUrl: 'hc-toast.scss',
  shadow: true,
})
export class HcToast implements ComponentInterface {
  @Prop() icon: string;
  @Prop() iconSize: number = 48;
  @Prop() display: boolean = false;
  @Prop() duration: number = 3000;
  @Prop() place: string = 'center';
  @Prop() fill: string;
  @Prop() theme: string = 'dark';
  @Prop() content: string;
  @Prop() command: boolean;
  @Element() el:HTMLElement;
  $mask;
  @Watch('display')
  Dhandle (v: boolean) {
    if (v) {
      this.el.setAttribute('display', `${v}`)
    } else {
      this.el.removeAttribute('display')
    }
  }
  componentDidLoad () {
    this.el.style.display = 'none'
  }
  render() {
    return (
      <Host style={{backgroundColor: this.fill}}>
        <slot name="icon">
          <hc-icon name={this.icon} size={this.iconSize}></hc-icon>
        </slot>
        <slot>{this.content}</slot>
      </Host>
    );
  }
  onDisplay () {
    this.el.style.display = 'flex'
    setTimeout(() => {
      this.display = true
      this.$mask = document.createElement('hc-masker')
      this.$mask.command = true
      this.$mask.fill = 'transparent';
      this.$mask.clickable = false;
      document.body.appendChild(this.$mask)
      this.$mask.generate()
      if (this.duration) {
        setTimeout(() => {
          this.destory()
          this.$mask.destory()
        }, this.duration)
      }
    }, 30)
  }
  @Method()
  async destory () {
    this.display = false
    setTimeout(() => {
      this.el.style.display = 'none'
      if (this.command) {
        setTimeout(() => {
          document.body.removeChild(this.el)
        }, 300)
      }
    }, 300)
  }
  @Method()
  async generate (option: object = null) {
    if (option) {
      var toast = document.createElement('hc-toast')
      for (let key in option) {
        var prop;
        if (typeof option[key] == 'object') {
          prop = JSON.stringify(option[key])
        } else {
          prop = option[key]
        }
        toast.setAttribute(key, prop)
      }
      toast.setAttribute('command', 'true')
      document.body.appendChild(toast)
      setTimeout(() => {
        toast.generate()
      }, 100)
    } else {
      this.onDisplay()
    }
  }
}
