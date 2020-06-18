import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcDate {
    type: string;
    value: string;
    start: number;
    end: number;
    heading: string;
    footer: boolean;
    indicate: boolean;
    command: boolean;
    vchange: EventEmitter;
    el: HTMLElement;
    date: any;
    YYYY: any;
    MM: any;
    DD: any;
    hh: any;
    mm: any;
    ss: any;
    $drawer: any;
    componentDidLoad(): void;
    render(): any;
    computedArray(length: any, dis: any): string[];
    onChange(e: any): void;
    renderDom(id: any, index: any): any;
    destory(): Promise<void>;
    onDisplay(): Promise<void>;
    generate(option?: object): Promise<HTMLHcDateElement>;
}
