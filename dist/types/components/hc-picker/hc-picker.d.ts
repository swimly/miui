export declare class HcPickerView {
    titles: string;
    value: string;
    el: HTMLElement;
    $drawer: any;
    $handle: any;
    $content: any;
    valueHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
    bindClick(): void;
    destory(): Promise<void>;
    parse(source: any, value: any): Promise<{
        source: any;
        data: any[];
        value: any[];
        valueString: any;
    }>;
    isCascade(data: any): boolean;
    isPlainObject(obj: any): boolean;
    _typeof(obj: any): any;
}
