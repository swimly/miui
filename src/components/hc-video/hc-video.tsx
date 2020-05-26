import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';
@Component({
  tag: 'hc-video',
  styleUrl: 'hc-video.scss',
  shadow: true,
})
export class HcVideo {
  @Prop() src: string;
  @Prop() preload: string = 'metadata';
  @Prop() autoplay: boolean = false;
  @Prop() play: boolean = false;
  @Prop() network: number;
  @Prop() loaded: number = 0;
  @Prop() poster: string;
  @Prop() duration: number = 0;
  @Prop() current: number = 0;
  @Prop() muted: boolean;
  @Prop() height: number;
  @Prop() controls: boolean = false;
  @Element() el:HTMLElement;
  $video;
  $control;
  @Watch('muted')
  mutedHandle (v: boolean) {
    this.bindMuted(v)
  }
  @Watch('play')
  playHandle (v: boolean) {
    this.bindPlay(v)
  }
  @Watch('duration')
  durationHandle (v: number) {
    this.el.shadowRoot.querySelector('hc-video-controls').setAttribute('duration', `${v}`)
  }
  @Watch('current')
  currentHandle (v: number) {
    this.el.shadowRoot.querySelector('hc-video-controls').setAttribute('current', `${v}`)
  }
  componentDidLoad () {
    this.$video = this.el.shadowRoot.querySelector('video')
    this.$control = this.el.shadowRoot.querySelector('hc-video-controls')
    if (this.autoplay) {
      this.play = true
    }
    if (this.muted) {
      this.muted = true
    }
    console.log('didloaded')
  }
  render() {
    return (
      <Host>
        <video
          onProgress={this.onPlaying.bind(this)}
          onTimeUpdate={this.onTimeUpdate.bind(this)}
          onDurationChange={this.onDurationChange.bind(this)}
          onLoadedMetaData={this.onLoadedMetaData.bind(this)}
          onCanPlay={this.onCanPlay.bind(this)}
          onEnded={this.onEnded.bind(this)}
          preload={this.preload}
          poster={this.poster}
          webkit-playsinline
          playsInline
          x5-video-player-type="h5-page"
          src={this.src}
        ></video>
        <hc-video-controls 
          onVprogress={this.onProgress.bind(this)}
          onVmute={this.onMute.bind(this)}
          onVplay={this.onPlay.bind(this)}
        ></hc-video-controls>
      </Host>
    );
  }
  onEnded () {
    console.log('onended', this.$video)
  }
  onCanPlay () {
    console.log('oncanplay')
    this.duration = this.el.shadowRoot.querySelector('video').duration
  }
  onLoadedMetaData (e) {
    console.log('onloadedmetadata', this.$video, e)
  }
  onDurationChange () {
    console.log('ondurationchange', this.$video)
  }
  onTimeUpdate () {
    console.log('timeupdate')
    this.current = this.el.shadowRoot.querySelector('video').currentTime
  }
  onPlaying () {
    console.log('onProgress', this.$video)
    // this.loaded = Math.round((this.$video.buffered.end(0) / this.duration)*100)
  }
  onProgress (e) {
    console.log(e.detail.value)
  }
  onMute (e) {
    this.muted = e.detail.value
  }
  onPlay (e) {
    this.play = e.detail.value
  }
  bindPlay (v) {
    if (v) {
      this.$video.play()
    } else {
      this.$video.pause();
    }
  }
  bindMuted (v) {
    if (v) {
      this.$video.muted = true
    } else {
      this.$video.muted = false;
    }
  }
}
