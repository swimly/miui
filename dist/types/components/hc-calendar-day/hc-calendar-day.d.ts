import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcCalendarDay {
    index: number;
    year: number;
    month: number;
    day: number;
    week: number;
    weekday: number;
    range: number;
    isToday: boolean;
    isCurrent: boolean;
    isMonth: boolean;
    isWeek: boolean;
    isCweek: boolean;
    section: string;
    el: HTMLElement;
    vclick: EventEmitter;
    vrange: EventEmitter;
    sectionHandle(): void;
    componentWillRender(): void;
    componentDidLoad(): void;
    render(): any;
    onClick(): void;
    renderClass(): void;
}
