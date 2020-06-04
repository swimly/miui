import { r as registerInstance, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcEchartsCss = ":host{display:block}";

// import * as echarts from 'echarts'
// import config from '../../utils/echarts'
class HcEcharts {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.height = 200;
    }
    componentDidLoad() {
    }
    render() {
        return (h(Host, null, h("div", { class: "hc-echarts", style: { height: `${this.height}px` } })));
    }
    get el() { return getElement(this); }
}
HcEcharts.style = hcEchartsCss;

export { HcEcharts as hc_echarts };
