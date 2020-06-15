import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcPickerView implements ComponentInterface {
    value: string;
    current: number;
    vis: number;
    rate: number;
    itemHeight: number;
    data: string;
    el: HTMLElement;
    $wrap: HTMLElement;
    $children: Element[];
    offset: number;
    vscrollend: EventEmitter;
    currentHandle(v: number): void;
    count(): number;
    baseOffset(): number;
    componentDidLoad(): void;
    render(): any;
    renderActive(index: any): void;
    Moving(number: any): Promise<void>;
    bindTouch(): void;
}
