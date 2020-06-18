import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcTab implements ComponentInterface {
    current: number;
    direction: string;
    align: string;
    auto: string;
    touch: boolean;
    data: string;
    indicateWidth: number;
    el: HTMLElement;
    vclick: EventEmitter;
    $children: any;
    $indicate: any;
    $content: any;
    position: any;
    max: any;
    vchange: EventEmitter;
    currentHandle(v: number): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    render(): any;
    onLabelChange(): void;
    onClick(index: any): void;
    renderIndicate(): void;
    renderScroll(half: any): void;
    bindTouch(): void;
    MoveTo(index: any): Promise<void>;
    Init(): Promise<void>;
}
