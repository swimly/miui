export declare class HcImage {
    src: string;
    width: number;
    height: number;
    lazy: boolean;
    fit: string;
    watermark: string;
    el: HTMLElement;
    $image: any;
    scale: any;
    componentDidLoad(): void;
    render(): any;
    loading(): void;
    getSize(image: any): void;
    bindobverse(): void;
}
