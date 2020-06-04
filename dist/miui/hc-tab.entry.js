import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcTabCss = ":host{display:block;overflow:hidden;position:relative;box-shadow:inset 0px -1px 1px -1px var(--border-color-base)}:host .wrap{display:flex;flex-direction:row;flex-wrap:nowrap;height:3rem;transition:0.3s}:host .indicate{position:absolute;display:block;width:1rem;height:0.2rem;background:var(--color-primary);left:0;bottom:0;border-radius:0.2rem;transition:0.3s}";

class HcTab {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.current = 0;
        this.direction = 'horizontal';
        this.align = 'flex-start';
        this.offset = 0;
        this.scroll = 0;
        this.width = 0;
        this.prev = 0;
        this.pos = [];
        this.vchange = createEvent(this, "vchange", 7);
    }
    currentHandle(v) {
        this.vchange.emit({
            current: v
        });
    }
    componentDidLoad() {
        this.$slot = this.el.shadowRoot.querySelector('slot');
        this.$wrap = this.el.shadowRoot.querySelector('.wrap');
        this.$indicate = this.el.shadowRoot.querySelector('.indicate');
        this.$children = this.$slot.assignedElements();
        this.offset = this.direction == 'horizontal' ? this.el.offsetLeft : this.el.offsetTop;
        this.width = this.el.offsetWidth;
        this.$children.forEach((child, index) => {
            child.setAttribute('index', `${index}`);
            this.pos.push(Math.round(child.getBoundingClientRect().x));
            child.addEventListener('vchange', this.onChange.bind(this));
        });
        this.renderScroll(this.current);
    }
    render() {
        return (h(Host, null, h("div", { class: "wrap", style: {
                justifyContent: this.align
            } }, h("slot", null), h("div", { class: "indicate" }))));
    }
    onChange(e) {
        this.current = e.detail.index;
        this.renderScroll(e.detail.index);
    }
    renderScroll(index) {
        this.$children.forEach(item => {
            item.removeAttribute('active');
        });
        this.$children[index].setAttribute('active', 'true');
        if (this.pos[this.pos.length - 1] + this.$children[this.pos.length - 1].clientWidth > this.width + this.offset) {
            if (this.pos[index] > this.width / 2) {
                this.scroll = this.pos[index] - this.width / 2;
            }
            if (this.pos[this.pos.length - 1] - this.scroll < this.width) {
                this.scroll = this.pos[this.pos.length - 1] - (this.width) + this.offset / 2;
            }
            if (this.pos[index] <= this.width / 2) {
                this.scroll = 0;
            }
            this.$wrap.style.transform = `translateX(${-this.scroll}px)`;
        }
        this.$indicate.style.transform = `translateX(${this.pos[index] - this.offset + (this.$children[index].clientWidth - this.$indicate.offsetWidth) / 2}px)`;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "current": ["currentHandle"]
    }; }
}
HcTab.style = hcTabCss;

export { HcTab as hc_tab };
