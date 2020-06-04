import { ComponentInterface } from '../../stencil-public-runtime';
export declare class HcAlert implements ComponentInterface {
    visible: boolean;
    masker: boolean;
    clickable: boolean;
    type: string;
    content: string;
    head: string;
    footer: string;
    command: boolean;
    duration: number;
    el: HTMLElement;
    $mask: any;
    Dhandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    renderButton(item: any, index: any, length: any): any;
    onDisplay(): void;
    destory(data?: object): Promise<void>;
    generate(option?: object): Promise<void>;
}
