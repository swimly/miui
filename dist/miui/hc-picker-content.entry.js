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
        var children = Array.from(this.el.children);
        children.forEach((view, index) => {
            view.addEventListener('vchange', (e) => {
                this.value = e.detail.value;
                this.current = e.detail.current;
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
