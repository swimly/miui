import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcSwipemenuItemCss = ":host{display:flex;background:var(--color-text-primary);color:var(--color-text-white);font-size:0.7rem;height:100%;flex-direction:row;align-items:center;padding:0 1rem;writing-mode:vertical-lr;justify-content:center}";

class HcSwipemenuItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { style: { backgroundColor: this.color } }, h("slot", null)));
    }
}
HcSwipemenuItem.style = hcSwipemenuItemCss;

export { HcSwipemenuItem as hc_swipemenu_item };
