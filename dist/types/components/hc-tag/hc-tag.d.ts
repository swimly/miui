import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcTag implements ComponentInterface {
    closable: boolean;
    color: string;
    plain: boolean;
    background: string;
    outline: boolean;
    light: boolean;
    el: HTMLElement;
    vclose: EventEmitter;
    render(): any;
    renderClose(): any;
    onClose(e: any): void;
}
