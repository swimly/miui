import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcCalendarMonthCss = ":host{display:flex;flex-direction:column;position:relative;height:100%}:host:after{content:attr(month);position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:3.2rem;color:var(--color-text-placeholder);z-index:1}:host([range]){height:auto}";

class HcCalendarMonth {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        var children = Array.from(this.el.children);
        if (this.multiple && this.range) {
            children.forEach((item, index) => {
                if (index == children.length - 1) {
                    item.setAttribute('hide', 'true');
                }
            });
        }
    }
    render() {
        return (h(Host, Object.assign({}, { month: this.month, multiple: this.multiple, range: this.range }, { style: { width: `${this.width}px` } }), h("slot", null)));
    }
    get el() { return getElement(this); }
}
HcCalendarMonth.style = hcCalendarMonthCss;

export { HcCalendarMonth as hc_calendar_month };
