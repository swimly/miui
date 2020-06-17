import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcSelectionViewCss = ":host{display:block;width:100%;height:100%;overflow:auto}";

class HcSelectionView {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { style: { width: `${this.width}px` } }, h("slot", null)));
    }
}
HcSelectionView.style = hcSelectionViewCss;

export { HcSelectionView as hc_selection_view };
