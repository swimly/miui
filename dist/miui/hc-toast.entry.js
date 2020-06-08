import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcToastCss = ":host{display:inline-flex;flex-direction:column;font-size:0.7rem;background-color:var(--background-color-black-transparent);color:var(--color-text-white);padding:0.28rem 0.7rem;border-radius:0.2rem;position:fixed;top:50%;left:50%;transform:translate(-50%, 0.7rem) scale(0.9);opacity:0.1;z-index:-1;transition:0.3s;align-items:center;justify-content:center;box-sizing:border-box}:host([theme=light]){color:var(--color-text-primary);background-color:var(--background-color-white-transparent)}:host([icon]){width:5.6rem;height:5.6rem}:host([icon]) hc-icon{margin-bottom:0.3rem}:host([display]){transform:translate(-50%, -50%) scale(1);opacity:1;z-index:100}:host([place=up]){top:5%;transform:translate(-50%, 200%) scale(0.9)}:host([place=up][display]){transform:translate(-50%, 100%) scale(1)}:host([place=down]){top:95%;transform:translate(-50%, 0) scale(0.9)}:host([place=down][display]){transform:translate(-50%, -100%) scale(1)}";

class HcToast {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconSize = 48;
        this.display = false;
        this.duration = 3000;
        this.place = 'center';
        this.theme = 'dark';
    }
    Dhandle(v) {
        if (v) {
            this.el.setAttribute('display', `${v}`);
        }
        else {
            this.el.removeAttribute('display');
        }
    }
    componentDidLoad() {
        this.el.style.display = 'none';
        if (this.place) {
            this.el.setAttribute('place', this.place);
        }
        if (this.theme) {
            this.el.setAttribute('theme', this.theme);
        }
    }
    render() {
        return (h(Host, { style: { backgroundColor: this.fill } }, h("slot", { name: "icon" }, h("hc-icon", { name: this.icon, size: this.iconSize })), h("slot", null, this.content)));
    }
    onDisplay() {
        this.el.style.display = 'flex';
        setTimeout(() => {
            this.display = true;
            this.$mask = document.createElement('hc-masker');
            this.$mask.command = true;
            this.$mask.fill = 'transparent';
            this.$mask.clickable = false;
            document.body.appendChild(this.$mask);
            this.$mask.generate();
            if (this.duration) {
                setTimeout(() => {
                    this.destory();
                    this.$mask.destory();
                }, this.duration);
            }
        }, 30);
    }
    async destory() {
        this.display = false;
        setTimeout(() => {
            this.el.style.display = 'none';
            if (this.command) {
                setTimeout(() => {
                    document.body.removeChild(this.el);
                }, 300);
            }
        }, 300);
    }
    async generate(option = null) {
        if (option) {
            var toast = document.createElement('hc-toast');
            for (let key in option) {
                var prop;
                if (typeof option[key] == 'object') {
                    prop = JSON.stringify(option[key]);
                }
                else {
                    prop = option[key];
                }
                toast.setAttribute(key, prop);
            }
            toast.setAttribute('command', 'true');
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.generate();
            }, 100);
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
HcToast.style = hcToastCss;

export { HcToast as hc_toast };
