import { ComponentInterface } from '../../stencil-public-runtime';
export declare class HcRipple implements ComponentInterface {
    color: string;
    size: number;
    mask: boolean;
    el: HTMLElement;
    componentDidLoad(): void;
    render(): any;
    onClick(e: any): void;
}
