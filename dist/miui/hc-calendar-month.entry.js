import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcCalendarMonthCss = ":host{display:flex;flex-direction:column;position:relative;height:100%}:host:after{content:attr(month);position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:5.6rem;color:var(--color-text-placeholder);z-index:1}:host .title{font-size:0.88rem;color:var(--color-text-primary);font-weight:normal;margin:0.5rem 0;text-align:center}:host .title.hide{font-size:0}:host([range]){height:auto}";

class HcCalendarMonth {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vmonthchange = createEvent(this, "vmonthchange", 7);
    }
    componentDidLoad() {
        if (this.range) {
            this.bindObverse();
            if (this.index == 0) {
                this.el.shadowRoot.querySelector('.title').classList.add('hide');
            }
        }
    }
    render() {
        var title = (h("span", null));
        if (this.range) {
            title = (h("h2", Object.assign({}, { year: this.year, month: this.month }, { class: "title" }), this.year, "\u5E74", this.month, "\u6708"));
        }
        return (h(Host, Object.assign({}, { month: this.month, range: this.range, year: this.year }, { style: { width: `${this.width}px` } }), title, h("slot", null)));
    }
    bindObverse() {
        var io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry && entry.isIntersecting) {
                    this.vmonthchange.emit({
                        year: entry.target.getAttribute('year'),
                        month: entry.target.getAttribute('month')
                    });
                }
            });
        });
        io.observe(this.el.shadowRoot.querySelector('.title'));
    }
    get el() { return getElement(this); }
}
HcCalendarMonth.style = hcCalendarMonthCss;

export { HcCalendarMonth as hc_calendar_month };
