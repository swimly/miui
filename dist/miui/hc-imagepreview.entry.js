import { r as registerInstance, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const hcImagepreviewCss = ":host{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap}:host img{object-fit:contain}";

class HcImagepreview {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.$swiper = this.el.shadowRoot.querySelector('hc-swiper');
        this.$masker = this.el.shadowRoot.querySelector('hc-masker');
        var children = Array.from(this.el.children);
        children.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.$swiper.current = index;
                this.$masker.generate();
            });
        });
    }
    render() {
        var data = this.data ? this.data.split(',') : this.getData();
        var width = document.body.offsetWidth;
        var height = document.body.offsetHeight;
        return (h(Host, null, h("slot", null), h("hc-masker", { fill: "rgba(0,0,0,0.95)" }, h("hc-swiper", { height: height, width: width }, data.map(item => {
            return (h("hc-swiper-item", null, h("hc-touch", null, h("img", { style: { width: `${width * 0.9}px`, height: `${height}px`, objectFit: 'contain' }, src: item, alt: "" }))));
        })))));
    }
    getData() {
        var children = Array.from(this.el.children);
        var data = [];
        children.forEach(item => {
            data.push(item.getAttribute('src'));
        });
        return data;
    }
    get el() { return getElement(this); }
}
HcImagepreview.style = hcImagepreviewCss;

export { HcImagepreview as hc_imagepreview };
