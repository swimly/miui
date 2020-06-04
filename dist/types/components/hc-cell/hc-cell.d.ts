import { ComponentInterface } from '../../stencil-public-runtime';
export declare class HcCell implements ComponentInterface {
    label: string;
    value: string;
    arrowIcon: string;
    href: string;
    icon: string;
    iconSize: number;
    valign: string;
    align: string;
    render(): any;
    renderIcon(): any;
    renderArrow(): any;
    onClick(): void;
}
