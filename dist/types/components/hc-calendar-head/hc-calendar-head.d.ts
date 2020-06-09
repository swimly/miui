import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcCalendarHead {
    date: string;
    type: string;
    range: number;
    header: string;
    vtypechange: EventEmitter;
    vdatechange: EventEmitter;
    el: HTMLElement;
    dateHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
    changeType(): void;
    backToday(): void;
    setTitle(v: any): Promise<void>;
}
