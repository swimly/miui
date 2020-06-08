import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcTabItemCss = ":host{display:flex;flex-direction:row;align-items:center;flex-shrink:0;font-size:0.8rem;color:var(--color-text-primary);margin:0 1rem 0 0}:host([active]){color:var(--color-primary)}";

class HcTabItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vclick = createEvent(this, "vclick", 7);
        this.vchange = createEvent(this, "vchange", 7);
    }
    componentDidLoad() {
        var slot = this.el.shadowRoot.querySelector('slot');
        slot.addEventListener('slotchange', () => {
            this.vchange.emit({
                label: this.el.innerText
            });
        });
    }
    render() {
        return (h(Host, { onClick: this.bindClick.bind(this) }, h("slot", null)));
    }
    bindClick() {
        this.vclick.emit({
            index: this.index,
            props: this.el.getBoundingClientRect()
        });
    }
    get el() { return getElement(this); }
}
HcTabItem.style = hcTabItemCss;

export { HcTabItem as hc_tab_item };
