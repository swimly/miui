import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcSwitchCss = ":host{display:inline-flex;font-size:0.75rem;color:inherit;flex-direction:row;align-items:center;vertical-align:middle}:host hc-icon{font-size:1.2rem;color:inherit;transition:0.3s}:host .active{opacity:0;color:var(--color-primary);transform:scale(2);transform-origin:center center}:host .switch{display:flex;flex-direction:row;height:1.2rem;width:2.16rem;background-color:var(--background-color-darker);border-radius:0.6rem;margin-right:0.4rem;align-items:center;padding:0.2rem;justify-content:flex-start;box-sizing:border-box;transition:0.3s}:host .switch:before{content:\"\";display:inline-block;width:0.72rem;height:0.72rem;background-color:var(--background-color-white);border-radius:50%;transition:0.3s}:host([checked]) .off{opacity:0}:host([checked]) .active{opacity:1;transform:scale(1)}:host([checked]) .switch{background-color:var(--color-primary)}:host([checked]) .switch:before{transform:translateX(0.96rem);background-color:var(--background-color-white)}:host([type=warning][checked]) .switch{background-color:var(--color-warning)}:host([type=success][checked]) .switch{background-color:var(--color-success)}:host([type=danger][checked]) .switch{background-color:var(--color-danger)}:host([disabled]){opacity:0.6}";

class HcSwitch {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconSize = 36;
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
            checked: v
        });
    }
    render() {
        return (h(Host, { onClick: this.onClick.bind(this) }, this.renderSwitch(), h("slot", { name: "off" }, h("hc-icon", { class: "off", size: this.iconSize, name: this.offIcon })), h("slot", { name: "active" }, h("hc-icon", { style: { marginLeft: `-${this.iconSize}px` }, class: "active", size: this.iconSize, name: this.activeIcon, color: this.activeColor })), h("slot", null)));
    }
    renderSwitch() {
        if (!this.custom) {
            return (h("span", { class: "switch" }));
        }
    }
    onClick() {
        if (this.disabled || this.readonly)
            return;
        this.checked = !this.checked;
    }
    async Switch(v) {
        this.checked = v;
        console.log('我到这了');
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["checkedHandle"]
    }; }
}
HcSwitch.style = hcSwitchCss;

export { HcSwitch as hc_switch };
