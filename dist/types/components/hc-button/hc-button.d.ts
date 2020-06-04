import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
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
    errorText: string;
    el: HTMLElement;
    vclick: EventEmitter;
    loadingHandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    onClick(e: any): void;
    Loading(): Promise<void>;
    Loaded(): Promise<void>;
}
