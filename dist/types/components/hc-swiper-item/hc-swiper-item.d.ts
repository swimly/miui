import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcSwiperItem implements ComponentInterface {
    width: number;
    height: number;
    el: HTMLElement;
    vdisabled: EventEmitter;
    componentDidLoad(): void;
    render(): any;
}
