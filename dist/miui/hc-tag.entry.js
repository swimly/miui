import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcTagCss = ":host{display:inline-flex;flex-direction:row;align-items:center;font-size:0.7rem;height:1.4rem;color:var(--color-text-primary);border:1px solid var(--border-color-base);padding:0 0.7rem;max-width:100%;box-sizing:border-box;position:relative;overflow:hidden}:host .bg{position:absolute;top:0;left:0;bottom:0;right:0}:host .label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:relative;z-index:10;color:inherit;flex:1}:host hc-icon{transform:translateX(30%);position:relative;font-size:1.4rem;z-index:10}:host([conner]){border-radius:0.2rem}:host([rounder]){border-radius:1.4rem}:host([type=primary]){border-color:var(--color-primary);color:var(--color-primary)}:host([type=primary]) .bg{background-color:var(--color-primary)}:host([type=success]){border-color:var(--color-success);color:var(--color-success)}:host([type=success]) .bg{background-color:var(--color-success)}:host([type=warning]){border-color:var(--color-warning);color:var(--color-warning)}:host([type=warning]) .bg{background-color:var(--color-warning)}:host([type=danger]){border-color:var(--color-danger);color:var(--color-danger)}:host([type=danger]) .bg{background-color:var(--color-danger)}:host([type]){color:var(--color-text-white)}:host([size=mini]){font-size:0.5rem;height:1rem}:host([size=small]){font-size:0.6rem;height:1.2rem}:host([size=large]){font-size:0.8rem;height:1.6rem}:host([plain]) .bg,:host([light]) .bg{opacity:0.1}:host([type=primary][plain]),:host([type=primary][outline]),:host([type=primary][light]){color:var(--color-primary)}:host([type=warning][plain]),:host([type=warning][outline]),:host([type=warning][light]){color:var(--color-warning)}:host([type=success][plain]),:host([type=success][outline]),:host([type=success][light]){color:var(--color-success)}:host([type=danger][plain]),:host([type=danger][outline]),:host([type=danger][light]){color:var(--color-danger)}:host([outline]) .bg{display:none}:host([light]){border:none}";

class HcTag {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closable = false;
        this.vclose = createEvent(this, "vclose", 7);
    }
    componentWillLoad() {
        if (this.rounder) {
            this.el.setAttribute('rounder', 'true');
        }
        if (this.conner) {
            this.el.setAttribute('conner', 'true');
        }
        if (this.size) {
            this.el.setAttribute('size', `${this.size}`);
        }
        if (this.type) {
            this.el.setAttribute('type', `${this.type}`);
        }
        if (this.outline) {
            this.el.setAttribute('outline', `${this.outline}`);
        }
    }
    render() {
        var color;
        if (this.plain || this.light || this.outline) {
            color = this.background;
        }
        else {
            color = this.color;
        }
        return (h(Host, { style: {
                color: color,
                borderColor: this.background
            } }, h("span", { class: "label" }, h("slot", null)), h("span", { class: "bg", style: {
                backgroundColor: this.background
            } }), this.renderClose()));
    }
    renderClose() {
        if (this.closable) {
            return (h("hc-icon", { size: 18, onClick: this.onClose.bind(this), id: "close", name: "close" }));
        }
    }
    onClose(e) {
        var parent = this.el.parentNode;
        parent.removeChild(this.el);
        this.vclose.emit(e);
    }
    get el() { return getElement(this); }
}
HcTag.style = hcTagCss;

export { HcTag as hc_tag };
