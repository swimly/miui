import { r as registerInstance, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcCalendarContentCss = ":host{display:block;overflow:hidden}:host .wrap{display:flex;flex-direction:row}";

class HcCalendarContent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        var children = Array.from(this.el.children);
        children.forEach((child) => {
            child.setAttribute('width', `${this.width}`);
        });
    }
    render() {
        return (h(Host, null, h("div", { class: "wrap", style: { width: `${this.width * 3}px`, transform: `translate3d(${-this.width}px, 0,0)` } }, h("slot", null))));
    }
    get el() { return getElement(this); }
}
HcCalendarContent.style = hcCalendarContentCss;

export { HcCalendarContent as hc_calendar_content };
