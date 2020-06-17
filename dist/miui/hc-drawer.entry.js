import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcDrawerCss = ":host{display:flex;flex-direction:column;background-color:var(--background-color-white);position:fixed;z-index:101}:host([place=up]){top:0;left:0;width:100%;transform:translateY(-100%)}:host([place=up][rounder]){border-radius:0 0 1rem 1rem}:host([place=down]){bottom:0;left:0;width:100%;transform:translateY(100%)}:host([place=down][rounder]){border-radius:1rem 1rem 0 0}:host([place=left]){top:0;left:0;height:100%;transform:translateX(-100%)}:host([place=left][rounder]){border-radius:0 1rem 1rem 0}:host([place=right]){top:0;right:0;height:100%;transform:translateX(100%)}:host([place=right][rounder]){border-radius:1rem 0 0 1rem}:host([display=true]){transform:translate(0, 0)}";

class HcDrawer {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.place = 'down';
        this.clickable = true;
        this.masker = true;
        this.command = false;
        this.vshow = createEvent(this, "vshow", 7);
    }
    Dhandle(v) {
        if (v) {
            this.el.setAttribute('display', `${v}`);
        }
        else {
            this.el.removeAttribute('display');
            if (this.command) {
                setTimeout(() => {
                    document.body.removeChild(this.el);
                }, 300);
            }
        }
    }
    componentDidLoad() {
        if (this.rounder) {
            this.el.setAttribute('rounder', `true`);
        }
        if (this.place) {
            this.el.setAttribute('place', this.place);
        }
        if (this.display) {
            this.el.setAttribute('display', `${this.display}`);
            this.vshow.emit(null);
        }
    }
    render() {
        return (h(Host, null, h("slot", null, h("div", { innerHTML: this.content }))));
    }
    onDisplay() {
        this.el.style.transition = '0.3s';
        this.display = true;
        this.$mask = document.createElement('hc-masker');
        this.$mask.command = true;
        this.$mask.clickable = false;
        if (!this.masker) {
            this.$mask.fill = 'transparent';
        }
        document.body.appendChild(this.$mask);
        this.$mask.generate();
        if (this.clickable && this.masker) {
            this.$mask.addEventListener('vclick', () => {
                this.destory();
            });
        }
        // 通知drawer已经打开
        setTimeout((e) => {
            this.vshow.emit({ e });
        }, 300);
    }
    async destory() {
        this.display = false;
        this.$mask.destory();
    }
    async generate(option = null) {
        if (option) {
            this.generateDom('hc-drawer', option);
        }
        else {
            this.onDisplay();
        }
    }
    generateDom(tag, option) {
        let dom = document.createElement(tag);
        option.command = true;
        for (let key in option) {
            dom.setAttribute(key, option[key]);
        }
        document.body.appendChild(dom);
        setTimeout(() => {
            dom.generate();
        }, 30);
        return dom;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "display": ["Dhandle"]
    }; }
}
HcDrawer.style = hcDrawerCss;

export { HcDrawer as hc_drawer };
