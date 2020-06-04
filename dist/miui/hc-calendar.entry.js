import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcCalendarCss = ":host{display:block}";

class HcCalendar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcCalendar.style = hcCalendarCss;

export { HcCalendar as hc_calendar };
