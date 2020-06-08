import { r as registerInstance, h, H as Host, g as getElement } from './index-17e92c35.js';

const hcAlertCss = ":host{display:block;background:var(--background-color-white);position:fixed;top:50%;left:50%;transform:translate3d(-50%, -50%, 0);width:80%;max-width:400px;min-height:4rem;font-size:0.7rem;padding:1rem;color:var(--color-text-primary);box-sizing:border-box;transition:0.3s ease-out;z-index:100;border-radius:0.5rem}:host .close{margin:0;position:absolute;right:1rem;top:1rem;color:var(--color-text-placeholder)}:host .title{font-size:0.9rem;color:var(--color-text-primary);text-align:center;margin:0}:host .content{margin:1.5rem 0;display:block}:host .footer{margin-bottom:-0.5rem;margin-left:-1rem;margin-right:-1rem}:host([type=none]){transform:translate3d(-50%, -50%, 0) scale(1);opacity:1}:host([type=zoomIn]){transform:translate3d(-50%, -50%, 0) scale(0.7);opacity:0}:host([type=slideInDown]){transform:translate3d(-50%, -100%, 0) scale(1);top:40%}:host([type=slideInUp]){transform:translate3d(-50%, 100%, 0) scale(1);top:50%}:host([type=fadeInDown]){transform:translate3d(-50%, -100%, 0) scale(1);top:40;opacity:0}:host([type=fadeInUp]){transform:translate3d(-50%, 100%, 0) scale(1);top:50%;opacity:0}:host([type=zoomInDown]){transform:translate3d(-50%, -100%, 0) scale(0.7);top:40%}:host([type=zoomInUp]){transform:translate3d(-50%, 100%, 0) scale(0.7);top:50%}:host([type=fadeIn]){transform:translate3d(-50%, -50%, 0) scale(1);opacity:0.1}:host([visible]){transform:translate3d(-50%, -50%, 0) scale(1);opacity:1;top:50%;z-index:100}";

class HcAlert {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.masker = true;
        this.clickable = true;
        this.type = 'none';
    }
    // 监听显示隐藏状态
    Dhandle(v) {
        if (v) {
            this.el.removeAttribute('style');
            setTimeout(() => {
                this.el.setAttribute('visible', `${v}`);
            }, 30);
        }
        else {
            var timer = this.type == 'none' ? 0 : 300;
            this.el.removeAttribute('visible');
            setTimeout(() => {
                this.el.style.display = 'none';
            }, timer);
            if (this.command) {
                setTimeout(() => {
                    document.body.removeChild(this.el);
                }, timer);
            }
        }
    }
    componentDidLoad() {
        this.el.style.display = 'none';
    }
    render() {
        var footer = this.footer ? eval(`(${this.footer})`) : [];
        return (h(Host, null, h("div", { class: "close" }, h("slot", { name: "close" }, h("hc-icon", { onClick: this.destory.bind(this, { id: 'close' }), name: "close" }))), h("h2", { class: "title" }, h("slot", { name: "title" }, this.head)), h("div", { class: "content" }, h("slot", null, this.content)), h("div", { class: "footer" }, h("slot", { name: "footer" }, h("hc-row", { style: {
                marginLeft: `1rem`,
                marginRight: `1rem`,
                marginBottom: `0.5rem`
            } }, footer.map((item, index) => {
            return (h("hc-col", { flex: 1 }, this.renderButton(item, index, footer.length)));
        }))))));
    }
    // 渲染底部按钮
    renderButton(item, index, length) {
        if (index < length - 1) {
            return (h("hc-button", { onClick: this.destory.bind(this, item), rounder: true, type: "info", style: { marginRight: `0.5rem` } }, item.label));
        }
        else {
            return (h("hc-button", { onClick: this.destory.bind(this, item), rounder: true, type: "primary", style: { marginLeft: `0.5rem` } }, item.label));
        }
    }
    // 显示
    onDisplay() {
        this.el.style.zIndex = `100`;
        setTimeout(() => {
            this.visible = true;
            this.$mask = document.createElement('hc-masker');
            this.$mask.command = true;
            this.$mask.clickable = false;
            if (!this.masker) {
                this.$mask.fill = 'transparent';
            }
            document.body.appendChild(this.$mask);
            this.$mask.generate();
            if (this.clickable && this.masker) {
                this.$mask.addEventListener('vclick', () => {
                    this.destory();
                });
            }
        }, 30);
        // 指定时间自动关闭
        if (this.duration && this.footer) {
            var fistbutton = this.el.shadowRoot.querySelectorAll('hc-button')[0];
            var time = this.duration / 1000;
            var text = fistbutton.innerHTML;
            fistbutton.innerHTML = `${text}(${time >= 10 ? time : '0' + time}S)`;
            var timer = setInterval(() => {
                time -= 1;
                fistbutton.innerHTML = `${text}(${time >= 10 ? time : '0' + time}S)`;
                if (time == 0) {
                    clearInterval(timer);
                    this.destory();
                }
            }, 1000);
        }
    }
    // 销毁
    async destory(data = null) {
        this.visible = false;
        this.$mask.destory();
        console.log(data);
    }
    // 初始化
    async generate(option = null) {
        if (option) {
            var alert = document.createElement('hc-alert');
            for (let key in option) {
                var prop;
                if (typeof option[key] == 'object') {
                    prop = JSON.stringify(option[key]);
                }
                else {
                    prop = option[key];
                }
                alert.setAttribute(key, prop);
            }
            alert.setAttribute('command', 'true');
            document.body.appendChild(alert);
            alert.generate();
        }
        else {
            this.onDisplay();
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["Dhandle"]
    }; }
}
HcAlert.style = hcAlertCss;

export { HcAlert as hc_alert };
