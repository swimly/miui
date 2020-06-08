import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcCalendarContent {
    width: number;
    vertical: boolean;
    isWeek: boolean;
    range: number;
    el: HTMLElement;
    vswitch: EventEmitter;
    componentDidLoad(): void;
    render(): any;
    bindTouch(): void;
}
