import { r as registerInstance, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { h as hammer } from './hammer-a3a84d6d.js';

const hcPullrefreshCss = ":host{display:block;height:100%;position:relative}:host .mask{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99}:host .content{height:100%;overflow:scroll}";

class HcPullrefresh {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scrolltop = 0;
    }
    scrollHandle(v) {
        this.el.setAttribute('scrolltop', `${v}`);
    }
    componentDidLoad() {
        this.el.setAttribute('scrolltop', `${this.scrolltop}`);
        this.$content = this.el.shadowRoot.querySelector('.content');
        this.bindTouch();
    }
    render() {
        return (h(Host, null, h("div", { class: "mask", style: { display: this.scrolltop == 0 ? 'block' : 'none' } }), h("div", { class: "content", onScroll: this.onScroll.bind(this) }, h("slot", null))));
    }
    onScroll(e) {
        this.scrolltop = e.target.scrollTop;
    }
    bindTouch() {
        this.hammer = new hammer(this.el.shadowRoot.querySelector('.mask'));
        this.hammer.get('pan').set({ direction: hammer.DIRECTION_VERTICAL });
        this.hammer.on('panstart', () => {
            this.$content.style.transition = '0s';
        });
        this.hammer.on('pan', (e) => {
            if (e.deltaY < 0) {
                this.$content.scrollTop = -e.deltaY;
            }
            else {
                this.$content.style.transform = `translate3d(0,${e.deltaY}px, 0)`;
            }
        });
        this.hammer.on('panend', (e) => {
            this.$content.style.transition = '0.3s';
            this.$content.style.transform = `translate3d(0,${0}px, 0)`;
        });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "scrolltop": ["scrollHandle"]
    }; }
}
HcPullrefresh.style = hcPullrefreshCss;

export { HcPullrefresh as hc_pullrefresh };
