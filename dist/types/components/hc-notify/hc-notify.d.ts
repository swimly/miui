export declare class HcNotify {
    place: string;
    align: string;
    visible: boolean;
    duration: number;
    icon: string;
    closable: boolean;
    command: boolean;
    content: string;
    background: string;
    el: HTMLElement;
    visibleHandle(v: boolean): void;
    componentWillRender(): void;
    render(): any;
    renderClose(): any;
    show(): Promise<void>;
    destory(): Promise<void>;
    generate(option?: Object): Promise<void>;
}
