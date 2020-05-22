import { Component, ComponentInterface, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-collapse',
  styleUrl: 'hc-collapse.scss',
  shadow: true,
})
export class HcCollapse implements ComponentInterface {
  @Prop() accordion: boolean;
  @Element() el:HTMLElement
  componentDidLoad () {
    var slots = this.el.shadowRoot.querySelector('slot')
    var childen = slots.assignedElements()
    childen.forEach((item) => {
      item.addEventListener('vchange', () => {
        if (this.accordion) {
          childen.forEach(c => {
            c.removeAttribute('visible')
          })
        }
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
