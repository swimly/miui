import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcSwiperItemCss = ":host{display:flex;flex-direction:row;flex-wrap:wrap}";

class HcSwiperItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vdisabled = createEvent(this, "vdisabled", 7);
    }
    componentDidLoad() {
        const slot = this.el.shadowRoot.querySelector('slot');
        const children = slot.assignedElements();
        children.forEach((item) => {
            item.setAttribute('width', `${this.width}`);
            item.setAttribute('height', `${this.height}`);
            item.addEventListener('vchange', () => {
                this.vdisabled.emit();
            });
        });
    }
    render() {
        return (h(Host, { style: { width: `${this.width}px`, height: `${this.height}px` } }, h("slot", null)));
    }
    get el() { return getElement(this); }
}
HcSwiperItem.style = hcSwiperItemCss;

export { HcSwiperItem as hc_swiper_item };
