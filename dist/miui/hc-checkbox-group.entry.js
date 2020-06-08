import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcCheckboxGroupCss = ":host{display:flex;flex-direction:row}:host([vertical]){flex-direction:column}";

class HcCheckboxGroup {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = 'checkbox';
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
        var value = this.value.split(',');
        this.$children.forEach(child => {
            if (this.name) {
                child.setAttribute('name', `${this.name}`);
            }
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
            if (value.indexOf(child.getAttribute('value')) >= 0) {
                child.setAttribute('checked', `true`);
            }
            child.addEventListener('vchange', (e) => {
                if (e.detail.checked) {
                    value.push(e.detail.value);
                }
                else {
                    console.log('000');
                    var i = value.indexOf(e.detail.value);
                    value.splice(i, 1);
                }
                this.value = value.join(',');
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
HcCheckboxGroup.style = hcCheckboxGroupCss;

export { HcCheckboxGroup as hc_checkbox_group };
