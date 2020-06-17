import { r as registerInstance, h, H as Host, g as getElement } from './index-6dd25a1a.js';

function getparents(el, parentSelector /* optional */) {
    // If no parentSelector defined will bubble up all the way to *document*
    if (parentSelector === undefined) {
        parentSelector = document;
    }
    var parents = [];
    var p = el.parentNode;
    while (p !== parentSelector) {
        var o = p;
        parents.push(o);
        p = o.parentNode;
    }
    parents.push(parentSelector); // Push that parentSelector you wanted to stop at
    return parents;
}

const hcStickyCss = ":host{display:block}:host([fixed]) .content{position:fixed}";

class HcSticky {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.offset = 0;
    }
    componentDidLoad() {
        var parents = getparents(this.el, document.querySelector('hc-view'));
        this.$view = parents[parents.length - 1];
        this.$content = this.el.shadowRoot.querySelector('.content');
        this.pos = this.el.getBoundingClientRect();
        this.$view.addEventListener('vscroll', (e) => {
            this.renderPosition(e);
        });
    }
    render() {
        return (h(Host, null, h("div", { class: "content" }, h("slot", null))));
    }
    renderPosition(e) {
        var offset = this.pos.y - this.$view.offsetTop - this.offset;
        if (e.detail.scrolltop > offset) {
            this.$content.style.top = `${this.offset + this.$view.offsetTop}px`;
            this.$content.style.width = `${this.pos.width}px`;
            this.$content.style.height = `${this.pos.height}px`;
            this.$content.style.left = `${this.pos.x}px`;
            this.el.setAttribute('fixed', 'true');
            this.el.style.height = `${this.pos.height}px`;
        }
        else {
            this.el.removeAttribute('fixed');
        }
    }
    get el() { return getElement(this); }
}
HcSticky.style = hcStickyCss;

export { HcSticky as hc_sticky };
