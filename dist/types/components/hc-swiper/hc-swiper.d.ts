import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcSwiper implements ComponentInterface {
    height: number;
    width: number;
    current: number;
    vertical: boolean;
    loop: boolean;
    autoplay: boolean;
    duration: number;
    indicate: string;
    el: HTMLElement;
    vchange: EventEmitter;
    children: Element[];
    $wrap: HTMLElement;
    offset: number;
    timer: any;
    componentDidLoad(): void;
    render(): any;
    bindTouch(): void;
    slidePrev(): Promise<void>;
    slideNext(): Promise<void>;
    slideTo(index: any, duration?: number): Promise<void>;
    autoMove(): void;
    renderMove(offset: any): void;
    renderIndicate(): void;
}
