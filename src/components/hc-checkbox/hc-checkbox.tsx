import { Component, ComponentInterface, Host, h, Prop, Watch, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-checkbox',
  styleUrl: 'hc-checkbox.scss',
  shadow: true,
})
export class HcCheckbox implements ComponentInterface {
  @Prop() name: string;
  @Prop() value: string;
  @Prop() checked: boolean;
  @Prop() icon: string = 'seleted';
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter;
  @Watch('checked')
  checkedHandle (v) {
    if (v) {
      this.el.setAttribute('checked', 'true')
    } else {
      this.el.removeAttribute('checked')
    }
    if (this.name) {
      // 获取该组选中的值
      var checkboxs = document.querySelectorAll('hc-checkbox')
      var select = []
      checkboxs.forEach((checkbox) => {
        if (checkbox.name == this.name && checkbox.checked) {
          select.push(checkbox.value)
        }
      })
      this.vchange.emit({
        value: select,
        current: this.el,
        currentValue: this.value
      })
    }
  }
  render() {
    return (
      <Host onClick={this.onClick.bind(this)}>
        <span class="frame">
          <slot name="icon">
            <hc-icon name={this.icon}></hc-icon>
          </slot>
        </span>
        <slot></slot>
      </Host>
    );
  }
  onClick () {
    this.checked = !this.checked
  }
}
