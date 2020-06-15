export declare class HcPickerView {
    titles: string;
    value: string;
    data: string;
    command: boolean;
    reset: boolean;
    el: HTMLElement;
    $drawer: any;
    $handle: any;
    $content: any;
    valueHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
    onDataChange(index: any, e: any): void;
    renderCurrent(data: any): number;
    computedData(): {
        data: any[];
        handle: string;
        value: any[];
    };
    onDisplay(): Promise<void>;
    destory(): Promise<void>;
    generate(option?: object): Promise<HTMLHcPickerElement>;
}
