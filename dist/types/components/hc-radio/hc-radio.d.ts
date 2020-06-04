import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcRadio implements ComponentInterface {
    name: string;
    value: string;
    checked: boolean;
    icon: string;
    vertical: boolean;
    reverse: boolean;
    subline: boolean;
    el: HTMLElement;
    vchange: EventEmitter;
    checkedHandle(v: any): void;
    render(): any;
    onClick(): void;
    Check(status: any): Promise<void>;
}
