import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcPickerContent {
    value: string;
    el: HTMLElement;
    vvaluechange: EventEmitter;
    valueHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
}
