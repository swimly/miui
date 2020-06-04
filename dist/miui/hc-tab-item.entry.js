import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcTabItemCss = ":host{display:flex;flex-direction:row;align-items:center;flex-shrink:0;font-size:0.8rem;color:var(--color-text-primary);margin:0 2rem 0 0;transition:0.3s}:host([active]){color:var(--color-primary)}";

class HcTabItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vchange = createEvent(this, "vchange", 7);
    }
    render() {
        return (h(Host, { onClick: this.bindClick.bind(this) }, h("slot", null)));
    }
    bindClick() {
        this.vchange.emit({
            index: this.index,
            props: this.el.getBoundingClientRect()
        });
    }
    get el() { return getElement(this); }
}
HcTabItem.style = hcTabItemCss;

export { HcTabItem as hc_tab_item };
