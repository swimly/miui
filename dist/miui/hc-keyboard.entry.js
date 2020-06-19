import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-6dd25a1a.js';

const keys = {
    number: [
        [{
                label: '1',
                value: 12
            }, {
                label: '2',
                value: 12
            }, {
                label: '3',
                value: 12
            }],
        [{
                label: '4',
                value: 12
            }, {
                label: '5',
                value: 12
            }, {
                label: '6',
                value: 12
            }],
        [{
                label: '7',
                value: 12
            }, {
                label: '8',
                value: 12
            }, {
                label: '9',
                value: 12
            }],
        [{
                label: '0',
                value: 12,
                flex: 2
            }, {
                label: '.',
                value: 12
            }]
    ],
    cardnumber: [
        [{
                label: '1',
                value: 12
            }, {
                label: '2',
                value: 12
            }, {
                label: '3',
                value: 12
            }],
        [{
                label: '4',
                value: 12
            }, {
                label: '5',
                value: 12
            }, {
                label: '6',
                value: 12
            }],
        [{
                label: '7',
                value: 12
            }, {
                label: '8',
                value: 12
            }, {
                label: '9',
                value: 12
            }],
        [{
                label: 'X',
                value: 12
            }, {
                label: '0',
                value: 12
            }, {
                label: 'back',
                value: 12,
                icon: 'tuige'
            }]
    ],
    en: [
        [{
                label: '1',
                value: 12
            }, {
                label: '2',
                value: 12
            }, {
                label: '3',
                value: 12
            }, {
                label: '4',
                value: 12
            }, {
                label: '5',
                value: 12
            }, {
                label: '6',
                value: 12
            }, {
                label: '7',
                value: 12
            }, {
                label: '8',
                value: 12
            }, {
                label: '9',
                value: 12
            }, {
                label: '0',
                value: 12
            }],
        [{
                label: 'q',
                value: 12
            }, {
                label: 'w',
                value: 12
            }, {
                label: 'e',
                value: 12
            }, {
                label: 'r',
                value: 12
            }, {
                label: 't',
                value: 12
            }, {
                label: 'y',
                value: 12
            }, {
                label: 'u',
                value: 12
            }, {
                label: 'i',
                value: 12
            }, {
                label: 'o',
                value: 12
            }, {
                label: 'p',
                value: 12
            }],
        [{
                label: 'a',
                value: 12
            }, {
                label: 's',
                value: 12
            }, {
                label: 'd',
                value: 12
            }, {
                label: 'f',
                value: 12
            }, {
                label: 'g',
                value: 12
            }, {
                label: 'h',
                value: 12
            }, {
                label: 'j',
                value: 12
            }, {
                label: 'k',
                value: 12
            }, {
                label: 'l',
                value: 12
            }],
        [{
                label: 'EN',
                value: 12,
                icon: 'rising1',
                background: '#D0D1D5',
                flex: 1.2
            }, {
                label: 'z',
                value: 12
            }, {
                label: 'x',
                value: 12
            }, {
                label: 'c',
                value: 12
            }, {
                label: 'v',
                value: 12
            }, {
                label: 'b',
                value: 12
            }, {
                label: 'n',
                value: 12
            }, {
                label: 'm',
                value: 12
            }, {
                label: 'back',
                value: 12,
                icon: 'leftarrow',
                background: '#D0D1D5',
                flex: 1.2
            }],
        [{
                label: '!?#',
                value: 12,
                background: '#D0D1D5'
            }, {
                label: '123',
                value: 12,
                background: '#D0D1D5'
            }, {
                label: '.',
                value: 12
            }, {
                label: '',
                value: 12,
                flex: 3
            }, {
                label: '@',
                value: 12
            }, {
                label: '完成',
                value: 12,
                background: '#0c84ff',
                color: '#fff',
                flex: 1.5,
                fontSize: '0.7rem'
            }]
    ],
    EN: [
        [{
                label: '1',
                value: 12
            }, {
                label: '2',
                value: 12
            }, {
                label: '3',
                value: 12
            }, {
                label: '4',
                value: 12
            }, {
                label: '5',
                value: 12
            }, {
                label: '6',
                value: 12
            }, {
                label: '7',
                value: 12
            }, {
                label: '8',
                value: 12
            }, {
                label: '9',
                value: 12
            }, {
                label: '0',
                value: 12
            }],
        [{
                label: 'Q',
                value: 12
            }, {
                label: 'W',
                value: 12
            }, {
                label: 'E',
                value: 12
            }, {
                label: 'R',
                value: 12
            }, {
                label: 'T',
                value: 12
            }, {
                label: 'Y',
                value: 12
            }, {
                label: 'U',
                value: 12
            }, {
                label: 'I',
                value: 12
            }, {
                label: 'O',
                value: 12
            }, {
                label: 'P',
                value: 12
            }],
        [{
                label: 'A',
                value: 12
            }, {
                label: 'S',
                value: 12
            }, {
                label: 'D',
                value: 12
            }, {
                label: 'F',
                value: 12
            }, {
                label: 'G',
                value: 12
            }, {
                label: 'H',
                value: 12
            }, {
                label: 'J',
                value: 12
            }, {
                label: 'K',
                value: 12
            }, {
                label: 'L',
                value: 12
            }],
        [{
                label: 'en',
                value: 12,
                icon: 'rising1',
                background: '#D0D1D5',
                flex: 1.2
            }, {
                label: 'Z',
                value: 12
            }, {
                label: 'X',
                value: 12
            }, {
                label: 'C',
                value: 12
            }, {
                label: 'V',
                value: 12
            }, {
                label: 'B',
                value: 12
            }, {
                label: 'N',
                value: 12
            }, {
                label: 'M',
                value: 12
            }, {
                label: 'back',
                value: 12,
                icon: 'leftarrow',
                background: '#D0D1D5',
                flex: 1.2
            }],
        [{
                label: '!?#',
                value: 12,
                background: '#D0D1D5'
            }, {
                label: '123',
                value: 12,
                background: '#D0D1D5'
            }, {
                label: '.',
                value: 12
            }, {
                label: '',
                value: 12,
                flex: 3
            }, {
                label: '@',
                value: 12
            }, {
                label: '完成',
                value: 12,
                background: '#0c84ff',
                color: '#fff',
                flex: 1.5,
                fontSize: '0.7rem'
            }]
    ],
    char: [
        [{
                label: '^',
                value: 12
            }, {
                label: '/',
                value: 12
            }, {
                label: '|',
                value: 12
            }, {
                label: '<',
                value: 12
            }, {
                label: '>',
                value: 12
            }, {
                label: '£',
                value: 12
            }, {
                label: '€',
                value: 12
            }, {
                label: '¥',
                value: 12
            }, {
                label: '℃',
                value: 12
            }, {
                label: '$',
                value: 12
            }],
        [{
                label: '[',
                value: 12
            }, {
                label: ']',
                value: 12
            }, {
                label: '{',
                value: 12
            }, {
                label: '}',
                value: 12
            }, {
                label: '#',
                value: 12
            }, {
                label: '%',
                value: 12
            }, {
                label: '+',
                value: 12
            }, {
                label: '=',
                value: 12
            }, {
                label: '~',
                value: 12
            }, {
                label: '_',
                value: 12
            }],
        [{
                label: '-',
                value: 12
            }, {
                label: '\\',
                value: 12
            }, {
                label: ':',
                value: 12
            }, {
                label: ';',
                value: 12
            }, {
                label: '(',
                value: 12
            }, {
                label: ')',
                value: 12
            }, {
                label: '&',
                value: 12
            }, {
                label: '"',
                value: 12
            }, {
                label: '*',
                value: 12
            }],
        [{
                label: '?',
                value: 12
            }, {
                label: '!',
                value: 12
            }, {
                label: '@',
                value: 12
            }, {
                label: ',',
                value: 12
            }, {
                label: '`',
                value: 12
            }, {
                label: 'x',
                value: 12
            }, {
                label: '÷',
                value: 12
            }, {
                label: "'",
                value: 12
            }, {
                label: 'back',
                value: 12,
                icon: 'leftarrow',
                background: '#D0D1D5',
                flex: 1.2
            }],
        [{
                label: 'en',
                value: 12,
                flex: 1.2,
                icon: 'return',
                background: '#D0D1D5'
            }, {
                label: '♂',
                value: 12
            }, {
                label: '♀',
                value: 12
            }, {
                label: '',
                value: 12,
                flex: 3
            }, {
                label: '.',
                value: 12
            }, {
                label: '完成',
                value: 12,
                background: '#0c84ff',
                color: '#fff',
                flex: 1.5,
                fontSize: '0.7rem'
            }]
    ],
    carnumber: [[
            {
                label: '京'
            }, {
                label: '津'
            }, {
                label: '冀'
            }, {
                label: '晋'
            }, {
                label: '蒙'
            }, {
                label: '辽'
            }, {
                label: '吉'
            }, {
                label: '黑'
            }, {
                label: '沪'
            }
        ], [
            {
                label: '苏'
            }, {
                label: '浙'
            }, {
                label: '皖'
            }, {
                label: '闽'
            }, {
                label: '赣'
            }, {
                label: '鲁'
            }, {
                label: '豫'
            }, {
                label: '鄂'
            }, {
                label: '湘'
            }
        ], [
            {
                label: '粤'
            }, {
                label: '桂'
            }, {
                label: '琼'
            }, {
                label: '川'
            }, {
                label: '贵'
            }, {
                label: '云'
            }, {
                label: '渝'
            }, {
                label: '藏'
            }, {
                label: '陕'
            }
        ], [
            {
                label: 'EN',
                uppercase: true,
                flex: 1.5,
                background: '#D0D1D5'
            },
            {
                label: '甘'
            }, {
                label: '青'
            }, {
                label: '宁'
            }, {
                label: '新'
            }, {
                label: 'back',
                icon: 'leftarrow',
                flex: 3,
                background: '#D0D1D5'
            }
        ]]
};

const hcKeyboardCss = ":host{font-size:0.8rem}:host hc-drawer{background-color:var(--background-color-base);padding:0.3rem}:host .head{background-color:var(--background-color-base);font-size:0.64rem;color:var(--color-text-primary);padding:0.5333333333rem 0.8rem}:host .tool{height:100%}:host .tool hc-col{padding:0.15rem 0;width:100%;font-size:0.8rem}:host .tool hc-col .key{padding:0 0.3rem;width:100%}:host .content{height:11rem}:host .content hc-col{height:100%}:host .keys{display:flex;flex-direction:column;padding:0 0.2rem 0 0;height:100%}:host .keys hc-row{flex:1}:host .keys hc-row hc-col{padding:0.15rem;box-sizing:border-box;height:100%}:host .key{background-color:var(--background-color-white);width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;color:var(--color-text-primary);border-radius:0.2666666667rem;font-size:inherit;box-sizing:border-box}:host .key:not(style):active{background:var(--background-color-basegray)}:host .key.done{background:var(--color-primary);color:var(--color-text-white)}:host .key.done:not(style):active{background:var(--color-primary)}:host([type=number]),:host([type=cardnumber]){font-size:1.12rem}";

class HcKeyboard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.change = false;
        this.value = '';
        this.vibrate = 100;
        this.vchange = createEvent(this, "vchange", 7);
    }
    typeHandle(v) {
        this.el.setAttribute('type', v);
    }
    valueHandle(v) {
        this.vchange.emit(v);
        this.el.children[0].setAttribute('value', v);
        if (this.$type == 'carnumber') {
            if (v.length == 0) {
                this.type = 'carnumber';
            }
        }
    }
    componentDidLoad() {
        if (this.type) {
            this.el.setAttribute('type', this.type);
        }
        this.$type = this.type;
        this.$slot = this.el.shadowRoot.querySelector('slot');
        this.$slot.addEventListener('click', () => {
            this.$drawer = this.el.shadowRoot.querySelector('hc-drawer');
            this.value = '';
            this.$drawer.generate();
        });
    }
    render() {
        var data = keys[this.type];
        var tool = null;
        if (this.type == 'number') {
            tool = (h("hc-col", { span: 5 }, h("hc-row", { direction: "column", class: "tool" }, h("hc-col", { flex: 1, align: "center" }, h("span", { class: "key", onClick: this.del.bind(this) }, h("hc-icon", { size: 28, name: "tuige" }))), h("hc-col", { flex: 1 }, h("span", { class: "key done", onClick: this.destory.bind(this) }, "\u5B8C\u6210")))));
        }
        return (h(Host, null, h("slot", null), h("hc-drawer", { place: "down", masker: false }, h("hc-row", { class: "head", valign: "center" }, h("hc-col", { align: "center" }, h("hc-icon", { size: 24, name: "keyboard" })), h("hc-col", { align: "center" }, "\u5B89\u5168\u952E\u76D8"), h("hc-col", { flex: 1, align: "right" }, h("hc-icon", { onClick: this.destory.bind(this), size: 24, name: "arrow-down" }))), h("hc-row", { class: "content" }, h("hc-col", { flex: 1 }, h("div", { class: "keys" }, data.map(row => {
            return (h("hc-row", null, row.map(item => {
                return (h("hc-col", { id: item.label, flex: item.flex ? item.flex : 1, onClick: this.onClick.bind(this, item) }, this.renderItem(item)));
            })));
        }))), tool))));
    }
    del() {
        this.value = this.value.substring(0, this.value.length - 1);
    }
    renderItem(item) {
        if (item.icon) {
            return (h("span", { class: "key", style: { backgroundColor: item.background, color: item.color, fontSize: item.fontSize } }, h("hc-icon", { size: 24, name: item.icon })));
        }
        else {
            return (h("span", { class: "key", style: { backgroundColor: item.background, color: item.color, fontSize: item.fontSize } }, item.label));
        }
    }
    onClick(item) {
        this.current = item.label;
        this.touchVibrate();
        if (item.label == 'back') {
            this.value = this.value.substring(0, this.value.length - 1);
        }
        else if (item.label == '完成') {
            this.destory();
        }
        else {
            this.value += item.label;
        }
        if (this.type == 'carnumber') {
            if (this.value.length == 1) {
                this.type = 'EN';
            }
        }
        if (!this.change)
            return;
        if (item.label == 'en') {
            this.type = 'en';
        }
        if (item.label == 'EN') {
            this.type = 'EN';
        }
        if (item.label == '!?#') {
            this.type = 'char';
        }
        if (item.label == '123') {
            this.type = 'number';
        }
    }
    async destory() {
        this.vchange.emit(this.value);
        this.$drawer.destory();
    }
    touchVibrate() {
        if (this.vibrate !== null) {
            var timer;
            if (this.vibrate >= 0) {
                timer = this.vibrate;
            }
            if (navigator.vibrate) {
                navigator.vibrate(timer);
            }
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "type": ["typeHandle"],
        "value": ["valueHandle"]
    }; }
}
HcKeyboard.style = hcKeyboardCss;

export { HcKeyboard as hc_keyboard };
