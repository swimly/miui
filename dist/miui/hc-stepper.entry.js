import { r as registerInstance, h, H as Host } from './index-17e92c35.js';

const hcStepperCss = ":host{display:block}";

class HcStepper {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
HcStepper.style = hcStepperCss;

export { HcStepper as hc_stepper };
