import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcCalendarHead {
    date: string;
    type: string;
    vtypechange: EventEmitter;
    vdatechange: EventEmitter;
    dateHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
    changeType(): void;
    backToday(): void;
}
