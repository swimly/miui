import { r as registerInstance, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { h as hammer } from './hammer-a3a84d6d.js';

const hcSwipemenuCss = ":host{display:block;position:relative;overflow:hidden}:host .content{background:var(--background-color-white);position:relative;z-index:10;display:block}:host .handle{position:absolute;right:0;top:0;height:100%;display:flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;justify-content:flex-end;width:auto;z-index:9}";

class HcSwipemenu {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.offset = 0;
    }
    componentDidLoad() {
        this.bindTouch();
    }
    render() {
        return (h(Host, null, h("div", { class: "handle" }, h("slot", { name: "handle" })), h("div", { class: "content" }, h("slot", null))));
    }
    bindTouch() {
        var handle = this.el.shadowRoot.querySelector('.handle');
        var content = this.el.shadowRoot.querySelector('.content');
        var hammer$1 = new hammer(this.el);
        var itemWidth = handle.clientWidth;
        var length = handle.children.length;
        hammer$1.get('pan').set({ direction: hammer.DIRECTION_HORIZONTAL });
        hammer$1.on('panstart', () => {
            content.style.transition = '0s';
        });
        hammer$1.on('pan', (e) => {
            var dis = this.offset == 0 && e.deltaX > 0 ? 0 : e.deltaX;
            content.style.transform = `translate3d(${dis + this.offset}px, 0, 0)`;
        });
        hammer$1.on('panend', (e) => {
            this.offset += e.deltaX;
            content.style.transition = '0.3s';
            if (e.deltaX > -itemWidth) {
                this.offset = 0;
            }
            if (e.deltaX < -itemWidth / 2) {
                this.offset = -itemWidth * length;
            }
            content.style.transform = `translate3d(${this.offset}px, 0, 0)`;
            console.log(this.offset);
        });
    }
    get el() { return getElement(this); }
}
HcSwipemenu.style = hcSwipemenuCss;

export { HcSwipemenu as hc_swipemenu };
