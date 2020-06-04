import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcRadioCss = ":host{display:inline-flex;flex-direction:row;font-size:0.75rem;color:var(--color-text-primary);align-items:center;margin-right:0.75rem}:host .frame{display:flex;flex-direction:row;align-items:center;justify-content:center;width:0.75rem;height:0.75rem;color:var(--background-color-white);background:var(--background-color-white);margin-right:0.25rem;overflow:hidden;transition:0.3s;border:1px solid var(--border-color-base);box-sizing:border-box}:host .frame:after{content:\"\";display:inline-block;width:0.525rem;height:0.525rem;border-radius:50%;background:var(--background-color-white);transform:scale(0);transition:0.3s ease-out}:host .label{display:block;font-size:inherit;color:inherit;flex:1}:host([conner]) .frame{border-radius:0.2rem}:host([rounder]) .frame{border-radius:0.75rem}:host([checked]) .frame{background:var(--color-primary);border-color:var(--color-primary)}:host([checked]) .frame:after{transform:scale(1)}:host([checked][type=danger]) .frame{background:var(--color-danger);border-color:var(--color-danger)}:host([checked][type=warning]) .frame{background:var(--color-warning);border-color:var(--color-warning)}:host([checked][type=success]) .frame{background:var(--color-success);border-color:var(--color-success)}:host([reverse]){flex-direction:row-reverse;display:flex}:host([vertical]){margin:0;padding:0.6rem 0}:host([subline]){position:relative}:host([subline])::after{content:\"\";box-sizing:border-box;border-radius:0;position:absolute;box-sizing:border-box;transition:0.3s;bottom:0;left:0;width:100%;height:1px;background:var(--border-color-light);transform-origin:left bottom;transform:scaleY(0.5)}";

class HcRadio {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            value: this.value
        });
    }
    render() {
        return (h(Host, { onClick: this.onClick.bind(this) }, h("span", { class: "frame" }, h("slot", { name: "icon" }, h("hc-icon", { name: this.icon }))), h("span", { class: "label" }, h("slot", null))));
    }
    onClick() {
        this.checked = true;
    }
    async Check(status) {
        this.checked = status;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["checkedHandle"]
    }; }
}
HcRadio.style = hcRadioCss;

export { HcRadio as hc_radio };
