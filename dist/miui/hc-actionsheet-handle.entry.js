import { r as registerInstance, h, H as Host } from './index-17e92c35.js';

const hcActionsheetHandleCss = ":host{display:block}";

class HcActionsheetHandle {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcActionsheetHandle.style = hcActionsheetHandleCss;

export { HcActionsheetHandle as hc_actionsheet_handle };
