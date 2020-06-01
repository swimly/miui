import { Component, Host, h, Prop, Element, Method, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-actionsheet',
  styleUrl: 'hc-actionsheet.scss',
  shadow: true,
})
export class HcActionsheet {
  @Prop() head: string = "请选择";
  @Prop() mode: string = 'single'; //multiple
  @Prop() value: string = '';
  @Prop() content: string = '[]';
  @Prop() command: boolean;
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter;
  @Event() vdone: EventEmitter;
  $drawer;
  $handle;
  $children;
  componentDidLoad () {
    this.$handle = this.el.shadowRoot.querySelector('slot')
    this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
    var slot = this.el.shadowRoot.querySelectorAll('slot')[1]
    if (slot.assignedElements()[0]) {
      this.$children = slot.assignedElements()[0].querySelectorAll('hc-actionsheet-item')
      this.renderActive()
      this.bindChange()
    } else {
      this.$children = this.el.shadowRoot.querySelectorAll('hc-actionsheet-item')
    }
    this.bindClick()
  }
  render() {
    var content = eval(`(${this.content})`);
    var value = this.value.split(',')
    return (
      <Host>
        <slot name="handle"></slot>
        <hc-drawer place="down" rounder>
          <h2 class="title">{this.head}</h2>
          <div class="wrap">
            <slot>
              <hc-actionsheet-content>
                {
                  content.map((item) => {
                    return (
                      <hc-actionsheet-item {...{
                        active: value.indexOf(item.value) >= 0
                      }} onClick={this.onToggle.bind(this, item)} value={item.value}>{item.label}</hc-actionsheet-item>
                    )
                  })
                }
              </hc-actionsheet-content>
            </slot>
          </div>
          <hc-row class="footer">
            <hc-col span={12}>
              <hc-button onClick={this.destory.bind(this, '取消')} type="info" rounder={true}>取消</hc-button>
            </hc-col>
            <hc-col align="right" span={12}>
            <hc-button onClick={this.destory.bind(this, '确定')} type="primary" rounder={true}>确定</hc-button>
            </hc-col>
          </hc-row>
        </hc-drawer>
      </Host>
    );
  }
  // 渲染当前选中
  renderActive () {
    var value = this.value.split(',')
    this.$children.forEach(item => {
      if (value.indexOf(item.getAttribute('value')) >= 0) {
        item.setAttribute('active', 'true')
      }
    })
  }
  // handle点击展开
  bindClick () {
    this.$handle.addEventListener('click', () => {
      this.generate()
    })
  }
  // 销毁
  @Method()
  async destory (label) {
    this.$drawer.destory()
    setTimeout(() => {
      if (this.command) {
        setTimeout(() => {
          document.body.removeChild(this.el)
        }, 300)
      }
    }, 300)
    this.vdone.emit({
      value: this.value.split(','),
      valuestring: this.value,
      action: label
    })
  }
  // 指令模式点击切换
  onToggle (item) {
    var value = this.value.split(',')
    if (this.mode == 'single') {
      value = [item.value]
    } else {
      var i = value.indexOf(item.value)
      if (i >= 0) {
        value.splice(i, 1)
      } else {
        value.push(item.value)
      }
    }
    this.$children.forEach(child => {
      if (value.indexOf(child.getAttribute('value')) >= 0) {
        child.setAttribute('active', `true`)
      } else {
        child.removeAttribute('active')
      }
    })
    this.value = value.join(',')
  }
  // 普通模式点击切换
  bindChange () {
    var value = this.value.split(',')
    this.$children.forEach((child) => {
      child.addEventListener('click', () => {
        var s = child.getAttribute('value')
        if (this.mode == 'single') {
          this.$children.forEach(c => {
            c.removeAttribute('active')
          })
          value = [s]
          child.setAttribute('active', 'true')
        } else {
          if (child.getAttribute('active')) {
            child.removeAttribute('active')
            var i = value.indexOf(s)
            value.splice(i, 1)
          } else {
            child.setAttribute('active', 'true')
            value.push(s)
          }
        }
        this.value = value.join(',')
        this.vchange.emit({
          value: value,
          valueString: value.join(',')
        })
      })
    })
  }
  // 初始化
  @Method()
  async generate (option: object = null) {
    if (option) {
      var actionsheet = document.createElement('hc-actionsheet')
      for (let key in option) {
        var prop;
        if (typeof option[key] !== 'string') {
          prop = JSON.stringify(option[key])
        } else {
          prop = option[key]
        }
        actionsheet.setAttribute(key, prop)
      }
      actionsheet.setAttribute('command', 'true')
      document.body.appendChild(actionsheet)
      setTimeout(() => {
        actionsheet.generate()
      }, 100)
      return actionsheet;
    } else {
      this.$drawer.generate()
    }
  }
}
