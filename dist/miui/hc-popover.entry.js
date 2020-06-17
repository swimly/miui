import { r as registerInstance, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcPopoverCss = ":host{display:block;position:relative}:host .content{display:none;position:fixed;min-width:6em;background:var(--background-color-white);border-radius:0.2rem;transform:scale(0.6);opacity:0;transition:0.3s;z-index:102;box-shadow:0 0 0.5px var(--border-color-base);overflow:hidden}:host slot[name=handle]{display:block;position:static;min-width:0;box-shadow:0 0 0 transparent !important;opacity:1 !important;transform:scale(1) !important;border:none}:host([visible]) .content{display:block;opacity:1;transform:scale(1)}:host([place=\"bottom,right\"]) .content{transform-origin:top right}:host([place=\"top,right\"]) .content{transform-origin:bottom right}:host([place=\"bottom,left\"]) .content{transform-origin:top left}:host([place=\"top,left\"]) .content{transform-origin:bottom left}";

class HcPopover {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.place = '';
        this.offset = 10;
    }
    visibleHandle(v) {
        if (v) {
            this.$content.style.display = 'block';
            if (this.masker) {
                this.$masker.generate();
            }
            setTimeout(() => {
                this.el.setAttribute('visible', 'true');
            }, 30);
        }
        else {
            this.el.removeAttribute('visible');
            setTimeout(() => {
                if (this.$masker) {
                    this.$masker.destory();
                }
                this.$content.style.display = 'none';
            }, 300);
        }
    }
    placeHandle(v) {
        this.el.setAttribute('place', v);
        this.generate(v);
    }
    componentDidLoad() {
        var slot = this.el.shadowRoot.querySelectorAll('slot');
        this.$masker = this.el.shadowRoot.querySelector('hc-masker');
        this.$handle = slot[0];
        this.$content = this.el.shadowRoot.querySelector('.content');
        this.bindClick();
        var children = this.$content.assignedElements();
        children.forEach(child => {
            child.addEventListener('vclick', (e) => {
                this.destory();
                console.log(e);
            });
        });
    }
    render() {
        return (h(Host, null, h("hc-masker", null), h("slot", { name: "handle" }), h("div", { class: "content" }, h("slot", null))));
    }
    generate(v) {
        var place = v.split(',');
        var maxHeight = document.body.clientHeight;
        var maxWidth = document.body.clientWidth;
        if (place[0] == 'top') {
            this.$content.style.top = 'auto';
            this.$content.style.bottom = `${maxHeight - this.pos.y + this.offset}px`;
        }
        else {
            this.$content.style.bottom = 'auto';
            this.$content.style.top = `${this.pos.y + this.pos.height + this.offset}px`;
        }
        if (place[1] == 'left') {
            this.$content.style.right = 'auto';
            this.$content.style.left = `${this.pos.x}px`;
        }
        else {
            this.$content.style.left = 'auto';
            this.$content.style.right = `${maxWidth - (this.pos.x + this.pos.width)}px`;
        }
    }
    destory() {
        this.visible = false;
    }
    bindClick() {
        document.body.addEventListener('click', () => {
            this.destory();
        });
        this.$handle.addEventListener('click', (e) => {
            e.stopPropagation();
            var place = this.place.split(',');
            var pos = e.target.getBoundingClientRect();
            this.pos = pos;
            var maxHeight = document.body.clientHeight;
            var maxWidth = document.body.clientWidth;
            if (pos.y < maxHeight - pos.y) {
                place[0] = 'bottom';
            }
            else {
                place[0] = 'top';
            }
            if (pos.x > maxWidth - pos.x) {
                place[1] = 'right';
            }
            else {
                place[1] = 'left';
            }
            this.visible = true;
            this.place = place.join(',');
        });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["visibleHandle"],
        "place": ["placeHandle"]
    }; }
}
HcPopover.style = hcPopoverCss;

export { HcPopover as hc_popover };
