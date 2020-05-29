import { Component, ComponentInterface, Host, h, Prop, Element, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'hc-radio-group',
  styleUrl: 'hc-radio-group.scss',
  shadow: true,
})
export class HcRadioGroup implements ComponentInterface {
  @Prop() conner: boolean;
  @Prop() rounder: boolean;
  @Prop() value: string;
  @Prop() name: string;
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
    this.$children.forEach(child => {
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
      if (child.getAttribute('value') == this.value) {
        child.setAttribute('checked', `true`)
      }
      child.addEventListener('click', (e) => {
        this.$children.forEach(radio => {
          if (radio.getAttribute('value') !== child.getAttribute('value')) {
            radio.Check(false)
          }
        })
        this.value = e.target.getAttribute('value')
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
