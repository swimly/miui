import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class HcTag implements ComponentInterface {
    closable: boolean;
    color: string;
    plain: boolean;
    background: string;
    outline: boolean;
    light: boolean;
    rounder: boolean;
    conner: boolean;
    type: string;
    size: string;
    el: HTMLElement;
    vclose: EventEmitter;
    componentWillLoad(): void;
    render(): any;
    renderClose(): any;
    onClose(e: any): void;
}
