import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcPicker implements ComponentInterface {
    current: number;
    vis: number;
    rate: number;
    itemHeight: number;
    el: HTMLElement;
    $wrap: HTMLElement;
    $children: Element[];
    offset: number;
    vchange: EventEmitter;
    count(): number;
    currentHandle(v: number): void;
    baseOffset(): number;
    componentDidLoad(): void;
    render(): any;
    bindTouch(): void;
    easeout: (A: any, B: any, rate: any, callback: any, callback1: any) => void;
}
