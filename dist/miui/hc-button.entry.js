import { r as registerInstance, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcButtonCss = ":host{display:block;font-size:0}:host .button{display:flex;height:2.2rem;flex-direction:row;align-items:center;background-color:var(--background-color-white);justify-content:center;color:var(--color-text-primary);box-sizing:border-box;position:relative;outline:none;width:100%}:host .button .label{font-size:0.75rem}:host .button .line{position:absolute;display:block;top:0;left:0;width:200%;height:200%;border-width:1px;border-style:solid;box-sizing:border-box;border-color:var(--border-color-base);transform-origin:0 0;transform:scale(0.5)}:host .button:before{content:\"\";display:block;position:absolute;right:-1px;top:-1px;left:-1px;bottom:-1px;opacity:0.1;display:none;z-index:10}:host([type]) .button{color:var(--color-text-white)}:host([plain]) .button:before{display:block}:host([type=primary]) .button{background-color:var(--color-primary);border-color:var(--color-primary)}:host([type=primary]) .button .line{border-color:var(--color-primary)}:host([type=primary][plain]) .button{color:var(--color-primary);background:rgba(var(--color-primary), 0.2)}:host([type=primary][plain]) .button:before{background-color:var(--color-primary)}:host([type=primary][outline]) .button{color:var(--color-primary);background:none}:host([type=warning]) .button{background-color:var(--color-warning);border-color:var(--color-warning)}:host([type=warning]) .button .line{border-color:var(--color-warning)}:host([type=warning][plain]) .button{color:var(--color-warning);background:rgba(var(--color-warning), 0.2)}:host([type=warning][plain]) .button:before{background-color:var(--color-warning)}:host([type=warning][outline]) .button{color:var(--color-warning);background:none}:host([type=success]) .button{background-color:var(--color-success);border-color:var(--color-success)}:host([type=success]) .button .line{border-color:var(--color-success)}:host([type=success][plain]) .button{color:var(--color-success);background:rgba(var(--color-success), 0.2)}:host([type=success][plain]) .button:before{background-color:var(--color-success)}:host([type=success][outline]) .button{color:var(--color-success);background:none}:host([type=danger]) .button{background-color:var(--color-danger);border-color:var(--color-danger)}:host([type=danger]) .button .line{border-color:var(--color-danger)}:host([type=danger][plain]) .button{color:var(--color-danger);background:rgba(var(--color-danger), 0.2)}:host([type=danger][plain]) .button:before{background-color:var(--color-danger)}:host([type=danger][outline]) .button{color:var(--color-danger);background:none}:host([type=info]) .button{background-color:var(--background-color-base);color:var(--color-text-primary);border-color:var(--background-color-base)}:host([conner]) .button{border-radius:0.2rem}:host([conner]) .button .line{border-radius:0.4rem}:host([rounder]) .button{border-radius:2.2rem}:host([rounder]) .button .line{border-radius:4.4rem}:host([size]){display:inline-block;vertical-align:top}:host([size]) .button{display:inline-flex;width:auto}:host([size=mini]) .button{height:1.6rem;padding:0 0.7rem}:host([size=mini]) .button .label{font-size:0.6rem}:host([size=small]) .button{height:1.8rem;padding:0 1rem}:host([size=small]) .button .label{font-size:0.6rem}:host([size=default]) .button{height:2rem;padding:0 1.1rem}:host([size=default]) .button .label{font-size:0.7rem}:host([size=large]) .button{height:2.2rem;padding:0 1.3rem}:host([size=large]) .button .label{font-size:0.8rem}:host([disabled]) .button:before{display:block;background:var(--background-color-white);opacity:0.8}";

class HcButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icon = '';
    }
    loadingHandle(v) {
        var $icon = this.el.shadowRoot.querySelector('hc-icon');
        var icon = this.icon ? this.icon : '';
        console.log(v, $icon, icon);
        if (v) {
            $icon.setAttribute('name', 'loading');
            $icon.setAttribute('spin', 'true');
        }
        else {
            $icon.setAttribute('name', icon);
            $icon.removeAttribute('spin');
        }
    }
    componentDidLoad() {
        if (this.type) {
            this.el.setAttribute('type', `${this.type}`);
        }
        if (this.rounder) {
            this.el.setAttribute('rounder', 'true');
        }
        if (this.conner) {
            this.el.setAttribute('conner', 'true');
        }
        if (this.plain) {
            this.el.setAttribute('plain', 'true');
        }
        if (this.ripple) {
            this.el.setAttribute('ripple', 'true');
        }
    }
    render() {
        return (h(Host, null, h("hc-ripple", { mask: !this.ripple, color: this.rippleColor }, h("div", { class: "button", style: {
                backgroundColor: this.backgroundColor,
                color: this.color
            } }, h("span", { class: "line", style: {
                borderColor: this.borderColor
            } }), h("hc-icon", { name: this.icon }), h("span", { class: "label" }, h("slot", null, this.label))))));
    }
    async Loading() {
        this.loading = true;
    }
    async Loaded() {
        this.loading = false;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "loading": ["loadingHandle"]
    }; }
}
HcButton.style = hcButtonCss;

export { HcButton as hc_button };
