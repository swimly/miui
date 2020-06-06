import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcCalendarMonthCss = ":host{display:flex;flex-direction:column;height:12rem}";

class HcCalendarMonth {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { style: { width: `${this.width}px` } }, h("slot", null)));
    }
}
HcCalendarMonth.style = hcCalendarMonthCss;

export { HcCalendarMonth as hc_calendar_month };
