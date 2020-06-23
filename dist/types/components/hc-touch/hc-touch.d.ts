import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcTouch {
    el: HTMLElement;
    vchange: EventEmitter;
    componentDidLoad(): void;
    render(): any;
    bindTouch(): void;
    hammerIt(elm: any): void;
}
