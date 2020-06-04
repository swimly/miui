import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e5ececff.js';
import { h as hammer } from './hammer-a3a84d6d.js';

const hcSwiperCss = ":host{display:block;overflow:hidden;position:relative}:host .wrap{display:flex;flex-direction:row}:host .indicate{position:absolute;bottom:0;right:0;width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center}:host .indicate span{display:inline-block;width:1rem;height:0.2rem;background:var(--background-color-white);opacity:0.4;margin:0.5rem 0.2rem;border-radius:0.2rem;font-size:0}:host .indicate span.active{opacity:1}:host([indicate=light]) .indicate span{margin-bottom:0;background:var(--background-color-darker)}";

class HcSwiper {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.current = 0;
        this.loop = false;
        this.autoplay = false;
        this.duration = 3000;
        this.vchange = createEvent(this, "vchange", 7);
    }
    componentDidLoad() {
        if (this.indicate) {
            this.el.setAttribute('indicate', this.indicate);
        }
        this.bindTouch();
        this.autoMove();
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
        })), h("div", { class: "indicate" }, arr.map((item, index) => {
            return (h("span", { class: this.current == index ? 'active' : '' }, item));
        }))));
    }
    bindTouch() {
        this.$wrap = this.el.shadowRoot.querySelector('.wrap');
        var hammer$1 = new hammer(this.el);
        this.vertical ? hammer$1.get('pan').set({ direction: hammer.DIRECTION_VERTICAL }) : hammer$1.get('pan').set({ direction: hammer.DIRECTION_HORIZONTAL });
        hammer$1.on('panstart', () => {
            this.$wrap.style.transition = '0s';
            clearInterval(this.timer);
        });
        hammer$1.on('pan', (e) => {
            var dis = this.vertical ? e.deltaY : e.deltaX;
            this.renderMove(this.offset + dis);
        });
        hammer$1.on('panend', (e) => {
            var dis = this.vertical ? e.deltaY : e.deltaX;
            this.$wrap.style.transition = '0.3s';
            if (dis > 50) {
                this.slidePrev();
            }
            if (dis < -50) {
                this.slideNext();
            }
            this.autoMove();
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
            console.log('到这里了');
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
}
HcSwiper.style = hcSwiperCss;

export { HcSwiper as hc_swiper };
