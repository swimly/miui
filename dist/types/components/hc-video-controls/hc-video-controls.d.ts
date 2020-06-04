import { EventEmitter } from '../../stencil-public-runtime';
export declare class HcVideoControls {
    play: boolean;
    muted: boolean;
    duration: number;
    current: number;
    vplay: EventEmitter;
    vmute: EventEmitter;
    vprogress: EventEmitter;
    playHandle(v: boolean): void;
    mutedHandle(v: boolean): void;
    render(): any;
    onPlayChange(e: any): void;
    onVoiceChange(e: any): void;
    onProgressChange(e: any): void;
}
