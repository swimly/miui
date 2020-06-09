import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcButtonCss = ":host{display:block;font-size:0}:host .button{display:flex;height:2.2rem;flex-direction:row;align-items:center;background-color:var(--background-color-white);justify-content:center;color:var(--color-text-primary);box-sizing:border-box;position:relative;outline:none;width:100%}:host .button .label{font-size:0.75rem;position:relative;z-index:11}:host .button hc-icon{position:relative;z-index:11}:host .button .line{position:absolute;display:block;top:0;left:0;width:200%;height:200%;border-width:1px;border-style:solid;box-sizing:border-box;border-color:var(--border-color-base);transform-origin:0 0;transform:scale(0.5)}:host .button:before{content:\"\";display:block;position:absolute;right:-1px;top:-1px;left:-1px;bottom:-1px;z-index:10}:host([type]) .button{color:var(--color-text-white)}:host([plain]) .button:before{opacity:0.1}:host([plain]) .button .line{opacity:0.3}:host([light]) .button:before{opacity:0.1}:host([outline]) .button:before{display:none}:host([outline]) .button .line{opacity:0.3}:host([type=primary]) .button{border-color:var(--color-primary)}:host([type=primary]) .button:before{background-color:var(--color-primary)}:host([type=primary]) .button .line{border-color:var(--color-primary)}:host([type=primary][plain]) .button{color:var(--color-primary);background:none}:host([type=primary][plain]) .button:before{background-color:var(--color-primary)}:host([type=primary][light]) .button{color:var(--color-primary)}:host([type=primary][light]) .button .line{display:none}:host([type=primary][outline]) .button{color:var(--color-primary)}:host([type=warning]) .button{border-color:var(--color-warning)}:host([type=warning]) .button:before{background-color:var(--color-warning)}:host([type=warning]) .button .line{border-color:var(--color-warning)}:host([type=warning][plain]) .button{color:var(--color-warning)}:host([type=warning][plain]) .button:before{background-color:var(--color-warning)}:host([type=warning][outline]) .button{color:var(--color-warning)}:host([type=warning][light]) .button{color:var(--color-warning)}:host([type=warning][light]) .button .line{display:none}:host([type=success]) .button{border-color:var(--color-success)}:host([type=success]) .button:before{background-color:var(--color-success)}:host([type=success]) .button .line{border-color:var(--color-success)}:host([type=success][plain]) .button{color:var(--color-success)}:host([type=success][outline]) .button{color:var(--color-success)}:host([type=success][light]) .button{color:var(--color-success)}:host([type=success][light]) .button .line{display:none}:host([type=danger]) .button{border-color:var(--color-danger)}:host([type=danger]) .button:before{background-color:var(--color-danger)}:host([type=danger]) .button .line{border-color:var(--color-danger)}:host([type=danger][plain]) .button{color:var(--color-danger)}:host([type=danger][outline]) .button{color:var(--color-danger)}:host([type=danger][light]) .button{color:var(--color-danger)}:host([type=danger][light]) .button .line{display:none}:host([type=info]) .button{background-color:var(--background-color-base);color:var(--color-text-primary);border-color:var(--background-color-base)}:host([conner]) .button{border-radius:0.2rem}:host([conner]) .button .line{border-radius:0.4rem}:host([rounder]) .button{border-radius:2.2rem}:host([rounder]) .button:before{border-radius:4.4rem;right:0;left:0}:host([rounder]) .button .line{border-radius:4.4rem}:host([size]){display:inline-block;vertical-align:top}:host([size]) .button{display:inline-flex;width:auto}:host([size=mini]) .button{height:1.6rem;padding:0 0.7rem}:host([size=mini]) .button .label{font-size:0.6rem}:host([size=small]) .button{height:1.8rem;padding:0 1rem}:host([size=small]) .button .label{font-size:0.6rem}:host([size=default]) .button{height:2rem;padding:0 1.1rem}:host([size=default]) .button .label{font-size:0.7rem}:host([size=large]) .button{height:2.2rem;padding:0 1.3rem}:host([size=large]) .button .label{font-size:0.8rem}:host([disabled]) .button:before{display:block;opacity:0.3;cursor:not-allowed}:host([disabled]) .button .line{display:none}";

// import {hc_toast} from '../../../dist/esm/hc-toast.entry.js'
class HcButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icon = '';
        this.vclick = createEvent(this, "vclick", 7);
    }
    loadingHandle(v) {
        var $icon = this.el.shadowRoot.querySelector('hc-icon');
        var icon = this.icon ? this.icon : '';
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
        return (h(Host, { onclick: this.onClick.bind(this) }, h("hc-ripple", { mask: !this.ripple, color: this.rippleColor }, h("div", { class: "button", style: {
                backgroundColor: this.backgroundColor,
                color: this.color
            } }, h("span", { class: "line", style: {
                borderColor: this.borderColor
            } }), h("hc-icon", { name: this.icon }), h("span", { class: "label" }, h("slot", null, this.label))))));
    }
    onClick(e) {
        if (!this.disabled) {
            this.vclick.emit(e);
        }
        else {
            if (this.errorText) {
                // const Toast = new hc_toast({})
                // Toast.generate({
                //   content: this.errorText,
                //   place: 'down'
                // })
            }
        }
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
