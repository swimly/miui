import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { d as dateFormat, f as getMonthLength } from './calendar-9d35348e.js';

const hcDateCss = ":host{display:block}:host .title{font-size:0.9rem;color:var(--color-text-primary);text-align:center;font-weight:normal;margin:1rem 0}:host .type{font-size:0.7rem;color:var(--color-text-secondary);margin:0 0 0.5rem 0;padding-bottom:0.5rem;position:relative}:host .type::after{content:\"\";box-sizing:border-box;border-radius:0;position:absolute;box-sizing:border-box;transition:0.3s;bottom:0;left:0;width:100%;height:1px;background:var(--border-color-base);transform-origin:left bottom;transform:scaleY(0.5)}:host .footer{height:2.2rem;padding:1rem}:host .footer hc-col:first-child{padding-right:0.5rem}:host .footer hc-col:last-child{padding-left:0.5rem}";

class HcDate {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'YYYY,MM,DD';
        this.value = dateFormat(this.type, new Date());
        this.start = 1980;
        this.end = 2050;
        this.heading = '请选择';
        this.footer = true;
        this.vchange = createEvent(this, "vchange", 7);
    }
    componentDidLoad() {
        this.$drawer = this.el.shadowRoot.querySelector('hc-drawer');
    }
    render() {
        var type = this.type.split(',');
        var heading = null;
        var footer = null;
        var types = null;
        this.date = this.value.split(',');
        this.YYYY = Array.from({ length: this.end - this.start + 1 }, (v, k) => {
            if (!v) {
                return `${k + this.start}`;
            }
        }).reverse();
        this.MM = this.computedArray(12, 1);
        this.DD = this.computedArray(getMonthLength(this.date[0], this.date[1]), 1);
        this.hh = this.computedArray(24, 0);
        this.mm = this.computedArray(60, 0);
        this.ss = this.computedArray(60, 0);
        if (this.heading) {
            heading = (h("h2", { class: "title" }, this.heading));
        }
        if (this.footer) {
            footer = (h("hc-row", { class: "footer" }, h("hc-col", { span: 12 }, h("hc-button", { type: "info", onClick: this.destory.bind(this), rounder: true }, "\u53D6\u6D88")), h("hc-col", { align: "right", span: 12 }, h("hc-button", { type: "primary", onClick: this.destory.bind(this), rounder: true }, "\u786E\u5B9A"))));
        }
        if (this.indicate) {
            var unit = {
                YYYY: '年',
                MM: '月',
                DD: '日',
                hh: '时',
                mm: '分',
                ss: '秒'
            };
            types = (h("hc-row", { class: "type" }, type.map(item => (h("hc-col", { flex: 1, align: "center" }, unit[item])))));
        }
        var content = (h("div", null, heading, types, h("hc-picker-content", { onVvaluechange: this.onChange.bind(this) }, type.map((item, index) => {
            return this.renderDom(item, index);
        })), footer));
        if (this.command || this.el.children.length) {
            content = (h("hc-drawer", { clickable: false, rounder: true, place: "down" }, heading, types, h("hc-picker-content", { onVvaluechange: this.onChange.bind(this) }, type.map((item, index) => {
                return this.renderDom(item, index);
            })), footer));
        }
        return (h(Host, null, h("div", { class: "slot", onClick: this.onDisplay.bind(this) }, h("slot", null)), content));
    }
    computedArray(length, dis) {
        return Array.from({ length: length }, (v, k) => {
            if (!v) {
                return k + dis >= 10 ? `${k + dis}` : `0${k + dis}`;
            }
        });
    }
    onChange(e) {
        this.value = e.detail.value;
    }
    renderDom(id, index) {
        if (!this[id])
            return false;
        var date = this.value.split(',');
        var current = this[id].indexOf(date[index]);
        return (h("hc-picker-view", { index: index, id: id, current: current, value: date[index] }, this[id].map((item) => (h("hc-picker-item", { value: item }, item)))));
    }
    async destory() {
        this.$drawer.destory();
        this.vchange.emit({
            value: this.value
        });
        setTimeout(() => {
            if (this.command) {
                setTimeout(() => {
                    document.body.removeChild(this.el);
                }, 300);
            }
        }, 300);
    }
    async onDisplay() {
        this.$drawer.generate();
    }
    async generate(option = null) {
        if (option) {
            var date = document.createElement('hc-date');
            for (let key in option) {
                var prop;
                if (typeof option[key] !== 'string') {
                    prop = JSON.stringify(option[key]);
                }
                else {
                    prop = option[key];
                }
                date.setAttribute(key, prop);
            }
            date.setAttribute('command', 'true');
            document.body.appendChild(date);
            date.generate();
            return date;
        }
        else {
            setTimeout(() => {
                this.onDisplay();
            }, 30);
        }
    }
    get el() { return getElement(this); }
}
HcDate.style = hcDateCss;

export { HcDate as hc_date };
