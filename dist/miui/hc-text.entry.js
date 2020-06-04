import { r as registerInstance, h, H as Host, g as getElement } from './index-e5ececff.js';

function getByteLen(val) {
    var len = 0;
    if (!val) {
        return len;
    }
    for (var i = 0; i < val.length; i++) {
        if (!val[i]) {
            continue;
        }
        // 全角
        if (val[i].match(/[^\x00-\xff]/ig) != null) {
            len += 2;
        }
        else {
            len += 1;
        }
    }
    return len;
}
function cutStrByte(str, len) {
    //校验参数
    if (!str || !len) {
        return { "cutStr": "", "code": 0 };
    }
    var code = "1", // 默认返回code值，已截断
    strLen = str.length, // 原字符串长度
    cutStr;
    //如果字符串长度小于截取长度的一半,则返回全部字符串
    if (strLen <= len / 2) {
        cutStr = str;
        code = "0";
    }
    else {
        //遍历字符串
        var strByteCount = 0;
        for (var i = 0; i < strLen; i++) {
            //中文字符字节加2  否则加1
            strByteCount += getByteLen(str.charAt(i));
            //i从0开始 截断时大于len 只截断到第i个
            if (strByteCount > len) {
                cutStr = str.substring(0, i);
                break;
            }
            else if (strByteCount == len) {
                cutStr = str.substring(0, i + 1);
                break;
            }
        }
    }
    //cutstr为空，没有截断字符串
    if (!cutStr) {
        cutStr = str;
        code = "0";
    }
    return { "cutStr": cutStr, "code": code };
}

const hcTextCss = ":host{display:block;font-size:0.75rem;color:var(--color-text-primary);line-height:1.6;text-align:justify;position:relative;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}:host .more{color:var(--color-primary);white-space:nowrap}:host .more-text{display:none}:host .indicate{display:inline-block;width:1px;height:1px}:host([right]) .more{position:absolute;right:0}:host([max]) .more-text{display:inline-block}:host([open]) .more-text{display:none}";

class HcText {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    openHandle(v) {
        if (v) {
            this.el.setAttribute('open', 'true');
        }
        else {
            this.el.removeAttribute('open');
        }
        setTimeout(() => {
            this.initPosition();
        }, 10);
    }
    componentDidLoad() {
        this.initPosition();
    }
    render() {
        var str = this.max && !this.open ? cutStrByte(this.el.innerHTML, this.max).cutStr : this.el.innerHTML;
        console.log(str);
        return (h(Host, { style: {
                textIndent: `${this.indent}em`,
                webkitLineClamp: `${this.row}`,
                color: this.color,
                backgroundColor: this.background,
                padding: this.padding,
                fontSize: this.fontSize
            } }, str, h("span", { class: "more-text" }, "\u2026"), h("span", { class: "indicate" }), this.renderMore()));
    }
    getIndicatePos() {
        var width = document.body.clientWidth;
        var indicate = this.el.shadowRoot.querySelector('.indicate');
        var ppos = width - this.el.offsetLeft - this.el.offsetWidth;
        var p = indicate.getBoundingClientRect();
        var more = this.el.shadowRoot.querySelector('.more').getBoundingClientRect().width;
        var pos = width - p.x - ppos - more;
        return pos;
    }
    renderMore() {
        if (this.max) {
            return (h("span", { onClick: this.onClick.bind(this), class: "more" }, this.open ? '收起' : '展开'));
        }
    }
    initPosition() {
        if (this.max) {
            console.log(this.getIndicatePos());
            if (this.getIndicatePos() > 0) {
                this.el.setAttribute('right', 'true');
            }
            else {
                this.el.removeAttribute('right');
            }
        }
    }
    onClick() {
        this.open = !this.open;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": ["openHandle"]
    }; }
}
HcText.style = hcTextCss;

export { HcText as hc_text };
