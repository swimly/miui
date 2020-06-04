export declare class HcText {
    max: number;
    open: boolean;
    row: number;
    indent: number;
    color: string;
    background: string;
    padding: string;
    fontSize: string;
    el: HTMLElement;
    openHandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    getIndicatePos(): number;
    renderMore(): any;
    initPosition(): void;
    onClick(): void;
}
