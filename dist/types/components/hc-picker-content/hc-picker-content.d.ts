import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcPickerContent {
    current: string;
    value: string;
    el: HTMLElement;
    vchange: EventEmitter;
    currentHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
}
