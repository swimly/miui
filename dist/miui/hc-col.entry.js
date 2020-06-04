import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcColCss = ":host{display:block;box-sizing:border-box;flex-shrink:0}";

class HcCol {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { style: { width: `${this.span / 24 * 100}%`, flex: `${this.flex}`, textAlign: this.align } }, h("slot", null)));
    }
}
HcCol.style = hcColCss;

export { HcCol as hc_col };
