import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcFormCss = ":host{display:block}";

class HcForm {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.range = 'horizontal';
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcForm.style = hcFormCss;

export { HcForm as hc_form };
