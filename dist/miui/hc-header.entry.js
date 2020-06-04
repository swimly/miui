import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcHeaderCss = ":host{display:flex;height:2.4rem;align-items:center;background-color:var(--background-color-dark);color:var(--color-text-primary);padding:0 0.6rem}:host h1{font-size:0.9rem;color:inherit;flex:1;text-align:center;font-weight:normal}:host .area{width:4rem;display:flex;flex-direction:row;align-items:center}:host .area .label{transform:scale(0.7);transform-origin:left center}:host .area.right{justify-content:flex-end}";

class HcHeader {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "area left", onClick: this.back.bind(this) }, h("slot", { name: "left" }, h("hc-icon", { size: 28, name: "arrow-lift" }), h("span", { class: "label" }, "\u8FD4\u56DE"))), h("h1", null, h("slot", null, this.label)), h("div", { class: "area right" }, h("slot", { name: "right" }))));
    }
    back() {
        window.history.go(-1);
    }
}
HcHeader.style = hcHeaderCss;

export { HcHeader as hc_header };
