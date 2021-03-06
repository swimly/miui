export declare class HcVideo {
    src: string;
    preload: string;
    autoplay: boolean;
    play: boolean;
    network: number;
    loaded: number;
    poster: string;
    duration: number;
    current: number;
    muted: boolean;
    height: number;
    controls: boolean;
    showControls: boolean;
    forbidJump: boolean;
    fullScreen: boolean;
    el: HTMLElement;
    $video: any;
    $control: any;
    $timer: any;
    fullHandle(v: boolean): void;
    mutedHandle(v: boolean): void;
    playHandle(v: boolean): void;
    durationHandle(v: number): void;
    currentHandle(v: number): void;
    showHandle(v: boolean): void;
    componentDidLoad(): void;
    render(): any;
    onEnded(): void;
    onCanPlay(): void;
    onLoadedMetaData(e: any): void;
    onDurationChange(): void;
    onTimeUpdate(): void;
    onPlaying(): void;
    onProgress(e: any): void;
    onMute(e: any): void;
    onPlay(e: any): void;
    bindPlay(v: any): void;
    bindMuted(v: any): void;
    onClick(): void;
    onFullScreen(e: any): void;
}
