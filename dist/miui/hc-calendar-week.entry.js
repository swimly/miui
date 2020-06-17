import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcCalendarWeekCss = ":host{display:flex;flex-direction:row;align-items:center;position:relative;z-index:2;flex:1}:host([hide]){display:none}";

class HcCalendarWeek {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, Object.assign({}, { week: this.week }), h("slot", null)));
    }
}
HcCalendarWeek.style = hcCalendarWeekCss;

export { HcCalendarWeek as hc_calendar_week };
