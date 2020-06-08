import { r as registerInstance, h, H as Host } from './index-17e92c35.js';

const hcPickerItemCss = ":host{display:flex;height:2.2rem;align-items:center;flex-direction:row;font-size:0.7rem;justify-content:center}:host([active]){color:var(--color-primary)}";

class HcPickerItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.height = 44;
    }
    render() {
        return (h(Host, { style: {
                height: `${this.height}px`
            } }, h("slot", null)));
    }
}
HcPickerItem.style = hcPickerItemCss;

export { HcPickerItem as hc_picker_item };
