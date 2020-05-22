import { Component, Host, h, Element, Prop, Watch, Method, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-collapse-item',
  styleUrl: 'hc-collapse-item.scss',
  shadow: true,
})
export class HcCollapseItem {
  @Prop() visible: boolean;
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter;
  maxHeight: number;
  $content;
  @Watch('visible')
  visibleHandle (v:boolean) {
    this.vchange.emit({
      visible: v
    })
    this.renderToggle(v)
  }
  componentDidLoad () {
    this.maxHeight = this.el.shadowRoot.querySelector('.content').clientHeight
    this.$content = this.el.shadowRoot.querySelector('.content')
    this.renderToggle(this.visible)
  }
  render() {
    return (
      <Host>
        <hc-row valign="top" onClick={this.onClick.bind(this)}>
          <hc-col>

          </hc-col>
          <hc-col flex={1}>
            <slot name="title"></slot>
          </hc-col>
          <hc-col>
            <hc-icon name="arrow-down"></hc-icon>
          </hc-col>
        </hc-row>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
  onClick () {
    this.visible = !this.visible
  }
  @Method()
  async generate () {
    this.visible = true
  }
  @Method()
  async destory () {
    this.visible = false
  }
  renderToggle (v) {
    if (v) {
      this.$content.style.maxHeight = `${this.maxHeight}px`
      this.el.setAttribute('visible', 'true')
    } else {
      this.$content.style.maxHeight = `${0}px`
      this.el.removeAttribute('visible')
    }
  }
}
