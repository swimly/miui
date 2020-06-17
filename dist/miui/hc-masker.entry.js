import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcMaskerCss = ":host{display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.7);z-index:-1;transition:0.3s ease-out;opacity:0}:host([display]){z-index:99;opacity:1}";

class HcMasker {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fill = 'rgba(0,0,0,0.7)';
        this.display = false;
        this.clickable = true;
        this.command = false;
        this.vclick = createEvent(this, "vclick", 7);
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
    componentDidRender() {
    }
    render() {
        let background = this.fill;
        if (this.place == 'bottom') {
            background = `linear-gradient(rgba(0,0,0,0) 0px, rgba(0,0,0,0) ${this.offset}px, ${this.fill} ${this.offset}px, ${this.fill} 100%)`;
        }
        if (this.place == 'top') {
            background = `linear-gradient(${this.fill} 0px, ${this.fill} ${this.offset}px, rgba(0,0,0,0) ${this.offset}px, rgba(0,0,0,0) 100%)`;
        }
        return (h(Host, { onClick: this.onClick.bind(this), style: { background: background } }, h("slot", null)));
    }
    onClick() {
        if (this.clickable) {
            this.destory();
        }
        this.vclick.emit();
    }
    async destory() {
        this.display = false;
    }
    onDisplay() {
        this.display = true;
    }
    async generate(option = null) {
        if (option) {
            this.generateDom('hc-masker', option);
        }
        else {
            this.onDisplay();
        }
    }
    generateDom(tag, option) {
        let dom = document.createElement(tag);
        option.command = true;
        if (option.event) {
            const pos = option.event.target.getBoundingClientRect();
            option.offset = option.place == 'top' ? pos.y : pos.y + pos.height;
        }
        for (let key in option) {
            dom.setAttribute(key, option[key]);
        }
        document.body.appendChild(dom);
        dom.generate();
        return dom;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "display": ["Dhandle"]
    }; }
}
HcMasker.style = hcMaskerCss;

export { HcMasker as hc_masker };
