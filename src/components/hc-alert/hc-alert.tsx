import { Component, ComponentInterface, Host, h, Method, Element, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'hc-alert',
  styleUrl: 'hc-alert.scss',
  shadow: true,
})
export class HcAlert implements ComponentInterface {
  @Prop() visible: boolean;
  @Prop() masker: boolean = true;
  @Prop() clickable: boolean = true;
  @Prop() type: string = 'none';
  @Prop() content: string;
  @Prop() head:string;
  @Prop() footer: string;
  @Prop() command: boolean;
  @Prop() duration: number;
  @Element() el: HTMLElement
  $mask
  // 监听显示隐藏状态
  @Watch('visible')
  Dhandle (v: boolean) {
    if (v) {
      this.el.removeAttribute('style')
      setTimeout(() => {
        this.el.setAttribute('visible', `${v}`)
      }, 30)
    } else {
      var timer = this.type == 'none' ? 0 : 300
      this.el.removeAttribute('visible')
      setTimeout(() => {
        this.el.style.display = 'none'
      }, timer)
      if (this.command) {
        setTimeout(() => {
          document.body.removeChild(this.el)
        }, timer)
      }
    }
  }
  componentDidLoad () {
    this.el.style.display = 'none'
  }
  render() {
    var footer = this.footer ? eval(`(${this.footer})`) : []
    return (
      <Host>
        <div class="close">
          <slot name="close">
            <hc-icon onClick={this.destory.bind(this, {id: 'close'})} name="close"></hc-icon>
          </slot>
        </div>
        <h2 class="title">
          <slot name="title">{this.head}</slot>
        </h2>
        <div class="content">
          <slot>{this.content}</slot>
        </div>
        <div class="footer">
          <slot name="footer">
            <hc-row style={{
              marginLeft: `1rem`,
              marginRight: `1rem`,
              marginBottom: `0.5rem`
            }}>
              {
                footer.map((item, index) => {
                  return (
                    <hc-col flex={1}>
                      {this.renderButton(item, index, footer.length)}
                    </hc-col>
                  )
                })
              }
            </hc-row>
          </slot>
        </div>
      </Host>
    );
  }
  // 渲染底部按钮
  renderButton (item, index, length) {
    if (index < length - 1) {
      return (
        <hc-button onClick={this.destory.bind(this, item)} rounder type="info" style={{marginRight: `0.5rem`}}>{item.label}</hc-button>
      )
    } else {
      return (
        <hc-button onClick={this.destory.bind(this, item)} rounder type="primary" style={{marginLeft: `0.5rem`}}>{item.label}</hc-button>
      )
    }
  }
  // 显示
  onDisplay () {
    this.el.style.zIndex = `100`
    setTimeout(() => {
      this.visible = true
      this.$mask = document.createElement('hc-masker')
      this.$mask.command = true
      this.$mask.clickable = false;
      if (!this.masker) {
        this.$mask.fill = 'transparent';
      }
      document.body.appendChild(this.$mask)
      this.$mask.generate()
      if (this.clickable && this.masker) {
        this.$mask.addEventListener('vclick', () => {
          this.destory()
        })
      }
    }, 30)
    // 指定时间自动关闭
    if (this.duration && this.footer) {
      var fistbutton = this.el.shadowRoot.querySelectorAll('hc-button')[0]
      var time = this.duration / 1000
      var text = fistbutton.innerHTML
      fistbutton.innerHTML = `${text}(${time >= 10 ? time : '0' + time}S)`
      var timer = setInterval(() => {
        time -= 1;
        fistbutton.innerHTML = `${text}(${time >= 10 ? time : '0' + time}S)`
        if (time == 0) {
          clearInterval(timer)
          this.destory()
        }
      }, 1000)
    }
  }
  // 销毁
  @Method()
  async destory (data: object = null) {
    this.visible = false;
    this.$mask.destory()
    console.log(data)
  }
  // 初始化
  @Method()
  async generate (option: object = null) {
    if (option) {
      var alert = document.createElement('hc-alert')
      for (let key in option) {
        var prop;
        if (typeof option[key] == 'object') {
          prop = JSON.stringify(option[key])
        } else {
          prop = option[key]
        }
        alert.setAttribute(key, prop)
      }
      alert.setAttribute('command', 'true')
      document.body.appendChild(alert)
      alert.generate()
    } else {
      this.onDisplay()
    }
  }
}
