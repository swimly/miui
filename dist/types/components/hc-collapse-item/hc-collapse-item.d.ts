import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcCollapseItem {
    visible: boolean;
    el: HTMLElement;
    vchange: EventEmitter;
    maxHeight: number;
    $content: any;
    visibleHandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    onClick(): void;
    generate(): Promise<void>;
    destory(): Promise<void>;
    renderToggle(v: any): void;
}
