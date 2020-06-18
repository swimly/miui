import { Component, Host, h, Element, Prop, Event, EventEmitter, Watch} from '@stencil/core';
@Component({
  tag: 'hc-picker-content',
  styleUrl: 'hc-picker-content.scss',
  shadow: true,
})
export class HcPickerContent {
  @Prop() value: string;
  @Element() el: HTMLElement;
  @Event() vvaluechange: EventEmitter
  @Watch('value')
  valueHandle (v: string) {
    this.el.setAttribute('value', v)
    this.vvaluechange.emit({
      value: v
    })
  }
  componentDidLoad () {
    var value = []
    var slot = this.el.shadowRoot.querySelector('slot')
    var children = slot.assignedElements()
    children.forEach(child => {
      value.push(child.getAttribute('value'))
      child.addEventListener('vscrollend', (e) => {
        var detail = (e as CustomEvent).detail
        value[detail.index] = detail.label
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
