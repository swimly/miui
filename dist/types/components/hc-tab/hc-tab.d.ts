import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcTab implements ComponentInterface {
    current: number;
    direction: string;
    align: string;
    auto: boolean;
    touch: boolean;
    el: HTMLElement;
    offset: number;
    scroll: number;
    width: number;
    prev: number;
    pos: any[];
    $slot: any;
    $wrap: any;
    max: any;
    $indicate: HTMLElement;
    $children: Element[];
    vchange: EventEmitter;
    currentHandle(v: number): void;
    autoHandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    bindTouch(): boolean;
    onChange(e: any): void;
    computed(): void;
    renderScroll(index: any): void;
    Switch(number: any): Promise<void>;
}
