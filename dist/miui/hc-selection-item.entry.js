import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcSelectionItemCss = ":host{display:flex;font-size:0.8rem;color:var(--color-text-regular);padding:0.64rem 0.8rem;position:relative;z-index:100}:host:after{content:\"\";display:block;position:absolute;bottom:0;left:0;width:100%;height:1px;background:var(--border-color-extra-light);transform:scaleY(0.5)}:host([active]){color:var(--color-primary)}";

class HcSelectionItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vclick = createEvent(this, "vclick", 7);
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
        if (this.index !== undefined) {
            this.el.setAttribute('index', `${this.index}`);
        }
        if (this.value) {
            this.el.setAttribute('value', this.value);
        }
        if (this.active) {
            this.el.setAttribute('active', 'true');
        }
    }
    render() {
        return (h(Host, { onClick: this.onClick.bind(this) }, h("slot", null)));
    }
    onClick() {
        this.vclick.emit({
            value: this.value,
            label: this.el.innerHTML,
            index: this.index
        });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "active": ["activeHandle"]
    }; }
}
HcSelectionItem.style = hcSelectionItemCss;

export { HcSelectionItem as hc_selection_item };
