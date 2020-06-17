import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { h as hammer } from './hammer-a3a84d6d.js';

const hcCalendarContentCss = ":host{display:block;overflow:hidden;height:12rem}:host .wrap{display:flex;flex-direction:row;height:100%}:host([vertical]){overflow:auto}:host([vertical]) .wrap{flex-direction:column;height:auto}:host([is-week]){height:auto}";

class HcCalendarContent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vswitch = createEvent(this, "vswitch", 7);
    }
    componentDidLoad() {
        if (this.vertical) {
            this.el.setAttribute('vertical', 'true');
        }
        if (!this.vertical) {
            this.bindTouch();
        }
    }
    render() {
        var width = this.vertical ? this.width : this.width * 3;
        return (h(Host, Object.assign({}, { 'is-week': this.isWeek, range: this.range }), h("div", { class: "wrap", style: { width: `${width}px`, transform: `translate3d(${this.vertical ? 0 : -this.width}px, 0, 0)` } }, h("slot", null))));
    }
    bindTouch() {
        var offset = -this.width;
        var wrap = this.el.shadowRoot.querySelector('.wrap');
        var hammer$1 = new hammer(this.el);
        hammer$1.get('pan').set({ direction: hammer.DIRECTION_HORIZONTAL });
        hammer$1.on('panstart', () => {
            wrap.style.transition = `0s`;
        });
        hammer$1.on('pan', (e) => {
            wrap.style.transform = `translate3d(${offset + e.deltaX}px, 0, 0)`;
        });
        hammer$1.on('panend', (e) => {
            wrap.style.transition = `0.3s`;
            if (e.deltaX > 100) {
                wrap.style.transform = `translate3d(0px, 0, 0)`;
                setTimeout(() => {
                    wrap.style.transition = `0s`;
                    wrap.style.transform = `translate3d(${-this.width}px, 0, 0)`;
                    this.vswitch.emit('prev');
                }, 300);
            }
            else if (e.deltaX < -100) {
                wrap.style.transform = `translate3d(${-this.width * 2}px, 0, 0)`;
                setTimeout(() => {
                    wrap.style.transition = `0s`;
                    wrap.style.transform = `translate3d(${-this.width}px, 0, 0)`;
                    this.vswitch.emit('next');
                }, 300);
            }
            else {
                wrap.style.transform = `translate3d(${-this.width}px, 0, 0)`;
            }
        });
    }
    get el() { return getElement(this); }
}
HcCalendarContent.style = hcCalendarContentCss;

export { HcCalendarContent as hc_calendar_content };
