import { r as registerInstance, h, H as Host } from './index-17e92c35.js';

const hcRowCss = ":host{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:wrap}";

class HcRow {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.align = 'flex-start';
        this.valign = 'center';
    }
    render() {
        var pos = {
            left: 'flex-start',
            center: 'center',
            right: 'flex-end'
        };
        var pos1 = {
            top: 'flex-start',
            center: 'center',
            bottom: 'flex-end'
        };
        return (h(Host, { style: { justifyContent: `${pos[this.align]}`, alignItems: pos1[this.valign], flexWrap: this.wrap ? 'wrap' : 'nowrap' } }, h("slot", null)));
    }
}
HcRow.style = hcRowCss;

export { HcRow as hc_row };