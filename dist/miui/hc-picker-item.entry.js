import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcPickerItemCss = ":host{display:flex;height:2.2rem;align-items:center;flex-direction:row;font-size:0.7rem;justify-content:center}:host([active]){color:var(--color-primary)}";

class HcPickerItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.height = 44;
    }
    render() {
        return (h(Host, Object.assign({ style: {
                height: `${this.height}px`
            } }, {
            value: this.value
        }), h("slot", null)));
    }
}
HcPickerItem.style = hcPickerItemCss;

export { HcPickerItem as hc_picker_item };
