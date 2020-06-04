import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcTabItem implements ComponentInterface {
    index: number;
    el: HTMLElement;
    vchange: EventEmitter;
    render(): any;
    bindClick(): void;
}
