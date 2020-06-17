import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcProgressCss = ":host{display:block}";

class HcProgress {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcProgress.style = hcProgressCss;

export { HcProgress as hc_progress };
