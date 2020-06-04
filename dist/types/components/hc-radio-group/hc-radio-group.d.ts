import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcRadioGroup implements ComponentInterface {
    conner: boolean;
    rounder: boolean;
    value: string;
    name: string;
    type: string;
    vertical: boolean;
    reverse: boolean;
    subline: boolean;
    align: string;
    vchange: EventEmitter;
    $children: any;
    el: HTMLElement;
    valueHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
}
