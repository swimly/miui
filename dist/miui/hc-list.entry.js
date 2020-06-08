import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcListCss = ":host{display:block}";

class HcList {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        var slots = this.el.shadowRoot.querySelector('slot');
        var children = slots.assignedElements();
        children.forEach((child) => {
            child.setAttribute('size', this.size);
        });
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
}
HcList.style = hcListCss;

export { HcList as hc_list };
