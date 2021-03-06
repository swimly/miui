import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcIndexbarGroupCss = ":host{display:block}";

class HcIndexbarGroup {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcIndexbarGroup.style = hcIndexbarGroupCss;

export { HcIndexbarGroup as hc_indexbar_group };
