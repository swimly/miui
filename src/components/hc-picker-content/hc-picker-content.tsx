import { Component, Host, h, Element, Prop, Event, EventEmitter} from '@stencil/core';
@Component({
  tag: 'hc-picker-content',
  styleUrl: 'hc-picker-content.scss',
  shadow: true,
})
export class HcPickerContent {
  @Prop() value: string;
  @Prop() data: string;
  @Element() el: HTMLElement;
  @Event() vdatachange: EventEmitter
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
