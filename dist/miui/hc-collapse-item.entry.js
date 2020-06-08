import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcCollapseItemCss = ":host{display:block;padding:0.3rem 0;margin:0.3rem 0;position:relative}:host::after{content:\"\";box-sizing:border-box;border-radius:0;position:absolute;box-sizing:border-box;transition:0.3s;bottom:0;left:0;width:100%;height:1px;background:var(--border-color-base);transform-origin:left bottom;transform:scaleY(0.5)}:host hc-row{font-size:0.75rem;color:var(--color-text-primary)}:host hc-row hc-icon{color:var(--color-text-placeholder);transition:0.3s}:host .content{overflow:hidden;box-sizing:border-box;transition:0.3s}:host([visible]) hc-row hc-icon{transform:rotate(-180deg)}";

class HcCollapseItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vchange = createEvent(this, "vchange", 7);
    }
    visibleHandle(v) {
        this.vchange.emit({
            visible: v
        });
        this.renderToggle(v);
    }
    componentDidLoad() {
        this.maxHeight = this.el.shadowRoot.querySelector('.content').clientHeight;
        this.$content = this.el.shadowRoot.querySelector('.content');
        this.renderToggle(this.visible);
    }
    render() {
        return (h(Host, null, h("hc-row", { valign: "top", onClick: this.onClick.bind(this) }, h("hc-col", null), h("hc-col", { flex: 1 }, h("slot", { name: "title" })), h("hc-col", null, h("hc-icon", { name: "arrow-down" }))), h("div", { class: "content" }, h("slot", null))));
    }
    onClick() {
        this.visible = !this.visible;
    }
    async generate() {
        this.visible = true;
    }
    async destory() {
        this.visible = false;
    }
    renderToggle(v) {
        if (v) {
            this.$content.style.maxHeight = `${this.maxHeight}px`;
            this.el.setAttribute('visible', 'true');
        }
        else {
            this.$content.style.maxHeight = `${0}px`;
            this.el.removeAttribute('visible');
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["visibleHandle"]
    }; }
}
HcCollapseItem.style = hcCollapseItemCss;

export { HcCollapseItem as hc_collapse_item };
