import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcRippleCss = ":host{display:block;overflow:hidden;position:relative}:host .ripple{display:block;position:absolute;z-index:98;top:0;left:0;width:5rem;height:5rem;background:rgba(0, 0, 0, 0.05);transform:translate(-50%, -50%) scale(0);border-radius:50%}:host .ripple.active{animation:move 0.6s linear}:host([mask]) .ripple{width:100%;height:100%;transform:translate(0, 0) scale(1);border-radius:0;transition:0.3s ease-out;opacity:0}:host([mask]) .ripple:active{opacity:1}@keyframes move{0%{transform:translate(-50%, -50%) scale(0)}40%{transform:translate(-50%, -50%) scale(1)}100%{transform:translate(-50%, -50%) scale(1.5);opacity:0.1}}";

class HcRipple {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        if (this.mask) {
            this.el.setAttribute('mask', 'true');
        }
    }
    render() {
        return (h(Host, { onClick: this.onClick.bind(this) }, h("span", { class: "ripple", style: {
                backgroundColor: `${this.color}`,
                width: `${this.size}px`,
                height: `${this.size}px`
            } }), h("slot", null)));
    }
    onClick(e) {
        if (!this.mask) {
            var circle = this.el.shadowRoot.querySelector('.ripple');
            var rect = this.el.getBoundingClientRect();
            var top = rect.y;
            var left = rect.x;
            var x = e.clientX;
            var y = e.clientY;
            circle.style.left = `${x - left}px`;
            circle.style.top = `${y - top}px`;
            circle.classList.add('active');
            setTimeout(() => {
                circle.classList.remove('active');
            }, 400);
        }
    }
    get el() { return getElement(this); }
}
HcRipple.style = hcRippleCss;

export { HcRipple as hc_ripple };
