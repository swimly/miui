import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcIconCss = ":host{display:inline-flex;flex-direction:row;align-items:center;transform-origin:center center;font-size:inherit}:host .hc-icon{width:1rem;height:1rem;font-size:inherit;fill:currentColor;overflow:hidden}:host .hc-icon svg{color:inherit;font-size:inherit;vertical-align:top}:host([spin]) .hc-icon{animation:rotate 0.8s linear infinite}@keyframes rotate{to{transform:rotate(360deg)}}";

class HcIcon {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.spin = false;
        this.view = 1024;
        this.vclick = createEvent(this, "vclick", 7);
    }
    spinHandle(newValue) {
        if (newValue) {
            this.el.setAttribute('spin', `${newValue}`);
        }
        else {
            this.el.removeAttribute('spin');
        }
    }
    nameHandle(v) {
        this.renderIcon();
        if (v) {
            this.el.style.display = 'inline-block';
        }
        else {
            this.el.style.display = 'none';
        }
    }
    pathHandle(v) {
        this.$path.setAttribute('d', v);
    }
    colorHandle() {
        this.renderIcon();
    }
    componentDidLoad() {
        this.$use = this.el.shadowRoot.querySelector('#use');
        this.$svg = this.el.shadowRoot.querySelector('.hc-icon');
        this.renderIcon();
    }
    renderIcon() {
        const svg = this.el.shadowRoot.querySelector('.hc-icon');
        if (this.path) {
            this.$path = this.el.shadowRoot.querySelector('#path');
            this.$path.setAttribute('d', this.path);
        }
        else if (this.name) {
            this.$use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `./assets/iconfont.svg#icon-${this.name}`);
        }
        else {
            this.el.style.display = 'none';
        }
        if (this.size) {
            svg.style.fontSize = `${this.size}px`;
            svg.style.width = `${this.size}px`;
            svg.style.height = `${this.size}px`;
        }
        svg.style.color = this.color;
        if (this.spin) {
            this.el.setAttribute('spin', 'true');
        }
    }
    render() {
        return (h(Host, { onClick: this.onClick.bind(this), style: { height: `${this.size}px` } }, h("svg", { class: "hc-icon", "aria-hidden": "true", viewBox: `0 0 ${this.view} ${this.view}` }, this.renderCore())));
    }
    onClick(e) {
        this.vclick.emit(e);
    }
    renderCore() {
        if (this.path) {
            return (h("path", { id: "path" }));
        }
        else {
            return (h("use", { id: "use" }));
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "spin": ["spinHandle"],
        "name": ["nameHandle"],
        "path": ["pathHandle"],
        "color": ["colorHandle"]
    }; }
}
HcIcon.style = hcIconCss;

export { HcIcon as hc_icon };
