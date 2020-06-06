import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcCalendarDayCss = ":host{display:flex;font-size:0.8rem;color:var(--color-text-regular);flex:1;flex-direction:column;align-items:center;justify-content:center}";

class HcCalendarDay {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcCalendarDay.style = hcCalendarDayCss;

export { HcCalendarDay as hc_calendar_day };
