import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e5ececff.js';

const hcInputCss = ":host{display:flex;background-color:var(--background-color-white);color:var(--color-text-regular);font-size:0.75rem;padding:0.5rem;align-items:center;position:relative}:host::after{content:\"\";box-sizing:border-box;border-radius:0;position:absolute;box-sizing:border-box;transition:0.3s;top:0;left:0;width:200%;height:200%;border:1px solid var(--border-color-base);transform-origin:left top;transform:scale(0.5)}:host input,:host textarea{flex:1;background:none;border:none;outline:none;position:relative;z-index:10;color:var(--color-text-primary);caret-color:var(--color-primary);line-height:1.6;font-size:inherit;resize:none}:host input::-webkit-search-cancel-button,:host textarea::-webkit-search-cancel-button{-webkit-appearance:none}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-text-regular)}:host input::-webkit-outer-spin-button,:host input::-webkit-inner-spin-button,:host textarea::-webkit-outer-spin-button,:host textarea::-webkit-inner-spin-button{-webkit-appearance:none}:host hc-icon{font-size:1rem;position:relative;z-index:10}:host .count{font-size:0.6rem;color:var(--color-text-regular)}:host .clear{margin-left:0.375rem}:host .suffixIcon{margin-left:0.375rem}:host .prefixIcon{margin-right:0.375rem}:host([conner]):after{border-radius:0.4rem}:host([rounder]):after{border-radius:2.25rem}:host([light]){padding:0}:host([light]):after{display:none}:host([size]){display:inline-flex}:host([size=small]){padding:0.225rem 0.375rem}:host([size=mini]){padding:0.15rem 0.375rem}:host([size=default]){padding:0.3rem 0.375rem}:host([size=large]){padding:0.375rem 0.375rem}:host([light]){border:none;background:none}:host([dark]){background:var(--background-color-base)}:host([dark]):after{border-color:var(--background-color-base)}:host([type=textarea][light]){padding:0}:host([type=textarea]){align-items:flex-start;padding:0.5rem 0.8rem 0.8rem 0.8rem}:host([type=textarea]) .clear{position:absolute;right:0.5rem;bottom:0.5rem}:host([type=textarea]) .count{position:absolute;bottom:0.5rem;left:0.5rem}:host([focusin]):after{border-color:var(--color-primary)}:host([verify=error]):after{border-color:var(--color-danger)}:host([verify=success]):after{border-color:var(--color-success)}:host([verify=warning]):after{border-color:var(--color-warning)}";

class HcInput {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'text';
        this.rows = 3;
        this.clearable = false;
        this.clearIcon = 'reeor-fill';
        this.vchange = createEvent(this, "vchange", 7);
    }
    valueHandle(v) {
        this.el.setAttribute('value', v);
        this.vchange.emit({
            value: v
        });
    }
    verifyHandle(v) {
        this.el.setAttribute('verify', v);
    }
    focusHandle(v) {
        if (v) {
            this.el.setAttribute('focusin', `${v}`);
        }
        else {
            this.el.removeAttribute('focusin');
        }
    }
    componentDidLoad() {
        if (this.size) {
            this.el.setAttribute('size', this.size);
        }
        if (this.light) {
            this.el.setAttribute('light', `${this.light}`);
        }
        if (this.conner) {
            this.el.setAttribute('conner', `${this.conner}`);
        }
        if (this.dark) {
            this.el.setAttribute('dark', `${this.dark}`);
        }
        if (this.focusin) {
            this.el.setAttribute('focus', `${this.focusin}`);
            var core = this.el.shadowRoot.querySelector('#core');
            core.focus();
        }
    }
    render() {
        return (h(Host, null, h("slot", { name: "prefix" }, this.renderIcon('prefixIcon')), this.renderCore(), this.renderCount(), this.renderClear(), h("slot", { name: "suffix" }, this.renderIcon('suffixIcon'))));
    }
    renderIcon(name) {
        if (this[name]) {
            return (h("hc-icon", { size: this.iconSize, class: name, color: this.iconColor, name: this[name] }));
        }
    }
    renderCore() {
        if (this.type == 'textarea') {
            return (h("textarea", { onBlur: this.bindBlur.bind(this), onFocus: this.bindFocus.bind(this), maxLength: this.maxLength, minLength: this.minLength, id: "core", onKeyUp: this.onChange.bind(this), value: this.value, rows: this.rows, style: { textAlign: this.align }, placeholder: this.placeholder }));
        }
        else {
            return (h("input", { onBlur: this.bindBlur.bind(this), onFocus: this.bindFocus.bind(this), maxLength: this.maxLength, minLength: this.minLength, value: this.value, id: "core", onKeyUp: this.onChange.bind(this), style: { textAlign: this.align }, type: this.type, placeholder: this.placeholder }));
        }
    }
    bindBlur() {
        this.focusin = false;
        console.log('blur');
    }
    bindFocus() {
        console.log('focus');
        this.focusin = true;
    }
    onChange(e) {
        this.value = e.target.value;
    }
    renderClear() {
        if (this.clearable && this.value) {
            return (h("hc-icon", { class: "clear", onClick: this.onClear.bind(this), name: this.clearIcon }));
        }
    }
    onClear() {
        this.value = '';
    }
    renderCount() {
        var current = this.value ? this.value.length : 0;
        if (this.maxLength) {
            return (h("span", { class: "count" }, current, "/", this.maxLength));
        }
        if (this.minLength) {
            return (h("span", { class: "count" }, this.minLength, "/", current));
        }
    }
    async Verify(status) {
        this.verify = status;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueHandle"],
        "verify": ["verifyHandle"],
        "focusin": ["focusHandle"]
    }; }
}
HcInput.style = hcInputCss;

export { HcInput as hc_input };
