import { ComponentInterface } from '../../stencil-public-runtime';
export declare class HcImage implements ComponentInterface {
    src: string;
    lazy: boolean;
    width: number;
    height: number;
    radius: number;
    status: number;
    fit: string;
    watermark: string;
    el: HTMLElement;
    $image: any;
    srcHandle(): void;
    loadImage(image: any): void;
    componentDidLoad(): void;
    statusHandle(value: number): void;
    render(): any;
}
