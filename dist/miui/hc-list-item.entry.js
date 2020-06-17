import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcListItemCss = ":host{display:flex;padding:0.8rem 0;position:relative;flex-direction:row}:host::after{content:\"\";box-sizing:border-box;border-radius:0;position:absolute;box-sizing:border-box;transition:0.3s;bottom:0;left:0;width:100%;height:1px;background:var(--border-color-base);transform-origin:left bottom;transform:scaleY(0.5)}:host .cover{width:4rem;height:4rem;margin-right:0.5rem}:host .content{flex:1}:host .content .head{font-size:0.8rem;color:var(--color-text-primary);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.6;text-align:justify}:host .content .append{color:var(--color-text-regular)}:host .content .date{font-size:0.6rem;color:var(--color-text-regular)}:host([reverse]){flex-direction:row-reverse}:host([reverse]) .cover{margin:0 0 0 0.5rem}:host([size=small]){padding:0.7rem 0}:host([size=mini]){padding:0.5rem 0}";

class HcListItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'simple';
        this.coverWidth = 36;
        this.coverHeight = 36;
    }
    render() {
        return (h(Host, null, h("slot", { name: "cover" }, this.renderCover()), h("div", { class: "content" }, h("hc-row", null, h("hc-col", { class: "head", flex: 1 }, h("slot", { name: "head" }, this.head)), h("hc-col", { class: "append" }, h("slot", { name: "append" }, h("hc-icon", { color: this.appendColor, name: this.appendIcon })))), h("hc-row", { class: "date", align: "space-between" }, (() => {
            if (this.type == "complex") {
                return (h("hc-col", null, h("slot", { name: "attach" })));
            }
        })(), h("hc-col", null, h("slot", { name: "date" }, this.date))))));
    }
    renderCover() {
        if (this.cover) {
            return (h("hc-image", { width: this.coverWidth, height: this.coverHeight, class: "cover", src: this.cover }));
        }
    }
}
HcListItem.style = hcListItemCss;

export { HcListItem as hc_list_item };
