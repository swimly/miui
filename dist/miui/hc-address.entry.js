import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcAddressCss = ":host{display:block}";

class HcAddress {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcAddress.style = hcAddressCss;

export { HcAddress as hc_address };
