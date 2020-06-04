import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcIndexbar {
    letter: string;
    offset: number;
    index: number;
    el: HTMLElement;
    pos: number[];
    scroll: any[];
    $children: any;
    vchange: EventEmitter;
    indexHandle(v: number): void;
    componentDidLoad(): void;
    render(): any;
    bindScroll(): void;
    renderScroll(letter: any): void;
    bindTouch(): void;
}
