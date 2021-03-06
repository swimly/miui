import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcViewCss = ":host{display:block;flex:1;overflow:auto;padding:0.5rem}";

class HcView {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vscroll = createEvent(this, "vscroll", 7);
    }
    render() {
        return (h(Host, { onScroll: this.onScroll.bind(this), style: {
                backgroundColor: this.background,
                padding: `${this.padding}px`
            } }, h("slot", null)));
    }
    onScroll(e) {
        this.vscroll.emit({
            event: e,
            scrolltop: this.el.scrollTop
        });
    }
    get el() { return getElement(this); }
}
HcView.style = hcViewCss;

export { HcView as hc_view };
