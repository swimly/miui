import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcSwitch implements ComponentInterface {
    activeIcon: string;
    offIcon: string;
    iconSize: number;
    checked: boolean;
    type: string;
    custom: boolean;
    activeColor: string;
    readonly: boolean;
    disabled: boolean;
    el: HTMLElement;
    vchange: EventEmitter;
    checkedHandle(v: boolean): void;
    render(): any;
    renderSwitch(): any;
    onClick(): void;
    Switch(v: any): Promise<void>;
}
