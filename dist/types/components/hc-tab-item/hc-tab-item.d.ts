import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcTabItem implements ComponentInterface {
    index: number;
    label: string;
    active: boolean;
    el: HTMLElement;
    vtap: EventEmitter;
    vchange: EventEmitter;
    vlabel: EventEmitter;
    activeHandle(v: boolean): void;
    labelHandle(v: any): void;
    componentDidLoad(): void;
    render(): any;
    bindClick(): void;
}
