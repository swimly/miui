import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcSelect {
    background: string;
    penColor: string;
    penWeight: number;
    file: string;
    el: HTMLElement;
    vchange: EventEmitter;
    $signature: any;
    signature: any;
    data: any;
    componentDidLoad(): void;
    render(): any;
    fetchData(): Promise<any>;
    clear(): Promise<void>;
}
