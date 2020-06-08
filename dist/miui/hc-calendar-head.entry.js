import { r as registerInstance, c as createEvent, h, H as Host } from './index-17e92c35.js';
import { c as getDiffDate, d as dateFormat } from './calendar-e466bc31.js';

const hcCalendarHeadCss = ":host{display:block;margin-bottom:0.4rem}:host .title{font-size:0.96rem;margin-bottom:0.48rem}:host .week{font-size:0.64rem;color:var(--color-text-primary)}";

class HcCalendarHead {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vtypechange = createEvent(this, "vtypechange", 7);
        this.vdatechange = createEvent(this, "vdatechange", 7);
    }
    dateHandle(v) {
        this.vdatechange.emit(v);
    }
    componentDidLoad() {
    }
    render() {
        var arr = ['一', '二', '三', '四', '五', '六', '日'];
        var weekday = (h("hc-row", { class: "week" }, arr.map(item => (h("hc-col", { flex: 1, align: "center" }, item)))));
        var dif = getDiffDate(this.date);
        var str = '';
        var today = (h("span", null));
        if (dif > 0) {
            str = `${dif}天前`;
            today = (h("hc-tag", { size: "small", onClick: this.backToday.bind(this), type: "primary", rounder: true, outline: true }, "\u4ECA"));
        }
        else if (dif < 0) {
            str = `${-dif}天后`;
            today = (h("hc-tag", { size: "small", onClick: this.backToday.bind(this), type: "primary", rounder: true, outline: true }, "\u4ECA"));
        }
        else {
            str = '今日';
        }
        var type = this.type == 'week' ? '周' : '月';
        return (h(Host, null, h("hc-row", { class: "title" }, h("hc-col", { span: 10 }, dateFormat('YYYY年mm月', new Date(this.date))), h("hc-col", null, h("hc-tag", { rounder: true, size: 'small' }, str)), h("hc-col", { flex: 1, align: "right" }, today, h("hc-tag", { style: { marginLeft: `10px` }, type: "primary", size: "small", rounder: true, outline: true, onClick: this.changeType.bind(this) }, type))), weekday, h("slot", null)));
    }
    changeType() {
        this.type = this.type == 'week' ? 'month' : 'week';
        this.vtypechange.emit(this.type);
    }
    backToday() {
        var time = new Date();
        this.date = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
    }
    static get watchers() { return {
        "date": ["dateHandle"]
    }; }
}
HcCalendarHead.style = hcCalendarHeadCss;

export { HcCalendarHead as hc_calendar_head };
