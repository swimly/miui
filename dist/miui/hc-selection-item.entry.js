import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcSelectionItemCss = ":host{display:flex;font-size:0.8rem;color:var(--color-text-regular);padding:0.64rem 0;position:relative}:host:after{content:\"\";display:block;position:absolute;bottom:0;left:0;width:100%;height:1px;background:var(--border-color-base);transform:scaleY(0.5)}";

class HcSelectionItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vclick = createEvent(this, "vclick", 7);
    }
    render() {
        return (h(Host, { onClick: this.onClick.bind(this) }, h("slot", null)));
    }
    onClick() {
        this.vclick.emit({
            value: this.value,
            label: this.el.innerText
        });
    }
    get el() { return getElement(this); }
}
HcSelectionItem.style = hcSelectionItemCss;

export { HcSelectionItem as hc_selection_item };
