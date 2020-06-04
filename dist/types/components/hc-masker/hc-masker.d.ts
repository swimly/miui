import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcMasker implements ComponentInterface {
    fill: string;
    display: boolean;
    clickable: boolean;
    command: boolean;
    place: string;
    offset: number;
    el: HTMLElement;
    vclick: EventEmitter;
    Dhandle(v: boolean): void;
    componentDidRender(): void;
    render(): any;
    onClick(): void;
    destory(): Promise<void>;
    onDisplay(): void;
    generate(option?: object): Promise<void>;
    generateDom(tag: any, option: any): any;
}
