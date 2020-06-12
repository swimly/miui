import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcActionsheet {
    head: string;
    multiple: boolean;
    value: string;
    data: string;
    command: boolean;
    el: HTMLElement;
    vchange: EventEmitter;
    vdone: EventEmitter;
    $drawer: any;
    $handle: any;
    $children: any;
    valueHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
    onClick(item: any): void;
    destory(e: any): Promise<void>;
    generate(option?: object): Promise<HTMLHcActionsheetElement>;
}
