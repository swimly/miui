import { Component, Host, h, Prop, EventEmitter, Event, Watch, Method, Element } from '@stencil/core';
import {formatTime} from '../../utils/video'
@Component({
  tag: 'hc-video-controls',
  styleUrl: 'hc-video-controls.scss',
  shadow: true,
})
export class HcVideoControls {
  @Prop() play: boolean;
  @Prop() muted: boolean;
  @Prop() duration: number = 0;
  @Prop() current: number = 0;
  @Prop() forbidJump: boolean;
  @Prop() fullScreen: boolean;
  @Event() vplay: EventEmitter;
  @Event() vmute: EventEmitter;
  @Event() vprogress: EventEmitter;
  @Event() vfull: EventEmitter;
  @Element() el: HTMLElement
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
  @Watch('fullScreen')
  fullHandle (v: boolean) {
    this.vfull.emit(v)
  }
  componentWillLoad () {
    if (this.forbidJump) {
      this.el.setAttribute('forbid-jump', 'true')
    }
  }
  render() {
    return (
      <Host>
        <hc-row>
          <hc-col>
            <hc-switch active-color="#fff" id="play" custom icon-size={28} onVchange={this.onPlayChange.bind(this)} off-icon="play" active-icon="suspended"></hc-switch>
          </hc-col>
          <hc-col class="time" span={3}>
            {formatTime(this.current)}
          </hc-col>
          <hc-col flex={1}>
            <hc-slider readonly={this.forbidJump} size="mini" onVjump={this.onProgressChange.bind(this)} onVchange={this.onProgressChange.bind(this)} value={this.current / this.duration * 100}></hc-slider>
          </hc-col>
          <hc-col class="time" span={3} align="right">
            {formatTime(this.duration)}
          </hc-col>
          <hc-col>
            <hc-switch active-color="#fff" custom icon-size={22} onVchange={this.onVoiceChange.bind(this)} active-icon="sound-Mute" off-icon="sound-filling"></hc-switch>
          </hc-col>
          <hc-col>
            <hc-switch checked={this.fullScreen} active-color="#fff" custom icon-size={22} onVchange={this.onFullScreen.bind(this)} active-icon="move" off-icon="move"></hc-switch>
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
  onFullScreen (e) {
    this.fullScreen = e.detail.checked
  }
  @Method()
  async Playing (v) {
    this.play = v
    if (v) {
      this.el.shadowRoot.querySelector('#play').setAttribute('checked', 'true')
    } else {
      this.el.shadowRoot.querySelector('#play').removeAttribute('checked')
    }
  }
}
