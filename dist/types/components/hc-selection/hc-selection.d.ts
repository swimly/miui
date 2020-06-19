import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcSelection {
    heading: string;
    value: string;
    level: number;
    data: string;
    current: number;
    command: boolean;
    width: number;
    footer: boolean;
    el: HTMLElement;
    vdone: EventEmitter;
    $drawer: any;
    $tab: any;
    $data: any;
    $value: any;
    componentDidLoad(): void;
    render(): any;
    onIndexChange(e: any): void;
    onClick(item: any, index: any): void;
    onDisplay(): void;
    renderFooter(): any;
    destory(): Promise<void>;
    generate(option?: object): Promise<void>;
}
