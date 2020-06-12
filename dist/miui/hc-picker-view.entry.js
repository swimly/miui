import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';
import { h as hammer } from './hammer-a3a84d6d.js';

const hcPickerViewCss = ":host{display:block;height:11rem;-webkit-mask-box-image:-webkit-linear-gradient(bottom, transparent, transparent 5%, #fff 40%, #fff 60%, transparent 95%, transparent);position:relative;overflow:hidden;height:11rem;flex:1;-webkit-user-select:none}:host .indicate{position:absolute;height:2.2rem;width:100%;left:0;top:50%;transform:translateY(-50%);background:var(--background-color-base);z-index:1}:host .wrap{display:block;position:relative;z-index:10}";

class HcPickerView {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.current = 0;
        this.vis = 5;
        this.rate = 8;
        this.itemHeight = 44;
        this.offset = 0;
        this.easeout = function (A, B, rate, callback, callback1) {
            if (A == B || typeof A != 'number') {
                return;
            }
            B = B || 0;
            rate = rate || 2;
            var step = function () {
                A = A + (B - A) / rate;
                if (Math.abs(A - B) < 0.2) {
                    callback(B, true);
                    callback1();
                    return;
                }
                callback(A, false);
                requestAnimationFrame(step);
            };
            step();
        };
        this.vchange = createEvent(this, "vchange", 7);
    }
    count() {
        return this.el.children.length;
    }
    currentHandle(v) {
        this.$children.forEach(child => {
            child.removeAttribute('active');
        });
        this.$children[v].setAttribute('active', `true`);
        this.vchange.emit({
            current: v,
            value: this.$children[v].innerHTML
        });
    }
    baseOffset() {
        return (this.itemHeight * (this.vis - 1)) / 2;
    }
    componentDidLoad() {
        this.$wrap = this.el.shadowRoot.querySelector('.wrap');
        var slot = this.el.shadowRoot.querySelector('slot');
        this.$children = slot.assignedElements();
        this.$children.forEach(child => {
            child.setAttribute('height', `${this.itemHeight}`);
        });
        this.$children[this.current].setAttribute('active', `true`);
        this.bindTouch();
        if (this.current) {
            this.el.setAttribute('current', `${this.current}`);
        }
    }
    render() {
        this.offset = this.baseOffset() - this.current * this.itemHeight;
        return (h(Host, { style: { height: `${this.itemHeight * this.vis}px` } }, h("div", { class: "wrap", style: {
                transform: `translate3d(0,${this.offset}px,0)`
            } }, h("slot", null)), h("div", { class: "indicate", style: { height: `${this.itemHeight}px` } })));
    }
    async Moving(number) {
        this.current = number;
    }
    bindTouch() {
        var hammer$1 = new hammer(this.el);
        hammer$1.get('pan').set({ direction: hammer.DIRECTION_VERTICAL });
        hammer$1.on('panstart', () => {
        });
        hammer$1.on('pan', (e) => {
            this.$wrap.style.transform = `translate3d(0,${this.offset + e.deltaY}px,0)`;
        });
        hammer$1.on('panend', (e) => {
            this.offset += e.deltaY;
            var rate = this.rate;
            var distance = Math.abs(e.velocity) * this.el.clientHeight;
            if (e.deltaTime < 3000) {
                if (e.deltaY < 0) {
                    var target = this.offset - distance;
                    var current = Math.ceil((this.baseOffset() - target) / this.itemHeight);
                    target = this.baseOffset() - (current * this.itemHeight);
                    target = target < this.baseOffset() - this.$wrap.clientHeight + this.itemHeight ? this.baseOffset() - this.$wrap.clientHeight + this.itemHeight : target;
                    this.easeout(this.offset, target, rate, (value) => {
                        this.offset = value;
                        this.$wrap.style.transform = `translate3d(0,${value}px,0)`;
                    }, () => {
                        this.current = current > this.count() - 1 ? this.count() - 1 : current;
                    });
                }
                else {
                    var target = this.offset + distance;
                    var current = Math.floor((this.baseOffset() - target) / this.itemHeight);
                    target = this.baseOffset() - (current * this.itemHeight);
                    target = target > this.baseOffset() ? this.baseOffset() : target;
                    this.easeout(this.offset, target, rate, (value) => {
                        this.offset = value;
                        this.$wrap.style.transform = `translate3d(0,${value}px,0)`;
                    }, () => {
                        this.current = current < 0 ? 0 : current;
                    });
                }
            }
        });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "current": ["currentHandle"]
    }; }
}
HcPickerView.style = hcPickerViewCss;

export { HcPickerView as hc_picker_view };
