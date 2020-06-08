import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcCalendarDayCss = ":host{display:flex;font-size:0.8rem;color:var(--color-text-placeholder);flex:1;flex-direction:column;align-items:center;justify-content:center;position:relative;min-height:2.4rem}:host:after{content:attr(day);display:flex;flex-direction:row;align-items:center;justify-content:center;width:1.6rem;height:1.6rem;border-radius:50%;border:1px solid transparent;background:none;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);box-sizing:border-box}:host([is-month]),:host([is-week]),:host([range]){color:var(--color-text-primary)}:host([is-current][is-month]),:host([is-cweek]){color:var(--color-primary)}:host([is-current][is-month]):after,:host([is-cweek]):after{border-color:var(--color-primary)}:host([is-today]){color:var(--color-text-white) !important}:host([is-today]):after{border-color:var(--color-primary);background-color:var(--color-primary)}:host([is-current][range]){color:var(--color-text-primary) !important}:host([is-current][range])::after{display:none}";

class HcCalendarDay {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillRender() {
        if (this.year) {
            this.el.setAttribute('year', `${this.year}`);
        }
        if (this.month) {
            this.el.setAttribute('month', `${this.month}`);
        }
        if (this.day) {
            this.el.setAttribute('day', `${this.day}`);
        }
        if (this.week) {
            this.el.setAttribute('week', `${this.week}`);
        }
        if (this.range) {
            this.el.setAttribute('range', `${this.range}`);
        }
        if (this.weekday) {
            this.el.setAttribute('weekday', `${this.weekday}`);
        }
    }
    render() {
        return (h(Host, Object.assign({}, {
            'is-today': this.isToday,
            'is-current': this.isCurrent,
            'is-month': this.isMonth,
            'is-week': this.isWeek,
            'is-cweek': this.isCweek
        }), h("slot", null)));
    }
    get el() { return getElement(this); }
}
HcCalendarDay.style = hcCalendarDayCss;

export { HcCalendarDay as hc_calendar_day };
