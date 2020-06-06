import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcTabItem implements ComponentInterface {
    index: number;
    el: HTMLElement;
    vclick: EventEmitter;
    vchange: EventEmitter;
    componentDidLoad(): void;
    render(): any;
    bindClick(): void;
}
