import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';
import { h as hammer } from './hammer-a3a84d6d.js';

const hcSwiperCss = ":host{display:block;overflow:hidden;position:relative}:host .wrap{display:flex;flex-direction:row}:host .indicate{position:absolute;bottom:0;right:0;width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center}:host .indicate span{display:inline-block;width:1rem;height:0.2rem;background:var(--background-color-white);opacity:0.4;margin:0.5rem 0.2rem;border-radius:0.2rem;font-size:0}:host .indicate span.active{opacity:1}:host([indicate=light]) .indicate span{margin-bottom:0;background:var(--background-color-darker)}";

class HcSwiper {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.current = 0;
        this.loop = false;
        this.autoplay = false;
        this.duration = 3000;
        this.moca = 0.8;
        this.vchange = createEvent(this, "vchange", 7);
    }
    notouchHandle(v) {
        this.el.setAttribute('current', `${v}`);
    }
    componentDidLoad() {
        if (this.indicate) {
            this.el.setAttribute('indicate', this.indicate);
        }
        if (this.notouch) {
            this.el.setAttribute('notouch', 'true');
        }
        if (!this.notouch) {
            this.bindTouch();
        }
        this.autoMove();
        var children = this.el.shadowRoot.querySelectorAll('hc-touch');
        children.forEach(item => {
            item.addEventListener('vchange', (e) => {
                this.notouch = e.detail.value;
            });
        });
    }
    render() {
        var children = Array.from(this.el.children);
        var width = this.width ? this.width : this.el.clientWidth;
        children.forEach((item) => {
            item.setAttribute('width', `${width}`);
            item.setAttribute('height', `${this.height}`);
        });
        this.children = this.loop ? [...children, ...children, ...children] : children;
        this.offset = this.loop ?
            this.vertical ? -(this.current + this.children.length / 3) * this.height : -(this.current + this.children.length / 3) * this.el.offsetWidth
            :
                this.vertical ? -(this.current) * this.height : -(this.current) * this.el.offsetWidth;
        var length = this.loop ? this.children.length / 3 : this.children.length;
        var arr = new Array(length);
        arr.fill('line');
        return (h(Host, { style: {
                height: `${this.height}px`,
                width: `${this.width}px`
            } }, h("div", { class: "wrap", style: {
                width: this.vertical ? 'auto' : `${this.el.offsetWidth * this.children.length * 3}px`,
                transform: this.vertical ? `translateY(${this.offset}px)` : `translateX(${this.offset}px)`,
                flexDirection: this.vertical ? 'column' : 'row'
            } }, this.children.map((item) => {
            return (h("div", { innerHTML: item.outerHTML }));
        })), h("slot", { name: "indicate" }, h("div", { class: "indicate" }, arr.map((item, index) => {
            return (h("span", { class: this.current == index ? 'active' : '' }, item));
        })))));
    }
    jump(current) {
        this.moca = this.moca > 0.6 ? this.moca - 0.09 : 0.6;
        return current * this.moca;
    }
    bindTouch() {
        this.$wrap = this.el.shadowRoot.querySelector('.wrap');
        this.hammer = new hammer(this.el);
        // this.vertical ? hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL }) : hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL })
        this.hammer.get('pinch').set({
            enable: true
        });
        this.hammer.on('doubletap panstart pan pinch panend pinchend', (ev) => {
            if (ev.type == 'panstart') {
                this.$wrap.style.transition = '0s';
                clearInterval(this.timer);
            }
            //pan    
            if (ev.type == 'pan') {
                if (this.notouch)
                    return;
                if (ev.pointers.length > 1) {
                    return false;
                }
                var dis = this.vertical ? ev.deltaY : ev.deltaX;
                dis = this.jump(dis);
                this.renderMove(this.offset + dis);
            }
            //panend
            if (ev.type == "panend") {
                if (this.notouch)
                    return;
                var dis = this.vertical ? ev.deltaY : ev.deltaX;
                this.$wrap.style.transition = '0.3s';
                if (dis > 150) {
                    this.slidePrev();
                }
                else if (dis < -150) {
                    this.slideNext();
                }
                else {
                    this.$wrap.style.transform = this.vertical ? `translateY(${this.offset}px)` : `translateX(${this.offset}px)`;
                }
                this.autoMove();
            }
        });
    }
    async slidePrev() {
        var move = this.vertical ? this.height : this.el.offsetWidth;
        this.$wrap.style.transition = '0.3s';
        if (this.loop) {
            // 循环模式
            var one = this.vertical ? this.height : this.el.offsetWidth;
            this.offset += move;
            this.renderMove(this.offset);
            if (this.offset >= 0) {
                this.offset = -(this.children.length / 3) * one;
                setTimeout(() => {
                    this.$wrap.style.transition = '0s';
                    this.$wrap.style.transform = this.vertical ? `translateY(${this.offset}px)` : `translateX(${this.offset}px)`;
                }, 300);
            }
        }
        else {
            // 非循环模式
            if (this.offset < 0) {
                this.offset += move;
            }
            this.renderMove(this.offset);
        }
        this.renderIndicate();
    }
    async slideNext() {
        var move = this.vertical ? this.height : this.el.offsetWidth;
        this.$wrap.style.transition = '0.3s';
        if (this.loop) {
            // 循环模式
            var one = this.vertical ? this.height : this.el.offsetWidth;
            this.offset -= move;
            this.renderMove(this.offset);
            if (this.offset <= -(this.children.length / 3 * 2) * one) {
                this.offset = -(this.children.length / 3) * one;
                setTimeout(() => {
                    this.$wrap.style.transition = '0s';
                    this.$wrap.style.transform = this.vertical ? `translateY(${this.offset}px)` : `translateX(${this.offset}px)`;
                }, 300);
            }
        }
        else {
            // 非循环模式
            var one = this.vertical ? this.height : this.el.offsetWidth;
            if (this.offset > -(this.children.length - 1) * one) {
                this.offset -= move;
            }
            this.renderMove(this.offset);
        }
        this.renderIndicate();
    }
    async slideTo(index, duration = 300) {
        this.$wrap.style.transition = `${duration / 1000}s`;
        this.current = index;
    }
    autoMove() {
        clearInterval(this.timer);
        if (this.autoplay) {
            this.timer = setInterval(() => {
                this.$wrap.style.transition = '0.3s';
                this.slideNext();
            }, this.duration);
        }
    }
    renderMove(offset) {
        this.vertical ? this.$wrap.style.transform = `translateY(${offset}px)` : this.$wrap.style.transform = `translateX(${offset}px)`;
    }
    renderIndicate() {
        var one = this.vertical ? this.height : this.el.offsetWidth;
        var length = this.loop ? this.children.length / 3 : this.children.length;
        var current = Math.abs(this.offset / one) < length ? Math.abs(this.offset / one) : Math.abs(Math.abs(this.offset / one) - length);
        var indicate = this.el.shadowRoot.querySelector('.indicate');
        var indicates = indicate.querySelectorAll('span');
        indicates.forEach((item, index) => {
            item.classList.remove('active');
            if (index == current) {
                item.classList.add('active');
            }
        });
        this.vchange.emit({
            current: current
        });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "current": ["notouchHandle"]
    }; }
}
HcSwiper.style = hcSwiperCss;

export { HcSwiper as hc_swiper };
