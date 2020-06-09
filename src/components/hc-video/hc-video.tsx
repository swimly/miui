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
  @Prop() showControls: boolean;
  @Prop() forbidJump: boolean = true;
  @Prop() fullScreen: boolean;
  @Element() el:HTMLElement;
  $video;
  $control;
  $timer;
  @Watch('fullScreen')
  fullHandle (v: boolean) {
    if (v) {
      this.el.setAttribute('full-screen', 'true')
    } else {
      this.el.removeAttribute('full-screen')
    }
  }
  @Watch('muted')
  mutedHandle (v: boolean) {
    this.bindMuted(v)
  }
  @Watch('play')
  playHandle (v: boolean) {
    this.bindPlay(v)
    this.el.shadowRoot.querySelector('hc-video-controls').Playing(v)
  }
  @Watch('duration')
  durationHandle (v: number) {
    this.el.shadowRoot.querySelector('hc-video-controls').setAttribute('duration', `${v}`)
  }
  @Watch('current')
  currentHandle (v: number) {
    this.el.shadowRoot.querySelector('hc-video-controls').setAttribute('current', `${v}`)
  }
  @Watch('showControls')
  showHandle (v: boolean) {
    if (v) {
      this.el.setAttribute('show-controls', 'true')
      this.el.shadowRoot.querySelector('.play').setAttribute('checked', 'true')
    } else {
      this.el.removeAttribute('show-controls')
      this.el.shadowRoot.querySelector('.play').removeAttribute('checked')
    }
    this.el.shadowRoot.querySelector('hc-video-controls').Playing(v)
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
  }
  render() {
    return (
      <Host onClick={this.onClick.bind(this)}>
        <hc-switch class="play" active-color="#fff" id="play" custom icon-size={52} onVchange={this.bindPlay.bind(this)} type="favorites" off-icon="play" active-icon="suspended"></hc-switch>
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
          {...{
            'forbid-jump': this.forbidJump
          }}
          onVprogress={this.onProgress.bind(this)}
          onVmute={this.onMute.bind(this)}
          onVplay={this.onPlay.bind(this)}
          onVfull={this.onFullScreen.bind(this)}
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
    console.log(e.detail, this.duration)
    var bili = e.detail.value.bili / 100
    var time = this.duration * bili
    this.el.shadowRoot.querySelector('video').currentTime = time
    this.play = true
  }
  onMute (e) {
    this.muted = e.detail.value
  }
  onPlay (e) {
    this.play = e.detail.value
  }
  bindPlay (v) {
    var b = typeof v == 'object' ? v.detail.checked : v
    if (b) {
      this.$video.play()
      this.showControls = true
      setTimeout(() => {
        this.el.shadowRoot.querySelector('hc-video-controls').style.transform = `translateY(100%)`;
      }, 3000)
    } else {
      this.$video.pause();
      this.showControls = false
    }
  }
  bindMuted (v) {
    if (v) {
      this.$video.muted = true
    } else {
      this.$video.muted = false;
    }
  }
  onClick () {
    this.el.shadowRoot.querySelector('hc-video-controls').style.transform = `translateY(0)`;
    setTimeout(() => {
      this.el.shadowRoot.querySelector('hc-video-controls').style.transform = `translateY(100%)`;
    }, 3000)
  }
  onFullScreen (e) {
    this.fullScreen = e.detail
  }
}
