import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcSelectionItem {
    value: string;
    index: number;
    active: boolean;
    el: HTMLElement;
    vclick: EventEmitter;
    activeHandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    onClick(): void;
}
