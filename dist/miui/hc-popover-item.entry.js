import { r as registerInstance, c as createEvent, h, H as Host } from './index-17e92c35.js';

const hcPopoverItemCss = ":host{display:flex;font-size:0.7rem;color:var(--color-text-primary);height:2.4rem;flex-direction:row;align-items:center;padding:0 1rem;border-radius:0.2rem;position:relative}:host::after{content:\"\";box-sizing:border-box;border-radius:0;position:absolute;box-sizing:border-box;transition:0.3s;bottom:0;left:0;width:100%;height:1px;background:var(--border-color-base);transform-origin:left bottom;transform:scaleY(0.5)}";

class HcPopoverItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vclick = createEvent(this, "vclick", 7);
    }
    render() {
        return (h(Host, { onClick: this.bindClick.bind(this) }, h("slot", null)));
    }
    bindClick(e) {
        this.vclick.emit({
            label: e.target.innerHTML
        });
    }
}
HcPopoverItem.style = hcPopoverItemCss;

export { HcPopoverItem as hc_popover_item };
