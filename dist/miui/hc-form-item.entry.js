import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcFormItemCss = ":host{display:flex;font-size:0.75rem;color:var(--color-text-regular);position:relative;line-height:1.4;padding:0.6rem 0}:host::after{content:\"\";box-sizing:border-box;border-radius:0;position:absolute;box-sizing:border-box;transition:0.3s;bottom:0;left:0;width:100%;height:1px;background:var(--border-color-base);transform-origin:left bottom;transform:scaleY(0.5)}:host .label{font-size:inherit;font-weight:normal;line-height:1.6;margin:0;color:var(--color-text-primary)}:host .value{flex:1;margin:0;margin-left:2rem;overflow:hidden;display:flex;flex-direction:row}";

class HcFormItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.direction = 'horizontal';
        this.align = 'right';
    }
    render() {
        var pos = {
            left: 'flex-start',
            center: 'center',
            right: 'flex-end'
        };
        return (h(Host, { style: { flexDirection: `${this.direction}` } }, h("h2", { class: "label" }, h("slot", { name: "label" }, this.label)), h("p", { class: "value", style: { justifyContent: pos[this.align] } }, h("slot", null, this.value))));
    }
}
HcFormItem.style = hcFormItemCss;

export { HcFormItem as hc_form_item };
