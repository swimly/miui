import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcRadioGroupCss = ":host{display:flex;flex-direction:row}:host([vertical]){flex-direction:column}";

class HcRadioGroup {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vchange = createEvent(this, "vchange", 7);
    }
    valueHandle(v) {
        this.vchange.emit({
            value: v
        });
        this.el.setAttribute('value', v);
    }
    componentDidLoad() {
        var slot = this.el.shadowRoot.querySelector('slot');
        this.$children = slot.assignedElements();
        if (this.vertical) {
            this.el.setAttribute('vertical', `${this.vertical}`);
        }
        this.$children.forEach(child => {
            if (this.vertical) {
                child.setAttribute('vertical', `${this.vertical}`);
            }
            if (this.reverse) {
                child.setAttribute('reverse', `${this.reverse}`);
            }
            if (this.conner) {
                child.setAttribute('conner', `${this.conner}`);
            }
            if (this.rounder) {
                child.setAttribute('rounder', `${this.rounder}`);
            }
            if (this.type) {
                child.setAttribute('type', `${this.type}`);
            }
            if (this.subline) {
                child.setAttribute('subline', `${this.subline}`);
            }
            if (child.getAttribute('value') == this.value) {
                child.setAttribute('checked', `true`);
            }
            child.addEventListener('click', (e) => {
                this.$children.forEach(radio => {
                    if (radio.getAttribute('value') !== child.getAttribute('value')) {
                        radio.Check(false);
                    }
                });
                this.value = e.target.getAttribute('value');
            });
        });
    }
    render() {
        var pos = {
            left: 'flex-start',
            center: 'center',
            right: 'flex-end'
        };
        return (h(Host, { style: {
                justifyContent: pos[this.align]
            } }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueHandle"]
    }; }
}
HcRadioGroup.style = hcRadioGroupCss;

export { HcRadioGroup as hc_radio_group };
