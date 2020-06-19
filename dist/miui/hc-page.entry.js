import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcPageCss = ":host{display:flex;flex-direction:column;height:100%;background-color:var(--background-color-dark);-webkit-user-select:none}";

class HcPage {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { onTouchmove: this.onTouchMove.bind(this) }, h("slot", null)));
    }
    onTouchMove(e) {
        // e.preventDefault()
    }
}
HcPage.style = hcPageCss;

export { HcPage as hc_page };
