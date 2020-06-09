import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

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

const hcVideoControlsCss = ":host{display:block;font-size:0.6rem;color:var(--color-text-white);background:rgba(0, 0, 0, 0.5);padding:0.2rem 0.5rem;box-sizing:border-box}";

class HcVideoControls {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.duration = 0;
        this.current = 0;
        this.vplay = createEvent(this, "vplay", 7);
        this.vmute = createEvent(this, "vmute", 7);
        this.vprogress = createEvent(this, "vprogress", 7);
        this.vfull = createEvent(this, "vfull", 7);
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
    fullHandle(v) {
        this.vfull.emit(v);
    }
    componentWillLoad() {
        if (this.forbidJump) {
            this.el.setAttribute('forbid-jump', 'true');
        }
    }
    render() {
        return (h(Host, null, h("hc-row", null, h("hc-col", null, h("hc-switch", { "active-color": "#fff", id: "play", custom: true, "icon-size": 28, onVchange: this.onPlayChange.bind(this), "off-icon": "play", "active-icon": "suspended" })), h("hc-col", { class: "time", span: 3 }, formatTime(this.current)), h("hc-col", { flex: 1 }, h("hc-slider", { readonly: this.forbidJump, size: "mini", onVjump: this.onProgressChange.bind(this), onVchange: this.onProgressChange.bind(this), value: this.current / this.duration * 100 })), h("hc-col", { class: "time", span: 3, align: "right" }, formatTime(this.duration)), h("hc-col", null, h("hc-switch", { "active-color": "#fff", custom: true, "icon-size": 22, onVchange: this.onVoiceChange.bind(this), "active-icon": "sound-Mute", "off-icon": "sound-filling" })), h("hc-col", null, h("hc-switch", { checked: this.fullScreen, "active-color": "#fff", custom: true, "icon-size": 22, onVchange: this.onFullScreen.bind(this), "active-icon": "move", "off-icon": "move" }))), h("slot", null)));
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
    onFullScreen(e) {
        this.fullScreen = e.detail.checked;
    }
    async Playing(v) {
        this.play = v;
        if (v) {
            this.el.shadowRoot.querySelector('#play').setAttribute('checked', 'true');
        }
        else {
            this.el.shadowRoot.querySelector('#play').removeAttribute('checked');
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "play": ["playHandle"],
        "muted": ["mutedHandle"],
        "fullScreen": ["fullHandle"]
    }; }
}
HcVideoControls.style = hcVideoControlsCss;

export { HcVideoControls as hc_video_controls };
