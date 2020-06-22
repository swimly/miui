import { r as registerInstance, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcImageCss = ":host{display:block;background:#eee}:host .core{width:100%;height:100%;opacity:0;transition:0.3s}";

class HcImage {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fit = 'cover';
    }
    componentDidLoad() {
        this.$image = this.el.shadowRoot.querySelector('.core');
        if (this.src) {
            this.el.setAttribute('src', this.src);
            if (!this.lazy) {
                this.loading();
            }
            else {
                this.bindobverse();
            }
        }
        if (this.width) {
            this.el.setAttribute('width', `${this.width}`);
        }
        if (this.height) {
            this.el.setAttribute('height', `${this.height}`);
        }
    }
    render() {
        return (h(Host, { style: {
                width: `${this.width}px`,
                height: `${this.height}px`
            } }, h("img", { class: "core", src: this.src, alt: "" }), h("slot", null), h("p", { class: "watermark" }, this.watermark)));
    }
    loading() {
        var image = document.createElement('img');
        image.src = this.src;
        var timer = !this.width && !this.height ? setInterval(() => {
            this.getSize(image);
            if (this.scale && this.width && this.height) {
                clearInterval(timer);
            }
        }, 10) : null;
        image.addEventListener('load', () => {
            this.$image.style.opacity = `1`;
        });
    }
    getSize(image) {
        var width = image.width;
        var height = image.height;
        this.scale = width / height;
        this.width = width > this.el.offsetWidth ? this.el.offsetWidth : width;
        this.height = width > this.el.offsetTop ? this.el.offsetWidth / this.scale : height;
    }
    bindobverse() {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry && entry.isIntersecting) {
                    if (this.lazy) {
                        this.loading();
                    }
                    io.unobserve(entry.target);
                }
            });
        });
        io.observe(this.el);
    }
    get el() { return getElement(this); }
}
HcImage.style = hcImageCss;

export { HcImage as hc_image };
