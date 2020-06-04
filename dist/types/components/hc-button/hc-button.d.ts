import { ComponentInterface } from '../../stencil-public-runtime';
export declare class HcButton implements ComponentInterface {
    type: string;
    rounder: boolean;
    conner: boolean;
    plain: boolean;
    light: boolean;
    icon: string;
    ripple: boolean;
    rippleColor: string;
    loading: boolean;
    disabled: boolean;
    backgroundColor: string;
    color: string;
    borderColor: string;
    label: string;
    el: HTMLElement;
    loadingHandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    Loading(): Promise<void>;
    Loaded(): Promise<void>;
}
