export declare class HcRate {
    voidIcon: string;
    activeIcon: string;
    size: number;
    voidColor: string;
    activeColor: string;
    value: number;
    half: boolean;
    el: HTMLElement;
    label: string;
    $children: any;
    itemWidth: any;
    valueHandle(v: number): void;
    componentDidLoad(): void;
    render(): any;
    renderText(index: any): void;
    bindClick(index: any): void;
    renderActive(index: any): void;
    bindTouch(): void;
}
