import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcTitleCss = ":host{font-size:0.9rem;padding:0 1rem 0.6rem 1rem;margin:0 -1rem 1rem -1rem;display:block;color:var(--color-text-primary);position:relative}:host::after{content:\"\";box-sizing:border-box;border-radius:0;position:absolute;box-sizing:border-box;transition:0.3s;bottom:0;left:0;width:100%;height:1px;background:var(--border-color-base);transform-origin:left bottom;transform:scaleY(0.5)}:host h2{font-size:inherit;display:flex;flex-direction:row;margin:0;align-items:center}:host h2 .label{font-size:inherit;font-weight:normal;flex:1}:host h2 .more{font-size:0.7rem;font-weight:normal;color:var(--color-text-regular)}:host .sub{margin:0}";

class HcTitle {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.more = '';
    }
    render() {
        return (h(Host, null, h("h2", null, h("span", { class: "label" }, h("slot", null, this.label)), h("span", { class: "more" }, h("slot", { name: "more" }, this.more))), h("p", { class: "sub" }, this.subTitle)));
    }
}
HcTitle.style = hcTitleCss;

export { HcTitle as hc_title };
