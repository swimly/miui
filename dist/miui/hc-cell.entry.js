import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcCellCss = ":host{display:flex;flex-direction:row;font-size:0.8rem;height:2.8rem;align-items:center;color:var(--border-color-base);position:relative}:host::after{content:\"\";box-sizing:border-box;border-radius:0;position:absolute;box-sizing:border-box;transition:0.3s;bottom:0;left:0;width:100%;height:1px;background:var(--border-color-base);transform-origin:left bottom;transform:scaleY(0.5)}:host hc-image{margin-right:0.4rem}:host .label{color:var(--color-text-primary);margin-right:1.6rem}:host .value{color:var(--color-text-regular);flex:1}";

class HcCell {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconSize = 28;
        this.valign = "center";
    }
    render() {
        var pos = {
            top: 'flex-start',
            center: 'center',
            bottom: 'flex-end'
        };
        return (h(Host, { onClick: this.onClick.bind(this), style: {
                alignItems: `${pos[this.valign]}`
            } }, h("slot", { name: "icon" }, this.renderIcon()), h("span", { class: "label", style: {
                display: this.label ? 'inline-block' : 'none'
            } }, h("slot", { name: "label" }, this.label)), h("span", { class: "value", style: {
                textAlign: this.align
            } }, h("slot", null, this.value)), h("slot", { name: "arrow" }, this.renderArrow())));
    }
    renderIcon() {
        if (this.icon) {
            return (h("hc-image", { width: this.iconSize, height: this.iconSize, src: this.icon }));
        }
    }
    renderArrow() {
        if (this.arrowIcon) {
            return (h("hc-icon", { name: this.arrowIcon }));
        }
    }
    onClick() {
        if (this.href) {
            window.location.href = this.href;
        }
    }
}
HcCell.style = hcCellCss;

export { HcCell as hc_cell };
