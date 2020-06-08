import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcSelectionCss = ":host{display:block}:host .title{font-size:0.88rem;font-weight:normal;text-align:center;margin:0;padding:0.8rem 0}:host .handle{padding:0 0.8rem}";

class HcSelection {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = '请选择所在地区';
        this.value = '';
        this.level = 0;
        this.vchoice = createEvent(this, "vchoice", 7);
        this.vlevel = createEvent(this, "vlevel", 7);
    }
    componentDidLoad() {
        this.$drawer = this.el.shadowRoot.querySelector('hc-drawer');
        this.$tab = this.el.shadowRoot.querySelector('hc-tab');
        this.$swiper = this.el.shadowRoot.querySelector('hc-swiper');
        this.$content = this.el.shadowRoot.querySelector('hc-selection-content');
        this.$drawer.addEventListener('vshow', () => {
            this.$tab.auto = true;
        });
        this.$content.addEventListener('vchange', (e) => {
            this.onItemClick(e);
        });
        this.$tab.addEventListener('vchange', (e) => {
            var children = Array.from(this.$tab.children);
            children.forEach((child, i) => {
                if (i > e.detail.current) {
                    this.$tab.removeChild(child);
                }
            });
            this.vlevel.emit({
                level: e.detail.current
            });
        });
    }
    render() {
        this.$children = Array.from(this.el.children);
        return (h(Host, null, this.renderHandle(this.$children), h("hc-drawer", { rounder: true, place: "down" }, h("h2", { class: "title" }, this.heading), h("div", { class: "handle" }, h("hc-tab", { auto: false }, h("hc-tab-item", null, "\u8BF7\u9009\u62E9"))), this.renderContent(this.$children))));
    }
    onDisplay() {
        this.$drawer.generate();
    }
    renderHandle(children) {
        if (!this.command) {
            var wrap = document.createElement('div');
            wrap.appendChild(children[0]);
            return (h("div", { onClick: this.onDisplay.bind(this), innerHTML: wrap.innerHTML }));
        }
        else {
            return (h("div", null));
        }
    }
    renderContent(children) {
        if (!this.command) {
            var wrap = document.createElement('div');
            wrap.appendChild(children[1]);
            return (h("div", { innerHTML: wrap.innerHTML }));
        }
        else {
            var data = eval(`(${this.data})`);
            var html = '';
            data.forEach(item => {
                html += `<hc-selection-item value="${item.value}">${item.label}</hc-selection-item>`;
            });
            return (h("hc-selection-content", { onVchange: this.onItemClick.bind(this), innerHTML: html }));
        }
    }
    onItemClick(e) {
        this.$tab.children[this.$tab.children.length - 1].innerHTML = e.detail.label;
        // 显示加载
        this.$content.Loading();
        this.vchoice.emit(e.detail);
    }
    async SetData(arr) {
        var tabitem = document.createElement('hc-tab-item');
        tabitem.innerText = '请选择';
        this.$tab.appendChild(tabitem);
        var length = this.$tab.children.length;
        this.$tab.Switch(length - 1);
        var str = '';
        arr.forEach(item => {
            str += `<hc-selection-item value="${item.value}">${item.label}</hc-selection-item>`;
        });
        this.$content.innerHTML = str;
        this.$content.Loaded();
    }
    async Finish() {
        this.$content.Loaded();
        this.destory();
    }
    async destory() {
        this.$drawer.destory();
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
