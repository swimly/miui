import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcPickerContent {
    value: string;
    data: string;
    el: HTMLElement;
    vchange: EventEmitter;
    currentHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
}
