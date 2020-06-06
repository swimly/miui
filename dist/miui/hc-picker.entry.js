import { r as registerInstance, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcPickerCss = ":host{display:block;font-size:0.7rem}:host .title{font-size:0.9rem;color:var(--color-text-primary);text-align:center;font-weight:normal;margin:1rem 0}:host .footer{height:2.2rem;padding:1rem}:host .footer hc-col:first-child{padding-right:0.5rem}:host .footer hc-col:last-child{padding-left:0.5rem}";

class HcPickerView {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.titles = '请选择';
    }
    valueHandle(v) {
        console.log(v);
    }
    componentDidLoad() {
        this.$drawer = this.el.shadowRoot.querySelector('hc-drawer');
        this.$handle = this.el.shadowRoot.querySelectorAll('slot')[0];
        this.$content = this.el.shadowRoot.querySelectorAll('slot')[1].assignedElements()[0];
        this.$drawer.setAttribute('place', 'down');
        this.$drawer.setAttribute('rounder', `true`);
        this.bindClick();
        this.$content.addEventListener('vchange', (e) => {
            this.value = e.detail.value;
        });
    }
    render() {
        return (h(Host, null, h("slot", { name: "handle" }), h("hc-drawer", { place: "down" }, h("h2", { class: "title" }, this.titles), h("div", null, h("slot", null)), h("hc-row", { class: "footer" }, h("hc-col", { span: 12 }, h("hc-button", { type: "info", onClick: this.destory.bind(this), rounder: true }, "\u53D6\u6D88")), h("hc-col", { align: "right", span: 12 }, h("hc-button", { type: "primary", onClick: this.destory.bind(this), rounder: true }, "\u786E\u5B9A"))))));
    }
    bindClick() {
        this.$handle.addEventListener('click', () => {
            this.$drawer.generate();
        });
    }
    async destory() {
        this.$drawer.destory();
    }
    // 格式化数据
    async parse(source, value) {
        var index = 0;
        var format = [];
        var selected = [];
        var label = value.split(',');
        var current = this.isCascade(source) ? source : source[index];
        while (current && Array.isArray(current) && current.length) {
            format.push(current);
            if (label && label[index] !== undefined) {
                current.some((item) => {
                    if (item.name == label[index]) {
                        selected[index] = item;
                        return true;
                    }
                });
            }
            if (!selected[index]) {
                selected[index] = current[0];
            }
            index++;
            current = this.isCascade(source) ? selected[selected.length - 1].children : source[index];
        }
        return {
            source: source,
            data: format,
            value: selected,
            valueString: value
        };
    }
    isCascade(data) {
        return data[0] && this.isPlainObject(data[0]);
    }
    isPlainObject(obj) {
        return this._typeof(obj) === 'object';
    }
    _typeof(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueHandle"]
    }; }
}
HcPickerView.style = hcPickerCss;

export { HcPickerView as hc_picker };
