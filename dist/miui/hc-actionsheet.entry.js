import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcActionsheetCss = ":host{display:block}:host .title{font-size:0.8rem;color:var(--color-text-primary);text-align:center;margin:1rem 0;font-weight:normal}:host .wrap{max-height:20rem;overflow:auto}:host .footer{padding:1rem}:host .footer hc-col:first-child{padding-right:0.5rem}:host .footer hc-col:last-child{padding-left:0.5rem}";

class HcActionsheet {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.head = "请选择";
        this.mode = 'single'; //multiple
        this.value = '';
        this.content = '[]';
        this.vchange = createEvent(this, "vchange", 7);
        this.vdone = createEvent(this, "vdone", 7);
    }
    componentDidLoad() {
        this.$handle = this.el.shadowRoot.querySelector('slot');
        this.$drawer = this.el.shadowRoot.querySelector('hc-drawer');
        var slot = this.el.shadowRoot.querySelectorAll('slot')[1];
        if (slot.assignedElements()[0]) {
            this.$children = slot.assignedElements()[0].querySelectorAll('hc-actionsheet-item');
            this.renderActive();
            this.bindChange();
        }
        else {
            this.$children = this.el.shadowRoot.querySelectorAll('hc-actionsheet-item');
        }
        this.bindClick();
    }
    render() {
        var content = eval(`(${this.content})`);
        var value = this.value.split(',');
        return (h(Host, null, h("slot", { name: "handle" }), h("hc-drawer", { place: "down", rounder: true }, h("h2", { class: "title" }, this.head), h("div", { class: "wrap" }, h("slot", null, h("hc-actionsheet-content", null, content.map((item) => {
            return (h("hc-actionsheet-item", Object.assign({}, {
                active: value.indexOf(item.value) >= 0
            }, { onClick: this.onToggle.bind(this, item), value: item.value }), item.label));
        })))), h("hc-row", { class: "footer" }, h("hc-col", { span: 12 }, h("hc-button", { onClick: this.destory.bind(this, '取消'), type: "info", rounder: true }, "\u53D6\u6D88")), h("hc-col", { align: "right", span: 12 }, h("hc-button", { onClick: this.destory.bind(this, '确定'), type: "primary", rounder: true }, "\u786E\u5B9A"))))));
    }
    // 渲染当前选中
    renderActive() {
        var value = this.value.split(',');
        this.$children.forEach(item => {
            if (value.indexOf(item.getAttribute('value')) >= 0) {
                item.setAttribute('active', 'true');
            }
        });
    }
    // handle点击展开
    bindClick() {
        this.$handle.addEventListener('click', () => {
            this.generate();
        });
    }
    // 销毁
    async destory(label) {
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
            action: label
        });
    }
    // 指令模式点击切换
    onToggle(item) {
        var value = this.value.split(',');
        if (this.mode == 'single') {
            value = [item.value];
        }
        else {
            var i = value.indexOf(item.value);
            if (i >= 0) {
                value.splice(i, 1);
            }
            else {
                value.push(item.value);
            }
        }
        this.$children.forEach(child => {
            if (value.indexOf(child.getAttribute('value')) >= 0) {
                child.setAttribute('active', `true`);
            }
            else {
                child.removeAttribute('active');
            }
        });
        this.value = value.join(',');
    }
    // 普通模式点击切换
    bindChange() {
        var value = this.value.split(',');
        this.$children.forEach((child) => {
            child.addEventListener('click', () => {
                var s = child.getAttribute('value');
                if (this.mode == 'single') {
                    this.$children.forEach(c => {
                        c.removeAttribute('active');
                    });
                    value = [s];
                    child.setAttribute('active', 'true');
                }
                else {
                    if (child.getAttribute('active')) {
                        child.removeAttribute('active');
                        var i = value.indexOf(s);
                        value.splice(i, 1);
                    }
                    else {
                        child.setAttribute('active', 'true');
                        value.push(s);
                    }
                }
                this.value = value.join(',');
                this.vchange.emit({
                    value: value,
                    valueString: value.join(',')
                });
            });
        });
    }
    // 初始化
    async generate(option = null) {
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
            setTimeout(() => {
                actionsheet.generate();
            }, 100);
            return actionsheet;
        }
        else {
            this.$drawer.generate();
        }
    }
    get el() { return getElement(this); }
}
HcActionsheet.style = hcActionsheetCss;

export { HcActionsheet as hc_actionsheet };
