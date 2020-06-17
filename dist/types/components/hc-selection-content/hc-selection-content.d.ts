import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcSelectionContent {
    value: string;
    loading: boolean;
    offset: number;
    width: number;
    el: HTMLElement;
    vchange: EventEmitter;
    current: any;
    valueHandle(v: string): void;
    loadingHandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    bindClick(): void;
    Loading(): Promise<void>;
    Loaded(): Promise<void>;
}
