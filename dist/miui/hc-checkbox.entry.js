import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcCheckboxCss = ":host{display:inline-flex;flex-direction:row;font-size:0.75rem;color:var(--color-text-primary);align-items:center;margin-right:0.375rem;position:relative}:host .frame{display:flex;flex-direction:row;align-items:center;justify-content:center;width:1.05rem;height:1.05rem;color:var(--background-color-white);background:var(--background-color-white);margin-right:0.225rem;overflow:hidden;transition:0.3s;border:1px solid var(--border-color-base);box-sizing:border-box;overflow:hidden}:host .frame hc-icon{display:inline-block;font-size:0;transform:scale(0);transition:0.3s}:host .label{display:block;font-size:inherit;color:inherit;flex:1}:host([conner]) .frame{border-radius:0.2rem}:host([rounder]) .frame{border-radius:0.75rem}:host([checked]) .frame{background:var(--color-primary);border-color:var(--color-primary)}:host([checked]) .frame hc-icon{transform:scale(1)}:host([checked][type=danger]) .frame{background:var(--color-danger);border-color:var(--color-danger)}:host([checked][type=warning]) .frame{background:var(--color-warning);border-color:var(--color-warning)}:host([checked][type=success]) .frame{background:var(--color-success);border-color:var(--color-success)}:host([reverse]){flex-direction:row-reverse;display:flex}:host([vertical]){padding:0.525rem 0}:host([subline]):after{content:\"\";display:inline-block;position:absolute;left:0;bottom:0;width:100%;height:1px;background:var(--border-color-light);transform:scaleY(0.5)}";

class HcCheckbox {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icon = 'seleted';
        this.vchange = createEvent(this, "vchange", 7);
    }
    checkedHandle(v) {
        if (v) {
            this.el.setAttribute('checked', 'true');
        }
        else {
            this.el.removeAttribute('checked');
        }
        this.vchange.emit({
            value: this.value,
            checked: v
        });
    }
    render() {
        return (h(Host, { onClick: this.onClick.bind(this) }, h("span", { class: "frame" }, h("slot", { name: "icon" }, h("hc-icon", { name: this.icon }))), h("span", { class: "label" }, h("slot", null))));
    }
    onClick() {
        this.checked = !this.checked;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["checkedHandle"]
    }; }
}
HcCheckbox.style = hcCheckboxCss;

export { HcCheckbox as hc_checkbox };
