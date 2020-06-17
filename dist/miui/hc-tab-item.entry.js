import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcTabItemCss = ":host{display:flex;flex-direction:row;align-items:center;flex-shrink:0;font-size:0.8rem;color:var(--color-text-primary);margin:0 1rem 0 0}:host([active]){color:var(--color-primary)}";

class HcTabItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vclick = createEvent(this, "vclick", 7);
        this.vchange = createEvent(this, "vchange", 7);
        this.vlabel = createEvent(this, "vlabel", 7);
    }
    activeHandle(v) {
        if (v) {
            this.el.setAttribute('active', 'true');
        }
        else {
            this.el.removeAttribute('active');
        }
    }
    labelHandle(v) {
        this.el.setAttribute('label', v);
        this.vlabel.emit(this.el.getBoundingClientRect());
    }
    componentDidLoad() {
        if (this.active) {
            this.el.setAttribute('active', `${this.active}`);
        }
        if (this.index !== undefined) {
            this.el.setAttribute('index', `${this.index}`);
        }
        if (this.label) {
            this.el.setAttribute('label', this.label);
        }
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
    static get watchers() { return {
        "active": ["activeHandle"],
        "label": ["labelHandle"]
    }; }
}
HcTabItem.style = hcTabItemCss;

export { HcTabItem as hc_tab_item };
