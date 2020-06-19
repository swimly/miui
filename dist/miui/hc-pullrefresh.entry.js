import { r as registerInstance, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcPullrefreshCss = ":host{display:block;height:100%;position:relative;overflow:hidden}:host .mask{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99}:host .content{height:100%;overflow:scroll}";

class HcPullrefresh {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scrolltop = 0;
        this.maxHeight = 80;
        this.startY = 0;
        this.moca = 0.9;
    }
    scrollHandle(v) {
        this.el.setAttribute('scrolltop', `${v}`);
    }
    footerHandle(v) {
        console.log(v);
    }
    componentDidLoad() {
        this.$content = this.el.shadowRoot.querySelector('.content');
    }
    render() {
        return (h(Host, Object.assign({}, { scrolltop: this.scrolltop }, { onTouchstart: this.onTouchStart.bind(this), onTouchmove: this.onTouchMove.bind(this), onTouchend: this.onTouchEnd.bind(this) }), h("div", { class: "content", onScroll: this.onScroll.bind(this) }, h("div", { class: "wrap" }, h("slot", null)))));
    }
    onScroll(e) {
        var wrap = this.el.shadowRoot.querySelector('.wrap').clientHeight;
        var content = this.$content.clientHeight;
        this.scrolltop = e.target.scrollTop;
        if (wrap - content == this.scrolltop) {
            this.footer = true;
        }
        else {
            this.footer = false;
        }
    }
    onTouchStart(e) {
        this.$content.style.transition = '0s';
        this.startY = e.changedTouches[0].pageY;
    }
    onTouchMove(e) {
        var touch = e.changedTouches[0];
        var deltaY = touch.pageY - this.startY;
        var dis = this.jump(deltaY, this.maxHeight);
        console.log(dis);
        if (this.scrolltop == 0 && deltaY > 0) {
            // 下拉刷新
            console.log('可以开始');
            e.preventDefault();
            this.$content.style.transform = `translate3d(0,${dis}px,0)`;
        }
        if (this.footer && deltaY < 0) {
            // 上拉加载
            this.$content.style.transform = `translate3d(0,${deltaY}px,0)`;
        }
    }
    onTouchEnd(e) {
        var touch = e.changedTouches[0];
        if (touch.pageY - this.startY > 0 && !this.scrolltop) {
            this.$content.style.transition = '0.3s';
            this.$content.style.transform = `translate3d(0,0,0)`;
            this.$content.scrollTop = 1;
        }
        if (touch.pageY - this.startY < 0 && this.footer) {
            this.$content.style.transition = '0.3s';
            this.$content.style.transform = `translate3d(0,0,0)`;
        }
        this.moca = 0.9;
    }
    jump(current, target) {
        this.moca = this.moca > 0.5 ? this.moca - 0.05 : 0.5;
        return current * this.moca;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "scrolltop": ["scrollHandle"],
        "footer": ["footerHandle"]
    }; }
}
HcPullrefresh.style = hcPullrefreshCss;

export { HcPullrefresh as hc_pullrefresh };
