import { r as registerInstance, h, H as Host, g as getElement } from './index-e5ececff.js';
import { c as chunk } from './number-ab37dd7a.js';

const hcSquareCss = ":host{display:flex;flex-direction:row;align-items:center}";

class HcSquare {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.column = 3;
    }
    componentDidLoad() {
    }
    render() {
        return (h(Host, null, this.renderDom()));
    }
    renderDom() {
        var children = Array.from(this.el.children);
        children.forEach((child) => {
            child.style.width = `${100 / this.column}%`;
        });
        console.log(children);
        if (this.row) {
            // 可以左右切换
            var arr = chunk(children, this.column * this.row);
            console.log(this.el.offsetWidth);
            var str = `<hc-swiper loop ${this.autoplay ? 'autoplay' : ''} indicate="light" width="${this.el.offsetWidth}">`;
            arr.forEach(group => {
                str += `<hc-swiper-item>`;
                group.forEach(child => {
                    var div = document.createElement('div');
                    div.append(child);
                    str += `${div.innerHTML}`;
                });
                str += `</hc-swiper-item>`;
            });
            str += `</hc-swiper>`;
            return (h("div", { innerHTML: str }));
        }
        else {
            var str = this.el.innerHTML;
            return (h("hc-row", { innerHTML: str, wrap: true }));
        }
    }
    get el() { return getElement(this); }
}
HcSquare.style = hcSquareCss;

export { HcSquare as hc_square };
