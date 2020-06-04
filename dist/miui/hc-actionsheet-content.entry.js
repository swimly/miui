import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcActionsheetContentCss = ":host{display:block}";

class HcActionsheetContent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcActionsheetContent.style = hcActionsheetContentCss;

export { HcActionsheetContent as hc_actionsheet_content };
