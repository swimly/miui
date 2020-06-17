import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcIndexbarItemCss = ":host{display:block;font-size:0.75rem;color:var(--color-text-primary);padding:0.75rem;position:relative}:host::after{content:\"\";box-sizing:border-box;border-radius:0;position:absolute;box-sizing:border-box;transition:0.3s;bottom:0;left:0;width:100%;height:1px;background:var(--border-color-base);transform-origin:left bottom;transform:scaleY(0.5)}";

class HcIndexbarItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcIndexbarItem.style = hcIndexbarItemCss;

export { HcIndexbarItem as hc_indexbar_item };
