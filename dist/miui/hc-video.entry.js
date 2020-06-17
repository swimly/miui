import { r as registerInstance, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcVideoCss = ":host{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;transition:0.3s}:host video{width:100%;vertical-align:top}:host .play{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);color:var(--color-text-white);z-index:10;transition:0.3s}:host hc-video-controls{position:absolute;left:0;bottom:0;width:100%;transition:0.3s;transform:translateY(100%)}:host([show-controls]) hc-video-controls{transform:translateY(0)}:host([show-controls]) .play{transform:translate(-50%, -50%) scale(2);opacity:0;z-index:-1}:host([full-screen]){position:fixed;top:0;left:0;bottom:0;right:0;z-index:100;background:var(--background-color-black)}";

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
        this.forbidJump = true;
    }
    fullHandle(v) {
        if (v) {
            this.el.setAttribute('full-screen', 'true');
        }
        else {
            this.el.removeAttribute('full-screen');
        }
    }
    mutedHandle(v) {
        this.bindMuted(v);
    }
    playHandle(v) {
        this.bindPlay(v);
        this.el.shadowRoot.querySelector('hc-video-controls').Playing(v);
    }
    durationHandle(v) {
        this.el.shadowRoot.querySelector('hc-video-controls').setAttribute('duration', `${v}`);
    }
    currentHandle(v) {
        this.el.shadowRoot.querySelector('hc-video-controls').setAttribute('current', `${v}`);
    }
    showHandle(v) {
        if (v) {
            this.el.setAttribute('show-controls', 'true');
            this.el.shadowRoot.querySelector('.play').setAttribute('checked', 'true');
        }
        else {
            this.el.removeAttribute('show-controls');
            this.el.shadowRoot.querySelector('.play').removeAttribute('checked');
        }
        this.el.shadowRoot.querySelector('hc-video-controls').Playing(v);
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
    }
    render() {
        return (h(Host, { onClick: this.onClick.bind(this) }, h("hc-switch", { class: "play", "active-color": "#fff", id: "play", custom: true, "icon-size": 52, onVchange: this.bindPlay.bind(this), type: "favorites", "off-icon": "play", "active-icon": "suspended" }), h("video", { onProgress: this.onPlaying.bind(this), onTimeUpdate: this.onTimeUpdate.bind(this), onDurationChange: this.onDurationChange.bind(this), onLoadedMetaData: this.onLoadedMetaData.bind(this), onCanPlay: this.onCanPlay.bind(this), onEnded: this.onEnded.bind(this), preload: this.preload, poster: this.poster, "webkit-playsinline": true, playsInline: true, "x5-video-player-type": "h5-page", src: this.src }), h("hc-video-controls", Object.assign({}, {
            'forbid-jump': this.forbidJump
        }, { onVprogress: this.onProgress.bind(this), onVmute: this.onMute.bind(this), onVplay: this.onPlay.bind(this), onVfull: this.onFullScreen.bind(this) }))));
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
        console.log(e.detail, this.duration);
        var bili = e.detail.value.bili / 100;
        var time = this.duration * bili;
        this.el.shadowRoot.querySelector('video').currentTime = time;
        this.play = true;
    }
    onMute(e) {
        this.muted = e.detail.value;
    }
    onPlay(e) {
        this.play = e.detail.value;
    }
    bindPlay(v) {
        var b = typeof v == 'object' ? v.detail.checked : v;
        if (b) {
            this.$video.play();
            this.showControls = true;
            setTimeout(() => {
                this.el.shadowRoot.querySelector('hc-video-controls').style.transform = `translateY(100%)`;
            }, 3000);
        }
        else {
            this.$video.pause();
            this.showControls = false;
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
    onClick() {
        this.el.shadowRoot.querySelector('hc-video-controls').style.transform = `translateY(0)`;
        setTimeout(() => {
            this.el.shadowRoot.querySelector('hc-video-controls').style.transform = `translateY(100%)`;
        }, 3000);
    }
    onFullScreen(e) {
        this.fullScreen = e.detail;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "fullScreen": ["fullHandle"],
        "muted": ["mutedHandle"],
        "play": ["playHandle"],
        "duration": ["durationHandle"],
        "current": ["currentHandle"],
        "showControls": ["showHandle"]
    }; }
}
HcVideo.style = hcVideoCss;

export { HcVideo as hc_video };
