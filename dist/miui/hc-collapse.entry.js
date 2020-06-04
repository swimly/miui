import { r as registerInstance, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcCollapseCss = ":host{display:block}";

class HcCollapse {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        var slots = this.el.shadowRoot.querySelector('slot');
        var childen = slots.assignedElements();
        childen.forEach((item) => {
            item.addEventListener('vchange', () => {
                if (this.accordion) {
                    childen.forEach(c => {
                        c.removeAttribute('visible');
                    });
                }
            });
        });
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
}
HcCollapse.style = hcCollapseCss;

export { HcCollapse as hc_collapse };
