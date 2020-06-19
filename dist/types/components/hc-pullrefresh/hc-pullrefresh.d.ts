export declare class HcPullrefresh {
    scrolltop: number;
    footer: boolean;
    maxHeight: number;
    el: HTMLElement;
    $content: any;
    startY: number;
    moca: number;
    scrollHandle(v: number): void;
    footerHandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    onScroll(e: any): void;
    onTouchStart(e: any): void;
    onTouchMove(e: any): void;
    onTouchEnd(e: any): void;
    jump(current: any, target: any): number;
}
