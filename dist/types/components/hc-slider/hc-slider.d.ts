import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcSlider {
    value: number;
    max: number;
    min: number;
    step: number;
    disabled: boolean;
    readonly: boolean;
    color: string;
    size: string;
    el: HTMLElement;
    vchange: EventEmitter;
    offset: number;
    $handle: any;
    $bar: any;
    maxWidth: number;
    componentWillRender(): void;
    componentDidLoad(): void;
    render(): any;
    jump(e: any): void;
    bindTouch(): void;
    renderDiv(): any;
}
