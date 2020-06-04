import { r as registerInstance, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcVideoCss = ":host{display:block}:host video{width:100%}";

class HcVideo {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.preload = 'metadata';
        this.autoplay = false;
        this.play = false;
        this.loaded = 0;
        this.duration = 0;
        this.current = 0;
        this.controls = false;
    }
    mutedHandle(v) {
        this.bindMuted(v);
    }
    playHandle(v) {
        this.bindPlay(v);
    }
    durationHandle(v) {
        this.el.shadowRoot.querySelector('hc-video-controls').setAttribute('duration', `${v}`);
    }
    currentHandle(v) {
        this.el.shadowRoot.querySelector('hc-video-controls').setAttribute('current', `${v}`);
    }
    componentDidLoad() {
        this.$video = this.el.shadowRoot.querySelector('video');
        this.$control = this.el.shadowRoot.querySelector('hc-video-controls');
        if (this.autoplay) {
            this.play = true;
        }
        if (this.muted) {
            this.muted = true;
        }
        console.log('didloaded');
    }
    render() {
        return (h(Host, null, h("video", { onProgress: this.onPlaying.bind(this), onTimeUpdate: this.onTimeUpdate.bind(this), onDurationChange: this.onDurationChange.bind(this), onLoadedMetaData: this.onLoadedMetaData.bind(this), onCanPlay: this.onCanPlay.bind(this), onEnded: this.onEnded.bind(this), preload: this.preload, poster: this.poster, "webkit-playsinline": true, playsInline: true, "x5-video-player-type": "h5-page", src: this.src }), h("hc-video-controls", { onVprogress: this.onProgress.bind(this), onVmute: this.onMute.bind(this), onVplay: this.onPlay.bind(this) })));
    }
    onEnded() {
        console.log('onended', this.$video);
    }
    onCanPlay() {
        console.log('oncanplay');
        this.duration = this.el.shadowRoot.querySelector('video').duration;
    }
    onLoadedMetaData(e) {
        console.log('onloadedmetadata', this.$video, e);
    }
    onDurationChange() {
        console.log('ondurationchange', this.$video);
    }
    onTimeUpdate() {
        console.log('timeupdate');
        this.current = this.el.shadowRoot.querySelector('video').currentTime;
    }
    onPlaying() {
        console.log('onProgress', this.$video);
        // this.loaded = Math.round((this.$video.buffered.end(0) / this.duration)*100)
    }
    onProgress(e) {
        console.log(e.detail.value);
    }
    onMute(e) {
        this.muted = e.detail.value;
    }
    onPlay(e) {
        this.play = e.detail.value;
    }
    bindPlay(v) {
        if (v) {
            this.$video.play();
        }
        else {
            this.$video.pause();
        }
    }
    bindMuted(v) {
        if (v) {
            this.$video.muted = true;
        }
        else {
            this.$video.muted = false;
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "muted": ["mutedHandle"],
        "play": ["playHandle"],
        "duration": ["durationHandle"],
        "current": ["currentHandle"]
    }; }
}
HcVideo.style = hcVideoCss;

export { HcVideo as hc_video };
