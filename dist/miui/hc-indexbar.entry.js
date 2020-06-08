import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17e92c35.js';
import { h as hammer } from './hammer-a3a84d6d.js';
import { f as findCloseNum } from './number-ab37dd7a.js';

const hcIndexbarCss = ":host{display:block;height:100%;position:relative;background:var(--background-color-white)}:host .content{height:100%;overflow:auto}:host .letter{display:flex;position:fixed;right:1rem;font-size:0.6rem;color:var(--color-text-primary);list-style:none;padding:0;margin:0;flex-direction:column;align-items:center;top:0;bottom:0;background:var(--background-color-base);padding:0.3rem;border-radius:1.2rem}:host .letter.touch li.active:before{transform:translate(-150%, -50%) scale(1);opacity:1}:host .letter li{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:center;position:relative}:host .letter li:before{content:attr(letter);display:flex;flex-direction:row;position:absolute;width:2rem;height:2rem;background:var(--background-color-base);border-radius:50%;left:0;top:50%;transform:translate(0, -50%) scale(0.5);opacity:0;align-items:center;justify-content:center;transition:0.3s}:host .letter li span{display:flex;width:1rem;height:100%;flex-direction:row;align-items:center;justify-content:center}:host .letter li.active{color:var(--color-primary)}";

class HcIndexbar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.letter = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
        this.offset = 10;
        this.index = 0;
        this.pos = [];
        this.scroll = [];
        this.vchange = createEvent(this, "vchange", 7);
    }
    indexHandle(v) {
        var prev = v - 1 <= 0 ? 0 : v - 1;
        var next = v + 1 >= this.$children.length - 1 ? this.$children.length - 1 : v + 1;
        this.$children.forEach(child => {
            child.classList.remove('prev');
            child.classList.remove('active');
            child.classList.remove('next');
        });
        var current = v < 0 ? 0 : v > this.$children.length - 1 ? this.$children.length - 1 : v;
        this.$children[prev].classList.add('prev');
        this.$children[current].classList.add('active');
        this.$children[next].classList.add('next');
        this.renderScroll(this.letter.split(',')[current]);
        this.vchange.emit({
            index: current,
            letter: this.letter.split(',')[v]
        });
    }
    componentDidLoad() {
        var children = Array.from(this.el.shadowRoot.querySelector('.letter').children);
        this.$children = children;
        var letter = this.letter.split(',');
        children.forEach((child, index) => {
            var pos = child.getBoundingClientRect();
            this.pos.push(Math.round(pos.y));
            child.setAttribute('top', `${Math.round(pos.y)}`);
            child.setAttribute('letter', letter[index]);
            child.addEventListener('click', () => {
                this.renderScroll(letter[index]);
            });
        });
        var slot = this.el.shadowRoot.querySelector('slot');
        var items = slot.assignedElements();
        items.forEach(item => {
            if (item.tagName == 'HC-INDEXBAR-TITLE') {
                this.scroll.push({
                    letter: item.innerHTML,
                    offset: item.offsetTop
                });
            }
        });
        this.bindTouch();
        this.bindScroll();
    }
    render() {
        var letters = this.letter.split(',');
        var offsettop = this.el.offsetTop;
        var offsetright = document.body.clientWidth - this.el.offsetLeft - this.el.offsetWidth;
        var offsetbottom = document.body.clientHeight - this.el.offsetTop - this.el.offsetHeight;
        return (h(Host, null, h("div", { class: "content", onScroll: this.bindScroll.bind(this) }, h("slot", null)), h("ul", { class: "letter", style: {
                top: `${this.offset + offsettop}px`,
                bottom: `${this.offset + offsetbottom}px`,
                right: `${this.offset + offsetright}px`
            } }, letters.map((letter, index) => {
            return (h("li", { class: this.index == index ? 'active' : '' }, h("span", Object.assign({}, { id: `${index}` }), letter)));
        }))));
    }
    bindScroll() {
        var content = this.el.shadowRoot.querySelector('.content');
        this.scroll.forEach((item, index) => {
            if (content.scrollTop >= item.offset && content.scrollTop < this.scroll[index + 1].offset) {
                console.log(item.letter);
                Array.from(this.$children).forEach(child => {
                    child.classList.remove('active');
                    if (child.getAttribute('letter') == item.letter) {
                        child.classList.add('active');
                    }
                });
            }
        });
    }
    renderScroll(letter) {
        this.scroll.forEach(item => {
            if (letter == item.letter) {
                this.el.shadowRoot.querySelector('.content').scrollTop = item.offset;
            }
        });
    }
    bindTouch() {
        var hammer$1 = new hammer(this.el.shadowRoot.querySelector('.letter'));
        hammer$1.get('pan').set({ direction: hammer.DIRECTION_VERTICAL });
        var start = 0;
        hammer$1.on('panstart', (e) => {
            start = e.center.y;
            this.el.shadowRoot.querySelector('.letter').classList.add('touch');
        });
        hammer$1.on('pan', (e) => {
            var index = findCloseNum(this.pos, e.deltaY + start - this.$children[0].clientHeight);
            this.index = index;
        });
        hammer$1.on('panend', () => {
            this.el.shadowRoot.querySelector('.letter').classList.remove('touch');
        });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "index": ["indexHandle"]
    }; }
}
HcIndexbar.style = hcIndexbarCss;

export { HcIndexbar as hc_indexbar };
