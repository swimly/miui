import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcSelectionContentCss = ":host{display:block;padding:0.8rem;overflow:auto;height:16rem;position:relative}:host .mask{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:var(--background-color-white);opacity:0;z-index:-1;transition:0.3s}:host([loading]){overflow:hidden}:host([loading]) .mask{z-index:10;opacity:1}";

class HcSelectionContent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vchange = createEvent(this, "vchange", 7);
    }
    valueHandle(v) {
        this.vchange.emit({
            value: v,
            label: this.current.label
        });
    }
    loadingHandle(v) {
        if (v) {
            this.el.setAttribute('loading', `true`);
        }
        else {
            this.el.removeAttribute('loading');
        }
    }
    componentDidLoad() {
        this.bindClick();
        var slot = this.el.shadowRoot.querySelector('slot');
        slot.addEventListener('slotchange', () => {
            this.bindClick();
        });
    }
    render() {
        return (h(Host, null, h("slot", null), h("div", { class: "mask" }, h("hc-icon", { name: "loading", spin: true }))));
    }
    bindClick() {
        var children = Array.from(this.el.children);
        children.forEach(child => {
            child.addEventListener('vclick', (e) => {
                this.current = e.detail;
                this.value = this.current.value;
            });
        });
    }
    async Loading() {
        this.loading = true;
    }
    async Loaded() {
        this.loading = false;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueHandle"],
        "loading": ["loadingHandle"]
    }; }
}
HcSelectionContent.style = hcSelectionContentCss;

export { HcSelectionContent as hc_selection_content };
