import { ComponentInterface } from '../../stencil-public-runtime';
export declare class HcSkeleton implements ComponentInterface {
    titles: boolean;
    rows: number;
    avatar: boolean;
    cover: boolean;
    reverse: boolean;
    animation: boolean;
    visible: boolean;
    el: HTMLElement;
    visibleHandle(v: boolean): void;
    render(): any;
    renderAvatar(): any;
    renderCover(): any;
    renderTitle(): any;
    loaded(): Promise<void>;
    loading(): Promise<void>;
}
