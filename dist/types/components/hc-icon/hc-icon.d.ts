import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcIcon implements ComponentInterface {
    name: string;
    size: number;
    color: string;
    spin: boolean;
    path: string;
    view: number;
    el: HTMLElement;
    $use: any;
    $svg: any;
    $path: any;
    spinHandle(newValue: boolean): void;
    nameHandle(v: any): void;
    pathHandle(v: string): void;
    colorHandle(): void;
    vclick: EventEmitter;
    componentDidLoad(): void;
    renderIcon(): void;
    render(): any;
    onClick(e: any): void;
    renderCore(): any;
}
