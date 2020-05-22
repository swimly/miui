import { Component, ComponentInterface, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-list',
  styleUrl: 'hc-list.scss',
  shadow: true,
})
export class HcList implements ComponentInterface {
  @Prop() size: string;
  @Element() el:HTMLElement;
  componentDidLoad () {
    var slots = this.el.shadowRoot.querySelector('slot')
    var children = slots.assignedElements()
    children.forEach((child) => {
      child.setAttribute('size', this.size)
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
