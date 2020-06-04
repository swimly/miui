import { r as registerInstance, h, H as Host } from './index-e5ececff.js';

const hcPanelCss = ":host{display:block;background:var(--background-color-white);padding:1rem;margin-bottom:0.5rem;border-radius:0.2rem}";

class HcPanel {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcPanel.style = hcPanelCss;

export { HcPanel as hc_panel };
