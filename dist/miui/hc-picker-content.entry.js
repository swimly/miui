import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcPickerContentCss = ":host{display:flex;flex-direction:row}";

class HcPickerContent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vvaluechange = createEvent(this, "vvaluechange", 7);
    }
    valueHandle(v) {
        this.el.setAttribute('value', v);
        this.vvaluechange.emit({
            value: v
        });
    }
    componentDidLoad() {
        var value = [];
        var slot = this.el.shadowRoot.querySelector('slot');
        var children = slot.assignedElements();
        children.forEach(child => {
            value.push(child.getAttribute('value'));
            child.addEventListener('vscrollend', (e) => {
                var detail = e.detail;
                value[detail.index] = detail.label;
                this.value = value.join(',');
            });
        });
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueHandle"]
    }; }
}
HcPickerContent.style = hcPickerContentCss;

export { HcPickerContent as hc_picker_content };
