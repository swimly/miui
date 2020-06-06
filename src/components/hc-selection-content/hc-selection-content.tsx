import { Component, Host, h, Element, Event, EventEmitter, Prop, Watch, Method } from '@stencil/core';

@Component({
  tag: 'hc-selection-content',
  styleUrl: 'hc-selection-content.scss',
  shadow: true,
})
export class HcSelectionContent {
  @Prop() value: string;
  @Prop() loading: boolean;
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter;
  current;
  @Watch('value')
  valueHandle (v: string) {
    this.vchange.emit({
      value: v,
      label: this.current.label
    })
  }
  @Watch('loading')
  loadingHandle (v:boolean) {
    if (v) {
      this.el.setAttribute('loading', `true`)
    } else {
      this.el.removeAttribute('loading')
    }
  }
  componentDidLoad () {
    this.bindClick()
    var slot = this.el.shadowRoot.querySelector('slot')
    slot.addEventListener('slotchange', () => {
      this.bindClick()
    })
  }
  render() {
    return (
      <Host>
        <slot></slot>
        <div class="mask">
          <hc-icon name="loading" spin></hc-icon>
        </div>
      </Host>
    );
  }
  bindClick () {
    var children = Array.from(this.el.children)
    children.forEach(child => {
      child.addEventListener('vclick', (e) => {
        this.current = (e as CustomEvent).detail
        this.value = this.current.value
      })
    })
  }
  @Method()
  async Loading () {
    this.loading = true
  }
  @Method()
  async Loaded () {
    this.loading = false
  }
}
