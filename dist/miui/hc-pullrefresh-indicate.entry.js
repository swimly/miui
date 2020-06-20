import { r as registerInstance, h, H as Host } from './index-6dd25a1a.js';

const hcPullrefreshIndicateCss = ":host{display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:0.7rem;color:var(--color-text-primary);height:2.8rem}";

class HcPullrefreshIndicate {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.status = 0;
        this.labels = '下拉刷新,松手刷新,加载中,加载成功,加载失败';
        this.icons = 'falling,rising,loading,success,cry';
    }
    statusHandle(v) {
        if (v == 2) {
            this.loading = true;
        }
        else {
            this.loading = false;
        }
    }
    render() {
        var labels = this.labels.split(',');
        var icons = this.icons.split(',');
        return (h(Host, { style: {
                height: `${this.height}px`
            } }, h("slot", null, h("hc-row", { valign: "center" }, h("hc-icon", { spin: this.loading, size: 24, name: icons[this.status] }), h("span", null, labels[this.status])))));
    }
    static get watchers() { return {
        "status": ["statusHandle"]
    }; }
}
HcPullrefreshIndicate.style = hcPullrefreshIndicateCss;

export { HcPullrefreshIndicate as hc_pullrefresh_indicate };
