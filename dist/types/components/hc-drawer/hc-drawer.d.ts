import { ComponentInterface } from '../../stencil-public-runtime';
export declare class HcDrawer implements ComponentInterface {
    place: string;
    display: boolean;
    clickable: boolean;
    masker: boolean;
    content: string;
    rounder: boolean;
    command: boolean;
    el: HTMLElement;
    $mask: any;
    Dhandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    onDisplay(): void;
    destory(): Promise<void>;
    generate(option?: object): Promise<void>;
    generateDom(tag: any, option: any): any;
}
