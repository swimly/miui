import { r as registerInstance, c as createEvent, h, H as Host } from './index-17e92c35.js';

function formatTime(sec) {
    var m = Math.floor(sec / 60);
    var s = Math.ceil(sec % 60);
    if (s == 60) {
        m += 1;
        s = 0;
    }
    var sm = m < 10 ? `0${m}` : `${m}`;
    var ss = s < 10 ? `0${s}` : `${s}`;
    return `${sm}:${ss}`;
}

const hcVideoControlsCss = ":host{display:block;font-size:0.6rem;color:var(--color-text-primary)}";

class HcVideoControls {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.current = 0;
        this.vplay = createEvent(this, "vplay", 7);
        this.vmute = createEvent(this, "vmute", 7);
        this.vprogress = createEvent(this, "vprogress", 7);
    }
    playHandle(v) {
        this.vplay.emit({
            value: v
        });
    }
    mutedHandle(v) {
        this.vmute.emit({
            value: v
        });
    }
    render() {
        return (h(Host, null, h("hc-row", null, h("hc-col", null, h("hc-switch", { "icon-size": 28, onVchange: this.onPlayChange.bind(this), type: "favorites", "off-icon": "play", "active-icon": "suspended" })), h("hc-col", { class: "time", span: 3 }, formatTime(this.current)), h("hc-col", { flex: 1 }, h("hc-slider", { size: "mini", onVchange: this.onProgressChange.bind(this), value: this.current / this.duration * 100 })), h("hc-col", { class: "time", span: 3, align: "right" }, formatTime(this.duration)), h("hc-col", null, h("hc-switch", { "icon-size": 28, onVchange: this.onVoiceChange.bind(this), type: "favorites", "active-icon": "sound-Mute", "off-icon": "sound-filling" }))), h("slot", null)));
    }
    onPlayChange(e) {
        this.play = e.detail.checked;
    }
    onVoiceChange(e) {
        this.muted = e.detail.checked;
    }
    onProgressChange(e) {
        this.vprogress.emit({
            value: e.detail
        });
    }
    static get watchers() { return {
        "play": ["playHandle"],
        "muted": ["mutedHandle"]
    }; }
}
HcVideoControls.style = hcVideoControlsCss;

export { HcVideoControls as hc_video_controls };
