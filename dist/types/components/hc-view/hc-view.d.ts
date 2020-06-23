import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcView implements ComponentInterface {
    vscroll: EventEmitter;
    background: string;
    padding: number;
    el: HTMLElement;
    render(): any;
    onScroll(e: any): void;
}
