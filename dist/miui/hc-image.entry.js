import { r as registerInstance, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcImageCss = ":host{display:block;position:relative;background:var(--background-color-base);font-size:0.6rem;color:var(--color-text-placeholder);overflow:hidden;height:1rem}:host .core{transition:0.3s;opacity:0}:host .watermark{font-size:0.6rem;color:var(--color-text-placeholder);position:absolute;right:0;bottom:0;margin:0;padding:0.5rem}:host slot{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}:host slot[name=error]{display:none}:host([status=\"0\"]) slot{display:none}:host([status=\"0\"]) slot[name=loading]{display:flex}:host([status=\"0\"]) slot[name=error]{display:none}:host([status=\"1\"]) slot{display:block}:host([status=\"1\"]) slot img{opacity:1}:host([status=\"1\"]) slot[name=loading]{display:none}:host([status=\"1\"]) slot[name=error]{display:none}:host([status=\"-1\"]) slot{display:none}:host([status=\"-1\"]) slot img{opacity:0}:host([status=\"-1\"]) slot[name=loading]{display:none}:host([status=\"-1\"]) slot[name=error]{display:flex}";

class HcImage {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.status = 0;
        this.fit = 'cover';
    }
    srcHandle() {
        this.loadImage(this.$image);
    }
    loadImage(image) {
        if (!this.src)
            return;
        image.src = this.src;
        var width = this.el.offsetWidth;
        image.onload = () => {
            var scale = image.width / image.height;
            this.width = image.width < width ? image.width : width;
            this.height = this.width / scale;
            this.status = 1;
        };
        image.onerror = () => {
            this.status = -1;
        };
    }
    componentDidLoad() {
        // this.el.setAttribute('status', `${this.status}`)
        this.$image = this.el.shadowRoot.querySelector('.core');
        if (!this.lazy) {
            this.loadImage(this.$image);
        }
        else {
            const io = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry && entry.isIntersecting) {
                        if (this.lazy) {
                            this.loadImage(entry.target);
                        }
                        io.unobserve(entry.target);
                    }
                });
            });
            io.observe(this.$image);
        }
    }
    statusHandle(value) {
        this.el.setAttribute('status', `${value}`);
    }
    render() {
        return (h(Host, { style: { width: `${this.width}px`, height: `${this.height}px`, borderRadius: `${this.radius}px` } }, h("slot", null, h("img", { style: { objectFit: this.fit, width: `${this.width}px`, height: `${this.height}px` }, class: "core", alt: "" }), h("p", { class: "watermark" }, this.watermark)), h("slot", { name: "loading" }, h("hc-icon", { size: 32, name: "loading", spin: true }), h("span", null, "\u52A0\u8F7D\u4E2D")), h("slot", { name: "error" }, h("hc-icon", { size: 38, name: "cry" }), h("span", null, "\u52A0\u8F7D\u5931\u8D25"))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "src": ["srcHandle"],
        "status": ["statusHandle"]
    }; }
}
HcImage.style = hcImageCss;

export { HcImage as hc_image };
