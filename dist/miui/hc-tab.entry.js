import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { h as hammer } from './hammer-a3a84d6d.js';

const hcTabCss = ":host{display:block;overflow:hidden;position:relative;box-shadow:inset 0px -1px 1px -1px var(--border-color-base)}:host .wrap{display:flex;flex-direction:row;flex-wrap:nowrap;height:3rem;transition:0.3s}:host .wrap .content{display:flex;flex-direction:row;align-items:center;flex:1}:host .indicate{position:absolute;display:block;width:1rem;height:0.2rem;background:var(--color-primary);left:0;bottom:0;border-radius:0.2rem;transition:0.3s}";

class HcTab {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.current = 0;
        this.direction = 'horizontal';
        this.align = 'flex-start';
        this.indicateWidth = 15;
        this.vclick = createEvent(this, "vclick", 7);
        this.vchange = createEvent(this, "vchange", 7);
    }
    currentHandle(v) {
        // this.el.setAttribute('current', `${v}`)
        this.renderIndicate();
        this.vchange.emit({
            current: v
        });
    }
    componentDidLoad() {
        this.$content = this.el.shadowRoot.querySelector('.content');
        this.$indicate = this.el.shadowRoot.querySelector('.indicate');
        this.Init();
        this.renderIndicate();
    }
    componentDidUpdate() {
        this.Init();
    }
    render() {
        var children = Array.from(this.el.children);
        var data = [];
        if (this.data) {
            data = this.data.indexOf('{') >= 0 ? JSON.parse(this.data) : this.data.split(',');
        }
        else {
            children.forEach(item => {
                data.push({
                    label: item.innerHTML,
                    value: item.getAttribute('value')
                });
            });
        }
        return (h(Host, null, h("div", { class: "wrap" }, h("div", { class: "content", style: {
                justifyContent: this.align
            } }, data.map((item, index) => {
            var label = typeof item == 'string' ? item : item.label;
            return (h("hc-tab-item", { label: label, onVlabel: this.onLabelChange.bind(this), active: this.current == index, onClick: this.onClick.bind(this, index) }, label));
        }), h("div", { class: "indicate" })))));
    }
    onLabelChange() {
        setTimeout(() => {
            this.Init();
            this.renderIndicate();
        }, 30);
    }
    onClick(index) {
        this.current = index;
        this.vclick.emit({
            current: index
        });
    }
    renderIndicate() {
        var itemWidth = this.position[this.current].width;
        var itemLeft = this.position[this.current].left;
        var left = itemLeft + itemWidth / 2 - this.indicateWidth / 2;
        this.$indicate.style.width = `${this.indicateWidth}px`;
        this.$indicate.style.transform = `translate3d(${left}px, 0, 0)`;
        var half = this.el.offsetWidth / 2;
        if (left > half) {
            this.renderScroll(half);
        }
        if (left < half) {
            this.renderScroll(0);
        }
    }
    renderScroll(half) {
        if (this.max <= this.el.offsetWidth + this.el.offsetLeft)
            return;
        var maxDis = this.max - this.el.offsetWidth;
        var left = this.position[this.current].left;
        var dis = half ? left - half > maxDis ? maxDis : left - half : half;
        this.$content.style.transition = '0.3s';
        this.$content.style.transform = `translate3d(${-dis}px, 0, 0)`;
    }
    bindTouch() {
        var hammer$1 = new hammer(this.el);
        hammer$1.get('pan').set({ direction: hammer.DIRECTION_HORIZONTAL });
        hammer$1.on('panstart', () => {
        });
        hammer$1.on('pan', (e) => {
        });
        hammer$1.on('panend', (e) => {
        });
    }
    async MoveTo(index) {
        this.current = index;
    }
    async Init() {
        this.$children = this.el.shadowRoot.querySelectorAll('hc-tab-item');
        var position = [];
        this.$children.forEach(item => {
            position.push({
                left: item.offsetLeft,
                width: item.offsetWidth
            });
        });
        var last = position.length - 1;
        this.max = position[last].left + position[last].width;
        this.position = position;
        if (this.max <= this.el.offsetWidth) {
            this.$content.style.transform = `translate3d(${0}px, 0, 0)`;
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "current": ["currentHandle"]
    }; }
}
HcTab.style = hcTabCss;

export { HcTab as hc_tab };
