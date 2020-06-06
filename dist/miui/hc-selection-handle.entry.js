import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcSelectionHandleCss = ":host{display:block}";

class HcSelectionHandle {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcSelectionHandle.style = hcSelectionHandleCss;

export { HcSelectionHandle as hc_selection_handle };
