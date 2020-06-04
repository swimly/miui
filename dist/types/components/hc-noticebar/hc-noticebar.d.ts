import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcNoticebar {
    speed: number;
    icon: string;
    closable: boolean;
    scrollable: boolean;
    color: string;
    el: HTMLElement;
    vhide: EventEmitter;
    $wrap: any;
    width: any;
    duration: any;
    timer: any;
    componentDidLoad(): void;
    render(): any;
    renderClose(): any;
    destory(): Promise<void>;
    marquee(_this: any): void;
}
