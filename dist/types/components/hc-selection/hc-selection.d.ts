import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcSelection {
    heading: string;
    value: string;
    level: number;
    data: string;
    command: boolean;
    el: HTMLElement;
    vchoice: EventEmitter;
    vlevel: EventEmitter;
    $drawer: any;
    $tab: any;
    $children: any;
    $content: any;
    $swiper: any;
    componentDidLoad(): void;
    render(): any;
    onDisplay(): void;
    renderHandle(children: any): any;
    renderContent(children: any): any;
    onItemClick(e: any): void;
    SetData(arr: any): Promise<void>;
    Finish(): Promise<void>;
    destory(): Promise<void>;
    generate(option?: object): Promise<void>;
}
