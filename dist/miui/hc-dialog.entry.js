import { r as registerInstance, h, H as Host } from './index-17e92c35.js';

const hcDialogCss = ":host{display:block}";

class HcDialog {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcDialog.style = hcDialogCss;

export { HcDialog as hc_dialog };
