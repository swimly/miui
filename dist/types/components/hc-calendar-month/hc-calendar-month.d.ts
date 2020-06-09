import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcCalendarMonth {
    index: number;
    width: number;
    month: number;
    year: number;
    range: number;
    el: HTMLElement;
    vmonthchange: EventEmitter;
    componentDidLoad(): void;
    render(): any;
    bindObverse(): void;
}
