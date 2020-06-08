import { r as registerInstance, h, H as Host } from './index-17e92c35.js';

const hcSearchCss = ":host{display:block;font-size:0.75rem;color:var(--color-text-regular)}";

class HcSearch {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icon = 'search';
        this.iconSize = 24;
        this.shape = 'conner';
    }
    render() {
        return (h(Host, null, h("hc-row", null, h("hc-col", { flex: 1 }, h("hc-input", Object.assign({ placeholder: this.placeholder }, {
            [this.shape]: 'true',
            clearable: this.clearable
        }, { dark: true, type: "search", "icon-size": this.iconSize, "prefix-icon": this.icon }))), h("hc-col", null, h("slot", null)))));
    }
}
HcSearch.style = hcSearchCss;

export { HcSearch as hc_search };
