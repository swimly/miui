import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcDrawer implements ComponentInterface {
    place: string;
    display: boolean;
    clickable: boolean;
    masker: boolean;
    content: string;
    rounder: boolean;
    command: boolean;
    el: HTMLElement;
    vshow: EventEmitter;
    $mask: any;
    Dhandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    onDisplay(): Promise<void>;
    destory(): Promise<void>;
    renderMasker(): void;
    generate(option?: object): Promise<void>;
}
