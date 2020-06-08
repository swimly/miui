import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcNoticebarCss = ":host{display:flex;flex-direction:row;align-items:center;position:relative;height:2.1rem;padding:0 0.5rem;font-size:0.7rem;color:var(--color-warning)}:host .bg{content:\"\";display:block;position:absolute;right:0;bottom:0;left:0;top:0;background:var(--color-warning);opacity:0.1;z-index:1}:host .content{flex:1;white-space:nowrap;height:100%;display:flex;flex-direction:row;align-items:center;overflow:hidden;position:relative;margin:0 0.5rem}:host .content .wrap{position:absolute;transition-timing-function:linear;transition-delay:0s;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .close{position:relative;z-index:2}";

class HcNoticebar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.speed = 80;
        this.scrollable = true;
        this.vhide = createEvent(this, "vhide", 7);
    }
    componentDidLoad() {
        this.$wrap = this.el.shadowRoot.querySelector('.wrap');
        this.width = this.$wrap.clientWidth;
        this.duration = Math.round(this.width / this.speed);
        if (this.color) {
            console.log(this.el.querySelector(':after'));
        }
        if (this.scrollable && this.width > this.el.shadowRoot.querySelector('.content').clientWidth) {
            this.marquee(this);
        }
    }
    render() {
        return (h(Host, { style: {
                color: this.color
            } }, h("div", { class: "bg", style: {
                backgroundColor: this.color
            } }), h("slot", { name: "icon" }, h("hc-icon", { name: this.icon })), h("div", { class: "content" }, h("div", { class: "wrap", style: {
                position: this.scrollable ? 'absolute' : 'static',
                width: this.scrollable ? 'auto' : '100%'
            } }, h("slot", null))), h("div", { class: "close", onClick: this.destory.bind(this) }, h("slot", { name: "close" }, this.renderClose()))));
    }
    renderClose() {
        if (this.closable) {
            return (h("hc-icon", { name: "close" }));
        }
    }
    async destory() {
        this.el.style.display = 'none';
    }
    marquee(_this) {
        _this.$wrap.style.transform = `translate3d(${-_this.width}px, 0, 0)`;
        _this.$wrap.style.transitionDuration = `${_this.duration}s`;
        _this.$wrap.addEventListener('transitionend', () => {
            _this.$wrap.style.transform = `translate3d(${0}px, 0, 0)`;
            _this.$wrap.style.transitionDuration = `${0}s`;
            setTimeout(() => {
                _this.$wrap.style.transform = `translate3d(${-_this.width}px, 0, 0)`;
                _this.$wrap.style.transitionDuration = `${_this.duration}s`;
            }, 10);
        });
    }
    get el() { return getElement(this); }
}
HcNoticebar.style = hcNoticebarCss;

export { HcNoticebar as hc_noticebar };
