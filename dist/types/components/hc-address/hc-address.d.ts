import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcAddress {
    type: string;
    el: HTMLElement;
    vfinish: EventEmitter;
    $picker: any;
    componentDidLoad(): void;
    render(): any;
    renderDom(): void;
    onHide(): void;
    getValue(e: any): void;
}
