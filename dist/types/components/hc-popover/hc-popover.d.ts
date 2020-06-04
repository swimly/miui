export declare class HcPopover {
    visible: boolean;
    place: string;
    masker: boolean;
    offset: number;
    el: HTMLElement;
    $handle: any;
    $content: any;
    $masker: any;
    pos: any;
    visibleHandle(v: boolean): void;
    placeHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
    generate(v: any): void;
    destory(): void;
    bindClick(): void;
}
