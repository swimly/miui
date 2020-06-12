import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcActionsheetItemCss = ":host{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;height:2.6rem;font-size:0.7rem;color:var(--color-text-primary);padding:0 1rem;position:relative}:host:after{content:\"\";display:block;position:absolute;top:0;right:0;bottom:0;left:0;transition:0.3s;opacity:0}:host slot{flex:1;display:block}:host hc-icon{transition:0.3s;transform:scale(0)}:host([active]){color:var(--color-primary)}:host([active]):after{background:var(--color-primary);opacity:0.1}:host([active]) hc-icon{transform:scale(1)}";

class HcActionsheetItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    activeHandle(v) {
        if (v) {
            this.el.setAttribute('active', 'true');
        }
        else {
            this.el.removeAttribute('active');
        }
    }
    componentDidLoad() {
        if (this.value) {
            this.el.setAttribute('value', this.value);
        }
        if (this.active) {
            this.el.setAttribute('active', 'true');
        }
    }
    render() {
        return (h(Host, null, h("slot", null), h("hc-icon", { name: "seleted" })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "active": ["activeHandle"]
    }; }
}
HcActionsheetItem.style = hcActionsheetItemCss;

export { HcActionsheetItem as hc_actionsheet_item };
