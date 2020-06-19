/// <reference types="node" />
import { EventEmitter } from 'events';
export declare class HcKeyboard {
    type: string;
    change: boolean;
    value: string;
    vibrate: number;
    current: string;
    el: HTMLElement;
    vchange: EventEmitter;
    $drawer: any;
    $type: any;
    $slot: any;
    typeHandle(v: string): void;
    valueHandle(v: any): void;
    componentDidLoad(): void;
    render(): any;
    del(): void;
    renderItem(item: any): any;
    onClick(item: any): void;
    destory(): Promise<void>;
    touchVibrate(): void;
}
