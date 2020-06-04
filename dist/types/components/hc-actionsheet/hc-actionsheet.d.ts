import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcActionsheet {
    head: string;
    mode: string;
    value: string;
    content: string;
    command: boolean;
    el: HTMLElement;
    vchange: EventEmitter;
    vdone: EventEmitter;
    $drawer: any;
    $handle: any;
    $children: any;
    componentDidLoad(): void;
    render(): any;
    renderActive(): void;
    bindClick(): void;
    destory(label: any): Promise<void>;
    onToggle(item: any): void;
    bindChange(): void;
    generate(option?: object): Promise<HTMLHcActionsheetElement>;
}
