import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { h as hammer } from './hammer-a3a84d6d.js';
import { e as easeout } from './picker-e34a3c80.js';

const hcPickerViewCss = ":host{display:block;height:11rem;-webkit-mask-box-image:-webkit-linear-gradient(bottom, transparent, transparent 5%, #fff 40%, #fff 60%, transparent 95%, transparent);position:relative;overflow:hidden;height:11rem;flex:1;-webkit-user-select:none}:host .indicate{position:absolute;height:2.2rem;width:100%;left:0;top:50%;transform:translateY(-50%);background:var(--background-color-base);z-index:1}:host .wrap{display:block;position:relative;z-index:10}";

class HcPickerView {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.current = 0;
        this.vis = 5;
        this.rate = 8;
        this.itemHeight = 44;
        this.offset = 0;
        this.vscrollend = createEvent(this, "vscrollend", 7);
    }
    currentHandle(v) {
        var index = v;
        if (v < 0) {
            index = 0;
        }
        this.renderActive(index);
        var data = {
            label: this.$children[index].innerHTML,
            value: this.$children[index].getAttribute('value'),
            current: index,
            index: this.index
        };
        this.el.setAttribute('value', this.$children[index].innerHTML);
        this.vscrollend.emit(data);
    }
    count() {
        return this.el.children.length;
    }
    baseOffset() {
        return (this.itemHeight * (this.vis - 1)) / 2;
    }
    componentDidLoad() {
        if (this.value) {
            this.el.setAttribute('value', this.value);
        }
        if (this.current) {
            this.el.setAttribute('current', `${this.current}`);
        }
        this.renderActive(this.current);
        this.bindTouch();
        var slot = this.el.shadowRoot.querySelector('slot');
        slot.addEventListener('slotchange', () => {
            this.$children = Array.from(this.el.children);
        });
    }
    render() {
        this.$children = Array.from(this.el.children);
        this.offset = this.baseOffset() - this.current * this.itemHeight;
        var data = [];
        if (this.data) {
            data = JSON.parse(this.data);
        }
        else {
            this.$children.forEach(item => {
                data.push({
                    label: item.innerHTML,
                    value: item.getAttribute('value')
                });
            });
        }
        return (h(Host, { style: { height: `${this.itemHeight * this.vis}px` } }, h("div", { class: "wrap", style: {
                transform: `translate3d(0,${this.offset}px,0)`
            } }, h("slot", null, data.map(item => (h("hc-picker-item", { value: item.value }, item.label))))), h("div", { class: "indicate", style: { height: `${this.itemHeight}px` } })));
    }
    renderActive(index) {
        this.$children.forEach((child, i) => {
            if (index == i) {
                child.setAttribute('active', 'true');
            }
            else {
                child.removeAttribute('active');
            }
        });
    }
    async Moving(number) {
        this.current = number < 0 ? 0 : number;
    }
    bindTouch() {
        this.$wrap = this.el.shadowRoot.querySelector('.wrap');
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
                }
                else {
                    var target = this.offset + distance;
                    var current = Math.floor((this.baseOffset() - target) / this.itemHeight);
                    target = this.baseOffset() - (current * this.itemHeight);
                    target = target > this.baseOffset() ? this.baseOffset() : target;
                }
                easeout(this.offset, target, rate, (value) => {
                    this.offset = value;
                    this.$wrap.style.transform = `translate3d(0,${value}px,0)`;
                }, () => {
                    this.current = current < 0 ? 0 : current > this.count() - 1 ? this.count() - 1 : current;
                });
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
