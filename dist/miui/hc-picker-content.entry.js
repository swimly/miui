import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcPickerContentCss = ":host{display:flex;flex-direction:row}";

class HcPickerContent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vdatachange = createEvent(this, "vdatachange", 7);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
}
HcPickerContent.style = hcPickerContentCss;

export { HcPickerContent as hc_picker_content };
