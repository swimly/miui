import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcPullrefreshCss = ":host{display:block;height:100%;position:relative;overflow:hidden;background:var(--background-color-darke)}:host .mask{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99}:host .content{height:100%;background:var(--background-color-white)}:host .content .up{position:absolute;top:0;left:0;width:100%;transform:translate(0, -100%)}:host .content .scroll{height:100%;overflow:scroll}:host .content .down{position:absolute;bottom:0;left:0;width:100%;transform:translate(0, 100%)}";

class HcPullrefresh {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scrolltop = 0;
        this.maxHeight = 60;
        this.startY = 0;
        this.moca = 0.8;
        this.canPull = false;
        this.dis = 0;
        this.maxScroll = 0;
        this.vrefresh = createEvent(this, "vrefresh", 7);
        this.vloading = createEvent(this, "vloading", 7);
    }
    scrollHandle(v) {
        this.el.setAttribute('scrolltop', `${v}`);
        this.canPull = v > 0 ? false : true;
        console.log(this.canPull);
    }
    footerHandle(v) {
        console.log(v);
    }
    componentDidLoad() {
        this.$content = this.el.shadowRoot.querySelector('.content');
        this.$refresh = this.el.shadowRoot.querySelector('.up');
        this.$loading = this.el.shadowRoot.querySelector('.down');
        var wrap = this.el.shadowRoot.querySelector('.wrap').clientHeight;
        this.$scroll = this.el.shadowRoot.querySelector('.scroll');
        this.maxScroll = wrap - this.$scroll.clientHeight;
    }
    render() {
        return (h(Host, Object.assign({}, { scrolltop: this.scrolltop }, { onTouchstart: this.onTouchStart.bind(this), onTouchmove: this.onTouchMove.bind(this), onTouchend: this.onTouchEnd.bind(this) }), h("div", { class: "content" }, h("hc-pullrefresh-indicate", { height: this.maxHeight, class: "up" }), h("div", { class: "scroll", onScroll: this.onScroll.bind(this) }, h("div", { class: "wrap" }, h("slot", null))), h("hc-pullrefresh-indicate", { icons: "rising,falling,loading,success,cry", labels: "\u4E0A\u62C9\u52A0\u8F7D,\u677E\u624B\u52A0\u8F7D,\u52A0\u8F7D\u4E2D,\u52A0\u8F7D\u6210\u529F,\u52A0\u8F7D\u5931\u8D25", height: this.maxHeight, class: "down" }))));
    }
    onScroll(e) {
        this.scrolltop = e.target.scrollTop;
        if (this.maxScroll == this.scrolltop) {
            this.footer = true;
        }
        else {
            this.footer = false;
        }
    }
    onTouchStart(e) {
        this.$content.style.transition = '0s';
        this.startY = e.changedTouches[0].pageY;
        if (this.scrolltop == 0) {
            this.canPull = true;
            this.$refresh.status = 0;
            this.$loading.status = 0;
        }
    }
    onTouchMove(e) {
        var touch = e.changedTouches[0];
        var deltaY = touch.pageY - this.startY;
        this.dis = this.jump(deltaY);
        if (this.canPull && deltaY > 0) {
            // 下拉刷新
            e.preventDefault();
            this.$content.style.transform = `translate3d(0,${this.dis}px,0)`;
            if (this.dis > this.maxHeight) {
                this.$refresh.status = 1;
            }
        }
        if (this.footer && deltaY < 0) {
            // 上拉加载
            this.$content.style.transform = `translate3d(0,${this.dis}px,0)`;
            if (this.dis < -this.maxHeight) {
                this.$loading.status = 1;
            }
        }
    }
    onTouchEnd() {
        this.$content.style.transition = '0.3s';
        if (this.dis > this.maxHeight && this.canPull) {
            this.$refresh.status = 2;
            this.$content.style.transform = `translate3d(0,${this.maxHeight}px,0)`;
            this.vrefresh.emit();
        }
        else if (this.dis < -this.maxHeight && this.footer) {
            this.$loading.status = 2;
            this.$content.style.transform = `translate3d(0,${-this.maxHeight}px,0)`;
            this.vloading.emit();
        }
        else if (this.canPull || this.footer) {
            this.$content.style.transform = `translate3d(0,0,0)`;
        }
        this.moca = 0.8;
    }
    jump(current) {
        this.moca = this.moca > 0.4 ? this.moca - 0.08 : 0.4;
        return current * this.moca;
    }
    async RefreshSuccess() {
        this.$refresh.status = 3;
        setTimeout(() => {
            this.$content.style.transform = `translate3d(0,0,0)`;
            this.$scroll.scrollTop = 1;
        }, 1000);
    }
    async RefreshFailed() {
        this.$refresh.status = 4;
        setTimeout(() => {
            this.$content.style.transform = `translate3d(0,0,0)`;
            this.$scroll.scrollTop = 1;
        }, 1000);
    }
    async LoadingSuccess() {
        this.$loading.status = 3;
        setTimeout(() => {
            this.$content.style.transform = `translate3d(0,0,0)`;
            this.$scroll.scrollTop = this.maxScroll - 1;
        }, 1000);
    }
    async LoadingFailed() {
        this.$loading.status = 4;
        setTimeout(() => {
            this.$content.style.transform = `translate3d(0,0,0)`;
            this.$scroll.scrollTop = this.maxScroll - 1;
        }, 1000);
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "scrolltop": ["scrollHandle"],
        "footer": ["footerHandle"]
    }; }
}
HcPullrefresh.style = hcPullrefreshCss;

export { HcPullrefresh as hc_pullrefresh };
