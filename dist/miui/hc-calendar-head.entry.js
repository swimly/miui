import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { e as getDiffDate, d as dateFormat } from './calendar-9d35348e.js';

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
        var head = this.header.split(',');
        var titles = this.el.shadowRoot.querySelector('.title').querySelectorAll('hc-col');
        titles.forEach(tit => {
            var id = tit.getAttribute('id');
            if (head.indexOf(id) < 0) {
                tit.style.display = 'none';
            }
        });
    }
    render() {
        var arr = ['一', '二', '三', '四', '五', '六', '日'];
        var weekday = (h("hc-row", { class: "week" }, arr.map(item => (h("hc-col", { flex: 1, align: "center" }, item)))));
        var dif = getDiffDate(this.date);
        var diff = (h("span", null));
        var today = (h("span", null));
        if (!this.range) {
            if (dif > 0) {
                diff = h("hc-tag", { rounder: true, size: 'small' }, dif, "\u5929\u524D");
                today = (h("hc-tag", { size: "small", onClick: this.backToday.bind(this), type: "primary", rounder: true, outline: true }, "\u4ECA"));
            }
            else if (dif < 0) {
                diff = h("hc-tag", { rounder: true, size: 'small' }, -dif, "\u5929\u540E");
                today = (h("hc-tag", { size: "small", onClick: this.backToday.bind(this), type: "primary", rounder: true, outline: true }, "\u4ECA"));
            }
            else {
                diff = h("hc-tag", { rounder: true, size: 'small' }, "\u4ECA\u65E5");
            }
        }
        var types = this.type == 'week' ? '周' : '月';
        var type;
        if (!this.range) {
            var type = (h("hc-tag", { style: { marginLeft: `10px` }, type: "primary", size: "small", rounder: true, outline: true, onClick: this.changeType.bind(this) }, types));
        }
        else {
            type = (h("span", null));
        }
        return (h(Host, null, h("hc-row", { class: "title", align: "center" }, h("hc-col", { align: "center", span: 10, id: "title" }, dateFormat('YYYY年MM月', new Date(this.date))), h("hc-col", { id: "diff", flex: 1 }, diff), h("hc-col", { id: "today" }, today), h("hc-col", { id: "type", align: "right" }, type)), weekday, h("slot", null)));
    }
    changeType() {
        this.type = this.type == 'week' ? 'month' : 'week';
        this.vtypechange.emit(this.type);
    }
    backToday() {
        var time = new Date();
        this.date = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
    }
    async setTitle(v) {
        this.el.shadowRoot.querySelector('#title').innerHTML = dateFormat('YYYY年MM月', new Date(v));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "date": ["dateHandle"]
    }; }
}
HcCalendarHead.style = hcCalendarHeadCss;

export { HcCalendarHead as hc_calendar_head };
