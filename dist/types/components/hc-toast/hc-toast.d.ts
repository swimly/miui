import { ComponentInterface } from '../../stencil-public-runtime';
export declare class HcToast implements ComponentInterface {
    icon: string;
    iconSize: number;
    display: boolean;
    duration: number;
    place: string;
    fill: string;
    theme: string;
    content: string;
    command: boolean;
    el: HTMLElement;
    $mask: any;
    Dhandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    onDisplay(): void;
    destory(): Promise<void>;
    generate(option?: object): Promise<void>;
}
