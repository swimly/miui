export declare class HcPickerView {
    titles: string;
    value: string;
    data: string;
    valueProp: string;
    labelProp: string;
    command: boolean;
    el: HTMLElement;
    $drawer: any;
    $handle: any;
    $content: any;
    valueHandle(v: string): void;
    componentDidLoad(): void;
    render(): any;
    onChange(e: any): void;
    onDisplay(): Promise<void>;
    destory(): Promise<void>;
    generate(option?: object): Promise<HTMLHcPickerElement>;
    parse(source: any, value: any): {
        source: any;
        data: any[];
        value: any[];
        valueString: any;
    };
    isCascade(data: any): boolean;
    isPlainObject(obj: any): boolean;
    _typeof(obj: any): any;
}
