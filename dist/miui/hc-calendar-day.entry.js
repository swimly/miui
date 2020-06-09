import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcCalendarDayCss = ":host{display:flex;font-size:0.8rem;color:var(--color-text-placeholder);flex:1;flex-direction:column;align-items:center;justify-content:center;position:relative;min-height:2.4rem}:host:after{content:attr(day);display:flex;flex-direction:row;align-items:center;justify-content:center;width:2.4rem;height:2.4rem;border-radius:50%;border:1px solid transparent;background:none;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);box-sizing:border-box}:host([is-month]),:host([is-week]),:host([range]){color:var(--color-text-primary)}:host([is-current][is-month]),:host([is-cweek]){color:var(--color-primary)}:host([is-current][is-month]):after,:host([is-cweek]):after{border-color:var(--color-primary)}:host([is-today][is-current]){color:var(--color-text-white)}:host([is-today][is-current]):after{border-color:var(--color-primary);background-color:var(--color-primary)}:host([is-current][range]){color:var(--color-text-primary)}:host([is-current][range])::after{display:none}:host([range]){font-size:0}:host([range][is-month]){font-size:0.8rem}:host([select][range][is-month]){background:var(--color-primary-light);color:var(--color-primary) !important}:host([begin][range][is-month]){background:var(--color-primary);border-radius:0.3rem 0 0 0.3rem;color:var(--color-text-white) !important}:host([end][range][is-month]){background:var(--color-primary);border-radius:0 0.3rem 0.3rem 0;color:var(--color-text-white) !important}";

class HcCalendarDay {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.section = '';
        this.vclick = createEvent(this, "vclick", 7);
        this.vrange = createEvent(this, "vrange", 7);
    }
    sectionHandle() {
        this.renderClass();
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
        if (this.section) {
            this.el.setAttribute('section', `${this.section}`);
        }
    }
    componentDidLoad() {
        this.renderClass();
    }
    render() {
        return (h(Host, Object.assign({}, {
            'is-today': this.isToday,
            'is-current': this.isCurrent,
            'is-month': this.isMonth,
            'is-week': this.isWeek,
            'is-cweek': this.isCweek
        }, { onClick: this.onClick.bind(this) }), h("slot", null)));
    }
    onClick() {
        if (this.range) {
            this.vrange.emit({
                date: `${this.year}/${this.month}/${this.day}`
            });
            this.el.setAttribute('select', 'true');
            this.el.setAttribute('begin', 'true');
        }
        else {
            this.vclick.emit({
                date: `${this.year}/${this.month}/${this.day}`,
                year: this.year,
                month: this.month,
                day: this.day,
                weekday: this.weekday,
                week: this.week
            });
        }
    }
    renderClass() {
        if (this.range) {
            var dif = this.section.split(',');
            var date = `${this.year}/${this.month >= 10 ? this.month : '0' + this.month}/${this.day >= 10 ? this.day : '0' + this.day}`;
            var index = dif.indexOf(date);
            if (index >= 0) {
                this.el.setAttribute('select', 'true');
                if (index == 0) {
                    this.el.setAttribute('begin', 'true');
                }
                if (index == dif.length - 1) {
                    this.el.setAttribute('end', 'true');
                }
            }
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "section": ["sectionHandle"]
    }; }
}
HcCalendarDay.style = hcCalendarDayCss;

export { HcCalendarDay as hc_calendar_day };
