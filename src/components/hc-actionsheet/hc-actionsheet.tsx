import { Component, Host, h, Prop, Element, Method, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'hc-actionsheet',
  styleUrl: 'hc-actionsheet.scss',
  shadow: true,
})
export class HcActionsheet {
  @Prop() head: string = "请选择";
  @Prop() multiple: boolean;
  @Prop() value: string = '';
  @Prop() data: string = '';
  @Prop() command: boolean;
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter;
  @Event() vdone: EventEmitter;
  $drawer;
  $handle;
  $children;
  @Watch('value')
  valueHandle (v: string) {
    this.el.setAttribute('value', v)
  }
  componentDidLoad () {
    this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
  }
  render() {
    var computedData
    var handle = null
    if (!this.command && !this.data) {
      var data = []
      var children = this.el.children;
      var content = children[1];
      var items = Array.from(content.children);
      items.forEach(item => {
        data.push({
          label: item.innerHTML,
          value: item.getAttribute('value')
        })
      })
      handle = children[0].innerHTML
      computedData = data
    } else {
      computedData = JSON.parse(this.data)
    }
    var value = this.value ? this.value.split(',') : []
    console.log(value)
    return (
      <Host>
        <hc-actionsheet-handle innerHTML={handle} onClick={this.generate.bind(this, null)}></hc-actionsheet-handle>
        <hc-drawer place="down" rounder>
          <h2 class="title">{this.head}</h2>
          <div class="content">
            {
              computedData.map((item) => (
                <hc-actionsheet-item 
                  onClick={this.onClick.bind(this, item)} 
                  value={item.value}
                  active={value.indexOf(item.value) >= 0}
                >{item.label}</hc-actionsheet-item>
              ))
            }
          </div>
          <hc-row class="footer">
            <hc-col span={12}>
              <hc-button onClick={this.destory.bind(this)} type="info" rounder={true}>取消</hc-button>
            </hc-col>
            <hc-col align="right" span={12}>
            <hc-button onClick={this.destory.bind(this)} type="primary" rounder={true}>确定</hc-button>
            </hc-col>
          </hc-row>
        </hc-drawer>
      </Host>
    );
  }
  onClick (item) {
    var value = this.value.split(',')
    if (this.multiple) {
      var index = value.indexOf(item.value)
      if (index >= 0) {
        value.splice(index, 1)
      } else {
        if (value[0] == '') {
          value[0] = item.value
        } else {
          value.push(item.value)
        }
      }
    } else {
      value = [item.value]
    }
    this.value = value.join(',')
  }
  // 销毁
  @Method()
  async destory (e) {
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
      event: e
    })
  }
  // 初始化
  @Method()
  async generate (option: object = null) {
    console.log(option)
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
      actionsheet.generate()
      return actionsheet;
    } else {
      setTimeout(() => {
        this.$drawer.generate()
      }, 30)
    }
  }
}
