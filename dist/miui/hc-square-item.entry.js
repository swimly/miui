import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcSquareItemCss = ":host{display:flex;flex-direction:column;align-items:center;margin:0.5rem 0}";

class HcSquareItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcSquareItem.style = hcSquareItemCss;

export { HcSquareItem as hc_square_item };
