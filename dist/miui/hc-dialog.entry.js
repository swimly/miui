import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

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
