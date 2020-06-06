import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcSelectionItem {
    value: string;
    el: HTMLElement;
    vclick: EventEmitter;
    render(): any;
    onClick(): void;
}
