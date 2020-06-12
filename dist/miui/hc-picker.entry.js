import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcPickerCss = ":host{display:block;font-size:0.7rem}:host .title{font-size:0.9rem;color:var(--color-text-primary);text-align:center;font-weight:normal;margin:1rem 0}:host .footer{height:2.2rem;padding:1rem}:host .footer hc-col:first-child{padding-right:0.5rem}:host .footer hc-col:last-child{padding-left:0.5rem}";

class HcPickerView {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.titles = '请选择';
        this.value = '';
        this.valueProp = 'value';
        this.labelProp = 'label';
    }
    valueHandle(v) {
        console.log(v);
    }
    componentDidLoad() {
        this.$drawer = this.el.shadowRoot.querySelector('hc-drawer');
    }
    render() {
        var handle = null;
        var data = [];
        if (this.command && this.data) {
            var source = JSON.parse(this.data);
            data = this.parse(source, this.value).data;
            console.log(data);
        }
        else {
            var children = this.el.children;
            var content = Array.from(children[1].children);
            content.forEach((group) => {
                var items = Array.from(group.children);
                var child = [];
                items.forEach(item => {
                    child.push({
                        label: item.innerHTML,
                        value: item.getAttribute('value')
                    });
                });
                data.push(child);
            });
            handle = children[0].innerHTML;
        }
        return (h(Host, null, h("hc-picker-handle", { onClick: this.onDisplay.bind(this), innerHTML: handle }), h("hc-drawer", { place: "down", rounder: true }, h("h2", { class: "title" }, this.titles), h("hc-picker-content", { data: JSON.stringify(data), value: this.value, onVchange: this.onChange.bind(this) }, data.map(group => (h("hc-picker-view", null, group.map(item => (h("hc-picker-item", { value: item[this.valueProp] }, item[this.labelProp]))))))), h("hc-row", { class: "footer" }, h("hc-col", { span: 12 }, h("hc-button", { type: "info", onClick: this.destory.bind(this), rounder: true }, "\u53D6\u6D88")), h("hc-col", { align: "right", span: 12 }, h("hc-button", { type: "primary", onClick: this.destory.bind(this), rounder: true }, "\u786E\u5B9A"))))));
    }
    onChange(e) {
        console.log(e.detail);
    }
    async onDisplay() {
        this.$drawer.generate();
    }
    async destory() {
        this.$drawer.destory();
        setTimeout(() => {
            if (this.command) {
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
    // 格式化数据
    parse(source, value) {
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
