import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcVideoControls {
    play: boolean;
    muted: boolean;
    duration: number;
    current: number;
    forbidJump: boolean;
    fullScreen: boolean;
    vplay: EventEmitter;
    vmute: EventEmitter;
    vprogress: EventEmitter;
    vfull: EventEmitter;
    el: HTMLElement;
    playHandle(v: boolean): void;
    mutedHandle(v: boolean): void;
    fullHandle(v: boolean): void;
    componentWillLoad(): void;
    render(): any;
    onPlayChange(e: any): void;
    onVoiceChange(e: any): void;
    onProgressChange(e: any): void;
    onFullScreen(e: any): void;
    Playing(v: any): Promise<void>;
}
