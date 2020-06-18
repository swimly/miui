import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { d as dateFormat, g as get3WeekDays, a as getRangeMonthDays, b as get3MonthDays, c as getDiffDates, D as DisDate } from './calendar-9d35348e.js';

const hcCalendarCss = ":host{display:block}:host .footer{padding:0 0.8rem 0.8rem 0.8rem}:host .footer hc-col:last-child{padding-left:0.4rem}:host .footer hc-col:first-child{padding-right:0.4rem}";

class HcCalendar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.date = dateFormat('YYYY/MM/DD', new Date());
        this.current = dateFormat('YYYY/MM/DD', new Date());
        this.weekday = new Date(this.date).getDay();
        this.section = '';
        this.padding = 0;
        this.header = 'title,diff,today,type';
        this.vchange = createEvent(this, "vchange", 7);
        this.vdone = createEvent(this, "vdone", 7);
    }
    dateHandle(v) {
        this.el.shadowRoot.querySelector('hc-calendar-head').setAttribute('date', v);
        this.el.setAttribute('date', v);
    }
    currentHandle(v) {
        this.el.setAttribute('current', v);
        var week = (new Date(v)).getDay();
        this.weekday = week == 0 ? 7 : week;
        this.vchange.emit({
            date: v
        });
    }
    weekdayHandl(v) {
        this.el.setAttribute('weekday', v);
    }
    sectionHandle(v) {
        this.el.setAttribute('section', v);
    }
    componentDidLoad() {
        this.select = this.section ? this.section.split(',') : [];
        this.$drawer = this.el.shadowRoot.querySelector('hc-drawer');
    }
    render() {
        var section = this.section.split(',');
        this.data = this.type == 'week' ? get3WeekDays(this.date) : this.range ? getRangeMonthDays(this.date, this.range) : get3MonthDays(this.date);
        if (this.section.split(',').length > 1) {
            var dif = getDiffDates(section[0], section[1]).join(',');
        }
        var now = new Date(this.current);
        var d = now.getDate();
        var time = new Date();
        let dom;
        var width = this.el.offsetWidth - this.padding * 2;
        // 月滚动视图
        if (this.type === 'week') {
            dom = (h("hc-calendar-content", Object.assign({}, {
                width: width,
                'is-week': this.type == 'week'
            }, { onVswitch: this.onSwitch.bind(this) }), this.data.map((week) => (h("hc-calendar-week", Object.assign({}, {
                width: width
            }), week.days.map((day, index) => (h("hc-calendar-day", Object.assign({}, {
                index: index,
                year: day.year,
                month: day.month,
                day: day.day,
                weekday: day.weekday,
                week: day.week,
                'is-today': day.year == time.getFullYear() && day.month == time.getMonth() + 1 && day.day == time.getDate(),
                'is-current': day.day == d,
                'is-week': true,
                'is-cweek': day.weekday == this.weekday
            }, { onVclick: this.onClick.bind(this) }), day.day))))))));
            // 月试图
        }
        else {
            dom = (h("hc-calendar-content", Object.assign({}, {
                width: width,
                range: this.range,
                vertical: this.range ? true : false
            }, { onVswitch: this.onSwitch.bind(this) }), this.data.map((month, i) => (h("hc-calendar-month", Object.assign({}, {
                width: width,
                year: month.year,
                month: month.month,
                range: this.range,
                index: i
            }, { onVmonthchange: this.onMonthChange.bind(this) }), month.days.map((week) => (h("hc-calendar-week", null, week.map((day, index) => (h("hc-calendar-day", Object.assign({}, {
                index: index,
                year: day.year,
                month: day.month,
                day: day.day,
                week: day.week,
                weekday: day.weekday,
                range: this.range,
                section: dif,
                'is-today': day.year == time.getFullYear() && day.month == time.getMonth() + 1 && day.day == time.getDate(),
                'is-current': day.day == d,
                'is-month': day.month == month.month
            }, { onVclick: this.onClick.bind(this), onVrange: this.onRange.bind(this) }), day.day)))))))))));
        }
        var doms = (h("div", { style: { padding: `${this.padding}px` } }, h("hc-calendar-head", Object.assign({}, {
            date: this.date, type: this.type, range: this.range, header: this.header
        }, { onVtypechange: this.onTypeChange.bind(this), onVdatechange: this.onDateChange.bind(this) })), h("slot", null, dom)));
        var footer = (h("div", null));
        if (this.showButtons) {
            footer = (h("hc-row", { class: "footer" }, h("hc-col", { span: 12 }, h("hc-button", { onClick: this.destory.bind(this), type: "info", rounder: true }, "\u53D6\u6D88")), h("hc-col", { align: "right", span: 12 }, h("hc-button", { onClick: this.destory.bind(this), type: "primary", rounder: true }, "\u786E\u5B9A"))));
        }
        var content;
        if (this.command) {
            content = (h("hc-drawer", { place: "down", rounder: true }, doms, footer));
        }
        return (h(Host, { style: { padding: `${this.padding}px` } }, this.command ? content : doms));
    }
    onSwitch(e) {
        // 切换月份
        if (this.type !== 'week') {
            var time = new Date(this.date);
            var year = time.getFullYear();
            var month = time.getMonth() + 1;
            var day = time.getDate();
            if (e.detail == 'next') {
                // 下个月
                year = month < 12 ? year : year + 1;
                month = month < 12 ? month + 1 : 1;
            }
            else {
                // 上个月
                year = month > 1 ? year : year - 1;
                month = month > 1 ? month - 1 : 12;
            }
            this.date = `${year}/${month}/${day}`;
            // 切换星期
        }
        else {
            if (e.detail == 'next') {
                // 下周
                this.date = DisDate(this.date, 7);
            }
            else {
                // 上周
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
        this.current = e.detail;
    }
    onMonthChange(e) {
        this.el.shadowRoot.querySelector('hc-calendar-head').setTitle(`${e.detail.year}/${e.detail.month}/1`);
    }
    onClick(e) {
        this.date = e.detail.date;
        this.current = e.detail.date;
        this.weekday = e.detail.weekday;
    }
    onRange(e) {
        if (this.section) {
            this.onClear();
        }
        if (this.select.length < 2) {
            // 处理选中，始终保证小的日期在前面
            if ((new Date(e.detail.date)).getTime() < (new Date(this.select[0])).getTime()) {
                this.select.push(this.select[0]);
                this.select[0] = e.detail.date;
            }
            else {
                this.select.push(e.detail.date);
            }
        }
        else {
            this.select = [];
            this.select.push(e.detail.date);
        }
        if (this.select.length == 2) {
            this.section = this.select.join(',');
        }
    }
    onClear() {
        // 提高查找效率，只查找上次选中的日期
        var days = this.el.shadowRoot.querySelectorAll('hc-calendar-day[select]');
        days.forEach(day => {
            day.removeAttribute('select');
            day.removeAttribute('begin');
            day.removeAttribute('end');
        });
    }
    async destory() {
        this.$drawer.destory();
        this.vdone.emit({
            date: this.range ? this.section : this.current
        });
        setTimeout(() => {
            if (this.command) {
                setTimeout(() => {
                    document.body.removeChild(this.el);
                }, 300);
            }
        }, 300);
    }
    async generate(option = null) {
        if (option) {
            var calendar = document.createElement('hc-calendar');
            for (let key in option) {
                var prop;
                if (typeof option[key] == 'object') {
                    prop = JSON.stringify(option[key]);
                }
                else {
                    prop = option[key];
                }
                calendar.setAttribute(key, prop);
            }
            calendar.setAttribute('padding', `15`);
            calendar.setAttribute('command', 'true');
            calendar.setAttribute('show-buttons', 'true');
            document.body.appendChild(calendar);
            calendar.generate();
            return calendar;
        }
        else {
            setTimeout(() => {
                this.$drawer.generate();
            }, 30);
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "date": ["dateHandle"],
        "current": ["currentHandle"],
        "weekday": ["weekdayHandl"],
        "section": ["sectionHandle"]
    }; }
}
HcCalendar.style = hcCalendarCss;

export { HcCalendar as hc_calendar };
