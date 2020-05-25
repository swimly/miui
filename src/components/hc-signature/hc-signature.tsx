import { Component, Host, h, Prop, Element, EventEmitter, Event, Method } from '@stencil/core';
import SignaturePad from '../../utils/signature'
@Component({
  tag: 'hc-signature',
  styleUrl: 'hc-signature.scss',
  shadow: true,
})
export class HcSelect {
  @Prop() background: string;
  @Prop() penColor: string;
  @Prop() penWeight: number = 0.6;
  @Prop() file: string = 'image/jpeg'
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter;
  $signature;
  signature;
  data;
  componentDidLoad () {
    this.$signature = this.el.shadowRoot.querySelector('#canvas') as HTMLElement;
    this.$signature.setAttribute('width', `${this.el.clientWidth}px`)
    this.signature = new SignaturePad(this.$signature, {
      backgroundColor: this.background,
      penColor: this.penColor,
      velocityFilterWeight: this.penWeight,
      minWidth: 0.5,
      maxWidth: 2.5,
      throttle: 16, // max x milli seconds on event update, OBS! this introduces lag for event update
      minPointDistance: 3,
      onEnd: () => {
        this.data = this.signature.toDataURL()
        this.vchange.emit({
          data: this.data
        })
      }
    })
  }
  render() {
    return (
      <Host>
        <canvas id="canvas"></canvas>
        <slot></slot>
      </Host>
    );
  }
  @Method()
  async fetchData () {
    return this.data
  }
  @Method()
  async clear () {
    this.signature.clear()
  }
}
