import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcDropdownCss = ":host{display:block}";

class HcDropdown {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcDropdown.style = hcDropdownCss;

export { HcDropdown as hc_dropdown };
