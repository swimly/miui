import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { p as parse } from './picker-e34a3c80.js';

const hcPickerCss = ":host{display:block;font-size:0.7rem}:host .title{font-size:0.9rem;color:var(--color-text-primary);text-align:center;font-weight:normal;margin:1rem 0}:host .footer{height:2.2rem;padding:1rem}:host .footer hc-col:first-child{padding-right:0.5rem}:host .footer hc-col:last-child{padding-left:0.5rem}";

class HcPickerView {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.titles = '请选择';
        this.value = '';
        this.reset = true;
        this.footer = true;
        this.vdone = createEvent(this, "vdone", 7);
        this.vhide = createEvent(this, "vhide", 7);
    }
    valueHandle(v) {
        this.el.setAttribute('value', v);
    }
    componentDidLoad() {
        this.$drawer = this.el.shadowRoot.querySelector('hc-drawer');
        if (this.data) {
            this.el.setAttribute('data', this.data);
        }
    }
    render() {
        this.$data = this.computedData();
        var footer = null;
        if (this.footer) {
            footer = (h("hc-row", { class: "footer" }, h("hc-col", { span: 12 }, h("hc-button", { type: "info", onClick: this.destory.bind(this), rounder: true }, "\u53D6\u6D88")), h("hc-col", { align: "right", span: 12 }, h("hc-button", { type: "primary", onClick: this.destory.bind(this), rounder: true }, "\u786E\u5B9A"))));
        }
        return (h(Host, null, h("hc-picker-handle", { onClick: this.onDisplay.bind(this), innerHTML: this.$data.handle }), h("hc-drawer", { place: "down", rounder: true }, h("h2", { class: "title" }, this.titles), h("hc-picker-content", null, this.$data.data.map((column, index) => (h("hc-picker-view", { value: this.$data.value[index], current: this.renderCurrent.bind(this, {
                data: this.$data.data[index],
                value: this.$data.value[index]
            })(), onVscrollend: this.onDataChange.bind(this, index) }, column.map(item => {
            return (h("hc-picker-item", { value: item.value }, item.label));
        }))))), footer)));
    }
    onDataChange(index, e) {
        var value = this.value.split(',');
        for (var i = 0; i < value.length; i++) {
            if (i > index && this.reset) {
                if (this.command) {
                    value[i] = '';
                }
                else {
                    value[i] = this.computedData().data[i][0].label;
                }
            }
            if (i == index) {
                value[i] = e.detail.label;
            }
        }
        if (this.command) {
            var result = parse(JSON.parse(this.data), value.join(','));
            this.value = result.valueString;
        }
        else {
            this.value = value.join(',');
        }
    }
    renderCurrent(data) {
        var index = 0;
        data.data.forEach((item, i) => {
            if (item.label == data.value) {
                index = i;
            }
        });
        return index;
    }
    // 将内容转换成数组
    computedData() {
        var data = [];
        var value = [];
        var handle = !this.el.children.length ? '' : this.el.children[0].innerHTML;
        if (!this.el.children.length) {
            var computed = parse(JSON.parse(this.data), this.value);
            data = computed.data;
            value = computed.value;
        }
        else {
            var children = Array.from(this.el.children[1].children);
            children.forEach(view => {
                var column = [];
                Array.from(view.children).forEach(item => {
                    column.push({
                        label: item.innerHTML,
                        value: item.getAttribute('value')
                    });
                });
                data.push(column);
            });
        }
        value = this.value ? this.value.split(',') : [];
        return {
            data,
            handle,
            value
        };
    }
    async onDisplay() {
        this.$drawer.generate();
    }
    async hide() {
        this.$drawer.destory();
    }
    async destory() {
        this.$drawer.destory();
        var value = this.value ? this.value : `${this.$data.data[0][0].label},${this.$data.data[1][0].label},${this.$data.data[2][0].label}`;
        this.vdone.emit({
            value: value
        });
        setTimeout(() => {
            if (this.command && document.querySelector('hc-picker')) {
                setTimeout(() => {
                    document.body.removeChild(this.el);
                }, 300);
            }
        }, 300);
    }
    async generate(option = null) {
        if (option) {
            var picker = document.createElement('hc-picker');
            for (let key in option) {
                var prop;
                if (typeof option[key] !== 'string') {
                    prop = JSON.stringify(option[key]);
                }
                else {
                    prop = option[key];
                }
                picker.setAttribute(key, prop);
            }
            picker.setAttribute('command', 'true');
            document.body.appendChild(picker);
            picker.generate();
            return picker;
        }
        else {
            setTimeout(() => {
                this.onDisplay();
            }, 30);
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueHandle"]
    }; }
}
HcPickerView.style = hcPickerCss;

export { HcPickerView as hc_picker };
