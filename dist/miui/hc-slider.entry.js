import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { h as hammer } from './hammer-a3a84d6d.js';

const hcSliderCss = ":host{display:block;padding:0.3rem 0}:host .slider{display:flex;position:relative;height:0.5rem;background:var(--background-color-dark);border-radius:0.5rem;border-left:none;border-right:none}:host .slider .bar{position:absolute;left:0;top:0;height:100%;background:var(--color-primary);border-radius:0.5rem 0 0 0.5rem}:host .slider .handle{display:flex;width:0.7rem;height:0.7rem;background:var(--background-color-white);border:0.1rem solid var(--color-primary);border-radius:50%;position:absolute;top:50%;left:0;margin-top:-0.35rem;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box}:host .slider .step{display:flex;flex-direction:row;flex:1;font-size:0;align-items:center}:host .slider .step span{flex:1;display:inline-block;height:0.25rem;box-sizing:border-box}:host .slider .step span:last-child{border-right:none}:host([disabled]){opacity:0.7}:host([size=mini]) .slider{height:0.35rem;overflow:hidden}:host([size=mini]) .slider .handle{width:0.35rem;height:0.35rem;margin-top:-0.175rem;background-color:var(--background-color-dark);border-color:var(--background-color-dark);border-radius:0;border-right-width:1rem}:host([size=small]) .slider{height:0.4rem}:host([size=small]) .slider .handle{width:0.6rem;height:0.6rem;margin-top:-0.3rem}:host([size=large]) .slider{height:0.55rem}:host([size=large]) .slider .handle{width:0.825rem;height:0.825rem;margin-top:-0.4125rem}";

class HcSlider {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = 0;
        this.max = 100;
        this.min = 0;
        this.disabled = false;
        this.readonly = false;
        this.offset = 0;
        this.maxWidth = 0;
        this.vchange = createEvent(this, "vchange", 7);
        this.vjump = createEvent(this, "vjump", 7);
    }
    componentWillRender() {
        if (this.disabled) {
            this.el.setAttribute('disabled', 'true');
        }
        if (this.readonly) {
            this.el.setAttribute('readonly', 'true');
        }
    }
    componentDidLoad() {
        this.offset = Math.round((this.value - this.min) / (this.max - this.min) * this.el.offsetWidth);
        this.$handle = this.el.shadowRoot.querySelector('.handle');
        this.$bar = this.el.shadowRoot.querySelector('.bar');
        this.maxWidth = this.el.offsetWidth - this.$handle.offsetWidth * 2;
        if (!this.disabled && !this.readonly) {
            this.bindTouch();
        }
        if (this.size) {
            this.el.setAttribute('size', this.size);
        }
    }
    render() {
        const { value, min, max } = this;
        var offset = Math.round((value - min) / (max - min) * this.el.offsetWidth);
        return (h(Host, { onClick: this.jump.bind(this) }, h("div", { class: "slider" }, h("div", { class: "bar", style: {
                width: `${offset + this.el.clientHeight / 2}px`,
                background: `${this.color}`
            } }), h("div", { class: "handle", style: {
                transform: `translate3d(${offset}px, 0, 0)`,
                borderColor: `${this.color}`
            } }), h("slot", null, this.renderDiv()))));
    }
    jump(e) {
        if (this.step || this.readonly || this.disabled)
            return;
        var left = this.el.getBoundingClientRect().x;
        this.offset = e.x - left;
        this.$handle.style.transform = `translate3d(${Math.round(e.x - left)}px, 0, 0)`;
        this.$bar.style.width = `${Math.round(e.x - left + this.el.offsetHeight / 2)}px`;
        var bili = Math.round(this.offset / this.el.offsetWidth * 100);
        var result = {
            bili: bili,
            value: Math.round(this.min + bili * (this.max - this.min) / 100)
        };
        this.value = bili;
        this.vjump.emit(result);
    }
    bindTouch() {
        var hammer$1 = new hammer(this.el);
        var hw = this.el.shadowRoot.querySelector('.handle').clientHeight;
        var max = this.el.offsetWidth - hw;
        if (this.step) {
            var stepwidth = max / ((this.max - this.min) / this.step);
        }
        hammer$1.get('pan').set({ direction: hammer.DIRECTION_HORIZONTAL });
        hammer$1.on('panstart', () => {
            this.$handle.style.transition = '0s';
            this.$bar.style.transition = '0s';
        });
        hammer$1.on('pan', (e) => {
            var dis = e.deltaX + this.offset <= 0 ? 0 : e.deltaX + this.offset > max ? max : e.deltaX + this.offset;
            this.$handle.style.transform = `translate3d(${Math.round(dis)}px, 0, 0)`;
            this.$bar.style.width = `${Math.round(dis + hw / 2)}px`;
        });
        hammer$1.on('panend', (e) => {
            if (this.step) {
                var s = Math.round(e.deltaX / stepwidth);
                this.offset += s * stepwidth;
                this.$handle.style.transition = '0.3s';
                this.$bar.style.transition = '0.3s';
            }
            else {
                this.offset += e.deltaX;
                this.offset = this.offset < 0 ? 0 : this.offset > this.el.offsetWidth ? this.el.offsetWidth : this.offset;
            }
            this.$handle.style.transform = `translate3d(${Math.round(this.offset)}px, 0, 0)`;
            this.$bar.style.width = `${Math.round(this.offset + this.el.clientHeight / 2)}px`;
            var bili = Math.round(this.offset / this.el.offsetWidth * 100);
            var result = {
                bili: bili,
                value: Math.round(this.min + bili * (this.max - this.min) / 100)
            };
            this.vchange.emit(result);
        });
    }
    renderDiv() {
        if (!this.step)
            return;
        var length = (this.max - this.min) / this.step;
        var arr = new Array(length);
        arr.fill('a');
        var str = '';
        arr.forEach(item => {
            str += `<span>${item}</span>`;
        });
        return (h("div", { class: "step", innerHTML: str }));
    }
    get el() { return getElement(this); }
}
HcSlider.style = hcSliderCss;

export { HcSlider as hc_slider };
