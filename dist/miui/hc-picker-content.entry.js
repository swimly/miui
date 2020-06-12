import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcPickerContentCss = ":host{display:flex;flex-direction:row}";

class HcPickerContent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vchange = createEvent(this, "vchange", 7);
    }
    currentHandle(v) {
        this.vchange.emit({
            current: v,
            value: this.value
        });
    }
    componentDidLoad() {
        if (this.value) {
            this.el.setAttribute('value', this.value);
        }
        var data = this.data ? JSON.parse(this.data) : [];
        var value = this.value ? this.value.split(',') : [];
        var children = Array.from(this.el.children);
        children.forEach((view, index) => {
            view.addEventListener('vchange', (e) => {
                // this.value = (e as CustomEvent).detail.value;
                // this.current = (e as CustomEvent).detail.current;
                // view.setAttribute('data', this.data)
                view.setAttribute('current', `${data[index].indexOf(value[index])}`);
                console.log(e.detail);
                // 将后面的列恢复到第一行
                children.forEach((child, i) => {
                    if (i > index) {
                        child.setAttribute('current', `0`);
                    }
                });
            });
        });
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "current": ["currentHandle"]
    }; }
}
HcPickerContent.style = hcPickerContentCss;

export { HcPickerContent as hc_picker_content };
