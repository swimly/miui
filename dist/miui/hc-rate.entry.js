import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';
import { h as hammer } from './hammer-a3a84d6d.js';

const hcRateCss = ":host{display:flex;flex-direction:row;align-items:center;font-size:0.8rem}:host .star hc-icon{color:var(--color-text-primary)}:host .star hc-icon:last-child{display:none}:host .star.active{color:var(--color-primary)}:host .star.active hc-icon:last-child{display:block}:host .star.active hc-icon:first-child{display:none}";

class HcRate {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.voidIcon = 'collection';
        this.activeIcon = 'collection-fill';
        this.size = 28;
        this.value = 0;
    }
    valueHandle(v) {
        this.renderActive(v);
        this.renderText(v);
    }
    componentDidLoad() {
        var slot = this.el.shadowRoot.querySelector('slot');
        this.$children = slot.assignedElements();
        this.itemWidth = this.$children[0].offsetWidth;
        this.$children.forEach((child, index) => {
            child.setAttribute('void-icon', this.voidIcon);
            child.setAttribute('active-icon', this.activeIcon);
            child.setAttribute('size', this.size);
            child.setAttribute('void-color', this.voidColor);
            child.setAttribute('active-color', this.activeColor);
            child.addEventListener('click', this.bindClick.bind(this, index));
        });
        this.renderActive(this.value);
        this.bindTouch();
        this.renderText(this.value);
    }
    render() {
        return (h(Host, null, h("slot", null), h("span", null, this.label)));
    }
    renderText(index) {
        if (this.$children[Math.round(index - 1)]) {
            this.label = this.$children[Math.round(index - 1)].getAttribute('label');
        }
    }
    bindClick(index) {
        this.value = index + 1;
        console.log(index);
    }
    renderActive(index) {
        this.$children.forEach((child, idx) => {
            if (idx <= index - 1) {
                child.setAttribute('active', 'true');
            }
            else {
                child.removeAttribute('active');
                child.removeAttribute('half');
            }
        });
    }
    bindTouch() {
        var hammer$1 = new hammer(this.el);
        var offset = this.el.offsetLeft;
        var start = 0;
        hammer$1.get('pan').set({ direction: hammer.DIRECTION_HORIZONTAL });
        hammer$1.on('panstart', (e) => {
            start = e.center.x - offset;
            this.value = (e.center.x - offset) / this.itemWidth;
        });
        hammer$1.on('pan', (e) => {
            this.value = (start + e.deltaX) / this.itemWidth;
        });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueHandle"]
    }; }
}
HcRate.style = hcRateCss;

export { HcRate as hc_rate };
