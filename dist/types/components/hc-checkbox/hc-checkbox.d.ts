import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcCheckbox implements ComponentInterface {
    name: string;
    value: string;
    checked: boolean;
    icon: string;
    subline: boolean;
    el: HTMLElement;
    vchange: EventEmitter;
    checkedHandle(v: any): void;
    render(): any;
    onClick(): void;
}
