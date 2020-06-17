import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcActionsheetCss = ":host{display:block}:host .title{font-size:0.8rem;color:var(--color-text-primary);text-align:center;margin:1rem 0;font-weight:normal}:host .wrap{max-height:20rem;overflow:auto}:host .footer{padding:1rem}:host .footer hc-col:first-child{padding-right:0.5rem}:host .footer hc-col:last-child{padding-left:0.5rem}";

class HcActionsheet {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.head = "请选择";
        this.value = '';
        this.data = '';
        this.vchange = createEvent(this, "vchange", 7);
        this.vdone = createEvent(this, "vdone", 7);
    }
    valueHandle(v) {
        this.el.setAttribute('value', v);
    }
    componentDidLoad() {
        this.$drawer = this.el.shadowRoot.querySelector('hc-drawer');
    }
    render() {
        var computedData;
        var handle = null;
        if (!this.command && !this.data) {
            var data = [];
            var children = this.el.children;
            var content = children[1];
            var items = Array.from(content.children);
            items.forEach(item => {
                data.push({
                    label: item.innerHTML,
                    value: item.getAttribute('value')
                });
            });
            handle = children[0].innerHTML;
            computedData = data;
        }
        else {
            computedData = JSON.parse(this.data);
        }
        var value = this.value ? this.value.split(',') : [];
        console.log(value);
        return (h(Host, null, h("hc-actionsheet-handle", { innerHTML: handle, onClick: this.generate.bind(this, null) }), h("hc-drawer", { place: "down", rounder: true }, h("h2", { class: "title" }, this.head), h("div", { class: "content" }, computedData.map((item) => (h("hc-actionsheet-item", { onClick: this.onClick.bind(this, item), value: item.value, active: value.indexOf(item.value) >= 0 }, item.label)))), h("hc-row", { class: "footer" }, h("hc-col", { span: 12 }, h("hc-button", { onClick: this.destory.bind(this), type: "info", rounder: true }, "\u53D6\u6D88")), h("hc-col", { align: "right", span: 12 }, h("hc-button", { onClick: this.destory.bind(this), type: "primary", rounder: true }, "\u786E\u5B9A"))))));
    }
    onClick(item) {
        var value = this.value.split(',');
        if (this.multiple) {
            var index = value.indexOf(item.value);
            if (index >= 0) {
                value.splice(index, 1);
            }
            else {
                if (value[0] == '') {
                    value[0] = item.value;
                }
                else {
                    value.push(item.value);
                }
            }
        }
        else {
            value = [item.value];
        }
        this.value = value.join(',');
    }
    // 销毁
    async destory(e) {
        this.$drawer.destory();
        setTimeout(() => {
            if (this.command) {
                setTimeout(() => {
                    document.body.removeChild(this.el);
                }, 300);
            }
        }, 300);
        this.vdone.emit({
            value: this.value.split(','),
            valuestring: this.value,
            event: e
        });
    }
    // 初始化
    async generate(option = null) {
        console.log(option);
        if (option) {
            var actionsheet = document.createElement('hc-actionsheet');
            for (let key in option) {
                var prop;
                if (typeof option[key] !== 'string') {
                    prop = JSON.stringify(option[key]);
                }
                else {
                    prop = option[key];
                }
                actionsheet.setAttribute(key, prop);
            }
            actionsheet.setAttribute('command', 'true');
            document.body.appendChild(actionsheet);
            actionsheet.generate();
            return actionsheet;
        }
        else {
            setTimeout(() => {
                this.$drawer.generate();
            }, 30);
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueHandle"]
    }; }
}
HcActionsheet.style = hcActionsheetCss;

export { HcActionsheet as hc_actionsheet };
