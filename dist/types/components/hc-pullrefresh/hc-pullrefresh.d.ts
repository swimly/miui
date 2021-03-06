import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcPullrefresh {
    offset: number;
    footer: boolean;
    maxHeight: number;
    el: HTMLElement;
    vrefresh: EventEmitter;
    vloading: EventEmitter;
    $content: any;
    $refresh: any;
    $loading: any;
    $scroll: any;
    startY: number;
    moca: number;
    canPull: boolean;
    dis: number;
    maxScroll: number;
    scrollHandle(v: number): void;
    footerHandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    onScroll(e: any): void;
    onTouchStart(e: any): void;
    onTouchMove(e: any): void;
    onTouchEnd(): void;
    jump(current: any): number;
    RefreshSuccess(): Promise<void>;
    RefreshFailed(): Promise<void>;
    LoadingSuccess(): Promise<void>;
    LoadingFailed(): Promise<void>;
}
