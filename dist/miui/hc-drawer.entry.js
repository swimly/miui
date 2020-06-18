import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcDrawerCss = ":host{display:flex;flex-direction:column;background-color:var(--background-color-white);position:fixed;z-index:101}:host([place=up]){top:0;left:0;width:100%;transform:translateY(-100%)}:host([place=up][rounder]){border-radius:0 0 1rem 1rem}:host([place=down]){bottom:0;left:0;width:100%;transform:translateY(100%)}:host([place=down][rounder]){border-radius:1rem 1rem 0 0}:host([place=left]){top:0;left:0;height:100%;transform:translateX(-100%)}:host([place=left][rounder]){border-radius:0 1rem 1rem 0}:host([place=right]){top:0;right:0;height:100%;transform:translateX(100%)}:host([place=right][rounder]){border-radius:1rem 0 0 1rem}:host([display=true]){transform:translate(0, 0)}";

class HcDrawer {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.place = 'down';
        this.clickable = true;
        this.masker = true;
        this.rounder = true;
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
        this.$mask = this.el.shadowRoot.querySelector('hc-masker');
    }
    render() {
        return (h(Host, Object.assign({}, {
            place: this.place,
            clickable: this.clickable,
            masker: this.masker,
            rounder: this.rounder,
            command: this.command
        }), h("slot", null, h("div", { innerHTML: this.content }))));
    }
    async onDisplay() {
        this.renderMasker();
        this.el.style.display = 'block';
        this.el.style.transition = '0.3s';
        setTimeout(() => {
            this.display = true;
        }, 30);
    }
    async destory() {
        this.display = false;
        if (this.masker) {
            this.$mask.destory();
        }
        setTimeout(() => {
            this.el.style.display = 'none';
            this.el.style.transition = '0s';
        }, 300);
    }
    renderMasker() {
        if (!this.masker) {
            return false;
        }
        var has = document.querySelector('hc-masker');
        if (has) {
            this.$mask = has;
        }
        else {
            this.$mask = document.createElement('hc-masker');
            document.body.appendChild(this.$mask);
        }
        this.$mask.generate();
        if (this.clickable) {
            this.$mask.addEventListener('click', () => {
                this.destory();
            });
        }
    }
    async generate(option = null) {
        if (option) {
        }
        else {
            this.onDisplay();
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "display": ["Dhandle"]
    }; }
}
HcDrawer.style = hcDrawerCss;

export { HcDrawer as hc_drawer };
