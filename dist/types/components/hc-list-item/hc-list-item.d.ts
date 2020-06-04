import { ComponentInterface } from '../../stencil-public-runtime';
export declare class HcListItem implements ComponentInterface {
    head: string;
    date: string;
    type: string;
    cover: string;
    appendIcon: string;
    appendColor: string;
    coverWidth: number;
    coverHeight: number;
    size: string;
    render(): any;
    renderCover(): any;
}
