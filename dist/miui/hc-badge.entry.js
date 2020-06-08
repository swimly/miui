import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcBadgeCss = ":host{display:inline-block;position:relative;vertical-align:middle}:host .number{position:absolute;font-size:0.6rem;background:var(--color-danger);color:var(--color-text-white);padding:0 0.204rem;border-radius:1.2rem;left:0;top:0;transform:translate(-0.3rem, -50%);box-sizing:border-box;border:1px solid var(--color-text-white);z-index:99}:host([dot]) .number{font-size:0;width:0.5rem;height:0.5rem;padding:0}";

class HcBadge {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        if (this.dot) {
            this.el.setAttribute('dot', 'true');
        }
        var slot = this.el.shadowRoot.querySelector('slot');
        var child = slot.assignedElements()[0];
        var number = this.el.shadowRoot.querySelector('.number');
        number.style.left = `${child.clientWidth}px`;
    }
    render() {
        return (h(Host, null, h("span", { class: "number", style: {
                backgroundColor: this.background
            } }, this.value >= this.max && this.max ? `${this.max - 1}+` : this.value), h("slot", null)));
    }
    get el() { return getElement(this); }
}
HcBadge.style = hcBadgeCss;

export { HcBadge as hc_badge };
