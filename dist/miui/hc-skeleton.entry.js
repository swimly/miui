import { r as registerInstance, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcSkeletonCss = ":host{display:block}:host slot{display:none}:host .skeleton{display:flex;flex-direction:row;align-items:flex-start}:host .skeleton.animation .title,:host .skeleton.animation .row,:host .skeleton.animation .avatar,:host .skeleton.animation .cover{animation:light 1s linear infinite}:host .skeleton .content{flex:1}:host .skeleton .content .title{height:1.2rem;background:var(--background-color-base);margin:0 0 0.8rem 0;border-radius:0.1rem;width:40%;position:relative;overflow:hidden}:host .skeleton .content .row{height:1rem;background:var(--background-color-base);margin:0.4rem 0;border-radius:0.1rem}:host .skeleton .content .row:last-child{width:60%}:host .skeleton .avatar{height:2rem;width:2rem;border-radius:50%;background:var(--background-color-base);margin-right:0.5rem}:host .skeleton .cover{height:3rem;width:4rem;border-radius:0.1rem;background:var(--background-color-base);margin-right:0.5rem}:host([reverse]) .skeleton{flex-direction:row-reverse}:host([reverse]) .skeleton .cover{margin:0 0 0 0.5rem}:host([visible]) .skeleton{display:none}:host([visible]) slot{display:block}@keyframes light{0%{opacity:1}50%{opacity:0.5}100%{opacity:1}}";

class HcSkeleton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.animation = true;
        this.visible = false;
    }
    visibleHandle(v) {
        if (v) {
            this.el.setAttribute('visible', 'true');
        }
        else {
            this.el.removeAttribute('visible');
        }
    }
    render() {
        var arr = new Array(this.rows);
        arr.fill('row');
        return (h(Host, null, h("div", { class: `skeleton ${this.animation ? 'animation' : ''}` }, this.renderAvatar(), this.renderCover(), h("div", { class: "content" }, this.renderTitle(), arr.map(() => {
            return (h("p", { class: "row" }));
        }))), h("slot", null)));
    }
    renderAvatar() {
        if (this.avatar) {
            return (h("div", { class: "avatar" }));
        }
    }
    renderCover() {
        if (this.cover) {
            return (h("div", { class: "cover" }));
        }
    }
    renderTitle() {
        if (this.titles) {
            return (h("h2", { class: "title" }));
        }
    }
    async loaded() {
        this.visible = true;
    }
    async loading() {
        this.visible = false;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["visibleHandle"]
    }; }
}
HcSkeleton.style = hcSkeletonCss;

export { HcSkeleton as hc_skeleton };
