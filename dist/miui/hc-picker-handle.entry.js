import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcPickerHandleCss = ":host{display:block}";

class HcPickerHandle {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcPickerHandle.style = hcPickerHandleCss;

export { HcPickerHandle as hc_picker_handle };
