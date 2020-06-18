import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { p as parse } from './picker-e34a3c80.js';

const hcSelectionCss = ":host{display:block}:host .title{font-size:0.88rem;font-weight:normal;text-align:center;margin:0;padding:0.8rem 0}:host .handle{padding:0 0.8rem}:host .footer{margin:0.8rem}:host .footer hc-col:first-child{padding-right:0.4rem}:host .footer hc-col:last-child{padding-left:0.4rem}";

class HcSelection {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = '请选择所在地区';
        this.value = '请选择';
        this.level = 0;
        this.current = 0;
        this.footer = true;
        this.vchange = createEvent(this, "vchange", 7);
    }
    componentDidLoad() {
        this.$drawer = this.el.shadowRoot.querySelector('hc-drawer');
        this.$tab = this.el.shadowRoot.querySelector('hc-tab');
    }
    render() {
        this.$value = this.value.split(',');
        this.$data = parse(JSON.parse(this.data), this.value).data;
        return (h(Host, null, h("hc-drawer", { rounder: true, place: "down" }, h("h2", { class: "title" }, this.heading), h("div", { class: "handle" }, h("hc-tab", { onVclick: this.onIndexChange.bind(this), current: this.current, data: this.value })), h("hc-selection-content", { width: this.width * this.$data.length, offset: -this.current * this.width }, this.$data.map((view, index) => (h("hc-selection-view", { width: this.width }, view.map((item) => (h("hc-selection-item", { active: this.$value.indexOf(item.label) >= 0, value: item.value, onClick: this.onClick.bind(this, item, index) }, item.label))))))), this.renderFooter())));
    }
    onIndexChange(e) {
        var value = this.value.split(',');
        value[e.detail.current] = '请选择';
        value = value.slice(0, e.detail.current + 1);
        this.value = value.join(',');
        this.current = e.detail.current;
    }
    onClick(item, index) {
        this.$value[index] = item.label;
        if (this.current < this.$data.length - 1) {
            this.$value[index + 1] = '请选择';
        }
        this.value = this.$value.join(',');
        setTimeout(() => {
            this.current = this.current < this.$data.length - 1 ? index + 1 : this.$data.length - 1;
        }, 50);
        if (this.current == this.$data.length - 1) {
            setTimeout(() => {
                this.$tab.auto = new Date().getTime();
            }, 120);
        }
    }
    onDisplay() {
        this.$drawer.generate();
        this.$tab.auto = true;
        this.width = this.el.offsetWidth;
    }
    renderFooter() {
        var dom = null;
        if (this.footer) {
            dom = (h("hc-row", { class: "footer" }, h("hc-col", { span: 12 }, h("hc-button", { onClick: this.destory.bind(this), type: "info", rounder: true }, "\u53D6\u6D88")), h("hc-col", { align: "right", span: 12 }, h("hc-button", { onClick: this.destory.bind(this), type: "primary", rounder: true }, "\u786E\u5B9A"))));
        }
        return dom;
    }
    async destory() {
        this.$drawer.destory();
        this.vchange.emit({
            value: this.value
        });
        if (this.command) {
            setTimeout(() => {
                document.body.removeChild(this.el);
            }, 300);
        }
    }
    async generate(option = null) {
        if (option) {
            var selection = document.createElement('hc-selection');
            for (let key in option) {
                var prop;
                if (typeof option[key] == 'object') {
                    prop = JSON.stringify(option[key]);
                }
                else {
                    prop = option[key];
                }
                selection.setAttribute(key, prop);
            }
            selection.setAttribute('command', 'true');
            document.body.appendChild(selection);
            setTimeout(() => {
                selection.generate();
            }, 100);
        }
        else {
            this.onDisplay();
        }
    }
    get el() { return getElement(this); }
}
HcSelection.style = hcSelectionCss;

export { HcSelection as hc_selection };
