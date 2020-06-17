import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcRateItemCss = ":host{display:block;color:var(--color-text-primary);position:relative}:host hc-icon{position:absolute;top:0;left:0}:host hc-icon:last-child{opacity:0}:host([active]),:host([half]){color:var(--color-primary)}:host([active]) hc-icon:first-child,:host([half]) hc-icon:first-child{opacity:0}:host([active]) hc-icon:last-child,:host([half]) hc-icon:last-child{opacity:1}";

class HcRateItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.voidIcon = 'collection';
        this.activeIcon = 'collection-fill';
        this.size = 28;
    }
    render() {
        return (h(Host, { style: { width: `${this.size}px`, height: `${this.size}px` } }, h("slot", null, h("hc-icon", { color: this.voidColor, name: this.voidIcon, size: this.size }), h("hc-icon", { color: this.activeColor, name: this.activeIcon, size: this.size }))));
    }
}
HcRateItem.style = hcRateItemCss;

export { HcRateItem as hc_rate_item };
