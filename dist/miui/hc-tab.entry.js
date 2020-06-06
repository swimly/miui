import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e5ececff.js';
import { h as hammer } from './hammer-a3a84d6d.js';

const hcTabCss = ":host{display:block;overflow:hidden;position:relative;box-shadow:inset 0px -1px 1px -1px var(--border-color-base)}:host .wrap{display:flex;flex-direction:row;flex-wrap:nowrap;height:3rem;transition:0.3s}:host .indicate{position:absolute;display:block;width:1rem;height:0.2rem;background:var(--color-primary);left:0;bottom:0;border-radius:0.2rem;transition:0.3s}";

class HcTab {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.current = 0;
        this.direction = 'horizontal';
        this.align = 'flex-start';
        this.auto = true;
        this.offset = 0;
        this.scroll = 0;
        this.width = 0;
        this.prev = 0;
        this.pos = [];
        this.vchange = createEvent(this, "vchange", 7);
    }
    currentHandle(v) {
        this.renderScroll(v);
        this.vchange.emit({
            current: v
        });
    }
    autoHandle(v) {
        if (v) {
            this.computed();
        }
    }
    componentDidLoad() {
        this.$slot = this.el.shadowRoot.querySelector('slot');
        this.$wrap = this.el.shadowRoot.querySelector('.wrap');
        this.$indicate = this.el.shadowRoot.querySelector('.indicate');
        this.$children = this.$slot.assignedElements();
        this.offset = this.el.offsetLeft;
        this.width = this.el.offsetWidth;
        if (this.auto) {
            this.computed();
        }
        this.$slot.addEventListener('slotchange', () => {
            this.pos = [];
            this.$children = this.$slot.assignedElements();
            setTimeout(() => {
                this.computed();
            }, 30);
        });
        this.$children.forEach((item) => {
            item.addEventListener('vchange', () => {
                this.pos = [];
                this.computed();
            });
        });
    }
    render() {
        return (h(Host, null, h("div", { class: "wrap", style: {
                justifyContent: this.align
            } }, h("slot", null), h("div", { class: "indicate" }))));
    }
    bindTouch() {
        var last = this.pos[this.pos.length - 1];
        if (last.x + last.width <= this.el.offsetWidth + this.el.offsetLeft || !this.touch) {
            return false;
        }
        var hammer$1 = new hammer(this.el);
        hammer$1.get('pan').set({ direction: hammer.DIRECTION_HORIZONTAL });
        hammer$1.on('panstart', () => {
            this.$wrap.style.transition = '0s';
        });
        hammer$1.on('pan', (e) => {
            var dis = this.scroll + e.deltaX;
            dis = dis > 0 ? 0 : dis < -this.max ? -this.max : dis;
            this.$wrap.style.transform = `translate3d(${dis}px, 0, 0)`;
        });
        hammer$1.on('panend', (e) => {
            this.scroll += e.deltaX;
        });
    }
    onChange(e) {
        this.current = e.detail.index;
    }
    // 计算每个hc-tab-item的位置
    computed() {
        this.$children.forEach((child, index) => {
            child.setAttribute('index', `${index}`);
            this.pos.push(child.getBoundingClientRect());
            child.addEventListener('vclick', this.onChange.bind(this));
        });
        this.renderScroll(this.current);
        this.bindTouch();
    }
    // 渲染indicate和wrap的运动
    renderScroll(index) {
        var move = 0;
        var fullwidth = this.el.clientWidth;
        this.$children.forEach(item => {
            item.removeAttribute('active');
        });
        this.$wrap.style.transition = '0.3s';
        this.$children[index].setAttribute('active', 'true');
        var indicateLeft = this.pos[index].x - this.offset + (this.pos[index].width - this.$indicate.offsetWidth) / 2;
        var last = this.pos[this.pos.length - 1];
        var isFull = last.x + last.width - this.pos[0].x > this.el.offsetWidth;
        var maxDis = last.x + last.width - this.pos[0].x - this.el.offsetWidth;
        this.max = maxDis;
        if (this.pos[index].x > fullwidth / 2 && isFull) {
            move = this.pos[index].x + this.pos[index].width / 2 - fullwidth / 2 - this.offset;
            move = move > maxDis ? maxDis : move;
            this.$wrap.style.transform = `translate3d(${-move}px, 0, 0)`;
        }
        else {
            this.$wrap.style.transform = `translate3d(${0}px, 0, 0)`;
        }
        this.scroll = -move;
        this.$indicate.style.transform = `translate3d(${indicateLeft}px, 0, 0)`;
    }
    // 选中第几个
    async Switch(number) {
        setTimeout(() => {
            this.current = number;
        }, 30);
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "current": ["currentHandle"],
        "auto": ["autoHandle"]
    }; }
}
HcTab.style = hcTabCss;

export { HcTab as hc_tab };
