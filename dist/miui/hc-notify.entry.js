import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcNotifyCss = ":host{display:flex;flex-direction:row;align-items:center;position:fixed;width:100%;height:2.4rem;font-size:0.7rem;background-color:var(--color-primary);color:var(--color-text-white);padding:0 1rem;box-sizing:border-box;transition:0.3s;overflow:hidden;z-index:100}:host .content{margin:0 0.3rem;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([place=up]){top:0;left:0;transform:translate3d(0, -100%, 0)}:host([place=down]){bottom:0;left:0;transform:translate3d(0, 100%, 0)}:host([align=center]){justify-content:center}:host([visible]){transform:translate3d(0, 0, 0)}";

class HcNotify {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.place = 'up';
        this.align = 'left';
        this.duration = 3000;
    }
    visibleHandle(v) {
        if (v) {
            this.el.setAttribute('visible', 'true');
        }
        else {
            this.el.removeAttribute('visible');
        }
    }
    componentWillRender() {
        this.el.setAttribute('place', this.place);
        this.el.setAttribute('align', this.align);
    }
    render() {
        return (h(Host, { style: { backgroundColor: this.background } }, h("slot", { name: "icon" }, h("hc-icon", { size: 24, name: this.icon })), h("div", { class: "content" }, h("slot", null, this.content)), h("slot", { name: "close" }, this.renderClose())));
    }
    renderClose() {
        if (this.closable) {
            return (h("hc-icon", { name: "close", onClick: this.destory.bind(this) }));
        }
    }
    async show() {
        this.visible = true;
        if (this.duration && !this.closable) {
            setTimeout(() => {
                this.destory();
            }, this.duration);
        }
    }
    async destory() {
        this.visible = false;
        setTimeout(() => {
            if (this.command) {
                setTimeout(() => {
                    document.body.removeChild(this.el);
                }, 300);
            }
        }, 300);
    }
    async generate(option = null) {
        if (option) {
            var notify = document.createElement('hc-notify');
            for (let key in option) {
                var prop;
                if (typeof option[key] == 'object') {
                    prop = JSON.stringify(option[key]);
                }
                else {
                    prop = option[key];
                }
                notify.setAttribute(key, prop);
            }
            notify.setAttribute('command', 'true');
            document.body.appendChild(notify);
            setTimeout(() => {
                notify.generate();
            }, 100);
        }
        else {
            this.show();
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["visibleHandle"]
    }; }
}
HcNotify.style = hcNotifyCss;

export { HcNotify as hc_notify };
