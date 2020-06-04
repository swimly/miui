import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcTab implements ComponentInterface {
    current: number;
    direction: string;
    align: string;
    el: HTMLElement;
    offset: number;
    scroll: number;
    width: number;
    prev: number;
    pos: number[];
    $slot: any;
    $wrap: any;
    $indicate: HTMLElement;
    $children: Element[];
    vchange: EventEmitter;
    currentHandle(v: number): void;
    componentDidLoad(): void;
    render(): any;
    onChange(e: any): void;
    renderScroll(index: any): void;
}
