import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcIndexbarTitleCss = ":host{display:block;font-size:0.6rem;color:var(--color-text-placeholder);background:var(--background-color-base);padding:0.6rem}";

class HcIndexbarIndicate {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcIndexbarIndicate.style = hcIndexbarTitleCss;

export { HcIndexbarIndicate as hc_indexbar_title };
