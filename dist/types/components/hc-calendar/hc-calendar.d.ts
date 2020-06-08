export declare class HcCalendar {
    type: string;
    date: string;
    range: number;
    weekday: number;
    el: HTMLElement;
    data: any;
    dateHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
    onSwitch(e: any): void;
    onTypeChange(e: any): void;
    onDateChange(e: any): void;
}
