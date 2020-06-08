import { r as registerInstance, h, H as Host } from './index-17e92c35.js';

const hcCountdownCss = ":host{display:block}";

class HcCountdown {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcCountdown.style = hcCountdownCss;

export { HcCountdown as hc_countdown };