import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';
import { d as dateFormat, g as get3WeekDays, a as getRangeMonthDays, b as get3MonthDays, D as DisDate } from './calendar-e466bc31.js';

const hcCalendarCss = ":host{display:block}";

class HcCalendar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.date = dateFormat('YYYY/mm/dd', new Date());
        this.weekday = new Date(this.date).getDay();
    }
    dateHandle(v) {
        this.el.shadowRoot.querySelector('hc-calendar-head').setAttribute('date', v);
        this.el.setAttribute('date', v);
    }
    componentDidLoad() {
        var content = this.el.shadowRoot.querySelector('hc-calendar-content');
        var head = this.el.shadowRoot.querySelector('hc-calendar-head');
        content.addEventListener('vswitch', this.onSwitch.bind(this));
        head.addEventListener('vtypechange', this.onTypeChange.bind(this));
        head.addEventListener('vdatechange', this.onDateChange.bind(this));
    }
    render() {
        this.data = this.type == 'week' ? get3WeekDays(this.date) : this.range ? getRangeMonthDays(this.date, this.range) : get3MonthDays(this.date);
        var now = new Date();
        var y = now.getFullYear();
        var m = now.getMonth() + 1;
        var d = now.getDate();
        let dom;
        // 月滚动视图
        if (this.type === 'week') {
            dom = (h("hc-calendar-content", Object.assign({}, {
                width: this.el.offsetWidth,
                'is-week': this.type == 'week'
            }), this.data.map((week) => (h("hc-calendar-week", Object.assign({}, {
                width: this.el.offsetWidth
            }), week.days.map((day) => (h("hc-calendar-day", Object.assign({}, {
                year: day.year,
                month: day.month,
                day: day.day,
                weekday: day.weekday,
                week: day.week,
                'is-today': day.year == y && day.month == m && day.day == d,
                'is-current': day.day == d,
                'is-week': true,
                'is-cweek': day.weekday == this.weekday
            }), day.day))))))));
            // 月试图
        }
        else {
            dom = (h("hc-calendar-content", Object.assign({}, {
                width: this.el.offsetWidth,
                range: this.range,
                vertical: this.range ? true : false
            }), this.data.map((month) => (h("hc-calendar-month", Object.assign({}, {
                width: this.el.offsetWidth,
                month: month.month,
                range: this.range,
                multiple: this.data[0].month !== this.data[this.data.length - 1].month
            }), month.days.map((week) => (h("hc-calendar-week", null, week.map((day) => (h("hc-calendar-day", Object.assign({}, {
                year: day.year,
                month: day.month,
                day: day.day,
                week: day.week,
                weekday: day.weekday,
                range: this.range,
                'is-today': day.year == y && day.month == m && day.day == d,
                'is-current': day.day == d,
                'is-month': day.month == month.month
            }), day.day)))))))))));
        }
        return (h(Host, null, h("hc-calendar-head", Object.assign({}, { date: this.date, type: this.type })), h("slot", null, dom)));
    }
    onSwitch(e) {
        if (this.type !== 'week') {
            var time = new Date(this.date);
            var year = time.getFullYear();
            var month = time.getMonth() + 1;
            var day = time.getDate();
            if (e.detail == 'next') {
                year = month < 12 ? year : year + 1;
                month = month < 12 ? month + 1 : 1;
            }
            else {
                year = month > 1 ? year : year - 1;
                month = month > 1 ? month - 1 : 12;
            }
            this.date = `${year}/${month}/${day}`;
        }
        else {
            if (e.detail == 'next') {
                this.date = DisDate(this.date, 7);
            }
            else {
                this.date = DisDate(this.date, -7);
            }
        }
    }
    onTypeChange(e) {
        if (!this.range) {
            this.type = e.detail;
        }
    }
    onDateChange(e) {
        this.date = e.detail;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "date": ["dateHandle"]
    }; }
}
HcCalendar.style = hcCalendarCss;

export { HcCalendar as hc_calendar };
