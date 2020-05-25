import { Component, Host, h, Prop, EventEmitter, Event, Watch } from '@stencil/core';

@Component({
  tag: 'hc-video-controls',
  styleUrl: 'hc-video-controls.scss',
  shadow: true,
})
export class HcVideoControls {
  @Prop() play: boolean;
  @Prop() muted: boolean;
  @Prop() duration: number;
  @Prop() current: number;
  @Event() vplay: EventEmitter;
  @Event() vmute: EventEmitter;
  @Event() vprogress: EventEmitter;
  @Watch('play')
  playHandle (v: boolean) {
    this.vplay.emit({
      value: v
    })
  }
  @Watch('muted')
  mutedHandle (v: boolean) {
    this.vmute.emit({
      value: v
    })
  }
  render() {
    return (
      <Host>
        <hc-row>
          <hc-col>
            <hc-switch onVchange={this.onPlayChange.bind(this)} type="favorites" off-icon="play" active-icon="suspended"></hc-switch>
          </hc-col>
          <hc-col>
            {this.duration}
          </hc-col>
          <hc-col flex={1}>
            <hc-slider onVchange={this.onProgressChange.bind(this)} value={23}></hc-slider>
          </hc-col>
          <hc-col>
            <hc-switch onVchange={this.onVoiceChange.bind(this)} type="favorites" active-icon="sound-Mute" off-icon="sound-filling"></hc-switch>
          </hc-col>
        </hc-row>
        <slot></slot>
      </Host>
    );
  }
  onPlayChange (e) {
    this.play = e.detail.checked
  }
  onVoiceChange (e) {
    this.muted = e.detail.checked
  }
  onProgressChange (e) {
    this.vprogress.emit({
      value: e.detail
    })
  }
}
