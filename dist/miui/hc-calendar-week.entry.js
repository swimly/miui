import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcCalendarWeekCss = ":host{display:flex;flex-direction:row;align-items:center;flex:1}";

class HcCalendarWeek {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcCalendarWeek.style = hcCalendarWeekCss;

export { HcCalendarWeek as hc_calendar_week };
