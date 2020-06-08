import { r as registerInstance, h, H as Host } from './index-17e92c35.js';

const hcPageCss = ":host{display:flex;flex-direction:column;height:100%;background-color:var(--background-color-dark);-webkit-user-select:none}";

class HcPage {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcPage.style = hcPageCss;

export { HcPage as hc_page };
