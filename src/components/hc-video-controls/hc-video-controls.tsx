import { Component, Host, h, Prop, EventEmitter, Event, Watch } from '@stencil/core';
import {formatTime} from '../../utils/video'
@Component({
  tag: 'hc-video-controls',
  styleUrl: 'hc-video-controls.scss',
  shadow: true,
})
export class HcVideoControls {
  @Prop() play: boolean;
  @Prop() muted: boolean;
  @Prop() duration: number;
  @Prop() current: number = 0;
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
            <hc-switch icon-size={28} onVchange={this.onPlayChange.bind(this)} type="favorites" off-icon="play" active-icon="suspended"></hc-switch>
          </hc-col>
          <hc-col class="time" span={3}>
            {formatTime(this.current)}
          </hc-col>
          <hc-col flex={1}>
            <hc-slider size="mini" onVchange={this.onProgressChange.bind(this)} value={this.current / this.duration * 100}></hc-slider>
          </hc-col>
          <hc-col class="time" span={3} align="right">
            {formatTime(this.duration)}
          </hc-col>
          <hc-col>
            <hc-switch icon-size={28} onVchange={this.onVoiceChange.bind(this)} type="favorites" active-icon="sound-Mute" off-icon="sound-filling"></hc-switch>
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
