import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcView implements ComponentInterface {
    vscroll: EventEmitter;
    el: HTMLElement;
    render(): any;
    onScroll(e: any): void;
}
