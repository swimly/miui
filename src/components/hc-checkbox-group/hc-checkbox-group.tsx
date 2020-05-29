import { Component, ComponentInterface, Host, h, Prop, Event, EventEmitter, Element, Watch } from '@stencil/core';

@Component({
  tag: 'hc-checkbox-group',
  styleUrl: 'hc-checkbox-group.scss',
  shadow: true,
})
export class HcCheckboxGroup implements ComponentInterface {

  @Prop() conner: boolean;
  @Prop() rounder: boolean;
  @Prop() value: string;
  @Prop() name: string = 'checkbox';
  @Prop() type: string;
  @Prop() vertical: boolean;
  @Prop() reverse: boolean;
  @Prop() subline: boolean;
  @Event() vchange: EventEmitter;
  $children;
  @Element() el: HTMLElement;
  @Watch('value')
  valueHandle (v: string) {
    this.vchange.emit({
      value: v
    })
    this.el.setAttribute('value', v)
  }
  componentDidLoad () {
    var slot = this.el.shadowRoot.querySelector('slot')
    this.$children = slot.assignedElements()
    if (this.vertical) {
      this.el.setAttribute('vertical', `${this.vertical}`)
    }
    var value = this.value.split(',')
    this.$children.forEach(child => {
      if (this.name) {
        child.setAttribute('name', `${this.name}`)
      }
      if (this.vertical) {
        child.setAttribute('vertical', `${this.vertical}`)
      }
      if (this.reverse) {
        child.setAttribute('reverse', `${this.reverse}`)
      }
      if (this.conner) {
        child.setAttribute('conner', `${this.conner}`)
      }
      if (this.rounder) {
        child.setAttribute('rounder', `${this.rounder}`)
      }
      if (this.type) {
        child.setAttribute('type', `${this.type}`)
      }
      if (this.subline) {
        child.setAttribute('subline', `${this.subline}`)
      }
      if (value.indexOf(child.getAttribute('value')) >= 0) {
        child.setAttribute('checked', `true`)
      }
      child.addEventListener('vchange', (e) => {
        if (e.detail.checked) {
          value.push(e.detail.value)
        } else {
          console.log('000')
          var i = value.indexOf(e.detail.value)
          value.splice(i, 1)
        }
        this.value = value.join(',')
      })
    })
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
